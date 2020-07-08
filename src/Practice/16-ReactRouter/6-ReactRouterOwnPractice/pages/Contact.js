import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Page</h1>
            <form>
                <label><input placeholder="Ingrese nombre" /></label>
                <label><input placeholder="Ingrese apellido" /></label>
                <textarea />
                <button onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;