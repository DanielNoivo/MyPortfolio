import React, { useState, useEffect } from 'react';
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineHome,
    AiOutlineUser,
    AiOutlinePhone,
} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeItem, setActiveItem] = useState('/');

    const menuItems = [
        { name: 'Home', icon: <AiOutlineHome size={25} />, href: '/' },
        { name: 'About', icon: <AiOutlineUser size={25} />, href: '/about' },
        {
            name: 'Contact',
            icon: <AiOutlinePhone size={25} />,
            href: '/contact',
        },
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        const activeMenuItem = menuItems.find(
            (item) => item.href === currentPath
        );
        if (activeMenuItem) {
            setActiveItem(activeMenuItem.name);
        }
    }, []);

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#ffd700] m-4">
                DANIEL .
            </h1>
            <ul className="hidden md:flex text-lg font-normal text-[#fffff] mr-12">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => setActiveItem(item.name)}
                        className={`p-4 transition-colors duration-200 cursor-pointer ${
                            activeItem === item.name
                                ? 'text-[#ffd700] font-bold'
                                : 'hover:text-[#ffd700]'
                        }`}
                    >
                        <a href={item.href} className="flex items-center gap-2">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden gap-2 ml-4 md:flex">
                <a
                    href="https://www.instagram.com/dnoivo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineInstagram
                        className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                        size={25}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/daniel-noivo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineLinkedin
                        className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                        size={25}
                    />
                </a>
                <a
                    href="https://github.com/DanielNoivo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineGithub
                        className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                        size={25}
                    />
                </a>
            </div>
            <div
                onClick={handleNav}
                className="block md:hidden z-20 cursor-pointer"
            >
                {!nav ? (
                    <AiOutlineMenu size={25} />
                ) : (
                    <AiOutlineClose size={25} />
                )}
            </div>
            <div
                className={`fixed z-10 top-0 w-[100%] h-full border-r border-r-gray-500 bg-[#022c43]/80 ease-in-out duration-500 ${
                    nav
                        ? 'left-0 backdrop-blur-md md:left-[-100%]'
                        : 'left-[-100%]'
                }`}
            >
                <h1 className="w-full text-3xl font-bold text-[#ffd700] m-4 font-sans">
                    DANIEL .
                </h1>
                <ul className="uppercase mt-12 text-lg">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className={`flex items-center w-[15%] gap-4 p-4 transition-colors duration-200 cursor-pointer ${
                                activeItem === item.name
                                    ? 'text-[#ffd700] font-bold'
                                    : 'hover:text-[#ffd700]'
                            }`}
                        >
                            <a
                                href={item.href}
                                className="flex items-center gap-2"
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="gap-2 ml-4 flex fixed bottom-4">
                    <a
                        href="https://www.instagram.com/dnoivo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineInstagram
                            className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                            size={25}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daniel-noivo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineLinkedin
                            className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                            size={25}
                        />
                    </a>
                    <a
                        href="https://github.com/DanielNoivo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineGithub
                            className="hover:text-[#ffd700] transition-colors duration-200 cursor-pointer"
                            size={25}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
