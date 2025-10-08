import Link from "next/link";
import LayoutWrapper from "./LayoutWrapper";

const Footer = () => {
    return (
        <section className="bg-white border-t border-slate-100">
            <LayoutWrapper>
                <div className="py-18 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Startup</h2>
                            <p className="text-slate-500">โฮสติ้งสำหรับทุกคน — เร็ว ปลอดภัย พร้อมสเกล</p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-md font-normal">ลิงก์</h2>
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 ease-out">ฟีเจอร์</Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 ease-out">แพ็กเกจ</Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 ease-out">คำถามพบบ่อย</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-md font-normal">ติดต่อ</h2>
                            <ul className="flex flex-col space-y-2">
                                <li className="text-gray-500">
                                    อีเมล: mujidev@outlook.co.th
                                </li>
                                <li className="text-gray-500">
                                    Discord:
                                    <Link href="/" className="text-gray-500 hover:text-indigo-500 transition-colors duration-300 ease-out"> Startup-Cloud</Link>
                                </li>
                                <li className="text-gray-500">
                                    ที่อยู่: Bangkok, Thailand
                                </li>
                            </ul>
                        </div>

                        <small className="text-slate-500 mt-4">© 2025 Startup Cloud. สงวนลิขสิทธิ์.</small>
                    </div>
                </div>
            </LayoutWrapper>
        </section>
    );
}

export default Footer;