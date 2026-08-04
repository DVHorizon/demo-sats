import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: number
  date: string
  title: string
  image: string
  link: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '20 Jul 2026',
    title: 'SATS’ next lap will lean on AI, F1-style telemetry – and hot wings',
    image: '/images/CF AI Control tower thumbnail.jpg',
    link: '/media/sats-in-the-news/sats-next-lap-will-lean-on-ai'
  },
  {
    id: 2,
    date: '25 Jun 2026',
    title:
      'High-nutrition Singapore tomatoes and fish could soon be on airline menus and in schools',
    image: '/images/HIGH-N_1.PNG',
    link: '/media/sats-in-the-news/high-nutrition-singapore-tomatoes'
  },
  {
    id: 3,
    date: '24 Jun 2026',
    title:
      "SATS signs MOU with TLL to bring Singapore's home-grown food innovations from the laboratory to the table",
    image:
      "/images/SATS signs MOU with TLL to to bring Singapore's home-grown food innovations from the laboratory to the table.png",
    link: '/media/sats-in-the-news/sats-signs-mou-with-tll'
  }
]

export default function SatsInTheNews () {
  return (
    <section className='w-full bg-white py-16 lg:py-33 text-[#482146]'>
      <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Cột trái: Heading & Nút View All */}
          <div className='lg:col-span-4 flex flex-col items-start'>
            <h2
              className='text-[36px] lg:text-[80px] font-bold text-[#482146] leading-[1.1] mb-6'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              SATS in
              <br />
              the news
            </h2>
            <p className='text-[#50284f]/80 mb-8 leading-relaxed text-[14px] lg:text-[18px]'>
              A world leader in air cargo and inflight catering solutions
            </p>
            <Link
              href='/media/sats-in-the-news'
              className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-7 py-3 rounded-full text-md transition-colors duration-500 shadow-sm'
              style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
            >
              View All Media Features
            </Link>
          </div>

          {/* Cột phải: Danh sách bài viết & Nút Load More */}
          <div className='lg:col-span-8 flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12'>
              {newsData.map(item => (
                <Link
                  key={item.id}
                  href={item.link}
                  className='group flex flex-wrap gap-4 items-start'
                >
                  {/* Thumbnail bo góc 20px */}
                  <div className='relative w-full sm:w-47.5 aspect-16/10 shrink-0 rounded-[20px] overflow-hidden bg-gray-100 shadow-sm'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover'
                      sizes='170px'
                    />
                  </div>

                  {/* Nội dung */}
                  <div className='flex flex-col flex-1 pt-1 text-[20px] md:text-[16px] lg:text-[20px]'>
                    <span
                      className='text-[#482146] font-bold mb-1'
                      style={{
                        fontFamily: "'Century Gothic', 'Arial', sans-serif"
                      }}
                    >
                      {item.date}
                    </span>
                    <h3
                      className='text-[#482146] font-bold leading-snug transition-colors'
                      style={{
                        fontFamily: "'Century Gothic', 'Arial', sans-serif"
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Nút Load More */}
            <div className='flex justify-center'>
              <button
                className='bg-[#e31837] hover:bg-[#351833] text-white font-bold px-9 py-2.5 rounded-full text-sm transition-colors shadow-sm'
                style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
