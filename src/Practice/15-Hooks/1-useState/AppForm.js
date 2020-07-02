import React, { useState } from 'react';

function App() {
    const [ inputData, setInputData ] = useState({firstName: "", lastName : ""});
    const [contactsData, setContactsData ] = useState([]);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setInputData(prevInput => ({...prevInput, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactsData(prevContact => [...prevContact, inputData]);
    }

    const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="First Name" 
                    name="firstName"
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Last Name" 
                    name="lastName"
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <button>Add contact</button>
            </form>
            {contacts}
        </>
    );

}

export default App;