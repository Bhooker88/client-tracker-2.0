const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Existing store data
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			// Added store for clients
			clients: []
		},
		actions: {
			// Existing actions
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// Example fetch call
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo });
			},
			addClient: (client) => {
				const store = getStore();
				const updatedClients = [...store.clients, client];
				setStore({ clients: updatedClients });
			},
			
		}
	};
};

export default getState;