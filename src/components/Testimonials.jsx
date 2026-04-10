import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    { name: "Dr. Ananya Sharma", role: "Bestselling Author, Delhi", text: "Booksleeve helped me refine my medical research into a widely accessible book. Their writers are scholars in their own right.", rating: 5 },
    { name: "Rajesh Iyer", role: "Business Strategist, Bangalore", text: "The contract was transparent and the delivery was ahead of schedule. Truly professional service with an Indian heart.", rating: 5 },
    { name: "Meera Deshmukh", role: "Historical Novelist, Pune", text: "Finding an agency that understands Indian history so deeply was a blessing. Five stars for the research team!", rating: 5 }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="premium-container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}>What Our Authors Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="testimonial-card animate-fade">
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.2, marginBottom: '10px' }} />
                            <div className="rating" style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <strong>{t.name}</strong>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
