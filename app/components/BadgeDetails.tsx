import LayoutWrapper from "./LayoutWrapper";

const BadgeDetails = () => {
    return (
        <section className="bg-white">
            <LayoutWrapper>
                <div className="py-18 lg:py-24 lg:px-28">
                    <div className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-br from-indigo-700 to-indigo-500 p-10 rounded-xl">
                        <div className="space-y-2">
                            <h2 className="text-white font-semibold text-3xl">เริ่มต้นกับ Startup วันนี้</h2>
                            <p className="text-slate-300">ติดตั้งไวภายใน 60 วินาที ย้ายโฮสต์ฟรี และมีทีมช่วยเหลือตลอดเวลา</p>
                        </div>

                        <div className="flex items-center gap-2.5 mt-6 md:mt-0">
                            <button className="bg-white px-6 py-3 rounded-lg text-indigo-700 hover:bg-slate-100 transition-all duration-300 ease-out cursor-pointer">ดูราคา</button>
                            <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-indigo-500 transition-all duration-300 ease-out cursor-pointer">พูดคุยกับทีม</button>
                        </div>
                    </div>
                </div>
            </LayoutWrapper>
        </section>
    );
}

export default BadgeDetails;