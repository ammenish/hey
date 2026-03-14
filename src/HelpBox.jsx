import React, { useState } from 'react';
import Ic from './Ic.jsx';

export default function HelpBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('menu'); // menu, complaint
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
                setMode('menu');
                setSubmitted(false);
            }, 300);
        }, 2000);
    };

    return (
        <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            {isOpen && (
                <div style={{ 
                    background: "#fff", width: 320, height: 400, borderRadius: 16, 
                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)", marginBottom: 16, 
                    display: "flex", flexDirection: "column", overflow: "hidden", 
                    animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" 
                }}>
                    <div style={{ background: "linear-gradient(135deg, #0a2463, #1e56c2)", padding: 20, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: 16 }}>{mode === 'complaint' ? "Log a Complaint" : "Help & Support"}</div>
                            <div style={{ fontSize: 12, opacity: 0.8 }}>{mode === 'complaint' ? "We're here to help" : "How can we assist you?"}</div>
                        </div>
                        <div style={{ cursor: "pointer", opacity: 0.8 }} onClick={() => setIsOpen(false)}>✕</div>
                    </div>
                    
                    <div style={{ flex: 1, padding: 20, overflowY: "auto", background: "#f8fafc" }}>
                        {submitted ? (
                            <div style={{ textAlign: "center", paddingTop: 40 }}>
                                <div style={{ width: 48, height: 48, background: "#d1fae5", color: "#059669", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    <Ic n="ok" s={24} />
                                </div>
                                <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Ticket Generated</div>
                                <div style={{ fontSize: 13, color: "#64748b" }}>We've received your request and will get back to you shortly. Tracking ID: REQ-{Math.floor(Math.random() * 90000) + 10000}</div>
                            </div>
                        ) : mode === 'menu' ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <div style={{ fontSize: 13, color: "#475569", marginBottom: 8 }}>Select an option below:</div>
                                
                                <button className="btn" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#334155", justifyContent: "flex-start", padding: "12px 16px" }} onClick={() => setMode('complaint')}>
                                    <span style={{ marginRight: 10 }}><Ic n="warn" s={16} color="#dc2626" /></span> Raise a Complaint / Grievance
                                </button>
                                
                                <button className="btn" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#334155", justifyContent: "flex-start", padding: "12px 16px" }} onClick={() => window.open('tel:1800119792')}>
                                    <span style={{ marginRight: 10 }}><Ic n="file" s={16} color="#059669" /></span> Call Toll Free (1800-11-9792)
                                </button>
                                
                                <button className="btn" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#334155", justifyContent: "flex-start", padding: "12px 16px" }}>
                                    <span style={{ marginRight: 10 }}><Ic n="sync" s={16} color="#3b82f6" /></span> Track Application Offline
                                </button>
                            </div>
                        ) : mode === 'complaint' && (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <div>
                                    <label style={{ fontSize: 11, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 4 }}>Full Name</label>
                                    <input required className="input" placeholder="Your Name" style={{ background: "#fff" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: 11, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 4 }}>Application ID (Optional)</label>
                                    <input className="input" placeholder="PAR-YYYY-XXX" style={{ background: "#fff" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: 11, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 4 }}>Complaint Details</label>
                                    <textarea required className="input" placeholder="Please describe your issue..." style={{ background: "#fff", minHeight: 80, resize: "none" }} />
                                </div>
                                
                                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                                    <button type="button" className="btn btn-secondary" onClick={() => setMode('menu')} style={{ flex: 1, justifyContent: "center" }}>Back</button>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>Submit</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
            
            <div 
                onClick={() => { setIsOpen(!isOpen); if(!isOpen) { setMode('menu'); setSubmitted(false); } }}
                style={{
                    width: 56, height: 56, borderRadius: "50%", background: "#0a2463", 
                    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", boxShadow: "0 4px 14px rgba(10,36,99,0.4)",
                    transition: "transform 0.2s", transform: isOpen ? "scale(0.95)" : "scale(1)"
                }}
            >
                {isOpen ? <span style={{ fontSize: 24, lineHeight: 1 }}>✕</span> : <Ic n="meet" s={24} c="#fff" />}
            </div>
            
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
