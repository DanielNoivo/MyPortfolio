import React from 'react';
import {
    FaNodeJs,
    FaReact,
    FaCss3,
    FaHtml5,
    FaJsSquare,
    FaGitAlt,
} from 'react-icons/fa';

const About = () => {
    return (
        <div className="flex justify-between items-start h-[100vh] mt-[40px] sm:items-center sm:mt-[-40px] md:mt-[-80px] max-w-[1240px] mx-auto *: px-4 text-white font-coolvetica">
            <div className="mx-0 w-full gap-40 grid md:grid-cols-2 md:gap-10">
                <div className="flex flex-col justify-center gap-4 ml-4 tracking-[4px]">
                    <h1 className="text-[#ffd700] text-5xl mb-4">About Me</h1>
                    <p className="text-sm">
                        Hi, I'm Daniel, a passionate web developer with a love
                        for sports. I thrive on creating high-quality websites
                        that not only meet but exceed client expectations.
                    </p>
                    <p className="text-sm">
                        I dedicate myself to delivering websites that are both
                        functional and visually appealing.
                    </p>
                    <p className="text-sm">
                        Whether it's building a new site or optimizing an
                        existing one, my goal is always to provide a seamless
                        experience and bring your digital vision to life.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full h-[-2]">
                    <div className="cubespinner relative">
                        {/* Face 1 */}
                        <div className="face1 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-0">
                            <FaNodeJs color="green" size={100} />
                        </div>
                        {/* Face 2 */}
                        <div className="face2 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-90">
                            <FaReact color="#5ED4F4" size={100} />
                        </div>
                        {/* Face 3 */}
                        <div className="face3 absolute inset-0 bg-transparent flex justify-center items-center rotate-x-90">
                            <FaCss3 color="#28A4D9" size={100} />
                        </div>
                        {/* Face 4 */}
                        <div className="face4 absolute inset-0 bg-transparent flex justify-center items-center -rotate-x-90">
                            <FaHtml5 color="#F06529" size={100} />
                        </div>
                        {/* Face 5 */}
                        <div className="face5 absolute inset-0 bg-transparent flex justify-center items-center rotate-x-180">
                            <FaJsSquare color="#EFD81D" size={100} />
                        </div>
                        {/* Face 6 */}
                        <div className="face6 absolute inset-0 bg-transparent flex justify-center items-center rotate-y-180">
                            <FaGitAlt color="#EC4D28" size={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
