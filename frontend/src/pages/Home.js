import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useUser } from '@clerk/clerk-react';

const Button = ({ children, primary = false, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: primary ? '#4a90e2' : 'transparent',
                color: primary ? 'white' : '#4a90e2',
                border: primary ? 'none' : '2px solid #4a90e2',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 4px 6px rgba(74, 144, 226, 0.25)' : 'none',
            }}
        >
            {children}
        </button>
    );
};

export default function GetStartedPage() {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (!isSignedIn) {
            navigate('/sign-in');
        } else {
            navigate('/chat');
        }
    };

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
            }}>
                <header style={{
                    padding: '1rem',
                    textAlign: 'center',
                }}>
                    <h1 style={{ margin: 0, color: '#ffffff', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>ModernChat</h1>
                </header>

                <main style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                }}>
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '15px',
                        padding: '3rem',
                        maxWidth: '600px',
                        width: '100%',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        animation: 'fadeIn 0.5s ease-out',
                    }}>
                        <h2 style={{ marginBottom: '1rem', color: '#333', fontSize: '2rem', textAlign: 'center' }}>Welcome to Chat App</h2>
                        <p style={{ marginBottom: '2rem', textAlign: 'center', color: '#666', lineHeight: '1.6' }}>
                            Experience the next level of communication. Connect instantly, share seamlessly, and chat effortlessly with our cutting-edge platform.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <Button primary onClick={handleGetStarted}>Get Started</Button>
                            <Button onClick={() => alert('Learn more about our features!')}>Learn More</Button>
                        </div>
                    </div>
                </main>

                <footer style={{
                    padding: '1rem',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                    <p style={{ margin: 0 }}>© 2023 ModernChat. All rights reserved.</p>
                </footer>

                <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
            </div>
        </>
    );
}
