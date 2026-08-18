'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs () {
  return (
    <>
      {/* Hero Section */}
      <section className='relative w-full flex items-center justify-center bg-white pt-45 min-[800px]:pt-80 min-h-96 lg:min-h-225'>
        {/* Background Image Container */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/SATS Logo assorted (5)-High Res format (Jpeg, 2560px)1.jpg'
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
            About us
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='w-full bg-white py-10 pb-20'>
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
          <p className='flex flex-row text-lg text-gray-600 w-fit pb-10'>
            <Link href='/'>Home</Link>
            <span className='pt-2 px-2'>
              <svg
                width='8'
                height='14'
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
            About us
          </p>
          {/* Other content like forms can go here */}
          <h1
            className='w-[65%] text-[3.125rem] text-brand-purple mb-4'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            The world’s leading aviation solutions provider, powered by our
            service excellence, agile innovation and global network.
          </h1>
          <p className='w-[65%] text-lg text-gray-600 pb-5'>
            SATS is one of the world’s largest air cargo handlers and Asia’s
            leading airline caterer headquartered in Singapore. We are present
            in the Asia-Pacific, the Americas, Europe, the Middle East and
            Africa. Following the acquisition of Worldwide Flight Services (WFS)
            in 2023, the combined SATS and WFS network operates over 225
            stations in 27 countries, covering trade routes responsible for more
            than 50% of global air cargo volume. SATS has been listed on the
            Singapore Exchange since May 2000.
          </p>
          <Link
            href='/our-purpose'
            className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Our Purpose
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className='relative w-full flex items-center justify-center bg-white pt-45 min-[800px]:pt-80 min-h-96 lg:min-h-225 mb-28'>
        <div className='absolute top-0 left-0 z-10 w-full pointer-events-none'>
          <Image
            src='/images/curve-top-white.svg'
            alt='Top White Curve Decor'
            width={1920}
            height={150}
            className='w-full h-auto block'
            priority
          />
        </div>
        {/* Background Image Container */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/test-about-banner.jpg'
            alt='About Us Background'
            fill
            priority
            className='object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 w-[45%] bg-linear-to-r from-[#34000a] to-transparent opacity-[0.6]'></div>
        </div>
        {/* Nội dung Banner */}
        <div className='relative z-20 w-full max-w-[1780px] mx-auto px-4 lg:px-10 pt-16 lg:pt-50 pb-20 lg:pb-40 text-white'>
          <div className='max-w-2xl'>
            <h2
              className='text-5xl font-bold leading-tight mb-6'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              Powering a Connected World of Trade, Travel and Taste
            </h2>
            <p className='text-white text-lg leading-relaxed mb-8 font-normal'>
              Partnership for a connected world, powered by SATS.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full bg-white py-10 pb-20'>
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
          <h1 className='text-brand-purple text-[40px] font-bold'>
            Our Impact by Numbers
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            <div className='text-black text-lg text-center'>
              <p className=' text-lg text-gray-700 pb-5'>Over</p>
              <h1 className='text-[52px] text-brand-purple font-bold pb-5'>
                225
              </h1>
              <p className=' text-lg text-gray-700 pb-5'>Locations</p>
            </div>
            <div className='flex flex-col text-black text-lg text-center'>
              <p className=' text-lg text-gray-700 pb-5'>Over</p>
              <h1 className='text-[52px] text-brand-purple font-bold pb-5'>
                27
              </h1>
              <p className=' text-lg text-gray-700 pb-5'>Contries</p>
            </div>
            <div className='text-black text-lg text-center'>
              <p className=' text-lg text-gray-700 pb-5'>Approx.</p>
              <h1 className='text-[52px] text-brand-purple font-bold pb-5'>
                55K
              </h1>
              <p className=' text-lg text-gray-700 pb-5'>Employees</p>
            </div>
            <div className='text-black text-lg text-center'>
              <p className=' text-lg text-gray-700 pb-5'>
                Market Capitalisation
              </p>
              <h1 className='text-[52px] text-brand-purple font-bold pb-5'>
                S$4.46B
              </h1>
              <p className=' text-lg text-gray-700 pb-5'>as of 24 Jun 2025</p>
            </div>
          </div>
          <hr className='text-brand-red pt-36 mt-44' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mt-8'>
            <div className='text-black'>
              <div className='relative w-full overflow-hidden aspect-5/3 rounded-[20px] mb-5'>
                <Image
                  src='/images/our-history-1-500x300.png'
                  alt='About Us Background'
                  fill
                  priority
                  className='object-cover'
                />
              </div>
              <h1 className='text-brand-purple text-2xl font-bold mb-5'>
                Our History
              </h1>
              <p className='text-gray-700 text-lg mb-5'>
                SATS is proud to be a home-grown company, tracing our roots back
                to the beginning of commercial aviation in Singapore, marked by
                the inaugural flight that took off from Singapore Kallang
                Airport in 1947. Over the next few decades, we grew in tandem
                with our young city-state as Singapore transformed itself into a
                global business and aviation hub.
              </p>
              <Link
                href='/learn-more'
                className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300'
                style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
              >
                Learn more
              </Link>
            </div>
            <div className='text-black'>
              <div className='relative w-full overflow-hidden aspect-5/3 rounded-[20px] mb-5'>
                <Image
                  src='/images/our-structure-1-500x300.png'
                  alt='About Us Background'
                  fill
                  priority
                  className='object-cover'
                />
              </div>
              <h1 className='text-brand-purple text-2xl font-bold mb-5'>
                Our Structure
              </h1>
              <p className='text-gray-700 text-lg mb-5'>
                SATS is built on a strong and adaptable structure that empowers
                and supports our businesses and subsidiaries across the globe to
                innovate, collaborate, and deliver service excellence. At the
                heart of SATS is a powerful force at work – a collective synergy
                of people working together 24/7 every day, day after day, to
                deliver world-class aviation solutions for our customers all
                round the world.
              </p>
            </div>
            <div className='text-black'>
              <div className='relative w-full overflow-hidden aspect-5/3 rounded-[20px] mb-5'>
                <Image
                  src='/images/logo-lanyand.jpeg'
                  alt='About Us Background'
                  fill
                  priority
                  className='object-cover'
                />
              </div>
              <h1 className='text-brand-purple text-2xl font-bold mb-5'>
                Leadership Team
              </h1>
              <p className='text-gray-700 text-lg mb-5'>
                Our leadership team brings together deep industry experience and
                visionary thinking to steer SATS into the future. With a focus
                on innovation, operational excellence and inclusive growth, they
                guide our efforts to deliver value to customers, communities,
                and stakeholders across our network.
              </p>
              <Link
                href='/learn-more'
                className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300'
                style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
              >
                Learn more
              </Link>
            </div>
            <div className='text-black'>
              <div className='relative w-full overflow-hidden aspect-5/3 rounded-[20px] mb-5'>
                <Image
                  src='/images/sats-logo-assorted--1--high-res-format--jpeg--2560px-.jpeg'
                  alt='About Us Background'
                  fill
                  priority
                  className='object-cover'
                />
              </div>
              <h1 className='text-brand-purple text-2xl font-bold mb-5'>
                Corporate Governance
              </h1>
              <p className='text-gray-700 text-lg mb-5'>
                SATS is committed to maintaining the highest standards of
                corporate governance. Our frameworks ensure transparency,
                accountability and integrity across our operations, reflecting
                our dedication to ethical business practices and responsible
                growth.
              </p>
              <Link
                href='/learn-more'
                className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300'
                style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
              >
                Learn more
              </Link>
            </div>
          </div>
          <hr className='text-brand-red pt-36 mt-44' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mt-8'>
            <div className='text-gray-700 order-2 md:order-1'>
              <h1 className='text-brand-purple text-[40px] font-bold'>
                Safety and Security
              </h1>
              <p className='text-lg mb-5'>
                The safety and security of our people, our customers and their
                assets, is our number one priority.
              </p>
              <p className='text-lg mb-5'>
                We put significant investment behind this commitment, with
                industry leading security and safety technologies which utilise
                the latest screening equipment, warehouse layout and IT system
                changes to reduce human error.
              </p>
              <p className='text-lg mb-5'>
                World class training and robust assurance regimes consisting of
                regular compliance audits and station support to improve
                performance. Training and communications focused on security
                processes, behaviours and face-to-face daily shift briefings.
              </p>
              <Link
                href='/our-purpose'
                className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300'
                style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
              >
                Learn more
              </Link>
            </div>
            <div className='relative w-full order-1 md:order-2 overflow-hidden aspect-5/3 rounded-[20px]'>
              <Image
                src='/images/safety-security.jpeg'
                alt='About Us Background'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-[#30a9ce] py-10 pb-20'>
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
          <h1 className='text-white text-[40px] font-bold mb-8'>
            Our Recent Awards
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {/* Card 1 */}
            <div className='bg-white rounded-[30px] p-6 lg:p-8 flex flex-col h-full'>
              <span className='text-brand-purple font-bold text-sm mb-4'>
                2025
              </span>
              <h2 className='text-brand-purple text-xl font-bold mb-4 leading-tight'>
                Global Air Cargo Handling Agent of the Year 2025
              </h2>
              <p className='text-gray-700 text-sm mb-4'>
                WFS, a SATS company, was named Global Air Cargo Handling Agent
                of the Year at the 2025 Air Cargo Week World Air Cargo Awards,
                held during Air Cargo Europe in Munich, Germany.
              </p>
              <p className='text-gray-700 text-sm mb-8'>
                This award reflects the dedication of our global teams who
                deliver safe, efficient and customer-focused cargo solutions
                every day.
              </p>
              <div className='mt-auto flex justify-center'>
                <Image
                  src='/images/global-air-cargo-handling-agent-logo-updated.png'
                  alt='Global Air Cargo Handling Agent Award'
                  width={400}
                  height={400}
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-[30px] p-6 lg:p-8 flex flex-col h-full'>
              <span className='text-brand-purple font-bold text-sm mb-4'>
                2025
              </span>
              <h2 className='text-brand-purple text-xl font-bold mb-4 leading-tight'>
                Airline Caterer of the Year for Asia 2025
              </h2>
              <p className='text-gray-700 text-sm mb-4'>
                For the seventh consecutive year, SATS was awarded PAX
                International and PAX Tech Readership Awards Airline Caterer of
                the Year for Asia 2025 at World Travel Catering & Onboard
                Services Expo (WTCE) in Hamburg, Germany.
              </p>
              <p className='text-gray-700 text-sm mb-8'>
                Winners of the awards every year are voted on entirely by PAX
                International&apos;s and PAX Tech&apos;s loyal readership of
                more than 15,500 industry professionals to recognise the best of
                the industry.
              </p>
              <div className='mt-auto flex justify-center'>
                <Image
                  src='/images/paxaward-logo-07.png'
                  alt='PAX Award 2025'
                  width={400}
                  height={400}
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-[30px] p-6 lg:p-8 flex flex-col h-full'>
              <span className='text-brand-purple font-bold text-sm mb-4'>
                2025
              </span>
              <h2 className='text-brand-purple text-xl font-bold mb-4 leading-tight'>
                Airline Caterer of the Year for South Asia 2025
              </h2>
              <p className='text-gray-700 text-sm mb-8'>
                For the second year running, TajSATS was recognised as the
                Airline Caterer of the Year for South Asia 2025 at the PAX
                International and PAX Tech Readership Awards held in Hamburg,
                Germany.
              </p>
              <div className='mt-auto flex justify-center'>
                <Image
                  src='/images/paxaward-logo-07.png'
                  alt='PAX Award 2025'
                  width={400}
                  height={400}
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className='bg-white rounded-[30px] p-6 lg:p-8 flex flex-col h-full'>
              <span className='text-brand-purple font-bold text-sm mb-4'>
                2024
              </span>
              <h2 className='text-brand-purple text-xl font-bold mb-4 leading-tight'>
                Singapore May Day 2025 Commendations
              </h2>
              <p className='text-gray-700 text-sm mb-4'>
                SATS, SATS PCEO Kerry Mok and SAT Workers&apos; Union President
                Poobalan A Kumarsamy received May Day 2025 Commendations by the
                National Trades Union Congress.
              </p>
              <p className='text-gray-700 text-sm mb-8'>
                The awards acknowledge SATS&apos; steadfast commitment to
                progressive workplace practices, strong tripartite
                collaboration, and a longstanding focus on championing
                workers&apos; welfare.
              </p>
              <div className='mt-auto flex justify-center w-full aspect-square'>
                {/* No logo for the 4th card based on the mockup, empty space retained by aspect-square */}
              </div>
            </div>
          </div>

          <Link
            href='/sustainability'
            className='bg-brand-red hover:bg-brand-purple text-white font-bold px-5 py-2 rounded-full text-base inline-block shadow-md transition-colors duration-300 mt-20'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            View more
          </Link>
        </div>
      </section>
    </>
  )
}
