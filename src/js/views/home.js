import React, { useState, useEffect } from 'react';
import '../../styles/Home.css'; // Make sure the path matches your file structure

const Home = () => {
  const [clients, setClients] = useState(() => {
    const savedClients = localStorage.getItem('clients');
    return savedClients ? JSON.parse(savedClients).map(client => ({
      ...client,
      policyNumbers: Array.isArray(client.policyNumbers) ? client.policyNumbers : [],
    })) : [];
  });
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
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const getSortedClients = () => [...clients].sort((a, b) => new Date(a.followUpDate) - new Date(b.followUpDate));

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

  const addClient = (e) => {
    e.preventDefault();
    setClients([...clients, newClient]);
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

  const saveEdit = () => {
    if (editingClient && editingClient.index != null) {
      const updatedClients = [...clients];
      updatedClients[editingClient.index] = { ...editingClient };
      delete updatedClients[editingClient.index].index;
      setClients(updatedClients);
      setEditingClient(null);
    }
  };

  const confirmDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this client?");
    if (isConfirmed) {
      // Create a new array excluding the client at the given index
      const updatedClients = clients.filter((_, clientIndex) => clientIndex !== index);
      setClients(updatedClients); // Update the state with the filtered array
    }
  };


  return (
    <div>
      <form onSubmit={addClient} className="form-container">
        <div className="row">
          {/* Personal details inputs */}
          <div className="input-group"><label htmlFor="firstName">First Name</label><input id="firstName" name="firstName" value={newClient.firstName} onChange={handleChange} required /></div>
          <div className="input-group"><label htmlFor="lastName">Last Name</label><input id="lastName" name="lastName" value={newClient.lastName} onChange={handleChange} required /></div>
          <div className="input-group"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" value={newClient.email} onChange={handleChange} required /></div>
          <div className="input-group"><label htmlFor="phoneNumber">Phone Number</label><input id="phoneNumber" name="phoneNumber" value={newClient.phoneNumber} onChange={handleChange} required /></div>
        </div>
        <div className="row">
          {/* Meeting details inputs */}
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
  <button type="button" className="add-policy-btn" onClick={addPolicyNumber}>
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
            {getSortedClients().map((client, index) => (
              <tr key={index}>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{editingClient?.index === index ? 
                  <input type="email" name="email" value={editingClient.email} onChange={handleEditChange} /> : 
                  client.email}
                </td>
                <td>{editingClient?.index === index ? 
                  <input type="text" name="phoneNumber" value={editingClient.phoneNumber} onChange={handleEditChange} /> : 
                  client.phoneNumber}
                </td>
                <td>{client.dateMet}</td>
                <td>{editingClient?.index === index ? 
                  <input type="number" name="alpPurchased" value={editingClient.alpPurchased} onChange={handleEditChange} /> : 
                  client.alpPurchased}
                </td>
                <td>
                  {editingClient?.index === index ? 
                    editingClient.policyNumbers.map((num, idx) => (
                      <div key={idx}>
                        <input
                          type="text"
                          name="policyNumbers"
                          value={num}
                          onChange={(e) => handleEditChange(e, idx)}
                        />
                        {idx === editingClient.policyNumbers.length - 1 && (
                          <button type="button" className="add-policy-btn" onClick={() => addPolicyNumber(true)}>+</button>
                        )}
                      </div>
                    )) : client.policyNumbers.join(', ')}
                </td>
                <td>{editingClient?.index === index ? 
                  <input type="date" name="followUpDate" value={editingClient.followUpDate} onChange={handleEditChange} /> : 
                  client.followUpDate}
                </td>
                <td>
                  {editingClient?.index === index ? 
                    <button onClick={saveEdit} className="save-button">Save</button> : 
                    <button onClick={() => startEdit(index)} className="edit-button">Edit</button>}
                    <button onClick={() => confirmDelete(index)} className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;