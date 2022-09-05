import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__head">
                <h3 className="footer__head-left">Become a Bixon Insider</h3>
                <button className="footer__head-btn">Get 10% Off </button>
            </div>
            <div className="footer__links">
                <div className="footer__socials">
                    <span className="footer__socials-logo">BIXON</span>
                    <span>{import.meta.env.ENV_Password}</span>
                </div>
            </div>
        </div>
    )
}