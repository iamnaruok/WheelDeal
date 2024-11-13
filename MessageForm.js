import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ receiverId }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        try {
            await axios.post('/api/messages', {
                content: message,
                senderId: localStorage.getItem('userId'),
                receiverId: receiverId
            });
            setMessage('');
            alert('Message sent successfully.');
        } catch (error) {
            alert('Error sending message.');
        }
    };

    return (
        <div>
            <textarea 
                value={message} 
                placeholder="Type your message..." 
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default MessageForm;
