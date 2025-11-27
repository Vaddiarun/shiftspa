import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin, Loader2 } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        service: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLocationClick = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setLoadingLocation(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();

                    let address = "";
                    if (data.address) {
                        const parts = [];
                        if (data.address.suburb) parts.push(data.address.suburb);
                        if (data.address.city_district) parts.push(data.address.city_district);
                        if (data.address.city) parts.push(data.address.city);
                        address = parts.join(", ");
                    }

                    if (!address) {
                        address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                    }

                    setFormData(prev => ({ ...prev, location: address }));
                } catch (error) {
                    console.error("Error fetching address:", error);
                    setFormData(prev => ({ ...prev, location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` }));
                } finally {
                    setLoadingLocation(false);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location. Please enter it manually.");
                setLoadingLocation(false);
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location}%0A*Service:* ${formData.service}%0A%0A_Sent via Shift Spa Website_`;

        const whatsappUrl = `https://wa.me/919391477511?text=${message}`;

        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <section id="book" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Map Image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src="/map.png" alt="Service Area" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Info Side */}
                    <div className="bg-primary p-10 md:w-2/5 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Book Your Session</h3>
                            <p className="text-white/80 mb-8 leading-relaxed">
                                Fill out the form and we will redirect you to WhatsApp to confirm your booking with our team.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <p className="font-bold text-sm uppercase tracking-wider mb-1 opacity-70">Note</p>
                                <p className="text-sm">Service available only for female clients; therapists are male.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:w-3/5 bg-white">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-2">Redirecting to WhatsApp...</h3>
                                <p className="text-dark/60">If WhatsApp doesn't open automatically, please check your pop-up blocker.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-primary font-medium hover:underline"
                                >
                                    Book another session
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark/70 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-dark/70 mb-2">Location / Area</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12"
                                            placeholder="e.g. Indiranagar, Koramangala"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleLocationClick}
                                            disabled={loadingLocation}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-dark/40 hover:text-primary transition-colors p-1"
                                            title="Use current location"
                                        >
                                            {loadingLocation ? <Loader2 size={20} className="animate-spin" /> : <MapPin size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-dark/70 mb-2">Preferred Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Swedish">Swedish Massage</option>
                                        <option value="Deep Tissue">Deep Tissue</option>
                                        <option value="Aromatherapy">Aromatherapy</option>
                                        <option value="Head & Neck">Head & Neck</option>
                                        <option value="Reflexology">Foot Reflexology</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] text-white font-medium py-4 rounded-lg hover:bg-[#128C7E] transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <span>Book via WhatsApp</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
