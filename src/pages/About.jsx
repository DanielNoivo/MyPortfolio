import React, { useState, useEffect } from 'react';
import Profile from '../assets/Images/foto_home.png';
import Red from '../assets/Images/ghost_red.png';
import Blue from '../assets/Images/ghost_blue.png';
import Orange from '../assets/Images/ghost_orange.png';
import Pink from '../assets/Images/ghost_pink.png';
import { PacmanLoader } from 'react-spinners';

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
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
                <div className="flex justify-between items-start h-[100vh] mt-[40px] sm:items-center sm:mt-[-40px] md:mt-[-80px] max-w-[1240px] mx-auto *: px-4 text-white font-coolvetica">
                    <div className="mx-0 w-full gap-10 grid md:grid-cols-2 md:gap-60">
                        <div className="flex flex-col justify-center gap-4 mx-4 tracking-[4px]">
                            <h1 className="text-[#ffd700] text-5xl mb-4">
                                About Me
                            </h1>
                            <p className="text-sm">
                                Hi, I'm Daniel, a passionate web developer with
                                a love for sports. I thrive on creating
                                high-quality websites that not only meet but
                                exceed client expectations.
                            </p>
                            <p className="text-sm">
                                I dedicate myself to delivering websites that
                                are both functional and visually appealing.
                            </p>
                            <p className="text-sm">
                                Whether it's building a new site or optimizing
                                an existing one, my goal is always to provide a
                                seamless experience and bring your digital
                                vision to life.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <img
                                className="w-[300px] w-max-[200px] self-center sm:self-start"
                                src={Profile}
                                alt="Img Developer"
                            />
                            <div className="relative">
                                <img
                                    className="hidden sm:flex animate-bounce-slow-2 w-10 sm:w-12 absolute sm:top-[-250px] sm:left-[250px]"
                                    src={Red}
                                    alt=""
                                />
                                <img
                                    className="hidden sm:flex animate-bounce-slow w-16 sm:w-22 absolute sm:top-[-270px] sm:left-[-50px]"
                                    src={Blue}
                                    alt=""
                                />
                                <img
                                    className="hidden sm:flex animate-bounce-slow w-10 sm:w-14 absolute sm:top-[-120px] sm:left-[-120px]"
                                    src={Pink}
                                    alt=""
                                />
                                <img
                                    className="hidden sm:flex animate-bounce-slow-2 w-12 sm:w-18 absolute sm:top-[-120px] sm:left-[300px]"
                                    src={Orange}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
