import Image from "next/image";
import Link from "next/link";

interface StoryItem {
    id: number;
    date: string;
    title: string;
    image: string;
    link: string;
}

const storiesData: StoryItem[] = [
    {
        id: 1,
        date: "Jun 24, 2026",
        title: "SATS and Temasek Life Sciences Laboratory Sign MOU to Explore Collaboration in Support of Singapore’s Food Security",
        image: "/images/TLL Team with SATS team.jpeg",
        link: "/media/latest-news/sats-and-temasek-life-sciences",
    },
    {
        id: 2,
        date: "Jun 22, 2026",
        title: "WFS awarded 5-year contract by Geodis in Brussels for Freight Forwarder Handling Services",
        image: "/images/wfs.annual report.paris.2025-1799.full resolution.jpg",
        link: "/media/latest-news/wfs-awarded-5-year-contract-geodis",
    },
    {
        id: 3,
        date: "May 25, 2026",
        title: "SATS POSTS FULL YEAR NET PROFIT OF S$285.2 MILLION",
        image: "/images/SATS Logo assorted (5)-High Res format (Jpeg, 2560px)1.jpg",
        link: "/media/latest-news/sats-posts-full-year-net-profit",
    },
    {
        id: 4,
        date: "May 06, 2026",
        title: "SATS Acquires Controlling Stake in Nanjing Weizhou Airline Food to Strengthen China Food Solutions Platform",
        image: "/images/NWA signing.jpg",
        link: "/media/latest-news/sats-acquires-controlling-stake-nanjing",
    },
    {
        id: 5,
        date: "Apr 30, 2026",
        title: "WFS wins Qatar Airways Cargo Handling contract in Liège",
        image: "/images/30.jpg",
        link: "/media/latest-news/wfs-wins-qatar-airways-contract",
    },
    {
        id: 6,
        date: "Apr 29, 2026",
        title: "Kuehne+Nagel signs up for WFS’ new E-commerce & Freight Forwarder Handling services in Frankfurt",
        image: "/images/PR MXP.png",
        link: "/media/latest-news/kuehne-nagel-signs-up-wfs",
    },
];

export default function OurStories() {
    return (
        <section className="relative w-full bg-[#fff] pb-16 lg:pb-33 text-[#482146]">
            <div className="absolute top-full left-0 w-full pointer-events-none z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.1)] [clip-path:inset(0_0_-100px_0)]">
                <Image
                    src="/images/curve-mobile-menu.svg"
                    alt="Mobile Menu Bottom Curve"
                    width={400}
                    height={15}
                    className="w-full h-auto block"
                    priority
                />
            </div>
            <div className="w-full max-w-[1780px] mx-auto px-4 lg:px-10">
                {/* Đường kẻ đỏ phân cách giữa 2 section */}
                <div className="w-full border-t-2 border-[#e31837] opacity-60 mb-16 lg:mb-24" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Cột trái: Heading & Nút View All News */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <h2
                            className="text-[36px] lg:text-[80px] font-bold text-[#482146] leading-[1.1] mb-6"
                            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                        >
                            Our<br />Stories
                        </h2>
                        <p className="text-[#50284f]/80 mb-8 leading-relaxed text-[14px] lg:text-[18px] font-normal">
                            Discover the latest updates, achievements, and insights from across SATS and our global network.
                        </p>
                        <Link
                            href="/media/latest-news"
                            className="bg-[#e31837] hover:bg-[#351833] text-white font-bold px-7 py-3 rounded-full text-md transition-colors duration-500 shadow-sm"
                            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                        >
                            View All News
                        </Link>
                    </div>

                    {/* Cột phải: Lưới các bài viết */}
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {storiesData.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className="group flex flex-wrap gap-4 items-start"
                                >
                                    {/* Thumbnail bo góc 20px, co giãn linh hoạt trên mobile */}
                                    <div className="relative w-full sm:w-[190px] aspect-[16/10] shrink-0 rounded-[20px] overflow-hidden bg-gray-100 shadow-sm">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, 180px"
                                        />
                                    </div>

                                    {/* Nội dung */}
                                    <div className="flex flex-col flex-1 pt-1 text-[20px] md:text-[16px] lg:text-[20px]">
                                        <span
                                            className="text-[#482146] font-bold mb-1"
                                            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                                        >
                                            {item.date}
                                        </span>
                                        <h3
                                            className="text-[#482146] font-bold leading-snug"
                                            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
