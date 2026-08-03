import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-[#3a3a3a] to-[#585858] text-white py-12 text-xs">
            {/* Khối hình SVG nền chìm phía sau */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-end items-end">
                <svg
                    viewBox="0 0 877 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pt-5 w-full h-full max-h-[350px] object-contain"
                    preserveAspectRatio="xMaxYMax meet"
                >
                    <path
                        opacity="0.25"
                        d="M412.864 399.144C412.988 399.422 413.122 399.701 413.245 399.99H416.649C416.339 399.299 416.03 398.618 415.721 397.917C414.834 398.443 413.885 398.855 412.874 399.144H412.864ZM247.611 362.932L246.972 365.964C293.764 375.886 344.96 383.322 397.796 387.943C397.796 387.871 397.786 387.788 397.786 387.716C397.786 386.726 397.92 385.777 398.147 384.859C345.414 380.239 294.321 372.833 247.622 362.932H247.611ZM561.532 389.934C568.36 387.077 575.198 384.148 582.025 381.146C620.04 364.438 656.787 345.986 691.244 326.307L689.708 323.615C655.343 343.243 618.7 361.643 580.777 378.3C571.485 382.384 562.213 386.313 552.982 390.109C525.569 390.645 497.723 390.408 469.794 389.346C453.623 388.737 437.492 387.83 421.476 386.695C421.507 387.025 421.527 387.355 421.527 387.696C421.527 388.407 421.455 389.109 421.331 389.789C437.358 390.934 453.499 391.831 469.681 392.44C488.204 393.141 506.696 393.492 525.043 393.492C531.726 393.492 538.389 393.44 545.031 393.348C539.389 395.617 533.779 397.813 528.168 399.969H536.728C542.349 397.762 547.98 395.513 553.622 393.203C604.096 392.192 653.064 388.531 698.196 382.281L697.773 379.218C655.137 385.117 609.077 388.706 561.542 389.923L561.532 389.934ZM683.664 25.5549L684.231 28.5975C769.802 12.6522 837.221 14.9213 876.99 33.7853V30.4849C836.293 11.8684 768.802 9.69214 683.664 25.5549ZM803.414 136.398C773.216 92.791 732.333 57.301 683.489 33.1149C607.52 -4.49975 521.454 -10.2755 441.143 16.8397C397.61 31.5369 358.605 54.97 326.004 85.4269C233.131 92.2547 153.006 108.324 94.2917 131.891C33.8858 156.149 1.29527 186.503 0.0370329 219.662C-1.55124 261.67 48.0152 302.823 135.958 334.889C122.437 358.951 117.105 380.992 120.56 399.99H123.685C120.127 381.652 125.242 360.199 138.98 335.992C162.041 344.264 187.68 351.917 215.681 358.806L216.424 355.805C189.041 349.07 163.629 341.479 140.589 333.228C140.743 332.96 140.898 332.692 141.063 332.424C158.916 302.441 189.753 269.107 230.233 236.04L228.274 233.648C185.937 268.23 155.306 301.74 137.546 332.145C106.977 321.006 80.7088 308.66 59.7932 295.52C21.7468 271.592 2.15129 245.405 3.12075 219.775C5.54441 155.726 133.689 103.249 322.415 88.7995C296.456 113.831 274.746 143.422 258.265 176.694C223.612 246.684 216.001 325.245 236.225 399.979H242.114C232.657 350.153 239.577 298.852 262.473 252.604C284.688 207.729 319.816 171.94 363.318 149.136C357.965 214.866 371.528 293.86 401.581 371.792C402.303 373.669 403.035 375.525 403.778 377.392C404.665 376.887 405.634 376.495 406.645 376.227C405.913 374.38 405.18 372.534 404.469 370.678C373.281 289.807 361.08 210.338 366.567 147.455C376.519 142.432 386.884 138.079 397.641 134.449C422.28 126.136 447.63 122 472.898 122C508.511 122 543.927 130.21 576.775 146.475C632.922 174.281 674.887 222.282 694.926 281.648C708.004 320.367 710.716 360.89 703.322 399.979H706.457C711.201 374.545 711.727 348.513 707.952 322.759C715.13 349.008 720.328 374.937 723.453 399.979H726.568C721.009 355.155 708.85 307.526 690.636 260.299C666.616 198.013 634.325 142.308 597.763 99.4125C597.114 100.217 596.32 100.898 595.433 101.434C626.507 137.904 654.487 183.718 676.888 235.009C653.724 195.95 619.783 164.338 578.127 143.711C521.238 115.543 456.778 111.212 396.641 131.52C392.732 132.84 388.885 134.253 385.079 135.759C408.78 123.341 433.377 111.511 458.635 100.403C491.194 86.0973 524.187 73.3287 556.757 62.3651C559.923 65.0673 563.09 67.883 566.266 70.8328C572.134 76.2785 577.92 82.0852 583.624 88.191C584.263 87.3762 585.026 86.6646 585.903 86.1076C580.148 79.9399 574.3 74.0816 568.37 68.574C565.627 66.0265 562.894 63.5924 560.161 61.2306C593.318 50.1947 626.012 41.036 657.323 34.0948L656.653 31.0728C624.681 38.1584 591.276 47.544 557.407 58.8893C520.196 27.5042 483.707 12.972 451.9 16.6643C481.809 7.61905 512.43 3.10158 542.937 3.10158C590.647 3.10158 638.089 14.1065 682.096 35.8997C729.188 59.2194 768.822 93.1417 798.473 134.758C742.172 115.956 673.701 101.248 599.651 92.2547C599.733 92.7394 599.785 93.2242 599.785 93.7296C599.785 94.2865 599.723 94.8332 599.63 95.3695C675.083 104.559 744.689 119.669 801.433 139.007C817.543 162.43 830.538 188.205 839.985 215.825C807.333 246.561 765.759 277.616 717.276 307.33L718.895 309.97C767.038 280.473 808.426 249.624 841.068 219.064C854.187 258.803 859.199 299.914 856.229 340.468C822.751 353.949 780.899 365.335 731.952 373.896L732.488 376.949C780.91 368.481 822.483 357.208 855.971 343.82C854.383 362.746 851.041 381.538 845.987 400H849.195C854.31 381.115 857.652 361.88 859.189 342.521C865.418 339.963 871.348 337.323 876.99 334.62V331.32C871.441 334.002 865.604 336.621 859.457 339.158C862.252 298.233 857.002 256.761 843.584 216.712C856.095 204.851 867.264 193.032 877 181.367V176.519C876.876 176.674 876.753 176.828 876.629 176.983C866.769 189.03 855.342 201.241 842.481 213.505C833.446 187.452 821.287 163.049 806.353 140.699C821.328 145.938 835.396 151.477 848.37 157.273C858.673 161.884 868.213 166.628 877 171.476V167.948C868.543 163.338 859.436 158.841 849.638 154.458C835.447 148.115 819.987 142.081 803.434 136.408L803.414 136.398ZM363.813 143.659C321.951 166.659 283.296 191.412 249.406 217.022L251.273 219.487C275.004 201.551 301.097 184.028 328.985 167.247C300.004 189.184 276.293 217.713 259.699 251.233C237.38 296.315 230.037 346.151 238.061 394.833C219.487 322.13 227.407 246.014 261.05 178.066C294.29 110.923 349.116 58.9409 417.051 29.4432C387.885 48.8952 369.248 88.5933 363.813 143.659ZM461.781 19.1706C490.008 19.1706 521.65 33.1149 554.014 60.0445C521.929 70.905 489.462 83.4879 457.408 97.5766C426.158 111.315 395.888 126.167 367.113 141.854C373.394 82.4978 395.929 38.8288 433.594 24.2966C442.494 20.8621 451.931 19.1603 461.781 19.1603V19.1706Z"
                        fill="black"
                    />
                </svg>
            </div>

            {/* Nội dung Footer */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {/* Cột 1: Thông tin địa chỉ & Mạng xã hội */}
                <div className="text-white">
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <p>SATS Ltd</p>
                    <p>20 Airport Boulevard</p>
                    <p>SATS Inflight Catering Centre 1</p>
                    <p>Singapore 819659</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6">
                        {/* Icon Email */}
                        <li className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="24" height="24" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V30H40V0H0ZM35.8633 3.33333L20 16.1883L4.13667 3.33333H35.8633ZM3.33333 26.6667V6.97167L20 20.4783L36.6667 6.97167V26.6667H3.33333Z" fill="white" />
                            </svg>
                        </li>

                        {/* Icon LinkedIn */}
                        <li className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z" fill="white" />
                            </svg>
                        </li>

                        {/* Icon Facebook */}
                        <li className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="12" height="20" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.4 8.9L8.9 6H6V4.2c0-0.8 0.4-1.6 1.7-1.6H9V0.2C9 0.2 7.8 0 6.6 0c-2.4 0-4 1.4-4 3.9v2.2H0V9h2.7v6.9C3.2 16 3.8 16 4.3 16s1.1 0 1.6-0.1v-7H8.4" fill="white" />
                            </svg>
                        </li>
                        {/* Icon Tiktok */}
                        <li className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ffffff"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
                        </li>
                        {/* Icon Instagram */}
                        <li className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20.9 21.5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19.3,15.4c0,2.5-2,4.5-4.5,4.5H6.1c-2.5,0-4.5-2-4.5-4.5V6.1c0-2.5,2-4.5,4.5-4.5h8.7c2.5,0,4.5,2,4.5,4.5V15.4z M14.8,0H6.1C2.7,0,0,2.7,0,6.1v9.3c0,3.4,2.7,6.1,6.1,6.1h8.7c3.4,0,6.1-2.7,6.1-6.1V6.1C20.9,2.7,18.2,0,14.8,0" fill="white" />
                                <path d="M10.5,14.7c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S12.7,14.7,10.5,14.7 M10.5,4.9c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C16.2,7.5,13.7,4.9,10.5,4.9" fill="white" />
                                <path d="M16.3,3.5c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4S17.1,3.4,16.3,3.5L16.3,3.5" fill="white" />
                            </svg>
                        </li>
                    </ul>
                </div>

                {/* Cột 2: Các liên kết tìm hiểu thêm */}
                <div>
                    <h3 className="font-bold text-white mb-4 tracking-wider">Learn More About Us</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-white">
                        {[
                            { name: "About SATS", href: "/" },
                            { name: "Investors", href: "/" },
                            { name: "Network", href: "/" },
                            { name: "News & Resources", href: "/" },
                            { name: "Services", href: "/" },
                            { name: "Careers", href: "/" },
                            { name: "Sustainability", href: "/" },
                            { name: "Tenders", href: "/" },
                        ].map((link) => (
                            <li key={link.name} className="group relative block w-full pb-1">
                                <Link href={link.href} className="block w-full text-white transition-colors">
                                    <span>{link.name}</span>
                                </Link>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-red transition-all duration-200 ease-in-out group-hover:w-full pointer-events-none" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cột 3: Các trang web thương hiệu trong hệ sinh thái SATS */}
                <div>
                    <h3 className="font-bold text-white mb-4 tracking-wider">Explore Our Portfolio Brand Sites</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-white">
                        {[
                            { name: "SATS Cargo", href: "https://www.satscargo.com/portal/io/" },
                            { name: "Country Foods", href: "https://www.countryfoods.com/" },
                            { name: "SATS Baggage", href: "https://www.satsbaggage.com/" },
                            { name: "MBCCS", href: "https://mbccs.com.sg/" },
                            { name: "SATS Seletar", href: "https://sats-seletar.com/" },
                            { name: "Monty's Bakehouse", href: "https://montysbakehouse.co.uk/" },
                        ].map((link) => (
                            <li key={link.name} className="group relative block w-full pb-1">
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-white transition-colors"
                                >
                                    <span>{link.name}</span>
                                </a>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-red transition-all duration-200 ease-in-out group-hover:w-full pointer-events-none" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cột 4: Điều khoản, Bản quyền & Đăng ký doanh nghiệp */}
                <div>
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white mb-6">
                        {[
                            { name: "Terms & Conditions", href: "/" },
                            { name: "Privacy Policy", href: "/" },
                            { name: "Sitemap", href: "/" },
                        ].map((link) => (
                            <li key={link.name} className="group relative inline-block pb-1">
                                <Link href={link.href} className="inline-block text-white transition-colors">
                                    <span>{link.name}</span>
                                </Link>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-red transition-all duration-200 ease-in-out group-hover:w-full pointer-events-none" />
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 text-white text-xs leading-relaxed">
                        <p>© 2026 SATS Ltd. All Rights Reserved.</p>
                        <p className="mt-1">Company Registration No. 197201770G</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
