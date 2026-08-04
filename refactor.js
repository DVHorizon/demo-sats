const fs = require('fs');
const file = 'd:/2_Projects/Miko-SATS/sast-demo1/component/layout/Header.tsx';
const lines = fs.readFileSync(file, 'utf8').split('\n');

const startIdx = lines.findIndex(l => l.includes('Render Content for "About Us"'));
const endIdx = lines.findIndex(l => l.includes('Phần Curve SVG đính kèm dưới cùng')) - 2;

if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    const replacement = `                            {/* Render Content using Mapping */}
                            {megaMenusData.map(menu => (
                                <div key={menu.id} className={\`w-full flex transition-opacity duration-300 \${lastActiveMenu === menu.id ? 'opacity-100' : 'opacity-0 hidden'}\`}>
                                    {/* Column 1: Overview */}
                                    <div className={\`\${menu.col1Width} flex gap-6 pr-6\`}>
                                        <div className="w-[180px] h-[240px] flex-shrink-0 bg-gray-100 rounded-[20px] overflow-hidden">
                                            <Image src={menu.image} alt={menu.title} width={180} height={240} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-[28px] font-bold text-[#442c55] mb-3">{menu.title}</h2>
                                            <p className="text-[13px] text-gray-600 mb-6 leading-relaxed max-w-[240px]">
                                                {menu.desc}
                                            </p>
                                            <div>
                                                <Link href={menu.href} onClick={() => { setActiveMegaMenu(null); setActiveSubItem(null); }} className="inline-block bg-brand-red text-white font-bold text-[13px] px-6 py-2 rounded-full hover:bg-[#50284f] transition-colors">
                                                    Explore More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Columns 2 and 3 */}
                                    {menu.subItems && (
                                        <>
                                            <div className="w-[25%] border-l border-brand-red self-start flex flex-col justify-center py-2 pl-6">
                                                {menu.subItems.map((link, idx) => {
                                                    const isSelected = activeSubItem === link.title;
                                                    return (
                                                        <button
                                                            key={idx}
                                                            type="button"
                                                            onClick={() => {
                                                                if (link.external) {
                                                                    setActiveMegaMenu(null); 
                                                                    setActiveSubItem(null);
                                                                } else if (link.hasArrow) {
                                                                    setActiveSubItem(isSelected ? null : link.title);
                                                                }
                                                            }}
                                                            className="group/megalink relative block w-full py-2.5 text-left transition-colors"
                                                        >
                                                            <div className="flex items-center justify-between pr-4 w-full">
                                                                <span className={\`text-[15px] transition-colors flex items-center gap-2 \${isSelected ? 'text-brand-red' : 'text-[#414042] group-hover/megalink:text-brand-red'}\`}>
                                                                    {link.title}
                                                                </span>
                                                                <div className="shrink-0 flex items-center">
                                                                    {link.external && (
                                                                        <img src="/images/external-primary.svg" alt="External link" className="w-[14px] h-[14px]" />
                                                                    )}
                                                                    {link.hasArrow && (
                                                                        <svg className="w-[15px] h-[15px] text-brand-red ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <span className={\`absolute bottom-0 left-0 border-b border-brand-red transition-all duration-200 ease-in-out pointer-events-none \${isSelected ? 'w-full' : 'w-0 group-hover/megalink:w-full'}\`} />
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <div
                                                className={\`flex w-[30%] justify-between py-2 pl-10 pr-2 border-l relative transition-all duration-300 ease-in-out \${activeSubItem
                                                    ? 'opacity-100 border-brand-red pointer-events-auto'
                                                    : 'opacity-0 border-transparent pointer-events-none'
                                                    }\`}
                                            >
                                                <div className="flex flex-col gap-3.5 w-full self-start max-h-[360px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-red [&::-webkit-scrollbar-thumb]:rounded-full">
                                                    {menu.subItems.find(item => item.title === activeSubItem)?.children?.map((child, idx) => {
                                                        const label = typeof child === 'string' ? child : child.label;
                                                        const isExternal = typeof child === 'object' && child.external;
                                                        return (
                                                            <Link
                                                                key={idx}
                                                                href="#"
                                                                onClick={() => { setActiveMegaMenu(null); setActiveSubItem(null); }}
                                                                className="group/col3link relative block w-full py-2 text-left transition-colors"
                                                            >
                                                                <span className="text-[15px] font-medium text-[#414042] group-hover/col3link:text-brand-red transition-colors flex items-center gap-2 justify-between w-full">
                                                                    {label}
                                                                    {isExternal && (
                                                                        <img src="/images/external-primary.svg" alt="External link" className="w-[14px] h-[14px] mr-3 shrink-0" />
                                                                    )}
                                                                </span>
                                                                <span className="absolute bottom-0 left-0 w-0 border-b border-brand-red transition-all duration-200 ease-in-out group-hover/col3link:w-full pointer-events-none" />
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}`;

    lines.splice(startIdx, endIdx - startIdx + 1, replacement);
    
    // Add megaMenusData array at the top
    const hookIdx = lines.findIndex(l => l.includes('useEffect(() => {'));
    if (hookIdx !== -1) {
        const dataArr = `    const megaMenusData = [
        {
            id: 'About Us',
            col1Width: 'w-[45%]',
            image: '/images/SATS Logo assorted (5)-High Res format (Jpeg, 2560px)1.jpg',
            title: 'About us',
            desc: "SATS is the world's largest air cargo handler and Asia's leading airline caterer headquartered in Singapore. We are present in the Asia-Pacific, the Americas, Europe, the Middle East and Africa.",
            href: '/about',
            subItems: aboutUsSubItems
        },
        {
            id: 'Global Network',
            col1Width: 'w-[80%]',
            image: '/images/test-about-us.jpeg',
            title: 'Global Network',
            desc: "From our hub in Singapore, and in our newly combined markets, SATS and WFS will be at the heart of global trade flows, operating in the world's busiest airports and supporting the biggest companies.",
            href: '/network',
            subItems: undefined
        },
        {
            id: 'Services',
            col1Width: 'w-[45%]',
            image: '/images/ground-handling.jpeg',
            title: 'Services',
            desc: "Our unrivalled global network and extensive geographical coverage, commitment to safety and customer service and expertise of our workforce have enabled us to build partnerships with longstanding and new customers to deliver network-wide solutions.",
            href: '/services',
            subItems: servicesSubItems
        },
        {
            id: 'Sustainability',
            col1Width: 'w-[55%]',
            image: '/images/sustainability.jpeg',
            title: 'Sustainability',
            desc: "SATS recognises that sustainability extends beyond compliance and operational requirements - it serves as a strategic driver of long-term value.",
            href: '/sustainability',
            subItems: sustainabilitySubItems
        },
        {
            id: 'Investors',
            col1Width: 'w-[45%]',
            image: '/images/logo-lanyand.jpeg',
            title: 'Investors',
            desc: "SATS is committed to transparent and timely communication with our shareholders. Explore our latest financial updates, stock information, and key milestones as we continue to grow as a global leader in the aviation and logistics industries.",
            href: '/investors',
            subItems: investorsSubItems
        },
        {
            id: 'Careers',
            col1Width: 'w-[45%]',
            image: '/images/careers.jpeg',
            title: 'Careers',
            desc: "A career with us opens up a world of opportunity to develop your existing skills, to learn new skills, and to experience working with different customers and cultures with the sole aim of always delivering a world class service.",
            href: '/careers',
            subItems: careersSubItems
        }
    ];\n`;
        lines.splice(hookIdx, 0, dataArr);
    }
    
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Successfully refactored Header.tsx');
} else {
    console.log('Could not find indices', startIdx, endIdx);
}
