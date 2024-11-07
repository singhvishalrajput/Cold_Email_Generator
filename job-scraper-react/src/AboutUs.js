import React from 'react';

const AboutUs = () => {
    const boxStyle = {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '600px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        color: '#333',
        textAlign: 'left', // Set text alignment for consistent styling
    };

    

    return (
        <div style={{ padding: '50px', fontSize: '1.5rem', textAlign: 'center', backgroundColor: '#eaeaea' }}>
            <h1 style={{ color: '#007bff', fontSize: '2.5rem', marginBottom: '30px' }}>About Us</h1>

            <div style={boxStyle}>
                <p>
                    Welcome to our Cold Email Generation tool! This project aims to simplify the process of crafting personalized cold emails for job seekers and professionals looking to connect with potential employers.
                </p>
            </div>
            <br />
            <h2 style={{ color: '#007bff', fontSize: '2.5rem', marginBottom: '30px' }}>How to Use the Tool</h2>
            <div style={boxStyle}>
                <p>Follow these simple steps to get started:</p>
                <ol>
                    <li><strong>Visit the Main Page:</strong> Open the tool in your browser.</li>
                    <li><strong>Enter the Career Page URL:</strong> Provide the URL of the job posting or company career page.</li>
                    <li><strong>Input Your Name:</strong> Type in your name to personalize the email.</li>
                    <li><strong>Click 'Generate Email':</strong> Hit the submit button to generate your cold email.</li>
                    <li><strong>Review and Send:</strong> Review the generated email and send it to your desired recipient.</li>
                </ol>
            </div>
            <br />
            <h2 style={{ color: '#007bff', fontSize: '2.5rem', marginBottom: '30px' }}>Get in Touch</h2>
            <div style={boxStyle}>
                <p>
                    If you have any questions, feedback, or suggestions, feel free to reach out to us at <a href="mailto:singh2876@gmail.com" style={{ color: '#007bff', textDecoration: 'underline' }}>singh2876@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
