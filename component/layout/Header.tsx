'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('EN')
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [lastActiveMenu, setLastActiveMenu] = useState<string | null>(null)
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null)
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(
    null
  )
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  type SubItemChild = string | { label: string; external?: boolean }

  interface SubItem {
    title: string
    hasArrow?: boolean
    external?: boolean
    children?: SubItemChild[]
  }

  interface MegaMenuItem {
    id: string
    col1Width: string
    image: string
    title: string
    desc: string
    href: string
    subItems?: SubItem[]
  }

  const aboutUsSubItems = [
    { title: 'Our Journey', hasArrow: false },
    { title: 'Our Purpose', hasArrow: false },
    { title: 'Awards & Accolades', hasArrow: false },
    {
      title: 'Leadership Team',
      hasArrow: true,
      children: [
        'Kerry Mok',
        'Timothy Tang',
        'Samuel Koh',
        'Francois Mirallie',
        'Bob Chi',
        'Michael Simpson',
        'John Batten',
        'Henry Low',
        'Charis Cheng',
        'Martin Holme',
        'Sandeep Sakharkar',
        'Ian Chye',
        'Irving Tan',
        'Kerry Mok Tee Heong',
        'Chan Lai Fung',
        'Eng Aik Meng',
        'Mak Swee Wah',
        'Deborah Ong',
        'Pier Luigi Sigismondi',
        'Malcolm Wilson',
        'Michael Zechmeister'
      ]
    },
    { title: 'Corporate Governance', hasArrow: false },
    {
      title: 'Safety & Security',
      hasArrow: true,
      children: ['Compliance and Ethics Hotline']
    },
    {
      title: 'Contact Us',
      hasArrow: true,
      children: ['FAQS', 'Whistle-Blowing']
    }
  ]

  const servicesSubItems = [
    {
      title: 'Food Solutions',
      hasArrow: true,
      children: [
        'Aviation Catering',
        'Institutional Catering',
        'Linen & Laundry',
        { label: 'Private Jet Catering', external: true },
        { label: 'Food-Service Solutions and Distribution', external: true },
        { label: 'Food To Go', external: true },
        'Stadium Catering'
      ]
    },
    {
      title: 'Air Cargo',
      hasArrow: true,
      children: [
        'Air Cargo Handling',
        'Digital Solutions',
        'Specialised Services'
      ]
    },
    {
      title: 'Ground Handling',
      hasArrow: true,
      children: [
        'Apron Services',
        'Baggage Handling',
        'Other services',
        'Passenger Services',
        'Security Services',
        'Travel Retail'
      ]
    }
  ]

  const sustainabilitySubItems = [
    {
      title: 'Policies & Reference Documents',
      hasArrow: false
    }
  ]

  const investorsSubItems = [
    {
      title: 'AGM 2026',
      hasArrow: true,
      children: ['AGM 2026 Documents']
    },
    {
      title: 'Financial Reports',
      hasArrow: true,
      children: ['Financial Results', 'Annual Reports']
    },
    {
      title: 'Financial Calendar',
      hasArrow: false
    },
    {
      title: 'Stock Exchange Announcements',
      hasArrow: false
    },
    {
      title: 'Stock Information Overview',
      hasArrow: true,
      children: [
        'Shareholding Information',
        'Analyst Coverage',
        'Stock Information',
        'Dividend History'
      ]
    },
    {
      title: 'Corporate Information',
      hasArrow: false
    },
    {
      title: 'WFS Acquisition',
      hasArrow: true,
      children: [
        'EGM Registration',
        'SATS Completes Acquisition of Worldwide Flight Services'
      ]
    }
  ]

  const careersSubItems = [
    {
      title: 'Careers in Singapore',
      hasArrow: true,
      children: [
        'Aviation Recruitment',
        'Security Recruitment',
        'Recruitment Fairs',
        'For Students',
        'For PMETs'
      ]
    },
    {
      title: 'Careers – The Americas',
      hasArrow: true,
      children: [
        { label: 'Careers – US & Canada', external: true },
        'Careers – Brazil'
      ]
    },
    {
      title: 'Careers – EMEAA',
      hasArrow: false,
      external: true
    },
    {
      title: 'Our People',
      hasArrow: false
    },
    {
      title: 'Our Culture',
      hasArrow: false
    },
    {
      title: 'Our Training',
      hasArrow: true,
      children: ['Apron Training']
    }
  ]

  const megaMenusData: MegaMenuItem[] = [
    {
      id: 'About Us',
      col1Width: 'w-[45%]',
      image:
        '/images/SATS Logo assorted (5)-High Res format (Jpeg, 2560px)1.jpg',
      title: 'About us',
      desc: "SATS is the world's largest air cargo handler and Asia's leading airline caterer headquartered in Singapore. We are present in the Asia-Pacific, the Americas, Europe, the Middle East and Africa.",
      href: '/about',
      subItems: aboutUsSubItems
    },
    {
      id: 'Global Network',
      col1Width: 'w-[80%]',
      image: '/images/test-about-us.jpeg',
      title: 'Global Network',
      desc: "From our hub in Singapore, and in our newly combined markets, SATS and WFS will be at the heart of global trade flows, operating in the world's busiest airports and supporting the biggest companies.",
      href: '/network',
      subItems: undefined
    },
    {
      id: 'Services',
      col1Width: 'w-[45%]',
      image: '/images/ground-handling.jpeg',
      title: 'Services',
      desc: 'Our unrivalled global network and extensive geographical coverage, commitment to safety and customer service and expertise of our workforce have enabled us to build partnerships with longstanding and new customers to deliver network-wide solutions.',
      href: '/services',
      subItems: servicesSubItems
    },
    {
      id: 'Sustainability',
      col1Width: 'w-[55%]',
      image: '/images/sustainability.jpeg',
      title: 'Sustainability',
      desc: 'SATS recognises that sustainability extends beyond compliance and operational requirements - it serves as a strategic driver of long-term value.',
      href: '/sustainability',
      subItems: sustainabilitySubItems
    },
    {
      id: 'Investors',
      col1Width: 'w-[45%]',
      image: '/images/logo-lanyand.jpeg',
      title: 'Investors',
      desc: 'SATS is committed to transparent and timely communication with our shareholders. Explore our latest financial updates, stock information, and key milestones as we continue to grow as a global leader in the aviation and logistics industries.',
      href: '/investors',
      subItems: investorsSubItems
    },
    {
      id: 'Careers',
      col1Width: 'w-[45%]',
      image: '/images/careers.jpeg',
      title: 'Careers',
      desc: 'A career with us opens up a world of opportunity to develop your existing skills, to learn new skills, and to experience working with different customers and cultures with the sole aim of always delivering a world class service.',
      href: '/careers',
      subItems: careersSubItems
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Đang ở sát đỉnh trang
      if (currentScrollY <= 10) {
        setIsVisible(true)
        setIsScrolled(false)
        setLastScrollY(currentScrollY)
        return
      }

      setIsScrolled(true)

      // Cuộn xuống ➔ Ẩn Header (-translate-y-full)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      // Cuộn lên ➔ Hiện Header lại ngay lập tức (translate-y-0)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      onMouseLeave={() => {
        setActiveMegaMenu(null)
        setActiveSubItem(null)
      }}
      className={`
                group fixed top-0 w-full z-50 px-1 transition-all duration-100
                ${
                  isVisible
                    ? 'translate-y-0'
                    : 'translate-y-0 min-[800px]:-translate-y-full'
                }
                ${
                  isScrolled || isMobileMenuOpen || activeMegaMenu
                    ? 'bg-white text-[#414042] shadow-md'
                    : 'bg-white text-[#414042] shadow-md min-[800px]:bg-transparent min-[800px]:text-white min-[800px]:hover:text-[#414042] min-[800px]:shadow-none'
                }
            `}
    >
      {/* Nội dung Header theo chuẩn CSS mẫu SATS (relative z-50 để bóng phủ lên Mega Menu z-40) */}
      <div
        className={`relative z-50 transition-shadow duration-300 ${
          activeMegaMenu ? 'shadow-[0_12px_24px_-4px_rgba(0,0,0,0.15)]' : ''
        }`}
      >
        <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10 py-4 lg:py-6 flex flex-wrap justify-between items-center min-[800px]:items-start relative z-10'>
          {/* 1. Cột Logo */}
          <div className='shrink-0 mr-6 lg:mr-14 min-[800px]:mt-6 lg:mt-4'>
            <Link href='/'>
              {/* Logo Trắng (Chỉ hiển thị trên Desktop khi chưa scroll) */}
              <Image
                src='/images/sats-logo-2026-updated-white.svg'
                alt='SATS Logo'
                width={260}
                height={70}
                className={`w-44 sm:w-56 lg:w-90 h-auto object-contain hidden min-[800px]:block ${
                  isScrolled || isMobileMenuOpen || activeMegaMenu
                    ? 'min-[800px]:hidden!'
                    : 'min-[800px]:group-hover:hidden'
                }`}
                priority
              />
              {/* Logo Đỏ (Mặc định hiển thị trên Mobile và khi Scroll/Hover trên Desktop) */}
              <Image
                src='/images/sats-logo-2026-updated.svg'
                alt='SATS Logo'
                width={260}
                height={70}
                className={`w-44 sm:w-56 lg:w-90 h-auto object-contain block ${
                  isScrolled || isMobileMenuOpen || activeMegaMenu
                    ? 'min-[800px]:block'
                    : 'min-[800px]:hidden min-[800px]:group-hover:block'
                }`}
                priority
              />
            </Link>
          </div>

          {/* 2. Cột Menu bên phải */}
          <div className='hidden min-[800px]:flex flex-1 flex-col items-end'>
            {/* Tầng 1: Top Nav */}
            <div
              className={`flex items-center gap-4 text-lg font-medium transition-colors duration-100 mb-2 mr-5 ${
                isScrolled || activeMegaMenu
                  ? 'text-[#414042]'
                  : 'text-[#414042] min-[800px]:text-white min-[800px]:group-hover:text-[#414042]'
              }`}
            >
              <Link
                href='/contact'
                className='hover:text-brand-red-fluit! transition-colors px-2 py-1'
              >
                Contact
              </Link>
              <Link
                href='/tenders'
                className='hover:text-brand-red-fluit! transition-colors px-2 py-1'
              >
                Tenders
              </Link>
              <div className='relative z-50'>
                <button
                  type='button'
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex items-center gap-1.5 px-5 py-4 transition-colors focus:outline-none ${
                    isLangOpen
                      ? 'bg-brand-red-fluit text-white shadow-md'
                      : 'hover:text-brand-red-fluit!'
                  }`}
                >
                  <svg
                    width='18'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34871 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM18.3333 10C18.3339 11.6243 17.8569 13.213 16.9617 14.5683C16.2431 13.7685 15.8418 12.7335 15.8333 11.6583V10H10.8333C10.6123 10 10.4004 9.9122 10.2441 9.75592C10.0878 9.59964 10 9.38768 10 9.16667V8.33333H12.5V5H14.9283L15.8525 4.07583C16.6385 4.84923 17.2626 5.77137 17.6886 6.78848C18.1145 7.80558 18.3337 8.89731 18.3333 10ZM1.7075 10.8025L5.07167 14.1667H8.33334C8.55435 14.1667 8.76631 14.2545 8.92259 14.4107C9.07887 14.567 9.16667 14.779 9.16667 15V18.2908C7.25016 18.0952 5.46033 17.2426 4.10078 15.8778C2.74122 14.5129 1.89565 12.7198 1.7075 10.8025ZM10.8333 18.2908V15C10.8333 14.337 10.5699 13.7011 10.1011 13.2322C9.63226 12.7634 8.99638 12.5 8.33334 12.5H5.76167L1.8025 8.54083C2.04098 7.18517 2.61229 5.90991 3.46515 4.82948C4.31801 3.74906 5.42576 2.89726 6.689 2.35051C7.95224 1.80377 9.33145 1.57918 10.7029 1.6969C12.0743 1.81462 13.3951 2.27097 14.5467 3.025L14.2383 3.33333H10.8333V6.66667H8.33334V9.16667C8.33334 9.82971 8.59673 10.4656 9.06557 10.9344C9.53441 11.4033 10.1703 11.6667 10.8333 11.6667H14.1667C14.1647 13.2454 14.7851 14.7614 15.8933 15.8858C14.536 17.2492 12.7476 18.0992 10.8333 18.2908Z'
                      fill={isLangOpen ? 'white' : 'currentColor'}
                    />
                  </svg>
                  <span>{selectedLang}</span>
                </button>

                <div
                  className={`absolute top-full left-0 min-w-full bg-brand-red-fluit text-white px-2.5 pb-2.5 z-50 shadow-2xl origin-top transition-all duration-300 ease-out transform ${
                    isLangOpen
                      ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 scale-y-90 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className='h-px bg-white mb-2 mt-1.75 w-full' />

                  <ul className='flex flex-col gap-2 text-[12px] mt-2.5'>
                    {['EN', 'FR', 'ES', 'IT']
                      .filter(lang => lang !== selectedLang)
                      .map(lang => (
                        <li key={lang}>
                          <button
                            type='button'
                            onClick={() => {
                              setSelectedLang(lang)
                              setIsLangOpen(false)
                            }}
                            className='hover:opacity-80 transition-opacity text-left w-full block py-0.5'
                          >
                            {lang}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* Search Input */}
              <div
                className={`flex items-center transition-all duration-300 ease-in-out ${
                  isSearchOpen ? 'w-44 sm:w-60' : 'w-20 border-transparent'
                }`}
              >
                <button
                  type='button'
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className='flex items-center gap-1.5 hover:text-brand-red! transition-colors shrink-0 py-1'
                  aria-label='Search'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  {!isSearchOpen && <span>Search</span>}
                </button>

                {isSearchOpen && (
                  <input
                    type='text'
                    placeholder='Search'
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                    className='w-full bg-transparent placeholder:text-current text-xs sm:text-sm pl-2 py-0.5 outline-none text-current'
                  />
                )}
              </div>
            </div>

            {/* Tầng 2: Main Nav */}
            <nav className='w-full flex justify-end'>
              <div
                className={`flex flex-wrap justify-end gap-x-4 lg:gap-x-6 font-bold text-xs sm:text-sm lg:text-base border-t border-solid transition-colors duration-100 relative -top-px ${
                  isScrolled || activeMegaMenu
                    ? 'border-brand-red text-[#414042]'
                    : 'border-[#fabdc2] min-[800px]:border-white min-[800px]:group-hover:border-brand-red text-[#414042] min-[800px]:text-white min-[800px]:group-hover:text-[#414042]'
                }`}
              >
                {[
                  { name: 'About Us', hasMegaMenu: true },
                  { name: 'Global Network', hasMegaMenu: true },
                  { name: 'Services', hasMegaMenu: true },
                  { name: 'Sustainability', hasMegaMenu: true },
                  { name: 'Investors', hasMegaMenu: true },
                  { name: 'News & Resources', hasMegaMenu: false, href: '#' },
                  { name: 'Careers', hasMegaMenu: true }
                ].map(item => {
                  if (!item.hasMegaMenu) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href || '#'}
                        className='relative group/item py-3 transition-colors duration-100 hover:text-brand-red!'
                      >
                        {item.name}
                        <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[9px] border-b-brand-red transition-opacity duration-200 opacity-0 group-hover/item:opacity-100' />
                      </Link>
                    )
                  }
                  return (
                    <button
                      key={item.name}
                      type='button'
                      onClick={() => {
                        if (megaMenuTimeoutRef.current) {
                          clearTimeout(megaMenuTimeoutRef.current)
                        }

                        if (activeMegaMenu === item.name) {
                          setActiveMegaMenu(null)
                        } else if (activeMegaMenu) {
                          // Đóng menu hiện tại trước
                          setActiveMegaMenu(null)
                          // Tăng timeout lên 350ms (vì animation giờ là 500ms) để gập-mở mượt mà
                          megaMenuTimeoutRef.current = setTimeout(() => {
                            setActiveMegaMenu(item.name)
                            setLastActiveMenu(item.name)
                            setActiveSubItem(null)
                          }, 350)
                        } else {
                          // Mở bình thường nếu chưa có menu nào đang mở
                          setActiveMegaMenu(item.name)
                          setLastActiveMenu(item.name)
                          setActiveSubItem(null)
                        }
                      }}
                      className={`relative group/item py-3 transition-colors duration-100 hover:text-brand-red! ${
                        activeMegaMenu === item.name ? 'text-brand-red!' : ''
                      }`}
                    >
                      {item.name}
                      {/* Mũi tên đỏ hover chuẩn SATS */}
                      <span
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[9px] border-b-brand-red transition-opacity duration-200 ${
                          activeMegaMenu === item.name
                            ? 'opacity-100'
                            : 'opacity-0 group-hover/item:opacity-100'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* Cụm Nút Tìm kiếm & Hamburger trên Mobile (min-[800px]:hidden) */}
          <div className='flex items-center gap-1 min-[800px]:hidden z-50'>
            {/* Nút tìm kiếm mobile */}
            <button
              type='button'
              onClick={() => {
                const nextState = !isSearchOpen
                setIsSearchOpen(nextState)
                if (nextState) setIsMobileMenuOpen(false)
              }}
              className={`p-2 transition-colors flex items-center justify-center w-10 h-10 focus:outline-none ${
                isSearchOpen
                  ? 'text-brand-red'
                  : 'text-[#414042] min-[800px]:hover:text-brand-red'
              }`}
              aria-label='Search Mobile'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 18.8232L14.7886 13.6119C16.1423 11.9562 16.8079 9.84362 16.6477 7.71102C16.4874 5.57843 15.5137 3.589 13.9278 2.15423C12.3418 0.719473 10.2651 -0.0508482 8.1272 0.00260702C5.98926 0.0560622 3.95365 0.929204 2.44143 2.44143C0.929204 3.95365 0.0560622 5.98926 0.00260702 8.1272C-0.0508482 10.2651 0.719473 12.3418 2.15423 13.9278C3.589 15.5137 5.57843 16.4874 7.71102 16.6477C9.84362 16.8079 11.9562 16.1423 13.6119 14.7886L18.8232 20L20 18.8232ZM8.34887 15.0067C7.03209 15.0067 5.74487 14.6162 4.65 13.8846C3.55514 13.1531 2.70179 12.1132 2.19788 10.8967C1.69397 9.68015 1.56212 8.34149 1.81901 7.05C2.0759 5.75852 2.71 4.57221 3.64111 3.64111C4.57221 2.71 5.75852 2.0759 7.05 1.81901C8.34149 1.56212 9.68015 1.69397 10.8967 2.19788C12.1132 2.70179 13.1531 3.55514 13.8846 4.65C14.6162 5.74487 15.0067 7.03209 15.0067 8.34887C15.0047 10.114 14.3026 11.8063 13.0544 13.0544C11.8063 14.3026 10.114 15.0047 8.34887 15.0067Z'
                  fill='currentColor'
                />
              </svg>
            </button>

            {/* Nút Hamburger */}
            <button
              type='button'
              onClick={() => {
                const nextState = !isMobileMenuOpen
                setIsMobileMenuOpen(nextState)
                if (nextState) setIsSearchOpen(false)
                if (!nextState) setActiveMobileMenu(null)
              }}
              className='p-2 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none'
              aria-label='Toggle Mobile Menu'
            >
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-200 ease-in-out transform ${
                  isMobileMenuOpen
                    ? 'bg-brand-red -rotate-45 translate-y-2'
                    : isSearchOpen
                    ? 'bg-[#414042]'
                    : 'bg-brand-red'
                }`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen
                    ? 'bg-brand-red opacity-0 scale-x-0'
                    : isSearchOpen
                    ? 'bg-[#414042] opacity-100 scale-x-100'
                    : 'bg-brand-red opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-200 ease-in-out transform ${
                  isMobileMenuOpen
                    ? 'bg-brand-red rotate-45 -translate-y-2'
                    : isSearchOpen
                    ? 'bg-[#414042]'
                    : 'bg-brand-red'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Thanh nhập liệu Tìm kiếm xổ xuống cho Mobile khi bấm nút kính lúp (Phủ kín 100% hàng ngang màn hình với -mx-4 sm:-mx-6) */}
      {isSearchOpen && (
        <div className='min-[800px]:hidden bg-white px-9 py-3 transition-all duration-200 ease-in-out relative z-40 -mx-4 sm:-mx-6 shadow-[80px_50px_50px_#d9d9d9]'>
          <form
            onSubmit={e => e.preventDefault()}
            className='flex items-center max-w-[1780px] mx-auto'
          >
            <div className='relative flex-1'>
              <input
                type='text'
                placeholder='Search'
                className='w-full pl-8 pr-4 py-2 placeholder:text-current text-sm bg-transparent border-none outline-none focus:outline-none'
                autoFocus
              />
              <svg
                className='w-6 h-6 absolute left-0 top-1/2 -translate-y-1/2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </form>
          <div className='absolute top-full left-0 w-full pointer-events-none z-20 [clip-path:inset(0_0_30px_0)]'>
            <Image
              src='/images/curve-mobile-menu.svg'
              alt='Mobile Menu Bottom Curve'
              width={400}
              height={50}
              className='w-full h-auto block'
              priority
            />
          </div>
        </div>
      )}

      {/* Menu xổ xuống dành riêng cho Mobile */}
      <div
        className={`min-[800px]:hidden transition-all duration-300 ease-in-out relative -mx-4 sm:-mx-6 z-10 ${
          isMobileMenuOpen
            ? 'max-h-200 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
        }`}
      >
        {/* Lớp bọc nội dung có overflow-hidden để cắt phần menu thừa khi trượt ngang */}
        <div className='w-full bg-white relative overflow-hidden shadow-[80px_50px_50px_#d9d9d9] pt-2 pb-2'>
          {/* Container 300% để trượt ngang qua 3 cấp */}
          <div
            className={`flex w-[300%] transition-transform duration-300 ease-in-out ${
              activeMobileSubMenu
                ? 'translate-x-[-66.666667%]'
                : activeMobileMenu
                ? 'translate-x-[-33.333333%]'
                : 'translate-x-0'
            }`}
          >
            {/* Lớp menu chính (Cột 1) */}
            <div
              className={`w-1/3 px-9 flex flex-col gap-4 transition-opacity duration-300 h-[60vh] overflow-y-scroll pb-5 red-scroll ${
                activeMobileMenu
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100'
              }`}
            >
              {/* Main Nav Mobile */}
              <nav className='flex flex-col gap-0 font-medium text-sm border-b border-[#fabdc2]'>
                {[
                  { name: 'About Us', hasMegaMenu: true },
                  { name: 'Global Network', hasMegaMenu: true },
                  { name: 'Services', hasMegaMenu: true },
                  { name: 'Sustainability', hasMegaMenu: true },
                  { name: 'Investors', hasMegaMenu: true },
                  { name: 'News & Resources', hasMegaMenu: false, href: '#' },
                  { name: 'Careers', hasMegaMenu: true }
                ].map(item => {
                  if (!item.hasMegaMenu) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href || '#'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='py-5 transition-colors flex items-center justify-between border-b border-[#ececec] last:border-0'
                      >
                        <span>{item.name}</span>
                      </Link>
                    )
                  }
                  return (
                    <button
                      key={item.name}
                      type='button'
                      onClick={() => setActiveMobileMenu(item.name)}
                      className='py-5 transition-colors flex items-center justify-between border-b border-[#ececec] last:border-0 w-full text-left focus:outline-none group/mobmenu'
                    >
                      <span className='group-hover/mobmenu:text-brand-red transition-colors'>
                        {item.name}
                      </span>
                      <svg
                        className='w-5 h-5 text-brand-red'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='3'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Lớp menu con (Cột 2) */}
            <div
              className={`w-1/3 px-9 flex flex-col transition-opacity duration-300 h-[60vh] ${
                activeMobileSubMenu
                  ? 'opacity-0 pointer-events-none'
                  : activeMobileMenu
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className='flex items-center py-4 sticky top-0 bg-white z-10'>
                <button
                  type='button'
                  onClick={() => setActiveMobileMenu(null)}
                  className='flex items-center gap-2 text-xs text-black focus:outline-none group/mobback'
                >
                  <svg
                    className='w-3 h-3 rotate-180 group-hover/mobback:-translate-x-1 transition-transform'
                    fill='none'
                    stroke='red'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>Back</span>
                </button>
              </div>
              <span className='mr-auto font-bold text-xl text-brand-purple'>
                {activeMobileMenu}
              </span>

              <div className='flex-1 overflow-y-scroll py-2 pb-10 red-scroll'>
                {activeMobileMenu && (
                  <div className='flex flex-col'>
                    {(() => {
                      const menuData = megaMenusData.find(
                        m => m.id === activeMobileMenu
                      )
                      if (!menuData || !menuData.subItems) {
                        return (
                          <p className='py-4 text-black'>No sub-items found.</p>
                        )
                      }
                      return menuData.subItems.map(
                        (link: SubItem, idx: number) => (
                          <div
                            key={idx}
                            className='flex flex-col border-b border-[#ececec] last:border-0 py-3'
                          >
                            {link.children ? (
                              <button
                                onClick={() =>
                                  setActiveMobileSubMenu(link.title)
                                }
                                className='font-medium text-sm py-2 flex items-center justify-between text-black hover:text-brand-red transition-colors w-full text-left focus:outline-none'
                              >
                                <span>{link.title}</span>
                                <svg
                                  className='w-4 h-4 text-brand-red opacity-70'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='3'
                                    d='M9 5l7 7-7 7'
                                  />
                                </svg>
                              </button>
                            ) : (
                              <Link
                                href={link.external ? '#' : '/'}
                                className='font-medium text-sm py-2 flex items-center justify-between text-black hover:text-brand-red transition-colors'
                              >
                                {link.title}
                                {link.external && (
                                  <Image
                                    src='/images/external-primary.svg'
                                    className='w-3.5 h-3.5 opacity-70'
                                    alt='External'
                                    width={14}
                                    height={14}
                                  />
                                )}
                              </Link>
                            )}
                          </div>
                        )
                      )
                    })()}
                  </div>
                )}
              </div>
            </div>
            {/* Lớp menu Cột 3 */}
            <div
              className={`w-1/3 px-9 flex flex-col transition-opacity duration-300 h-[60vh] ${
                activeMobileSubMenu
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className='flex items-center py-4 sticky top-0 bg-white z-10'>
                <button
                  type='button'
                  onClick={() => setActiveMobileSubMenu(null)}
                  className='flex items-center gap-2 text-black text-xs focus:outline-none group/mobback2'
                >
                  <svg
                    className='w-3 h-3 rotate-180 group-hover/mobback2:-translate-x-1 transition-transform'
                    fill='none'
                    stroke='red'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>Back</span>
                </button>
              </div>
              <span className='mr-auto font-bold text-xl text-brand-purple'>
                {activeMobileSubMenu}
              </span>

              <div className='flex-1 overflow-y-scroll py-2 pb-10 red-scroll'>
                {activeMobileMenu && activeMobileSubMenu && (
                  <div className='flex flex-col'>
                    {(() => {
                      const menuData = megaMenusData.find(
                        m => m.id === activeMobileMenu
                      )
                      const subMenuData = menuData?.subItems?.find(
                        (s: SubItem) => s.title === activeMobileSubMenu
                      )
                      if (!subMenuData || !subMenuData.children) {
                        return (
                          <p className='py-4 text-black'>No children found.</p>
                        )
                      }
                      return subMenuData.children.map(
                        (child: SubItemChild, cIdx: number) => {
                          const label =
                            typeof child === 'string' ? child : child.label
                          const isExternal =
                            typeof child === 'object' && child.external
                          return (
                            <div
                              key={cIdx}
                              className='flex flex-col border-b border-[#ececec] last:border-0 py-3'
                            >
                              <Link
                                href={isExternal ? '#' : '/'}
                                className='font-medium text-sm py-2 flex items-center justify-between text-black hover:text-brand-red transition-colors'
                              >
                                {label}
                                {isExternal && (
                                  <Image
                                    src='/images/external-primary.svg'
                                    className='w-3.5 h-3.5 opacity-70'
                                    alt='External'
                                    width={14}
                                    height={14}
                                  />
                                )}
                              </Link>
                            </div>
                          )
                        }
                      )
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Top Nav Mobile */}
          <div className='flex flex-wrap items-center w-full px-9 pb-6 pt-2 gap-x-4 text-xs font-medium relative z-50'>
            <Link href='/contact' className='transition-colors pr-2 py-1'>
              Contact
            </Link>
            <Link href='/tenders' className='transition-colors px-2 py-1'>
              Tenders
            </Link>
            {/* Cụm Nút Ngôn ngữ trên Mobile */}
            <div>
              <button
                type='button'
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center text-black gap-1.5 px-3 py-1.5 transition-all focus:outline-none ${
                  isLangOpen
                    ? 'bg-brand-red-fluit text-white rounded-t-md border-none'
                    : 'md:hover:text-brand-red-fluit!'
                }`}
              >
                <svg
                  width='15'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34871 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM18.3333 10C18.3339 11.6243 17.8569 13.213 16.9617 14.5683C16.2431 13.7685 15.8418 12.7335 15.8333 11.6583V10H10.8333C10.6123 10 10.4004 9.9122 10.2441 9.75592C10.0878 9.59964 10 9.38768 10 9.16667V8.33333H12.5V5H14.9283L15.8525 4.07583C16.6385 4.84923 17.2626 5.77137 17.6886 6.78848C18.1145 7.80558 18.3337 8.89731 18.3333 10ZM1.7075 10.8025L5.07167 14.1667H8.33334C8.55435 14.1667 8.76631 14.2545 8.92259 14.4107C9.07887 14.567 9.16667 14.779 9.16667 15V18.2908C7.25016 18.0952 5.46033 17.2426 4.10078 15.8778C2.74122 14.5129 1.89565 12.7198 1.7075 10.8025ZM10.8333 18.2908V15C10.8333 14.337 10.5699 13.7011 10.1011 13.2322C9.63226 12.7634 8.99638 12.5 8.33334 12.5H5.76167L1.8025 8.54083C2.04098 7.18517 2.61229 5.90991 3.46515 4.82948C4.31801 3.74906 5.42576 2.89726 6.689 2.35051C7.95224 1.80377 9.33145 1.57918 10.7029 1.6969C12.0743 1.81462 13.3951 2.27097 14.5467 3.025L14.2383 3.33333H10.8333V6.66667H8.33334V9.16667C8.33334 9.82971 8.59673 10.4656 9.06557 10.9344C9.53441 11.4033 10.1703 11.6667 10.8333 11.6667H14.1667C14.1647 13.2454 14.7851 14.7614 15.8933 15.8858C14.536 17.2492 12.7476 18.0992 10.8333 18.2908Z'
                    fill={isLangOpen ? 'white' : 'currentColor'}
                  />
                </svg>
                <span>{selectedLang}</span>
              </button>
            </div>

            {/* Bảng danh sách ngôn ngữ kéo xuống bên dưới (hiển thị full hàng ngang) */}
            <div
              className={`w-full border-none bg-brand-red-fluit text-white px-3 shadow-2xl rounded-xl origin-top transition-all duration-300 ease-out flex items-center justify-start gap-2 whitespace-nowrap overflow-hidden ${
                isLangOpen
                  ? 'max-h-25 py-4 opacity-100 scale-y-100'
                  : 'max-h-0 py-0 opacity-0 scale-y-95 pointer-events-none'
              }`}
            >
              {['EN', 'FR', 'ES', 'IT']
                .filter(lang => lang !== selectedLang)
                .map(lang => (
                  <button
                    key={lang}
                    type='button'
                    onClick={() => {
                      setSelectedLang(lang)
                      setIsLangOpen(false)
                    }}
                    className='border border-white/90 text-white rounded-md px-2.5 py-1 text-xs font-bold transition-all active:scale-95'
                  >
                    {lang}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className='absolute top-full left-0 w-full pointer-events-none z-20'>
          <Image
            src='/images/curve-mobile-menu.svg'
            alt='Mobile Menu Bottom Curve'
            width={400}
            height={45}
            className='w-full h-auto block'
            priority
          />
        </div>
      </div>

      {/* KHỐI NỀN TRẮNG LIỀN MẠCH (WRAPPER) */}
      <div
        className={`hidden min-[800px]:block absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out ${
          isScrolled || activeMegaMenu
            ? 'translate-y-0'
            : '-translate-y-full group-hover:translate-y-0'
        }`}
      >
        {/* 1. Phần nền trắng của Header */}
        <div
          className={`absolute inset-0 bg-white shadow-xl transition-opacity duration-300 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* 2. Phần Mega Menu đính kèm vào mép dưới của nền Header */}
        {/* Desktop Mega Menu Dropdown */}
        <div className='absolute top-full left-0 w-full pointer-events-none flex flex-col drop-shadow-2xl'>
          <div
            onMouseLeave={() => {
              setActiveMegaMenu(null)
              setActiveSubItem(null)
            }}
            className={`relative w-full bg-white transition-all duration-500 ease-out overflow-hidden pointer-events-auto ${
              activeMegaMenu
                ? 'max-h-150 opacity-100 border-t border-gray-200/90'
                : 'max-h-0 opacity-0 border-t-0 pointer-events-none'
            }`}
          >
            {/* Close Button */}
            <button
              type='button'
              onClick={() => setActiveMegaMenu(null)}
              className='absolute top-4 right-4 text-current hover:text-black transition-transform duration-300 transform hover:rotate-90 z-50 focus:outline-none'
            >
              <svg
                width='50'
                height='50'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10 py-12 flex relative'>
              {/* Render Content using Mapping */}
              {megaMenusData.map(menu => (
                <div
                  key={menu.id}
                  className={`w-full flex transition-opacity duration-300 ${
                    lastActiveMenu === menu.id
                      ? 'opacity-100'
                      : 'opacity-0 hidden'
                  }`}
                >
                  {/* Column 1: Overview */}
                  <div className={`${menu.col1Width} flex gap-6 pr-6`}>
                    <div className='w-45 h-60 shrink-0 bg-gray-100 rounded-[20px] overflow-hidden'>
                      <Image
                        src={menu.image}
                        alt={menu.title}
                        width={180}
                        height={240}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <h2 className='text-[28px] font-bold text-[#442c55] mb-3'>
                        {menu.title}
                      </h2>
                      <p className='text-[13px] text-gray-600 mb-6 leading-relaxed max-w-60'>
                        {menu.desc}
                      </p>
                      <div>
                        <Link
                          href={menu.href}
                          onClick={() => {
                            setActiveMegaMenu(null)
                            setActiveSubItem(null)
                          }}
                          className='inline-block bg-brand-red text-white font-bold text-[13px] px-6 py-2 rounded-full hover:bg-brand-purple transition-colors'
                        >
                          Explore More
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Columns 2 and 3 */}
                  {menu.subItems && (
                    <>
                      <div className='w-[25%] border-l border-brand-red self-start flex flex-col justify-center py-2 pl-6'>
                        {menu.subItems.map((link: SubItem, idx: number) => {
                          const isSelected = activeSubItem === link.title
                          return (
                            <button
                              key={idx}
                              type='button'
                              onClick={() => {
                                if (link.external) {
                                  setActiveMegaMenu(null)
                                  setActiveSubItem(null)
                                } else if (link.hasArrow) {
                                  setActiveSubItem(
                                    isSelected ? null : link.title
                                  )
                                }
                              }}
                              className='group/megalink relative block w-full py-2.5 text-left transition-colors'
                            >
                              <div className='flex items-center justify-between pr-4 w-full'>
                                <span
                                  className={`text-[15px] transition-colors flex items-center gap-2 ${
                                    isSelected
                                      ? 'text-brand-red'
                                      : 'text-[#414042] group-hover/megalink:text-brand-red'
                                  }`}
                                >
                                  {link.title}
                                  {link.external && (
                                    <Image
                                      src='/images/external-primary.svg'
                                      alt='External link'
                                      width={14}
                                      height={14}
                                      className='opacity-70 group-hover/megalink:opacity-100 transition-opacity'
                                    />
                                  )}
                                </span>
                                <div className='shrink-0 flex items-center'>
                                  {link.hasArrow && (
                                    <svg
                                      className='w-3.75 h-3.75 text-brand-red ml-1'
                                      fill='none'
                                      stroke='currentColor'
                                      viewBox='0 0 24 24'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M9 5l7 7-7 7'
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <span
                                className={`absolute bottom-0 left-0 border-b border-brand-red transition-all duration-200 ease-in-out pointer-events-none ${
                                  isSelected
                                    ? 'w-full'
                                    : 'w-0 group-hover/megalink:w-full'
                                }`}
                              />
                            </button>
                          )
                        })}
                      </div>

                      <div
                        className={`flex w-[30%] justify-between py-2 pl-10 pr-2 border-l relative transition-all duration-300 ease-in-out ${
                          activeSubItem
                            ? 'opacity-100 border-brand-red pointer-events-auto'
                            : 'opacity-0 border-transparent pointer-events-none'
                        }`}
                      >
                        <div className='flex flex-col gap-3.5 w-full self-start max-h-90 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-red [&::-webkit-scrollbar-thumb]:rounded-full'>
                          {menu.subItems
                            .find(
                              (item: SubItem) => item.title === activeSubItem
                            )
                            ?.children?.map(
                              (child: SubItemChild, idx: number) => {
                                const label =
                                  typeof child === 'string'
                                    ? child
                                    : child.label
                                const isExternal =
                                  typeof child === 'object' && child.external
                                return (
                                  <Link
                                    key={idx}
                                    href='#'
                                    onClick={() => {
                                      setActiveMegaMenu(null)
                                      setActiveSubItem(null)
                                    }}
                                    className='group/col3link relative block w-full py-2 text-left transition-colors'
                                  >
                                    <span className='text-[15px] font-medium text-[#414042] group-hover/col3link:text-brand-red transition-colors flex items-center gap-2 justify-between w-full'>
                                      {label}
                                      {isExternal && (
                                        <Image
                                          src='/images/external-primary.svg'
                                          alt='External link'
                                          width={14}
                                          height={14}
                                          className='mr-3 shrink-0'
                                        />
                                      )}
                                    </span>
                                    <span className='absolute bottom-0 left-0 w-0 border-b border-brand-red transition-all duration-200 ease-in-out group-hover/col3link:w-full pointer-events-none' />
                                  </Link>
                                )
                              }
                            )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Phần Curve SVG đính kèm dưới cùng */}
          <div
            className={`w-full pointer-events-none z-20 transition-opacity duration-300 -mt-px ${
              activeMegaMenu ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src='/images/curve-mobile-menu.svg'
              alt='Mobile Menu Bottom Curve'
              width={1440}
              height={1440}
              className='w-full h-6 sm:h-6 lg:h-7 object-fill block'
            />
          </div>
        </div>
      </div>
    </header>
  )
}
