import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);

    const option = {
        textAlign: "Center",
        padding: "1rem",
        width: "100%",
        backgroundColor: "Black",
        marginTop: "3rem"
    }

    const scrollButton = {
        position: 'fixed', // Fix the button position
        bottom: '20px', // Adjust the distance from the bottom
        right: '20px', // Align to the right
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1, // Set a higher z-index to ensure it's above other content
        color: "#ffc107",
        border: "1px solid #ffc107",
        padding: "5px",
        borderRadius: "50%"
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Event listener to show/hide the scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    });

    return (
        <div style={option}>
            <h4>All Right Received By @ TAP Brothers 2023</h4>
            {showScrollButton && (
                <button onClick={scrollToTop} style={scrollButton}>
                    <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                </button>
            )}
        </div>
    )
}

export default Footer
