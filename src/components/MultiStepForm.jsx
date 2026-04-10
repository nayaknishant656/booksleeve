import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, ChevronLeft, ChevronRight, CreditCard, CheckCircle2 } from 'lucide-react';

const MultiStepForm = ({ step, formData, handleInputChange, nextStep, prevStep, setStep }) => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        setStep(1);
        navigate('/');
    };

    return (
        <div className="premium-container animate-fade" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="form-container">
                <div className="step-indicator">
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>1</div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>2</div>
                </div>

                {step === 2 && (
                    <div className="animate-fade">
                        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Personal Details</h2>
                        <div className="form-group">
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /> Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your contact number" />
                        </div>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                            <button className="btn btn-secondary" onClick={handleBackToHome} style={{ flex: 1, justifyContent: 'center' }}>
                                <ChevronLeft size={18} /> Back
                            </button>
                            <button className="btn btn-primary" onClick={nextStep} style={{ flex: 1, justifyContent: 'center' }}>
                                Next <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="payment-view animate-fade">
                        <h2 style={{ marginBottom: '10px' }}>Complete Payment</h2>
                        <p style={{ color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <CreditCard size={18} /> Secure UPI Payment
                        </p>

                        <div className="upi-barcode" style={{ position: 'relative' }}>
                            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=booksleeve@upi%26pn=Booksleeve%20India%26am=${formData.contractType}%26cu=INR`} alt="UPI QR Code" className="barcode-img" />
                        </div>

                        <div className="payment-details">
                            <p>Selected Plan: <strong>₹{formData.contractType}</strong></p>
                            <p>UPI ID: <strong>booksleeve@upi</strong></p>
                            <div className="amount-due">₹{formData.contractType}</div>
                        </div>

                        <button className="btn btn-primary" onClick={() => {
                            alert("Payment verification in progress. We will contact you soon!");
                            handleBackToHome();
                        }} style={{ width: '100%', justifyContent: 'center' }}>
                            <CheckCircle2 size={18} /> I have made the payment
                        </button>
                        <button className="btn btn-secondary" onClick={prevStep} style={{ width: '100%', marginTop: '15px', justifyContent: 'center' }}>
                            <ChevronLeft size={18} /> Back to Details
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
