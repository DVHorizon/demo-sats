import Image from 'next/image'
import Link from 'next/link'

export default function Sustainability () {
  return (
    <>
      {/* Hero Section */}
      <section className='relative w-full flex items-center justify-center bg-white pt-45 min-[800px]:pt-80 min-h-96 lg:min-h-225'>
        {/* Background Image Container */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/sustainability.jpeg'
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
            Sustainability
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
            Sustainability
          </p>
          {/* Other content like forms can go here */}
          <h1 className='lg:w-[65%] w-full text-[24px] text-gray-700 mb-6 mt-12'>
            SATS recognises that sustainability extends beyond compliance and
            operational requirements—it serves as a strategic driver of
            long-term value.
          </h1>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            We have identified eight ESG priorities through a regularly revised
            materiality assessment that takes into account, market best
            practices, market trends, regulations, and stakeholder expectations.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            We are committed to:
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600'>
            <span className='text-brand-red text-2xl'>•</span> Reducing our
            environmental footprint through decarbonisation, waste management
            and sustainable sourcing.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600'>
            <span className='text-brand-red text-2xl'>•</span> Enhancing our
            preparedness for extreme weather and cyber threats.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600'>
            <span className='text-brand-red text-2xl'>•</span> Continuously
            investing in our people and systems to create a safe, secure,
            diverse and inclusive workplace.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            <span className='text-brand-red text-2xl'>•</span> Upholding
            stringent standards of governance and business ethics.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            Our 3-stage ESG approach – comply, optimise and transform – is
            designed to ensure regulatory compliance while optimising operations
            for efficiency and resilience. This ultimately transforms our
            business, positioning us to lead the aviation logistics sector
            towards a more sustainable future.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            Having set ambitious goals in areas such as decarbonisation, waste
            reduction, diversity and cybersecurity, we are focused on
            accelerating the transformative phase of our ESG journey. This phase
            requires deeper innovation and broader investments to support our
            transition to a low-carbon and resilient future.
          </p>
          <p className='lg:w-[65%] w-full text-lg text-gray-600 pb-5'>
            This transformation is essential for maintaining our competitive
            advantage and positioning SATS as a premier partner for airlines and
            a leader in the aviation industry&apos;s transition towards
            sustainability.
          </p>

          <Link
            href={'#'}
            className='inline-block bg-brand-red-fluit text-white mt-14 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-brand-purple transition-colors text-base w-fit'
          >
            Learn More On Our FY26 Sustainability Report
          </Link>
          <br />
          <Link
            href={'#'}
            className='inline-block bg-brand-red-fluit text-white mt-7 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-brand-purple transition-colors text-base w-fit'
          >
            ESG Data Book
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className='relative w-full flex items-center justify-center bg-white pt-45 min-[800px]:pt-80 min-h-96 lg:min-h-225 mb-28'>
        <div className='absolute top-0 left-0 z-10 w-full pointer-events-none drop-shadow-[0_100px_50px_rgba(0,0,0,0.05)]'>
          <Image
            src='/images/curve-top-white.svg'
            alt='Top White Curve Decor'
            width={1920}
            height={150}
            className='w-full h-auto block'
            priority
          />
        </div>
        {/* Nội dung Banner */}
        <div className='relative z-0 w-full max-w-[1780px] mx-auto px-4 lg:px-10 pt-8 pb-20 lg:pb-40 text-black'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
            <Image
              src='/images/polices.jpeg'
              alt='book'
              width={800}
              height={500}
              className='w-full h-auto block rounded-2xl shadow-lg'
            />
            <div className='text-black mt-10'>
              <p className='text-lg leading-relaxed text-gray-800'>
                At SATS, our policies and guidelines are designed to uphold the
                highest standards of safety, integrity, and service excellence.
                Access key documents that guide our operations, ensure
                compliance, and support our commitment to delivering quality and
                innovation across the aviation and food industries.
              </p>
              <Link
                href={'#'}
                className='inline-block bg-brand-red-fluit text-white mt-7 px-5 py-2 md:px-5 md:py-3 rounded-full font-bold hover:bg-brand-purple transition-colors text-base w-fit'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
