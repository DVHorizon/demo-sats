'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SubService {
  name: string
  href: string
  icon: string
}

interface ServiceTab {
  id: string
  label: string
  title: string
  titleHref: string
  image: string
  description: React.ReactNode
  subServices: SubService[]
}

const serviceTabs: ServiceTab[] = [
  {
    id: 'air-cargo',
    label: 'Air Cargo',
    title: 'Air Cargo',
    titleHref: '/services/air-cargo',
    image: '/images/air-cargo-3.jpeg',
    description:
      "At SATS, cargo handling isn't just about logistics—it's about enabling global trade with speed, security, and precision. As the world's largest air cargo handler, we manage a vast range of shipments, from perishables and pharmaceuticals to high-value goods and e-commerce deliveries. Our integrated cargo services are powered by decades of operational expertise, cutting-edge technology, and a dedicated global team. With strategic hubs across key aviation markets, we ensure that every shipment is tracked, handled, and delivered with the highest standards of efficiency and care.",
    subServices: [
      {
        name: 'Cargo Handling',
        href: '/services/air-cargo/cargo-handling',
        icon: '/images/cargo-handling.png'
      },
      {
        name: 'Express & E-Commerce',
        href: '/services/air-cargo/express-e-commerce',
        icon: '/images/express-e-commerce.png'
      },
      {
        name: 'Specialist Services',
        href: '/services/air-cargo/specialist-services',
        icon: '/images/specialist-services.png'
      }
    ]
  },
  {
    id: 'ground-handling',
    label: 'Ground Handling',
    title: 'Ground Handling',
    titleHref: '/services/ground-handling',
    image: '/images/ground-handling.jpeg',
    description: (
      <>
        We specialise in providing our customers with peace of mind. <br />
        <br /> As one of the world’s largest providers of air cargo handler and
        leading ground services, we take pride in our ability to handle the
        seamless flow of passengers, flights and cargo, at the world’s major
        airports. <br />
        <br /> Applying decades of experience and state-of-the-art technology
        against the most rigorous performance, safety and service standards.
        With our expanded global presence and reach, we offer end-to-end air
        cargo and ground handling solutions that enable people, aircraft and
        goods to travel securely around the world.
      </>
    ),
    subServices: [
      {
        name: 'Apron Services',
        href: '/services/ground-handling/apron-services',
        icon: '/images/apron-services.png'
      },
      {
        name: 'Passenger Services',
        href: '/services/ground-handling/passenger-services',
        icon: '/images/passenger-services.png'
      },
      {
        name: 'Private Jet Catering',
        href: '/services/food-solutions/private-jet-catering',
        icon: '/images/private-jet-catering.png'
      },
      {
        name: 'Other Services',
        href: '/services/food-solutions/other-services',
        icon: '/images/other-services.png'
      },
      {
        name: 'Security Services',
        href: '/services/ground-handling/security-services',
        icon: '/images/security-services.png'
      },
      {
        name: 'Travel Retail',
        href: '/services/ground-handling/travel-retail',
        icon: '/images/travel-retail.png'
      }
    ]
  },
  {
    id: 'food-solutions',
    label: 'Food Solutions',
    title: 'Food Solutions',
    titleHref: '/services/food-solutions',
    image: '/images/food-solutions-2.jpeg',
    description: (
      <>
        At SATS, we believe that people should have the choice to eat better,
        improving their health and well-being with tasty, authentic meals made
        from responsibly sourced ingredients. <br />
        <br /> As a leading food solutions provider in Asia, we combine
        technology with the passion, creativity, and talent of our people to
        develop quality food products and services for a wide range of customers
        across a multitude of industries. <br />
        <br /> Our list of services includes aviation, commercial and
        institutional catering, food production and distribution capabilities,
        as well as a growing network of kitchens for food service chains and
        institutions.
      </>
    ),
    subServices: [
      {
        name: 'Aviation Catering',
        href: '/services/food-solutions/aviation-catering',
        icon: '/images/aviation-catering.png'
      },
      {
        name: 'Institutional Catering',
        href: '/services/food-solutions/institutional-catering',
        icon: '/images/institutional-catering.png'
      },
      {
        name: 'Food Service Solutions & Distribution',
        href: '/services/food-solutions/distribution',
        icon: '/images/food-service-solutions-distribution.png'
      }
    ]
  }
]

