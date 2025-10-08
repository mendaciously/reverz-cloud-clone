"use client";

import { motion } from "motion/react";
import LayoutWrapper from "./LayoutWrapper";

const Pricing = () => {
    return (
        <section className="bg-white">
            <LayoutWrapper>
                <div className="py-18 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-semibold">แพ็กเกจสำหรับทุกขนาด</h2>
                        <p className="text-slate-500">เริ่มต้นเล็กก่อน แล้วค่อยอัปได้ทุกเมื่อ จ่ายรายเดือน/รายปี</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}

                            className="flex flex-col border border-slate-200 rounded-xl p-6 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Starter</h3>
                                <p className="text-sm text-gray-500">สำหรับเว็บส่วนตัว/โปรไฟล์</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-bold">฿39<span className="text-sm text-gray-500">/เดือน</span></h4>
                            </div>
                            <ul className="space-y-2">
                                <li className="text-slate-500">SSD NVMe 2 GB</li>
                                <li className="text-slate-500">แบนด์วิดท์ไม่จำกัด</li>
                                <li className="text-slate-500">Unlimited เว็บไซต์ • ฐานข้อมูลไม่จำกัด</li>
                                <li className="text-slate-500">SSL ฟรี • สำรองข้อมูลรายวัน</li>
                            </ul>
                            <button className="text-white bg-slate-900 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-800 transition-colors duration-300 ease-out">เริ่มต้น</button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col border border-indigo-500 rounded-xl p-6 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <div className="absolute -top-2.5 right-4 text-sm bg-indigo-500 text-white rounded-full px-4 py-0.5">แนะนำ</div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Pro</h3>
                                <p className="text-sm text-gray-500">เหมาะสำหรับร้านค้า/บล็อกจริงจัง</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-bold">฿99<span className="text-sm text-gray-500">/เดือน</span></h4>
                            </div>
                            <ul className="space-y-2">
                                <li className="text-slate-500">SSD NVMe 2 GB</li>
                                <li className="text-slate-500">แบนด์วิดท์ไม่จำกัด</li>
                                <li className="text-slate-500">Unlimited เว็บไซต์ • ฐานข้อมูลไม่จำกัด</li>
                                <li className="text-slate-500">SSL ฟรี • สำรองข้อมูลรายวัน</li>
                                <li className="text-slate-500">Priority Support</li>
                            </ul>
                            <button className="text-white bg-indigo-500 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ease-out">เลือกแพ็กเกจนี้</button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col border border-slate-200 rounded-xl p-6 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Business</h3>
                                <p className="text-sm text-gray-500">องค์กรและทราฟฟิกสูง</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-bold">฿179<span className="text-sm text-gray-500">/เดือน</span></h4>
                            </div>
                            <ul className="space-y-2">
                                <li className="text-slate-500">SSD NVMe 2 GB</li>
                                <li className="text-slate-500">แบนด์วิดท์ไม่จำกัด</li>
                                <li className="text-slate-500">Unlimited เว็บไซต์ • ฐานข้อมูลไม่จำกัด</li>
                                <li className="text-slate-500">SWAF + DDoS Protection</li>
                                <li className="text-slate-500">Support 24/7</li>
                            </ul>
                            <button className="text-white bg-slate-900 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-800 transition-colors duration-300 ease-out">พูดคุยกับเรา</button>
                        </motion.div>
                    </div>
                </div>
            </LayoutWrapper>
        </section >
    );
}

export default Pricing;