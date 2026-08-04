'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ChartPoint {
  id: number
  date: string
  price: string
  volume: string
  cx: number
  cy: number
  tooltipLeft: string
}

const chartPoints: ChartPoint[] = [
  {
    id: 1,
    date: '2026/5/15',
    price: '3.20 SGD',
    volume: '12,450,000',
    cx: 8,
    cy: 34,
    tooltipLeft: '0%'
  },
  {
    id: 2,
    date: '2026/6/2',
    price: '3.95 SGD',
    volume: '16,311,600',
    cx: 30,
    cy: 25,
    tooltipLeft: '8%'
  },
  {
    id: 3,
    date: '2026/6/20',
    price: '4.25 SGD',
    volume: '18,920,400',
    cx: 52,
    cy: 18,
    tooltipLeft: '25%'
  },
  {
    id: 4,
    date: '2026/7/12',
    price: '4.50 SGD',
    volume: '14,110,000',
    cx: 75,
    cy: 12,
    tooltipLeft: '42%'
  },
  {
    id: 5,
    date: '2026/8/3',
    price: '4.79 SGD',
    volume: '21,050,000',
    cx: 95,
    cy: 6,
    tooltipLeft: '52%'
  }
]

export default function Investors () {
  // Mặc định null - chỉ hiển thị Tooltip khi rê chuột vào đồ thị
  const [hoveredPoint, setHoveredPoint] = useState<ChartPoint | null>(null)

  return (
    <section className='w-full bg-[#fcfcfd] pb-16 lg:pt-0 lg:pb-20 text-[#482146] relative z-20'>
      {/* Curve transition từ OurStories - IN FLOW để đẩy content xuống tự nhiên */}
      <div className='relative w-full pointer-events-none drop-shadow-[0_30px_30px_rgba(0,0,0,0.1)] [clip-path:inset(0_0_-100px_0)]'>
        <Image
          src='/images/curve-mobile-menu.svg'
          alt='Section Curve Decor'
          width={400}
          height={15}
          className='w-full h-auto block'
          priority
        />
      </div>
      <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10 pt-16 lg:pt-50'>
        {/* Header section */}
        <div className='mb-10 lg:mb-14'>
          <h2
            className='text-[24px] lg:text-[52px] font-bold text-[#482146] leading-tight mb-4'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Investors
          </h2>
          <p className='text-brand-purple/80 text-base lg:text-lg max-w-2xl leading-relaxed mb-6 font-normal'>
            As a technology-driven, people-led organisation, we’re dedicated to
            delivering soaring results for our customers, communities and
            shareholders and long-term sustainable growth.
          </p>
          <Link
            href='/investors'
            className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-7 py-3 rounded-full text-sm inline-block transition-colors duration-200'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Learn more
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'>
          {/* Card 1: Market Capitalisation */}
          <div className='bg-white rounded-3xl border border-gray-300 p-6 lg:p-8 flex flex-col items-start'>
            <h3
              className='text-2xl font-bold text-[#482146] min-h-18 flex items-start mb-4'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Market Capitalisation
            </h3>
            <div className='w-full mb-6'>
              <div className='flex flex-wrap items-baseline gap-2 mb-2'>
                <span className='text-3xl md:text-6xl font-bold text-[#333333]'>
                  $7.05B
                </span>
                <span className='text-xl font-bold text-[#482146]'>SGD</span>
              </div>
              <p className='text-lg text-gray-600 font-medium'>
                as of 03 August 2026
              </p>
            </div>
          </div>

          {/* Card 2: Share Price */}
          <div className='bg-white rounded-3xl border border-gray-300 p-6 lg:p-8 flex flex-col items-start'>
            <h3
              className='text-2xl font-bold text-[#482146] min-h-18 flex items-start mb-4'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Share Price
            </h3>

            <div className='w-full mb-4'>
              {/* Giá $4.79 SGD */}
              <div className='flex flex-wrap items-baseline gap-2 mb-3'>
                <span className='text-3xl md:text-6xl font-bold text-[#333333]'>
                  $4.79
                </span>
                <span className='text-xl font-bold text-[#333333]'>SGD</span>
              </div>

              {/* Khối tam giác xanh + chỉ số tăng */}
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-0 h-0 border-l-16 border-l-transparent border-r-16 border-r-transparent border-b-26 border-b-[#82c974]' />
                <div className='flex flex-col text-lg text-gray-900 leading-snug'>
                  <span>+0.06</span>
                  <span>(+0.127%)</span>
                </div>
              </div>

              {/* Timestamp */}
              <p className='text-lg text-gray-600 font-medium mb-4'>
                03 August 2026 14:25 GMT +8
              </p>

              {/* Khung đồ thị tràn viền Tooltip */}
              <div className='w-full border border-gray-300 p-3 bg-white mb-4 overflow-visible'>
                <div className='relative w-full h-43.75 flex overflow-visible'>
                  {/* Cột Y-Axis bên trái */}
                  <div className='w-9 shrink-0 flex flex-col justify-between text-[11px] text-[#555555] font-medium pr-1 py-1'>
                    <span>5.00</span>
                    <span>4.00</span>
                    <span>3.00</span>
                  </div>

                  {/* Khung lưới đồ thị chính (Tắt Tooltip khi rời chuột) */}
                  <div
                    className='relative flex-1 h-full border border-gray-300 bg-white overflow-visible'
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    {/* Đường lưới dọc & ngang */}
                    <div className='absolute inset-0 grid grid-cols-3 divide-x divide-gray-200 pointer-events-none'>
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className='absolute inset-0 grid grid-rows-2 divide-y divide-gray-200 pointer-events-none'>
                      <div />
                      <div />
                    </div>

                    {/* Mốc tháng X-Axis */}
                    <div className='absolute bottom-1 right-2 left-0 flex justify-around text-[10px] text-[#555555] font-medium pointer-events-none z-10'>
                      <span className='ml-[20%]'>Jun</span>
                      <span className='ml-[15%]'>Jul</span>
                      <span>Aug</span>
                    </div>

                    {/* Đồ thị gấp khúc SVG */}
                    <svg
                      className='absolute inset-0 w-full h-full overflow-visible pointer-events-none'
                      viewBox='0 0 100 50'
                      preserveAspectRatio='none'
                    >
                      <path
                        d='M 0,44 L 4,42 L 8,45 L 12,45 L 16,42 L 20,44 L 25,43 L 30,34 L 35,26 L 38,24 L 42,28 L 46,26 L 50,20 L 53,16 L 57,16 L 60,13 L 64,15 L 68,10 L 72,13 L 76,13 L 80,10 L 84,7 L 88,10 L 92,11 L 96,8 L 100,5'
                        fill='none'
                        stroke='#2b5cb8'
                        strokeWidth='1'
                      />
                    </svg>

                    {/* Điểm chọn & Tooltip chỉ hiện khi có mouse hover */}
                    {hoveredPoint && (
                      <>
                        {/* Điểm chọn Tròn 100% Nhỏ & Mờ hơn */}
                        <div
                          className='absolute pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 flex items-center justify-center w-5 h-5 rounded-full bg-[#2b5cb8]/20'
                          style={{
                            left: `${hoveredPoint.cx}%`,
                            top: `${(hoveredPoint.cy / 50) * 100}%`
                          }}
                        >
                          <div className='w-2.5 h-2.5 rounded-full bg-[#2b5cb8] ring-2 ring-white' />
                        </div>

                        {/* Floating Tooltip Box */}
                        <div
                          className='absolute bg-white border-[1.5px] border-[#2b5cb8] rounded-[10px] p-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] z-30 text-[#111111] pointer-events-none transition-all duration-200 min-w-40'
                          style={{
                            left: hoveredPoint.tooltipLeft,
                            bottom: '-25px'
                          }}
                        >
                          <p className='text-[#333333] text-xs font-normal mb-0.5'>
                            {hoveredPoint.date}
                          </p>
                          <p className='text-sm font-bold text-black mb-0.5'>
                            SATS Ltd.{' '}
                            <span className='font-normal text-xs text-[#333333]'>
                              {hoveredPoint.price}
                            </span>
                          </p>
                          <p className='text-xs text-[#333333] font-normal'>
                            Volume {hoveredPoint.volume}
                          </p>
                        </div>
                      </>
                    )}

                    {/* Vùng tương tác di chuột */}
                    <div className='absolute inset-0 flex items-stretch z-20'>
                      {chartPoints.map(pt => (
                        <div
                          key={pt.id}
                          className='flex-1 cursor-pointer'
                          onMouseEnter={() => setHoveredPoint(pt)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút Read More trôi tự nhiên */}
            <Link
              href='/investors/share-price'
              className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-6 py-2.5 rounded-full text-sm inline-block transition-colors'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Read more
            </Link>
          </div>

          {/* Card 3: Reports */}
          <div className='bg-white rounded-3xl border border-gray-300 p-6 lg:p-8 flex flex-col items-start'>
            <h3
              className='text-2xl font-bold text-[#482146] min-h-18 flex items-start mb-4'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Reports
            </h3>
            <div className='w-full mb-4'>
              <div className='relative w-full aspect-3/4 overflow-hidden mb-4'>
                <Image
                  src='/images/sats-annual-report-cover.png'
                  alt='Annual Report FY2026'
                  fill
                  className='object-contain'
                  sizes='280px'
                />
              </div>
              <p className='text-lg text-gray-700'>Annual Report FY2026</p>
            </div>

            <Link
              href='/investors/reports'
              className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-6 py-2.5 rounded-full text-sm inline-block transition-colors'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Read more
            </Link>
          </div>

          {/* Card 4: Financial and IR Calendar */}
          <div className='bg-white rounded-3xl border border-gray-300 p-6 lg:p-8 flex flex-col items-start'>
            <h3
              className='text-2xl font-bold text-[#482146] min-h-18 flex items-start mb-4 leading-snug'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Financial and IR Calendar
            </h3>

            <div className='w-full mb-6'>
              <div className='space-y-4 text-xs text-gray-700'>
                {/* Mốc 1 */}
                <div>
                  <p className='font-bold text-xl mb-0.5'>
                    01 Oct 2026 - 31 Dec 2026
                  </p>
                  <p className='text-gray-600 text-lg mb-1'>
                    3rd Quarter (FY27) Events
                  </p>
                  <ul className='list-disc list-inside text-base text-gray-600 pl-1 space-y-0.5'>
                    <li>1H FY27 results: 12 Nov</li>
                  </ul>
                </div>

                <hr className='border-[#fabdc2]' />

                {/* Mốc 2 */}
                <div>
                  <p className='font-bold text-xl mb-0.5'>
                    01 Jul 2026 - 30 Sep 2026
                  </p>
                  <p className='text-gray-600 text-lg mb-1'>
                    2nd Quarter (FY27) Events
                  </p>
                  <ul className='list-disc list-inside text-base text-gray-600 space-y-1 pl-1'>
                    <li>JPM Real Assets Forum: 1 Jul</li>
                    <li>Maybank’s Invest ASEAN 2026: 8 Jul</li>
                    <li>1Q FY27 results: 19 Aug</li>
                  </ul>
                </div>
                <hr className='border-[#fabdc2]' />
              </div>
            </div>

            <Link
              href='/investors/financial-calendar'
              className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-6 py-2.5 rounded-full text-sm inline-block transition-colors'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
