import Image from "next/image";
import Link from "next/link";

export default function GlobalNetwork() {
    return (
        <section className="relative w-full min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden">
            {/* Layer đường cong trắng mép trên */}
            <div className="absolute top-0 left-0 w-full pointer-events-none z-10">
                <Image
                    src="/images/curve-top-white.svg"
                    alt="Top White Curve Decor"
                    width={1920}
                    height={150}
                    className="w-full h-auto block"
                    priority
                />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/global-network-main-RESIZED.jpg"
                    alt="SATS Global Network"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Lớp phủ gradient màu tím/xanh thẫm thương hiệu SATS */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3c4975]/90 to-transparent" />
            </div>

            {/* Layer họa tiết vòng tròn đồng tâm màu trắng SVG */}
            <div className="absolute top-0 left-0 right-0 bottom-12 w-full z-5 pointer-events-none opacity-40 overflow-hidden">
                <Image
                    src="/images/circles-white.svg"
                    alt="White Circles Pattern"
                    fill
                    className="object-cover object-right"
                />
            </div>


            {/* Nội dung Banner */}
            <div className="relative z-20 w-full max-w-[1780px] mx-auto px-4 lg:px-10 pt-96 pb-60 text-white">
                <div className="max-w-2xl">
                    <h2
                        className="text-2xl lg:text-[52px] font-bold leading-tight mb-6"
                        style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                    >
                        Global Network
                    </h2>
                    <p className="text-white text-base lg:text-lg leading-relaxed mb-8 font-normal">
                        Our global network gives us the opportunity to build mutually beneficial relationships with our customers operating in a global environment. We look for synergies between us and our customers so we can efficiently optimise the services we deliver whilst maintaining the highest standards of safety, security and service. We offer a comprehensive suite of best-in-class, safe and secure services across over 215 locations in more than 27 countries and territories.
                    </p>
                    <Link
                        href="/global-network"
                        className="bg-[#e31837] hover:bg-[#351833] text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300"
                        style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
}
