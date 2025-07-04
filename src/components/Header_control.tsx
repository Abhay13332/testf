import React, { useState } from 'react';
import { Menu, X, Search, User, Heart, ShoppingBag, Shirt, Home, TrainFrontTunnel} from 'lucide-react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router";
import UploadForm from './upload';


const Header_control: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {t}=useTranslation("navbar");

let navbar = ["Home","Suit and Poshak","Odhni","Printed"];
const Linkto=["/home","/suits","/odhni","/printed"]
navbar=navbar.map((item)=>t(item));
    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen=>!isMenuOpen);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100  y-[64px]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-semibold text-gray-900 notranslate">
                                Rajputi Textiles
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navbar.map((item,idx) => (
                                <NavLink
                                    key={item}
                                   to={Linkto[idx]}
                                    className="text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                                >
                                    {(item)}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop Icons */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                           <NavLink to={"/upload"}>     <User className="w-5 h-5" /></NavLink>
                            </button>
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">0</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-2">
                            {/* Mobile Icons */}
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">0</span>
                            </button>

                            {/* Hamburger Button */}
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {(isMenuOpen &&
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40">
                        <div className="px-4 py-2 space-y-1">
                            {navbar.map((item,idx) => (
                                <NavLink
                                    key={item}
                                    to={Linkto[idx]}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 font-medium text-sm tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {(item)}
                                </NavLink>
                            ))}

                            {/* Mobile Only Links */}
                            <div className="border-t border-gray-100 pt-2 mt-2">
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <User className="w-5 h-5 mr-3" />
                                    My Account
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Heart className="w-5 h-5 mr-3" />
                                    Wishlist
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
                <div className="flex justify-around items-center py-2">
                    {navbar.slice(0, 4).map((item, index) => (
                        <button
                            key={item}
                            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-gray-900 transition-colors min-w-0 flex-1"
                        >
                            <div className="w-6 h-6 mb-1 flex items-center justify-center ">
                                {index === 0 && <NavLink to={"/home"}><Home className="w-5 h-5 " /></NavLink>}
                                {index === 1 &&<NavLink to={"/suits"}> <Shirt className="w-5 h-5 "></Shirt></NavLink>}
                                {index === 3 && <NavLink to={"/printed"}><div className="w-5 h-5 bg-current rounded border-2 border-current"></div></NavLink>}
                                {index === 2 && <NavLink to={"/odhni"}><TrainFrontTunnel className="w-5 h-5 "></TrainFrontTunnel></NavLink>}
                            </div>
                            <span className="text-xs font-medium truncate w-full text-center">
                {item}
              </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Spacer for bottom navigation */}
<div className={"h-[64px]"}/>
        </>
    );};
export default Header_control;