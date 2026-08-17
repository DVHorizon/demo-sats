'use client'

import Link from 'next/link'
import { useState } from 'react'

const DocumentIcon = () => (
  <svg
    width='20'
    height='25'
    viewBox='0 0 20 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 12.5H15V14.5H5V12.5ZM5 18.5H12V16.5H5V18.5ZM20 8.086V24.5H0V3.5C0 2.70435 0.316071 1.94129 0.87868 1.37868C1.44129 0.81607 2.20435 0.5 3 0.5L12.414 0.5L20 8.086ZM13 7.5H16.586L13 3.914V7.5ZM18 22.5V9.5H11V2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V22.5H18Z'
      fill='#414042'
    />
  </svg>
)

const DownloadIcon = () => (
  <svg
    className='mt-1'
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 11L2.625 6.625L3.85 5.35625L6.125 7.63125V0.5H7.875V7.63125L10.15 5.35625L11.375 6.625L7 11ZM1.75 14.5C1.26875 14.5 0.856771 14.3286 0.514062 13.9859C0.171354 13.6432 0 13.2312 0 12.75V10.125H1.75V12.75H12.25V10.125H14V12.75C14 13.2312 13.8286 13.6432 13.4859 13.9859C13.1432 14.3286 12.7312 14.5 12.25 14.5H1.75Z'
      fill='#EE2536'
    />
  </svg>
)

const PlusIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 1V15M1 8H15'
      stroke='#EE2536'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

const MinusIcon = () => (
  <svg
    width='16'
    height='2'
    viewBox='0 0 16 2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 1H15'
      stroke='#EE2536'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)

const TENDER_DOCUMENTS = [
  {
    title: 'Annex 1: SATS Supplier Code of Conduct (544 KB)',
    href: ''
  },
  {
    title: 'Annex 2: Terms and Conditions for Quotation',
    href: ''
  },
  {
    title: 'Annex 3.2: Conditions for the Provision of Goods & Services Works',
    href: ''
  }
]

const LIVE_TENDERS = [
  {
    title:
      'CT2607Z086 - Implementation and Maintenance Services for Staff Transport Management System',
    linkText:
      'Implementation and Maintenance Services for Staff Transport Management System',
    linkUrl: '#',
    submissionDeadline:
      'Submission of Interest deadline: 6 Aug 2026, 1200hrs (Singapore Time)',
    closingDate: 'Tender Closing date: 28 Aug 2026, 1200hrs (Singapore Time)'
  },
  {
    title:
      'CT2606Z082 TENDER SPECIFICATIONS FOR MICROSOFT DYNAMICS 365 BUSINESS CENTRAL ERP IMPLEMENTATION AND MAINTENANCE SUPPORT',
    linkText:
      'CT2606Z082 TENDER SPECIFICATIONS FOR MICROSOFT DYNAMICS 365 BUSINESS CENTRAL ERP IMPLEMENTATION AND MAINTENANCE SUPPORT',
    linkUrl: '#',
    submissionDeadline: '2 Jul 2026, 1200hrs (Singapore Time)',
    closingDate: '5 Aug 2026, 1200hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },

  {
    title:
      'CW2606I380 - Supply and Delivery of PAX Female Shoes for a Period of 2 Years (with option for 2 more years)',
    linkText:
      'CW2606I380 - Supply and Delivery of PAX Female Shoes for a Period of 2 Years (with option for 2 more years)',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate: 'RFQ Closing Date: 15 July 2026, 1200hrs (Singapore Time)'
  },
  {
    title:
      'CT2605T080 - Replacement of Rooftop Acrylic Skylight Panels at SATS Airfreight Terminals(AFT) 1 To 4',
    linkText:
      'CT2605T080 - Replacement of Rooftop Acrylic Skylight Panels at SATS Airfreight Terminals(AFT) 1 To 4',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  },
  {
    title:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkText:
      'CT2606X081 Leasing of 56 firm units of electric lithium-ion Tow tractors with option for 120 more units',
    linkUrl: '#',
    submissionDeadline: null,
    closingDate:
      'Tender Closing date: 17 July 2026 before 1400 hrs (Singapore Time)'
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TenderAccordion = ({ tender }: { tender: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border rounded-xl mb-4 bg-white overflow-hidden max-w-full  '>
      <button
        className='w-full flex justify-between items-center p-5 lg:px-8 lg:py-6 text-left cursor-pointer transition-colors hover:bg-gray-50'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg lg:text-xl font-bold pr-4 leading-snug'>
          {tender.title}
        </span>
        <span className='shrink-0 ml-4 flex items-center justify-center w-6 h-6'>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-[400ms] ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>
          <div className='px-5 lg:px-8 pb-6 text-[#414042]'>
            {tender.linkText && (
              <Link
                href={tender.linkUrl}
                className='text-[#EE2536] underline font-bold block mb-5 hover:text-cyan-300 duration-400'
              >
                {tender.linkText}
              </Link>
            )}
            {tender.submissionDeadline && (
              <p className='mb-4 font-bold text-sm lg:text-base'>
                {tender.submissionDeadline}
              </p>
            )}
            {tender.closingDate && (
              <p className='font-bold text-sm lg:text-base'>
                {tender.closingDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tender () {
  return (
    <section className='w-full bg-white text-[#414042] pt-[180px] min-[800px]:pt-[300px] pb-20'>
      <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
        {/* Breadcrumb & Title Area */}
        <div className='mb-10 max-w-3xl'>
          <h1
            className='text-[3.125rem] lg:text-[7.7777777778rem] font-normal  text-brand-purple mb-4'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Tenders
          </h1>
          <p className='text-sm text-gray-500 mb-10 hover:text-brand-red transition-colors cursor-pointer w-fit'>
            Home
          </p>
          <p className='text-base leading-relaxed text-gray-700 mb-5'>
            All vendors are to read and adhere to the following:
          </p>
          {TENDER_DOCUMENTS.map((doc, index) => (
            <div
              key={index}
              className='text-base leading-relaxed text-gray-700 mb-5 flex flex-row'
            >
              <DocumentIcon />
              <Link
                href={doc.href}
                className='mx-2 hover:text-cyan-300 duration-400 p-0 underline'
              >
                {doc.title}
              </Link>
              <DownloadIcon />
            </div>
          ))}
        </div>

        {/* Live Tenders Area */}
        <div className='mt-16 lg:mt-24'>
          <h2
            className='text-[24px] lg:text-[52px] font-bold text-[#482146] leading-tight mb-8'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Live Tenders
          </h2>
          <div className='flex flex-col'>
            {LIVE_TENDERS.map((tender, idx) => (
              <TenderAccordion key={idx} tender={tender} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
