import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const pricing = [
    { price: "299", title: "Starter Script", employees: "1 Specialized Writer", features: ["Basic Research", "Outline Creation", "1 Revision Cycle"] },
    { price: "499", title: "Professional Manuscript", employees: "3 Dedicated Experts", features: ["Deep Research", "Full Writing Service", "3 Revision Cycles", "Editing Support"], featured: true },
    { price: "1099", title: "Premium Masterpiece", employees: "5 Elite Strategists", features: ["Market Analysis", "Premium Ghostwriting", "Unlimited Revisions", "Marketing Consultation"] }
];

const Pricing = ({ setContractType }) => {
    const navigate = useNavigate();

    const handleChoice = (price) => {
        setContractType(price);
        navigate('/contract');
    };

    return (
        <section id="pricing" className="pricing-section">
            <div className="premium-container">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>Writing Contracts</h2>
                <div className="pricing-grid">
                    {pricing.map((plan, idx) => (
                        <div key={idx} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured && (
                                <div className="employee-badge" style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center' }}>
                                    <Star size={14} fill="var(--primary)" /> Most Popular
                                </div>
                            )}
                            <h3>{plan.title}</h3>
                            <div className="price-amount">₹{plan.price}<span>/plan</span></div>
                            <div className="employee-badge">{plan.employees}</div>
                            <ul className="features-list">
                                {plan.features.map((f, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Check size={18} color="var(--secondary)" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleChoice(plan.price)}>Choose Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
