import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const MainContent = () => {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await fetch('https://3e01-34-106-19-67.ngrok-free.app/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: url, // Sending the career page URL
                    username: name // Sending the user's name
                }),
            });
    
            const data = await res.json();
            setResponse(data.response); // Store the response from the server
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem', background: '#eaeaea' }}>
            <h1 style={{ textAlign: 'center', padding: '20px', fontSize: '3.5rem', color: '#007bff' }}>
                <b>Cold Email Generation</b>
            </h1>
            
            <p>Generate personalized cold emails with ease!</p>
            <br />

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="url" style={{ display: 'block', marginBottom: '5px' }}>Career Page URL:</label>
                    <input
                        id="url"
                        type="text"
                        placeholder="Enter career page URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        style={{
                            padding: '10px',
                            width: '400px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '1.5rem',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{
                            padding: '10px',
                            width: '400px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '1.5rem',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1.5rem',
                    }}
                >
                    Generate Email
                </button>
            </form>

            <br />

            {loading && (
                <div style={{ marginTop: '20px' }}>
                    <ClipLoader color="#007bff" loading={loading} size={50} />
                </div>
            )}

            {response && (
                <div
                    style={{
                        marginTop: '30px',
                        padding: '20px',
                        border: '2px solid #007bff',
                        borderRadius: '8px',
                        maxWidth: '90%',
                        margin: '20px auto',
                        backgroundColor: '#eaeaea',
                        textAlign: 'left',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}

export default MainContent;
