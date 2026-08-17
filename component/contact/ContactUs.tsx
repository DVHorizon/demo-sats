'use client'

export default function ContactUs () {
  return (
    <section className='w-full bg-white text-[#414042] pt-[180px] min-[800px]:pt-[300px] pb-20'>
      <div className='w-full max-w-[1780px] mx-auto px-4 lg:px-10'>
        {/* Breadcrumb & Title Area */}
        <div className='mb-10 max-w-3xl'>
          <p className='text-sm text-gray-500 mb-4 hover:text-brand-red transition-colors cursor-pointer w-fit'>
            Home
          </p>
          <h1
            className='text-[3.125rem] lg:text-[7.7777777778rem] font-normal  text-brand-purple mb-4'
            style={{ fontFamily: "'Century Gothic', 'Arial', sans-serif" }}
          >
            Contact us
          </h1>
          <p className='text-base leading-relaxed text-gray-700'>
            Thank you for visiting us, if you have any questions please fill out
            the form below and we will do our best to get back to you.
          </p>
        </div>

        {/* Form Area */}
        <form
          className='max-w-3xl flex flex-col gap-6'
          onSubmit={e => e.preventDefault()}
        >
          {/* Nature of Enquiry */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='Dropdown-1'
              className='font-bold text-[1.25rem] text-[#414042]'
            >
              Nature of Enquiry <span>*</span>
            </label>
            <select
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all bg-white'
              name='enquire'
              id='Dropdown-1'
              required
            >
              <option value=''>Please select your nature of enquiry</option>
              <option value='Business Partnership Enquiry'>
                Business Partnership Enquiry
              </option>
              <option value='Careers'>Careers</option>
              <option value='Cargo Tracing and Clearance'>
                Cargo Tracing and Clearance
              </option>
              <option value='COSYS+ and Self-service Kiosks'>
                COSYS+ and Self-service Kiosks
              </option>
              <option value='Credit Card Transactions and Payments'>
                Credit Card Transactions and Payments
              </option>
              <option value='Cruise Terminal Operations'>
                Cruise Terminal Operations
              </option>
              <option value='Data Protection'>Data Protection</option>
            </select>
          </div>

          {/* Name */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='name'
              className='font-bold text-[1.25rem] text-[#414042]'
            >
              Name <span>*</span>
            </label>
            <input
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all placeholder:text-gray-500 placeholder:italic'
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              required
            />
          </div>

          {/* E-mail Address */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-bold text-sm text-[#414042]'>
              E-mail Address <span>*</span>
            </label>
            <input
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all placeholder:text-gray-500 placeholder:italic'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your e-mail'
              required
            />
          </div>

          {/* Phone Number */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='phone' className='font-bold text-sm text-[#414042]'>
              Phone Number
            </label>
            <input
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all placeholder:text-gray-500 placeholder:italic'
              type='tel'
              name='phone'
              id='phone'
              placeholder='Enter your number'
            />
          </div>

          {/* Message */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='message'
              className='font-bold text-sm text-[#414042]'
            >
              Your Message <span>*</span>
            </label>
            <textarea
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all resize-y placeholder:text-gray-500'
              name='message'
              id='message'
              rows={5}
              required
            />
          </div>

          {/* Additional Remarks */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='remarks'
              className='font-bold text-sm text-[#414042]'
            >
              Additional Remarks
            </label>
            <textarea
              className='border border-black rounded-3xl px-4 py-3 outline-none focus:border-2 transition-all resize-y placeholder:text-gray-500'
              name='remarks'
              id='remarks'
              rows={4}
            />
          </div>

          {/* Consent Checkbox */}
          <div className='flex items-start gap-3 mt-2'>
            <input
              type='checkbox'
              name='police'
              id='police'
              className='mt-1 w-4 h-4 accent-brand-red cursor-pointer shrink-0'
              required
            />
            <label
              htmlFor='police'
              className='text-sm text-[#414042] cursor-pointer leading-relaxed'
            >
              I consent to the collection and use of my data in accordance with
              the privacy policy. <span className='text-brand-red'>*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className='mt-4'>
            <button
              className='bg-brand-red hover:bg-[#b00d23] text-white font-bold text-sm px-4 py-2 rounded-2xl transition duration-300 ease-in-out w-fit'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
