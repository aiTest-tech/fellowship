// @ts-nocheck
import React, { useState, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Import ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin); // Register the plugin

interface ScrollToTopButtonProps {
    children: React.ReactNode;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Check scroll position and toggle button visibility
    const checkScrollTop = () => {
        if (!isVisible && window.scrollY > 300) {
            setIsVisible(true);
        } else if (isVisible && window.scrollY <= 300) {
            setIsVisible(false);
        }
    };

    // Scroll to the top using GSAP
    const scrollToTop = () => {
        gsap.to(window, {
            scrollTo: { y: 0 },  // Scroll to the top (y = 0)
            duration: 1.5,          // Duration of the scroll (2 seconds)
            ease: 'power2.out',   // Ease effect for smoother animation
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [isVisible]);

    return (
        <div>
            {/* Render the page content */}
            <div>{children}</div>

            {/* Scroll-to-top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 p-3 px-4 z-50 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </div>
    );
};

export default ScrollToTopButton;

