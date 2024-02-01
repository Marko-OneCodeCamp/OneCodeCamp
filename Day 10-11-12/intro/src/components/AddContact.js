import React, { useState } from 'react';

const AddContact = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddContact = () => {
        const newContact = { name, email };
        setContacts([...contacts, newContact]);
        setName('');
        setEmail('');
    };

    return (
        <>
            <div className='container'>
                <h1>CONTACT REGISTRATION FORM</h1>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    className='form-control w-25'
                    placeholder='Contact Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    className='form-control w-25'
                    placeholder='Contact Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='btn btn-primary mt-2' onClick={handleAddContact}>
                    Add Contact
                </button>
            </div>
            <div className='container mt-5 border shadow p-5'>
                <h4 className='text-secondary'>Contacts</h4>
                <ul>
                    {contacts.map((contact, index) => (
                        
                        <li key={index}>
                            {contact.name}, <br></br> {contact.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AddContact;