export default function OurServices () {
  const [activeTabId, setActiveTabId] = useState<string>('air-cargo')
  const [prevTabId, setPrevTabId] = useState<string | null>(null)

  const handleTabClick = (newTabId: string) => {
    if (newTabId === activeTabId) return
    setPrevTabId(activeTabId)
    setActiveTabId(newTabId)

    setTimeout(() => {
      setPrevTabId(null)
    }, 1200)
  }

  const currentTab =
    serviceTabs.find(tab => tab.id === activeTabId) || serviceTabs[0]
  const prevTab = prevTabId
    ? serviceTabs.find(tab => tab.id === prevTabId)
    : null

  return (
    <section className='w-full bg-[#fcfcfd] py-16 lg:py-24 text-[#482146]'>
      {/* Keyframes 1.2s Crossfade Slide Transition */}
      <style jsx global>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-35px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOutLeft {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-35px);
          }
        }
        @keyframes slideInBottom {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideOutDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(25px);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-out-left {
          animation: slideOutLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-in-bottom {
          animation: slideInBottom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-out-down {
          animation: slideOutDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
        {/* Section Title */}
        <h2
          className='text-4xl lg:text-5xl font-bold text-[#482146] mb-10 lg:mb-14'
          style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
        >
          Our Services
        </h2>

        {/* 2-Column Grid Layout: Cột ảnh 4/12, Cột nội dung 8/12, Gap 12 (48px) */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch'>
          {/* Cột Trái (4/12): Khung ảnh 2 lớp đè lên nhau trượt đồng thời */}
          <div className='lg:col-span-4 flex relative min-h-105'>
            {/* Ảnh Cũ (Đồng thời mờ & trượt lùi ẩn đi) */}
            {prevTab && (
              <div className='absolute inset-0 z-0 aspect-4/5 rounded-4xl overflow-hidden shadow-md pointer-events-none animate-slide-out-left'>
                <Image
                  src={prevTab.image}
                  alt={prevTab.title}
                  fill
                  className='object-cover'
                  priority
                  sizes='(max-width: 1024px) 100vw, 33vw'
                />
              </div>
            )}

            {/* Ảnh Mới (Đồng thời trượt vào & hiện rõ) */}
            <div
              key={`img-${activeTabId}`}
              className='relative z-10 w-full aspect-4/5 rounded-4xl overflow-hidden shadow-md animate-slide-in-left'
            >
              <Image
                src={currentTab.image}
                alt={currentTab.title}
                fill
                className='object-cover'
                priority
                sizes='(max-width: 1024px) 100vw, 33vw'
              />
            </div>
          </div>

          {/* Cột Phải (8/12): Thanh Tab & Khối chữ + Subservices Gộp chung 1 khối */}
          <div className='lg:col-span-8 flex flex-col justify-between pt-2'>
            <div>
              {/* Thanh chọn Tab: Dọc trên mobile, Ngang & flex-wrap trên desktop */}
              <div className='flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center border-b border-black gap-4 lg:gap-10 pb-7'>
                {serviceTabs.map(tab => {
                  const isActive = tab.id === activeTabId
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`text-md lg:text-xl font-bold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-[#e31837]'
                          : 'text-[#414042] hover:text-[#e31837]'
                      }`}
                      style={{
                        fontFamily: "'Century Gothic', 'Arial', sans-serif"
                      }}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Khối nội dung đè lớp 2 nhịp (Gộp cả Tiêu đề, Mô tả, và Sub-services vào cùng 1 container) */}
              <div className='relative'>
                {/* Khối Cũ: Tiêu đề + Mô tả + Sub-services Cũ cùng trượt lùi ẩn */}
                {prevTab && (
                  <div className='absolute inset-0 z-0 pointer-events-none animate-slide-out-down'>
                    <h3
                      className='text-[36px] lg:text-[40px] font-bold text-[#482146] mt-8 mb-2 opacity-70'
                      style={{
                        fontFamily: "'Century Gothic', 'Arial', sans-serif"
                      }}
                    >
                      {prevTab.title}
                    </h3>
                    <p className='text-gray-800 leading-relaxed mt-4 text-[14px] lg:text-[18px] max-w-5xl'>
                      {prevTab.description}
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-10 items-start mt-8'>
                      {prevTab.subServices.map((sub, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-3 min-w-0'
                        >
                          <Image
                            src={sub.icon}
                            alt={sub.name}
                            width={80}
                            height={80}
                            className='object-contain shrink-0'
                          />
                          <span className='flex-1 wrap-break-word underline decoration-[#49b2d3] font-normal text-gray-800 leading-snug text-[18px]'>
                            {sub.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Khối Mới: Tiêu đề + Mô tả + Sub-services Mới cùng trượt hiện */}
                <div
                  key={`content-${activeTabId}`}
                  className='relative z-10 animate-slide-in-bottom'
                >
                  <h3
                    className='text-[36px] lg:text-[40px] font-bold text-[#482146] mt-24 lg:mt-8'
                    style={{
                      fontFamily: "'Century Gothic', 'Arial', sans-serif"
                    }}
                  >
                    <Link
                      href={currentTab.titleHref}
                      className='hover:text-[#30a9ce] transition-colors'
                    >
                      {currentTab.title}
                    </Link>
                  </h3>
                  <p className='text-gray-800 leading-relaxed mt-4 text-[14px] lg:text-[18px] max-w-5xl'>
                    {currentTab.description}
                  </p>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-10 items-start mt-8'>
                    {currentTab.subServices.map((sub, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-3 min-w-0'
                      >
                        <Image
                          src={sub.icon}
                          alt={sub.name}
                          width={80}
                          height={80}
                          className='object-contain shrink-0'
                        />
                        <Link
                          href={sub.href}
                          className='flex-1 wrap-break-word underline decoration-[#49b2d3] font-normal text-gray-800 hover:text-[#49b2d3] duration-300 transition-colors leading-snug text-[18px]'
                        >
                          {sub.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
