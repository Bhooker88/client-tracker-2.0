// File path: src/components/Home.js

import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, query, where, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../../firebase-config';
import '../../styles/Home.css';
import example from "../../img/example.jpg"

const db = getFirestore(app);
const auth = getAuth(app);

const Home = () => {
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState(null);
  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateMet: '',
    alpPurchased: '',
    followUpDate: '',
    policyNumbers: [''],
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingClient, setEditingClient] = useState(null);
  const [isLogin, setIsLogin] = useState(true);  
  const [message, setMessage] = useState(null);  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        loadClients(currentUser.uid);
      } else {
        setClients([]);
      }
    });
    return unsubscribe;
  }, []);

  
  const loadClients = (userId) => {
    const q = query(collection(db, "clients"), where("userId", "==", userId));
    onSnapshot(q, (snapshot) => {
      const clientsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const sortedClients = clientsData.sort((a, b) => new Date(a.followUpDate) - new Date(b.followUpDate));
      setClients(sortedClients);
    });
  };


  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === 'policyNumbers' && index !== null) {
      const updatedPolicyNumbers = [...newClient.policyNumbers];
      updatedPolicyNumbers[index] = value;
      setNewClient({ ...newClient, policyNumbers: updatedPolicyNumbers });
    } else {
      setNewClient({ ...newClient, [name]: value });
    }
  };

  const handleEditChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === 'policyNumbers' && index !== null) {
      const updatedPolicyNumbers = [...editingClient.policyNumbers];
      updatedPolicyNumbers[index] = value;
      setEditingClient({ ...editingClient, policyNumbers: updatedPolicyNumbers });
    } else {
      setEditingClient({ ...editingClient, [name]: value });
    }
  };

  const addClient = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("No user logged in");
      alert("Please log in to add clients.");
      return;
    }
    const newClientData = { ...newClient, userId: user.uid };
    console.log("Attempting to add client with data:", newClientData); 

    try {
      const docRef = await addDoc(collection(db, "clients"), newClientData);
      console.log("Document written with ID: ", docRef.id);
      setNewClient({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateMet: '',
        alpPurchased: '',
        followUpDate: '',
        policyNumbers: [''],
      });
    } catch (error) {
      console.error("Error adding client:", error);
      alert(`Failed to add client: ${error.message}`);
    }
  };

  const addPolicyNumber = (isEditing = false) => {
    if (isEditing && editingClient) {
      setEditingClient({
        ...editingClient,
        policyNumbers: [...editingClient.policyNumbers, ''],
      });
    } else {
      setNewClient({
        ...newClient,
        policyNumbers: [...newClient.policyNumbers, ''],
      });
    }
  };

  const startEdit = (index) => {
    setEditingClient({ ...clients[index], index });
  };

  const saveEdit = async () => {
    if (editingClient && editingClient.index != null) {
      const docRef = doc(db, "clients", clients[editingClient.index].id);
      await updateDoc(docRef, { ...editingClient });
      setEditingClient(null);
    }
  };

  const confirmDelete = async (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this client?");
    if (isConfirmed) {
      const docRef = doc(db, "clients", clients[index].id);
      await deleteDoc(docRef);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential);
    } catch (error) {
      console.error("Error logging in:", error);
      alert(`Failed to login: ${error.message}`);
    }
  };

  const handleRegister = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential);
    } catch (error) {
      console.error("Error registering user:", error);
      alert(`Failed to register: ${error.message}`);
    }
  };

  const handleForgotPassword = async (email) => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(`Failed to send password reset email: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
          <form onSubmit={addClient} className="form-container">
            <div className="row">
              <div className="input-group"><label htmlFor="firstName">First Name</label><input id="firstName" name="firstName" value={newClient.firstName} onChange={handleChange} required /></div>
              <div className="input-group"><label htmlFor="lastName">Last Name</label><input id="lastName" name="lastName" value={newClient.lastName} onChange={handleChange} required /></div>
              <div className="input-group"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" value={newClient.email} onChange={handleChange} required /></div>
              <div className="input-group"><label htmlFor="phoneNumber">Phone Number</label><input id="phoneNumber" name="phoneNumber" value={newClient.phoneNumber} onChange={handleChange} required /></div>
            </div>
            <div className="row">
              <div className="input-group"><label htmlFor="dateMet">Date Met</label><input id="dateMet" name="dateMet" type="date" value={newClient.dateMet} onChange={handleChange} required /></div>
              <div className="input-group"><label htmlFor="alpPurchased">ALP Purchased</label><input id="alpPurchased" name="alpPurchased" type="number" value={newClient.alpPurchased} onChange={handleChange} required /></div>
              <div className="policy-inputs-container">
                {newClient.policyNumbers.map((policyNumber, index) => (
                  <div key={index} className="policy-number-input">
                    <label htmlFor={`policyNumber-${index}`}>Policy Number {index + 1}</label>
                    <input
                      type="text"
                      name="policyNumbers"
                      id={`policyNumber-${index}`}
                      value={policyNumber}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </div>
                ))}
                <button type="button" className="add-policy-btn" onClick={() => addPolicyNumber()}>
                  Add Another Policy Number
                </button>
              </div>
              <div className="input-group"><label htmlFor="followUpDate">Follow-Up Date</label><input id="followUpDate" name="followUpDate" type="date" value={newClient.followUpDate} onChange={handleChange} required /></div>
            </div>
            <button type="submit" className="submit-btn">Add Client</button>
          </form>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Date Met</th>
                  <th>ALP Purchased</th>
                  <th>Policy Numbers</th>
                  <th>Follow-Up Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((clients, index) => (
                  <tr key={index}>
                    <td>{clients.firstName}</td>
                    <td>{clients.lastName}</td>
                    <td>{editingClient?.index === index ?
                      <input type="email" name="email" value={editingClient.email} onChange={(e) => handleEditChange(e)} /> :
                      clients.email}
                    </td>
                    <td>{editingClient?.index === index ?
                      <input type="text" name="phoneNumber" value={editingClient.phoneNumber} onChange={(e) => handleEditChange(e)} /> :
                      clients.phoneNumber}
                    </td>
                    <td>{clients.dateMet}</td>
                    <td>{editingClient?.index === index ?
                      <input type="number" name="alpPurchased" value={editingClient.alpPurchased} onChange={(e) => handleEditChange(e)} /> :
                      clients.alpPurchased}
                    </td>
                    <td>
                      {editingClient?.index === index ?
                        editingClient.policyNumbers.map((num, idx) => (
                          <div key={idx}>
                            <input
                              type="number"
                              name="policyNumbers"
                              value={num}
                              onChange={(e) => handleEditChange(e, idx)}
                            />
                            {idx === editingClient.policyNumbers.length - 1 && (
                              <button type="button" className="add-policy-btn" onClick={() => addPolicyNumber(true)}>+</button>
                            )}
                          </div>
                        )) : clients.policyNumbers.join(', ')}
                    </td>
                    <td>{editingClient?.index === index ?
                      <input type="date" id="followUpDate" name="followUpDate" value={editingClient.followUpDate} onChange={(e) => handleEditChange(e)} /> :
                      clients.followUpDate}
                    </td>
                    <td>
                      {editingClient?.index === index ?
                        <button onClick={saveEdit} className="save-button">Save</button> :
                        <button onClick={() => startEdit(index)} className="edit-button">Edit</button>}
                      <button onClick={() => confirmDelete(index)} className="btn btn-sm btn-danger ms-2 mb-1 ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <h2 className="auth-heading">
          Maintain comprehensive client records in one centralized location, including follow-up dates to ensure timely communication. This system allows you to store essential client information such as names, email addresses, phone numbers, purchase amounts, and policy numbers. When clients acquire additional policies, you can easily update their records with new policy numbers and adjust the total alp accordingly. Register and log in to start utilizing these features.
          </h2>
          <div className="auth-toggle">
            <button onClick={() => setIsLogin(true)} className={isLogin ? "auth-toggle-btn active" : "auth-toggle-btn"}>Login</button>
            <button onClick={() => setIsLogin(false)} className={!isLogin ? "auth-toggle-btn active" : "auth-toggle-btn"}>Register</button>
          </div>
          {isLogin ? (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin(email, password);
            }} className="auth-form">
              {message && <div className="message">{message}</div>}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="auth-input"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="auth-input"
              />
              <button type="submit" className="auth-button">Login</button>
              <button
                type="button"
                className="forgot-password-btn"
                onClick={() => handleForgotPassword(email)}
              >
                Forgot Password?
              </button>
            </form>
          ) : (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleRegister(email, password);
            }} className="auth-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="auth-input"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="auth-input"
              />
              <button type="submit" className="auth-button">Register</button>
            </form>
          )}
          <p><strong>Here is an example of what the client records will look like:</strong></p>
           <img src={example} alt="Example of logged-in view" className="example-image" />
        </div>
      )}
    </div>
  );
};

export default Home;
