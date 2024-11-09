import React from 'react';
import { ReactTyped } from 'react-typed';
import Profile from '../assets/Images/foto_home.png';
import Red from '../assets/Images/ghost_red.png';
import Blue from '../assets/Images/ghost_blue.png';
import Orange from '../assets/Images/ghost_orange.png';
import Pink from '../assets/Images/ghost_pink.png';
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
            <div className="flex justify-between items-start h-[100vh] mt-[40px] sm:items-center sm:mt-[-40px] md:mt-[-80px] max-w-[1240px] mx-auto *: px-4 text-white font-coolvetica">
                <div className="mx-0 w-full gap-10 grid md:grid-cols-2 md:gap-40">
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
            <Loader />
        </>
    );
};

export default Home;
