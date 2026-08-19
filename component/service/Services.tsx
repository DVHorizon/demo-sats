/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const servicesData = [
  {
    id: 'air-cargo',
    title: 'Air Cargo',
    bgImage: '/images/air-cargo-2.jpg',
    desc: 'SATS and WFS deliver trusted cargo handling solutions that keep global trade moving securely and efficiently.\n\nFrom perishables to high-value shipments, our teams manage every step with precision, care, and speed — connecting businesses to the world through seamless logistics and operational excellence.',
    link: '#'
  },
  {
    id: 'ground-handling',
    title: 'Ground Handling',
    bgImage: '/images/services-main-cargo_handling.jpg',
    desc: 'We provide comprehensive ground handling services, ensuring smooth and safe operations for airlines and passengers alike.',
    link: '#'
  },
  {
    id: 'food-solutions',
    title: 'Food Solutions',
    bgImage: '/images/services-main-food_solutions.jpg',
    desc: 'Our culinary experts and food technologists create innovative and authentic food solutions for airlines, food service chains, and institutions.',
    link: '#'
  }
]

export default function Services () {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className='relative w-full flex items-center justify-center bg-white pt-45 min-[800px]:pt-80 min-h-96 lg:min-h-225'>
        {/* Background Image Container */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/excellence.jpg'
            alt='About Us Background'
            fill
            priority
            className='object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 w-[45%] bg-linear-to-r from-[#34000a] to-transparent opacity-[0.6]'></div>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 w-full max-w-[1780px] mx-auto px-4 pt-5 lg:px-10 flex flex-col justify-center'>
          <h1
            className='text-5xl lg:text-9xl pb-6 lg:pb-0 text-white text-left'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Services
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='w-full bg-white py-10 pb-20'>
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
          <p className='flex flex-row text-base text-gray-600 w-fit pb-10 pt-3'>
            <Link href='/'>Home</Link>
            <span className='pt-1 px-3'>
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L7 7L1 13'
                  stroke='#EE2536'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            Services
          </p>
          {/* Other content like forms can go here */}
          <h1
            className='lg:w-[65%] w-full text-[52px] text-brand-purple mb-14 mt-32'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Progressing with Network Benefits
          </h1>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-10'>
            Partnerships are deeply ingrained in our DNA. Our unrivalled global
            network and extensive geographical coverage, commitment to safety
            and customer service and expertise of our workforce have enabled us
            to build partnerships with longstanding and new customers to deliver
            network-wide solutions. We understand the business needs of our
            customers. And, we offer the most complete solutions, even for the
            most complex requirements.
          </p>
          <h1 className='lg:w-[65%] w-full text-[40px] text-brand-purple mb-4'>
            SATS – Powering a connected world of trade, travel and taste.
          </h1>
          <h1
            className='lg:w-[65%] w-full text-[40px] text-brand-purple mb-4 font-bold'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Here are the services we offer:
          </h1>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className='relative w-full overflow-hidden bg-white'>
        {/* Full-width Decor Image */}
        <div className='absolute top-0 left-0 z-20 w-full pointer-events-none'>
          <Image
            src='/images/curve-mobile-menu.svg'
            alt='Top White Curve Decor'
            width={1050}
            height={50}
            className='w-full h-auto block'
            priority
          />
        </div>

        {/* Full width flex container (no max-w constraints so it matches video exactly) */}
        <div className='w-full flex flex-col lg:flex-row overflow-hidden transition-all duration-700'>
          {servicesData.map((service, index) => {
            const isActive = activeService === service.id
            const isAnyActive = activeService !== null

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col lg:flex-row transition-all duration-700 ease-in-out overflow-hidden ${
                  !isActive ? 'cursor-pointer' : ''
                } ${
                  isActive
                    ? 'h-187.5 lg:h-200 w-full'
                    : isAnyActive
                    ? 'h-0 lg:h-200 w-full lg:w-0 opacity-0'
                    : 'h-62.5 lg:h-200 w-full lg:w-1/3'
                }`}
                onClick={() => {
                  if (!isActive) setActiveService(service.id)
                }}
              >
                {/* Image Container */}
                <div
                  className={`relative shrink-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'h-75 lg:h-full w-full lg:w-[70%] cursor-pointer'
                      : 'h-full w-full'
                  }`}
                  onClick={e => {
                    if (isActive) {
                      e.stopPropagation()
                      setActiveService(null)
                    }
                  }}
                >
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />

                  {/* Gradient Overlay for the 3 columns default view */}
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-brand-purple/80 via-brand-purple/20 to-transparent pointer-events-none transition-opacity duration-500 ${
                      isActive ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Title for default view (disappears when active) */}
                  <div
                    className={`absolute bottom-10 left-10 z-10 transition-opacity duration-500 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <h2
                      className='text-white text-[40px] font-bold whitespace-nowrap'
                      style={{
                        fontFamily: "'Century Gothic', 'Arial', sans-serif"
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Detail Content Panel (Gradient) */}
                <div
                  style={{
                    background:
                      'linear-gradient(to bottom, #50284f 60%, #e42e43 90%)'
                  }}
                  className={`relative transition-all duration-700 ease-in-out shrink-0 overflow-hidden ${
                    isActive
                      ? 'h-112.5 lg:h-full w-full lg:w-[30%]'
                      : 'h-0 lg:h-full w-full lg:w-0'
                  }`}
                >
                  {/* Close Button with Header's Animation Effect (Moved outside inner wrapper to prevent clipping) */}
                  <button
                    type='button'
                    onClick={e => {
                      e.stopPropagation()
                      setActiveService(null)
                    }}
                    className={`group absolute lg:mt-20 top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex flex-col justify-center items-center z-50 focus:outline-none transition-all duration-500 ease-in-out hover:rotate-90 ${
                      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-label='Close'
                  >
                    {/* Using spans similar to header hamburger for the X */}
                    <span className='w-8 h-0.5 bg-white rounded-full absolute transform rotate-45 transition-colors duration-300 group-hover:bg-gray-300' />
                    <span className='w-8 h-0.5 bg-white rounded-full absolute transform -rotate-45 transition-colors duration-300 group-hover:bg-gray-300' />
                  </button>

                  {/* 
                    Inner container with absolute positioning and fixed width.
                    This PREVENTS the text from reflowing and jumping instantly due to padding during the transition.
                  */}
                  <div className='absolute top-0 left-0 w-full lg:w-[30vw] h-112.5 lg:h-200 flex flex-col justify-center px-6 lg:px-10'>
                    {/* Content */}
                    <div
                      className={`text-white max-w-md relative z-10 transition-opacity duration-700 delay-200 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <h2
                        className='text-xl md:text-[40px] font-bold mb-4 md:mb-6'
                        style={{
                          fontFamily: "'Century Gothic', 'Arial', sans-serif"
                        }}
                      >
                        {service.title}
                      </h2>

                      <div className='space-y-4 text-xs md:text-lg leading-relaxed mb-6 md:mb-10 whitespace-pre-wrap'>
                        {service.desc}
                      </div>

                      <Link
                        href={service.link}
                        className='inline-block bg-brand-red-fluit text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-brand-purple transition-colors text-xs md:text-sm w-fit'
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
