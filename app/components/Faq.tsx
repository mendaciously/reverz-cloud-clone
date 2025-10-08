"use client"

import { motion } from "motion/react";
import { useState } from "react";
import LayoutWrapper from "./LayoutWrapper";
import { ChevronDown, ChevronUp } from "lucide-react";

interface questionsProps {
    id: number;
    question: string;
    answer: string;
}

const questions: questionsProps[] = [
    {
        id: 1,
        question: "มี SSL ฟรีไหม?",
        answer: "มีครับ ออกใบรับรองอัตโนมัติให้ทุกโดเมนด้วย Let’s Encrypt"
    },
    {
        id: 2,
        question: "ย้ายโฮสต์เดิมมาได้ไหม?",
        answer: "ได้เลย ทีมเราช่วยย้ายไฟล์/ฐานข้อมูล/อีเมลให้จนเสร็จ"
    },
    {
        id: 3,
        question: "รองรับแผงควบคุมอะไรบ้าง?",
        answer: "DirectAdmin/cPanel (แล้วแต่แพ็กเกจ) พร้อมตัวติดตั้ง WordPress, PHPMyAdmin ฯลฯ"
    },
    {
        id: 4,
        question: "มีทดลองก่อนซื้อหรือไม่?",
        answer: "มีทดลองใช้งานในบางช่วงโปรโมชัน ติดตามหน้าเพจหรือสอบถามทีมงานได้"
    },
]

const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <section className="bg-slate-50">
            <LayoutWrapper>
                <div className="py-18 lg:py-24 lg:px-32">
                    <h2 className="text-center font-semibold text-3xl">คำถามพบบ่อย</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {questions.map((q) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                viewport={{ once: true, amount: 0.2 }}
                                key={q.id} className={`bg-white border border-slate-200 p-6 rounded-xl ${activeAccordion === q.id ? "border-4 border-indigo-500" : ""
                                    }`}
                            >
                                <button
                                    className="w-full text-left flex items-center justify-between cursor-pointer"
                                    onClick={() =>
                                        setActiveAccordion(activeAccordion === q.id ? null : q.id)
                                    }
                                >
                                    {q.question}
                                    {activeAccordion === q.id ? (
                                        <ChevronUp />
                                    ) : (
                                        <ChevronDown />
                                    )}
                                </button>

                                {activeAccordion === q.id && (
                                    <div className="mt-4 text-slate-500 text-sm">
                                        {q.answer}
                                    </div>
                                )}
                            </motion.div>

                        ))}
                    </div>
                </div>
            </LayoutWrapper>
        </section>
    );
}

export default Faq;