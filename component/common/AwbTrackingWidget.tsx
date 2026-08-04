'use client'

import React, { useState } from 'react'

export default function AwbTrackingWidget () {
  const [isOpen, setIsOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')

  return (
    <div className='fixed bottom-6 right-6 z-50 flex items-end justify-end drop-shadow-2xl'>
      <div
        className={`relative ${
          isOpen
            ? 'w-[90vw] sm:w-75 bg-white rounded-4xl p-8 shadow-2xl cursor-default'
            : 'w-24 h-24 bg-brand-red-fluit rounded-full flex flex-col items-center justify-center cursor-pointer shadow-xl'
        }`}
        onClick={() => !isOpen && setIsOpen(true)}
        onMouseEnter={() => !isOpen && setIsOpen(true)}
      >
        {!isOpen ? (
          <div className='flex flex-col items-center justify-center text-white pointer-events-none mt-1'>
            {/* Box & Pin Icon Custom */}
            <div className='relative flex items-center justify-center'>
              {/* Box */}
              <svg
                width='100%'
                height='30'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.0445 1L1 7.52094L14.0445 14.0465L27.0844 7.52094L14.0445 1Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20.564 4.2627L7.51953 10.7836'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M27.084 7.521V11.4372'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 7.521V20.5675L14.0445 27.0884L17.9556 25.1326'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.0449 14.0464V27.0883'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M24.4752 22.5233C26.2769 22.5233 27.7374 21.0626 27.7374 19.2606C27.7374 17.4586 26.2769 15.9978 24.4752 15.9978C22.6735 15.9978 21.2129 17.4586 21.2129 19.2606C21.2129 21.0626 22.6735 22.5233 24.4752 22.5233Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M30.9999 19.2604C30.9999 22.8638 24.4799 31 24.4799 31C24.4799 31 17.96 22.8638 17.96 19.2604C17.96 15.6571 20.8817 12.7395 24.4799 12.7395C28.0781 12.7395 30.9999 15.6617 30.9999 19.2604Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <span className='text-[14px] font-bold leading-[1.1] text-center mt-1'>
              AWB
              <br />
              Tracking
            </span>
          </div>
        ) : (
          <div className='flex flex-col relative w-full h-full text-black'>
            <button
              onClick={e => {
                e.stopPropagation()
                setIsOpen(false)
              }}
              className='absolute -top-3 -right-3 p-1 text-gray-500 hover:text-black transition-colors'
              aria-label='Close'
            >
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <h3 className='text-3xl font-bold text-black mb-3.75 tracking-tight'>
              AWB Tracking
            </h3>

            <input
              type='text'
              placeholder='AWB Tracking Number'
              value={trackingNumber}
              onChange={e => setTrackingNumber(e.target.value)}
              className='w-full text-xl border-b-[1.5px] border-brand-red pb-2.5 outline-none placeholder:text-gray-300 font-normal text-gray-700 mb-3.75 mr-2'
            />

            <button className='bg-brand-red text-white font-bold contrast-200 text-[18px] lg:text-xl py-3 px-5 rounded-[20px] self-start hover:bg-brand-purple duration-300 transition-colors'>
              Track
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
