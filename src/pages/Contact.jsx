import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { PacmanLoader } from 'react-spinners';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_pm7zeu7',
                'template_phb7a3d',
                {
                    from_name: formData.fullName,
                    email_id: formData.email,
                    message: formData.message,
                },
                'bwPMtePQcqtnuZyRM'
            )
            .then((response) => {
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 3000);
                setFormData({
                    fullName: '',
                    email: '',
                    message: '',
                });
            })
            .catch((err) => {
                console.error('Erro ao enviar:', err);
            });
    };

    return (
        <>
            {showNotification && (
                <div className="fixed inset-0 flex flex-row items-start justify-center mt-2">
                    <div className="bg-green-600 text-white px-6 py-3 rounded-none shadow-md">
                        Message sent successfully!
                    </div>
                </div>
            )}
            {loading && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 ${
                        loading ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <PacmanLoader color="#FFD700" loading={loading} size={20} />
                </div>
            )}
            <div
                className={`content transition-opacity duration-[3000ms] ${
                    loading ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <div className="flex justify-between items-start h-[100vh] mt-[40px] sm:items-center sm:mt-[-40px] md:mt-[-80px] max-w-[1240px] mx-auto px-4 text-white font-coolvetica">
                    <div className="mx-0 w-full gap-10 grid md:grid-cols-2 md:gap-10">
                        <div className="flex flex-col mx-4 tracking-[4px]">
                            <h1 className="text-[#ffd700] text-5xl mb-4">
                                Contact
                            </h1>
                            <p className="text-sm">
                                I am interested in freelance opportunities -
                                especially on ambitious or large projects.
                                However, if you have any other requests or
                                questions, don't hesitate to contact me using
                                below form either.
                            </p>
                            <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:gap-20 sm:mt-12 md:mt-20">
                                <div className="flex flex-row gap-4 items-center">
                                    <FaPhone className="transform scale-x-[-1]" />
                                    <p className="text-sm">934 693 867</p>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <FaMapLocation className="transform scale-x-[-1]" />
                                    <p className="text-sm">Braga, Portugal</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mx-4 mt-20 md:mt-0">
                            <form
                                className="flex flex-col md:ml-20 w-[100%] items:left md:items-end"
                                onSubmit={sendEmail}
                            >
                                <input
                                    className="w-full h-10 p-2 border-2 border-[#ffd700] text-[#000000] text-sm"
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <input
                                    className="w-full h-10 p-2 border-2 border-[#ffd700] text-[#000000] text-sm"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <textarea
                                    className="w-full h-20 md:h-28 p-2 border-2 border-[#ffd700] text-[#000000] text-sm"
                                    name="message"
                                    placeholder="Message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                                <br />
                                <button
                                    className="self-end uppercase font-medium border border-[#ffd700] text-[#ffd700] p-2 w-[25%] hover:bg-[#ffd700] hover:text-[#000000] text-sm"
                                    type="submit"
                                >
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
