import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Define appearance styles for Clerk buttons
    const customAppearance = {
        elements: {
            // Customize the styles of the primary button
            primaryButton: {
                backgroundColor: 'blue', // Blue color
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: '#1E40AF', // Darker blue on hover
                },
            },
            // Customize the styles of the secondary button
            secondaryButton: {
                backgroundColor: '#cf0a2b', // Gray color
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: '#4B5563', // Darker gray on hover
                },
            },
        },
    };

    const styles = {
        nav: {
            backgroundColor: '#88E9CC',
            // marginBottom: "-57px",
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333',
        },
        menuIcon: {
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
                display: 'block',
            },
        },
        navItems: {
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            '@media (max-width: 768px)': {
                display: isMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            },
        },
        navItem: {
            margin: '0 1rem',
            '@media (max-width: 768px)': {
                margin: '1rem',
            },
        },
        navLink: {
            color: '#333',
            textDecoration: 'none',
            fontWeight: 500,
        },
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <div style={styles.logo}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <button style={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>
                <ul style={{
                    ...styles.navItems,
                    display: isMenuOpen ? 'flex' : styles.navItems.display,
                }}>
                    <li style={styles.navItem}>
                        <a style={{ backgroundColor: '#212529', color: "white", borderRadius: "5px", padding: "5px 10px" }}>
                            <SignedOut>
                                <SignInButton appearance={customAppearance} />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
