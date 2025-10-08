"use client"

import Link from "next/link";
import LayoutWrapper from "./LayoutWrapper";
import { motion } from "motion/react";
import { CircleAlert, CloudCheck, ShieldCheck } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-16">
            <div className="-z-10 absolute -top-25 -left-25 w-72 h-72 bg-indigo-100 blur-3xl rounded-full"></div>
            <div className="-z-10 absolute -bottom-25 -right-25 w-72 h-72 bg-indigo-100 blur-3xl rounded-full"></div>

            <LayoutWrapper className="grid grid-cols-1 lg:grid-cols-2 py-18 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4">
                    <div className="inline-flex items-center bg-indigo-50 border border-indigo-200 px-4 py-0.5 text-indigo-500 text-sm font-light gap-2 rounded-full">
                        <span className="bg-indigo-500 w-2 h-2 animate-pulse rounded-full"></span>
                        เปิดให้บริการแล้ว — ความเร็วระดับ NVMe
                    </div>
                    <h1 className="text-5xl font-medium">สร้างเว็บให้วิ่ง <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500">เร็ว ปลอดภัย</span> และพร้อมสเกล</h1>
                    <p className="text-[16px] md:text-[18px] text-slate-500">Startup Cloud คือโฮสติ้งที่ตั้งค่าง่าย ใช้งานคล่อง มี SSL ฟรี สำรองข้อมูลรายวัน และทีมช่วยเหลือ 24/7 — เหมาะทั้งเว็บส่วนตัว ร้านค้า และองค์กร</p>

                    <ul className="flex items-center mt-10 gap-2.5">
                        <li>
                            <Link href="/" className="text-white bg-indigo-500 hover:bg-indigo-700 border-3 border-solid border-indigo-100 rounded-xl px-4 py-3 transition-colors duration-300 ease-out">ดูแพ็กเกจ</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-black hover:text-indigo-500 border border-slate-200 hover:border-indigo-500 rounded-xl px-4 py-3 transition-colors duration-300 ease-out">สำรวจฟีเจอร์</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-wrap items-center mt-10 gap-2.5">
                        <li className="flex items-center gap-2 border border-slate-200 px-3.5 py-0.5 rounded-md">
                            <CircleAlert size={16} className="text-indigo-500" />
                            <Link href="/" className="text-md font-light text-slate-500">Uptime 99.9%</Link>
                        </li>
                        <li className="flex items-center gap-2 border border-slate-200 px-3.5 py-0.5 rounded-md">
                            <ShieldCheck size={16} className="text-indigo-500" />
                            <Link href="/" className="text-md font-light text-slate-500">SSL ฟรี</Link>
                        </li>
                        <li className="flex items-center gap-2 border border-slate-200 px-3.5 py-0.5 rounded-md">
                            <CloudCheck size={16} className="text-indigo-500" />
                            <Link href="/" className="text-md font-light text-slate-500">สำรองข้อมูลรายวัน</Link>
                        </li>
                    </ul>
                </motion.div>
            </LayoutWrapper>
        </section>
    );
}

export default Hero;