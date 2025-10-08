"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import LayoutWrapper from "./LayoutWrapper";

const Features = () => {
    return (
        <section className="bg-gradient-to-b from-white to-indigo-100">
            <LayoutWrapper>
                <div className="py-18 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500">ฟีเจอร์หลักของ Startup Cloud</h2>
                        <p className="text-slate-500">ออกแบบมาสำหรับความเร็ว การปกป้องข้อมูล และความง่ายในการจัดการ</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2  hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white border border-slate-200 p-6 rounded-xl space-y-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out"
                        >
                            <ShieldCheck size={40} className="bg-indigo-50 p-2 text-indigo-500 rounded-md" />
                            <div className="space-y-2">
                                <h3 className="text-[18px] font-medium">ความปลอดภัยแน่นหนา</h3>
                                <p className="text-sm text-slate-500">ป้องกัน DDoS, SSL อัตโนมัติ, สำรองข้อมูลรายวัน และการเข้ารหัสที่ได้มาตรฐาน</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </LayoutWrapper>
        </section>
    );
}

export default Features;