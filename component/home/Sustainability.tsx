import Image from 'next/image'
import Link from 'next/link'

export default function Sustainability () {
  return (
    <section className='relative w-full min-h-150 lg:min-h-180 overflow-hidden'>
      {/* Top White Curve Decor - IN FLOW (không absolute) để đẩy content xuống tự nhiên */}
      <div className='relative z-20 w-full pointer-events-none'>
        <Image
          src='/images/curve-top-white.svg'
          alt='Top Curve'
          width={1920}
          height={150}
          className='w-full h-auto block'
        />
      </div>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/sustainability.jpeg'
          alt='Sustainability Background'
          fill
          className='object-cover object-center'
          priority
        />
      </div>

      {/* Overlay for text readability (Solid color) */}
      <div className='absolute inset-0 bg-[#1f95a5]/60 z-0'></div>

      {/* Concentric Circles Decor (Floating in the background) */}
      <div className='absolute w-full h-full opacity-40 pointer-events-none z-10 mb-8'>
        <Image
          src='/images/circles-white.svg'
          alt='Circles Decor'
          fill
          className='object-cover object-bottom-right'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-[1780px] mx-auto px-4 py-16 lg:pt-50 lg:px-10'>
        <div className='w-full lg:w-[55%]'>
          <h2
            className='text-[24px] lg:text-[52px] font-bold text-white mb-6 lg:mb-8'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Sustainability
          </h2>
          <p className='text-white text-[14px] lg:text-[18px] leading-relaxed mb-10 max-w-170'>
            We regard the three pillars of sustainability, ESG, as a fundamental
            corporate responsibility, a key determinant of our long-term
            success. As an industry leader with a global presence, SATS is
            committed to addressing the climate emergency. Our ESG commitments
            strengthen our competitive edge, build operational resilience, and
            create long-term sustainable value for our stakeholders.
          </p>
          <Link
            href='/sustainability'
            className='inline-flex items-center justify-center bg-[#e31837] text-white px-5 py-2 rounded-full font-bold text-[16px] transition-all duration-300 hover:bg-[#482146]'
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
