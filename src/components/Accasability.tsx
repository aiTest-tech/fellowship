// src/components/AccessibilityPanel.tsx
// @ts-nocheck
import React, { useEffect } from 'react';
import 'https://img1.digitallocker.gov.in/ux4g/UX4G-CDN-accessibility/css/accesibility-style-v2.1.css';

const Accessibility: React.FC = () => {    
  useEffect(() => {
    // Dynamically load the external script
    const script = document.createElement('script');
    script.src = "https://img1.digitallocker.gov.in/ux4g/UX4G-CDN-accessibility/js/weights-v1.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="uwaw uw-light-theme gradient-head uwaw-initial paid_widget" id="uw-main">
      <div className="relative second-panel">
        <h3>Accessibility options by UX4G</h3>
        <div className="uwaw-close" onClick={() => console.log("Close panel clicked")}></div>
      </div>
      <div className="uwaw-body">
        <div className="h-scroll">
          <div className="uwaw-features">
            {/* Render each feature button */}
            <div className="uwaw-features__item reset-feature" id="featureItem-sp">
              <button
                id="speak"
                className="uwaw-features__item__i"
                aria-label="Enable the UserWay screen reader"
                aria-pressed="false"
                onClick={() => console.log("Text to Speech")}
              >
                <span className="uwaw-features__item__icon">
                  <span className="ux4g-icon icon-speaker"></span>
                </span>
                <span className="uwaw-features__item__name">Text To Speech</span>
                <span
                  className="tick-active uwaw-features__item__enabled reset-tick"
                  id="tickIcon_sp"
                  style={{ display: 'none' }}
                ></span>
              </button>
            </div>
            {/* Add other features similarly */}
          </div>
        </div>
      </div>
      <div className="reset-panel">
        <div className="copyrights-accessibility">
          <button className="btn-reset-all" id="reset-all" onClick={() => console.log("Reset All Settings")}>
            <span className="reset-icon"></span>
            <span className="reset-btn-text">Reset All Settings</span>
          </button>
          <a
            href="https://www.ux4g.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="copyright-text"
          >
            <span className="uwaw-features__item__name ux4g-copy ux4g-copyright">Created by</span>
            <img
              src="https://www.ux4g.gov.in/assets/img/logo/ux4g-logo.svg"
              alt="logo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <button
        id="uw-widget-custom-trigger"
        className="uw-widget-custom-trigger"
        aria-label="Accessibility Widget"
        data-uw-trigger="true"
        aria-haspopup="dialog"
        onClick={() => console.log("Accessibility Widget Triggered")}
      >
        Accessibility Options
      </button>
    </div>
  );
};

export default Accessibility;
