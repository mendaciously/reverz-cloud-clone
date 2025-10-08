"use client"

import { useState } from "react";
import Link from "next/link";
import LayoutWrapper from "./LayoutWrapper";
import { Layout, Menu } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="z-50 fixed w-full bg-white">
            <div className="border-b border-b-slate-200">
                <LayoutWrapper className="flex items-center justify-between py-4">
                    <h1 className="text-2xl font-semibold">Startup</h1>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link href="/" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">ฟีเจอร์</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">แพ็กเกจ</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">คำถามพบบ่อย</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">ติดต่อ</Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className="hidden md:flex items-center gap-2.5">
                        <li>
                            <Link href="" className="text-sm text-slate-500 hover:text-indigo-500 border border-slate-200 hover:border-indigo-500 px-5 py-2 rounded-md transition-colors duration-300 ease-out">เข้าสู่ระบบ</Link>
                        </li>
                        <li>
                            <Link href="" className="text-sm text-white bg-indigo-500 hover:bg-indigo-700 px-5 py-2 rounded-md transition-colors duration-300 ease-out">เริ่มต้นใช้งาน</Link>
                        </li>
                    </ul>

                    <button onClick={toggleMenu} className="flex md:hidden border border-slate-200 rounded-md p-2 cursor-pointer hover:border-indigo-500 transition-colors duration-300 ease-out">
                        <Menu />
                    </button>
                </LayoutWrapper>
            </div>


            {isMenuOpen && (
                <div className="md:hidden border-b border-b-slate-200">
                    <LayoutWrapper>
                        <ul className="py-4 space-y-4">
                            <li>
                                <Link href="" className="text-md text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">ฟีเจอร์</Link>
                            </li>
                            <li>
                                <Link href="" className="text-md text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">แพ็กเกจ</Link>
                            </li>
                            <li>
                                <Link href="" className="text-md text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">คำถามพบบ่อย</Link>
                            </li>
                            <li>
                                <Link href="" className="text-md text-slate-500 hover:text-indigo-500 transition-colors duration-300 ease-out">ติดต่อ</Link>
                            </li>
                        </ul>

                        <ul className="flex justify-between mt-2 mb-6 gap-2">
                            <li className="w-full">
                                <Link href="/" className="block w-full text-center text-sm text-slate-500 hover:text-indigo-500 border border-slate-200 hover:border-indigo-500 px-5 py-2 rounded-md transition-colors duration-300 ease-out">เข้าสู่ระบบ</Link>
                            </li>
                            <li className="w-full">
                                <Link href="/" className="block w-full text-center text-sm text-white bg-indigo-500 hover:bg-indigo-700 px-5 py-2 rounded-md transition-colors duration-300 ease-out">เริ่มต้นใช้งาน</Link>
                            </li>
                        </ul>
                    </LayoutWrapper>
                </div>
            )}

        </header>
    );
}

export default Navbar;