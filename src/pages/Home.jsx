import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { PacmanLoader } from 'react-spinners';
import {
    FaNodeJs,
    FaReact,
    FaCss3,
    FaHtml5,
    FaJsSquare,
    FaGitAlt,
} from 'react-icons/fa';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
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
                    <div className="mx-0 w-full gap-40 grid md:grid-cols-2 md:gap-10">
                        <div className="flex flex-col justify-center gap-2 ml-4 tracking-[4px] items-center md:items-start">
                            <ReactTyped
                                className="h-[100px] font-semibold text-3xl md:text-4xl font-coolvetica tracking-[4px] self-start"
                                strings={[
                                    "Hi, I'm Daniel </br> web developer.",
                                    'Interested in </br> working with me?',
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                                cursorChar="_"
                            ></ReactTyped>
                            <h2 className="text-[#9b9b9b] mt-3 text-xs">
                                Front End Developer / JavaScript Expert
                            </h2>
                            <a href="/contact">
                                <button className="uppercase font-medium border border-[#ffd700] text-[#ffd700] my-6 mx-0 p-2 w-[200px] hover:bg-[#ffd700] hover:text-[#000000]">
                                    Contact me
                                </button>
                            </a>
                        </div>
                        <div className="flex justify-center items-center w-full h-[0] mt-20">
                            <div className="cubespinner relative">
                                {/* Face 1 */}
                                <div className="face1 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-0">
                                    <FaNodeJs color="green" size={75} />
                                </div>
                                {/* Face 2 */}
                                <div className="face2 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-90">
                                    <FaReact color="#5ED4F4" size={75} />
                                </div>
                                {/* Face 3 */}
                                <div className="face3 absolute inset-0 bg-transparent flex justify-center items-center rotate-x-90">
                                    <FaCss3 color="#28A4D9" size={75} />
                                </div>
                                {/* Face 4 */}
                                <div className="face4 absolute inset-0 bg-transparent flex justify-center items-center -rotate-x-90">
                                    <FaHtml5 color="#F06529" size={75} />
                                </div>
                                {/* Face 5 */}
                                <div className="face5 absolute inset-0 bg-transparent flex justify-center items-center rotate-x-180">
                                    <FaJsSquare color="#EFD81D" size={75} />
                                </div>
                                {/* Face 6 */}
                                <div className="face6 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-180">
                                    <FaGitAlt color="#EC4D28" size={75} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
