import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import EnquireForm from "@/src/components/common/enquireForm"

function ContactUs() {
  return (
    <div className="luxury-bg">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-gray-800 font-serif leading-tight">
            <span className="text-[#dbbb90] font-normal">Contact</span> Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row py-20 items-center justify-center container mx-auto max-w-7xl">
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:pr-16 space-y-8 text-center lg:text-left">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-[#dbbb90] text-sm font-medium uppercase tracking-widest font-serif mb-4">
              CONNECT WITH LUXURY
            </p>
            <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight font-serif mb-6">
              Get in Touch with <span className="text-[#dbbb90] font-normal">MAK Properties</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-serif">
              Have a question or ready to embark on your real estate journey? Our team is here to assist you every step of
              the way. Reach out to us via phone, email, or simply fill out the contact form below. We look forward to
              hearing from you!
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#dbbb90]/10 to-[#C2A17B]/10 rounded-2xl p-6 border border-[#dbbb90]/20">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 font-serif">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#dbbb90] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-serif">Address</p>
                  <p className="text-gray-600 font-serif">123, Victory Heights, Dubai Sports City</p>
                  <p className="text-gray-600 font-serif">Dubai – UAE</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#dbbb90] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-serif">Phone</p>
                  <a
                    href="tel:+971508050394"
                    className="text-[#dbbb90] hover:text-[#C2A17B] transition-colors font-serif"
                  >
                    +971 50 805 0394
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#dbbb90] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-serif">Email</p>
                  <a
                    href="mailto:info@makproperties.ae"
                    className="text-[#dbbb90] hover:text-[#C2A17B] transition-colors font-serif"
                  >
                    info@makproperties.ae
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#dbbb90] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-serif">Business Hours</p>
                  <p className="text-gray-600 font-serif">Mon – Fri: 9AM to 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:pl-16 mt-8 lg:mt-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <EnquireForm type="contact"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

