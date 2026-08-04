'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  const slides = [
    {
      id: 1,
      title: 'Our Purpose',
      heading: 'Together, <br /> We <em>Rise</em> Above',
      description:
        'At the heart of SATS is a powerful force at work. You’ll find a cohesive team working together – with dedication, innovation and teamwork – 24/7 every day, day after day, in our relentless pursuit of service excellence. A collective synergy of people coming together to deliver world-class aviation solutions for customers all round the world. After all, we’re the one behind the world’s leading airports and airlines.',
      buttonText: 'Our Purpose and Vision',
      buttonLink: '/about-us/our-purpose',
      type: 'video',
      videoUrl:
        'https://player.vimeo.com/video/1157055900?h=abd8ce451b&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1'
    },
    {
      id: 2,
      title: 'Our People',
      heading: 'Together, We Soar',
      description:
        'People are the core of our business and they bring our work to life. We cultivate strong leadership qualities at all levels to drive a continuous learning culture. We believe in a skills-first approach to hiring and development, ensuring that we invest in the workforce to equip our people with the skills needed to be future-ready in a rapidly evolving industry.',
      buttonText: 'Our Group People Values',
      buttonLink: '/careers/our-people',
      type: 'image',
      imageUrl: '/images/our-purpose.jpg'
    }
  ]

  // Create extended slides array for infinite loop: A, B, A, B, A, B
  const extendedSlides = [...slides, ...slides, ...slides]

  // Start at index 2 (the first 'A' in the middle group)
  const [activeIndex, setActiveIndex] = useState(2)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const minSwipeDistance = 100

  const originalIndex = activeIndex % slides.length

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    setIsTransitioning(false) // Stop any ongoing transition
    if ('touches' in e) {
      setTouchStart(e.targetTouches[0].clientX)
    } else {
      setTouchStart((e as React.MouseEvent).clientX)
    }
  }

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || touchStart === null) return

    let currentX
    if ('touches' in e) {
      currentX = e.targetTouches[0].clientX
    } else {
      currentX = (e as React.MouseEvent).clientX
    }

    const diff = currentX - touchStart
    setDragOffset(diff)
  }

  const onTouchEndHandler = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (touchStart === null) return

    if (dragOffset > minSwipeDistance) {
      // Swipe Right -> Prev
      setActiveIndex(prev => prev - 1)
      setIsTransitioning(true)
    } else if (dragOffset < -minSwipeDistance) {
      // Swipe Left -> Next
      setActiveIndex(prev => prev + 1)
      setIsTransitioning(true)
    } else {
      // Snap back
      setIsTransitioning(true)
    }

    setTouchStart(null)
    setDragOffset(0)
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    // Invisible jump to keep index in the safe middle range [2, 3]
    if (activeIndex <= 1) {
      // Swiped left past boundary (to B0 or A0)
      setActiveIndex(activeIndex + slides.length)
    } else if (activeIndex >= 4) {
      // Swiped right past boundary (to A2 or B2)
      setActiveIndex(activeIndex - slides.length)
    }
  }

  return (
    <section
      className='relative w-full h-dvh min-h-187.5 md:min-h-200 bg-black overflow-hidden group mt-0 cursor-grab active:cursor-grabbing select-none'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEndHandler}
      onMouseLeave={() => {
        if (isDragging) onTouchEndHandler()
      }}
    >
      {/* Slides container (Horizontal Flex) */}
      <div
        className='w-full flex pointer-events-none h-full'
        style={{
          transform: `translateX(calc(-${
            activeIndex * 100
          }% + ${dragOffset}px))`,
          transition:
            isDragging || !isTransitioning
              ? 'none'
              : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className='w-full shrink-0 relative h-full'
          >
            {slide.type === 'video' ? (
              <div
                className='absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none'
                style={{ containerType: 'size' }}
              >
                <iframe
                  src={slide.videoUrl}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'
                  style={{
                    width: 'max(100cqw, 177.78cqh)',
                    height: 'max(56.25cqw, 100cqh)'
                  }}
                  allow='autoplay; fullscreen; picture-in-picture'
                />
              </div>
            ) : (
              <Image
                src={slide.imageUrl!}
                alt={slide.title}
                fill
                className='object-cover z-0 pointer-events-none'
                priority={index === 2 || index === 3}
              />
            )}

            {/* Content */}
            <div className='absolute inset-0 z-20 w-full max-w-[1780px] mx-auto lg:px-10 px-4 flex items-center pt-16 pb-20 pointer-events-auto'>
              <div className='w-full text-white'>
                {slide.heading ? (
                  <h1
                    className='leading-tight text-[50px] md:text-[64px] mb-4 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]'
                    style={{
                      fontFamily: "'Century Gothic', 'Arial', sans-serif"
                    }}
                    dangerouslySetInnerHTML={{ __html: slide.heading }}
                  />
                ) : (
                  <h1
                    className='leading-tight text-[4rem] mb-4 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]'
                    style={{
                      fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
                      fontFamily: "'Century Gothic', 'Arial', sans-serif"
                    }}
                  >
                    {slide.title}
                  </h1>
                )}
                <p
                  className='text-gray-200 mb-6 leading-relaxed w-full drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]'
                  style={{
                    fontSize: 'clamp(0.8rem, 2.2vh, 1.125rem)'
                  }}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.buttonLink}
                  className='inline-flex items-center justify-center bg-brand-red hover:bg-brand-purple text-white font-bold rounded-full transition-colors duration-300'
                  style={{
                    fontSize: 'clamp(0.75rem, 1.8vh, 0.875rem)',
                    padding:
                      'clamp(0.5rem, 1.5vh, 0.875rem) clamp(1.25rem, 3vh, 2rem)'
                  }}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Title Indicators (Fixed Overlay) */}
      <div className='absolute inset-0 z-40 flex items-end pointer-events-none pb-10 sm:pb-14 md:pb-20 lg:pb-25'>
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
          <div className='flex gap-3 pointer-events-auto'>
            {slides.map((indicatorSlide, indicatorIdx) => (
              <button
                key={indicatorSlide.id}
                onClick={() => {
                  setActiveIndex(indicatorIdx + slides.length)
                  setIsTransitioning(true)
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none backdrop-blur-md ${
                  originalIndex === indicatorIdx
                    ? 'bg-white/40 text-white'
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                {indicatorSlide.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Curve Overlay */}
      <div className='absolute -bottom-px left-0 w-full z-10 pointer-events-none'>
        <svg
          viewBox='0 0 1920 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className='w-full block'
          style={{ height: 'clamp(24px, 8vh, 100px)' }}
        >
          <path d='M1920 100H0C960 100 1920 0 1920 0V100Z' fill='white' />
        </svg>
      </div>
    </section>
  )
}
