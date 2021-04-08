import React from 'react'

const ContactComp = () => {
    return (
        <div className="container">
            <h2>Want to reach out to us?</h2>
            <p>Send us a Message</p>
            <form>
                <input className="input" type="text" placeholder="Full Name:" required/>
                <input className="input" type="Email" placeholder="Email" required/>
                <input className="input" type="text" placeholder="Subject of message" required/>
                <textarea className="text-area" name="message" placeholder="Type your message here" id="" rows="5" required></textarea>
                <div className="submit">
                    <a href="/">Send</a>
                </div>
            </form>
        </div>
    )
}

export default ContactComp;
