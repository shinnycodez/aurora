import React from 'react';
import Header from './Header';

function ContactPage() {
  const whatsappNumber = '+923001234567'; // Replace with actual WhatsApp number
  const instagramHandle = '@aurorabyfk'; // Replace with actual Instagram handle
  
  // Format WhatsApp number for link (remove +)
  const whatsappLink = `https://api.whatsapp.com/send?phone=923363711244`;
  const instagramLink = `https://www.instagram.com/aurorabyfk.pk?igsh=ajFuenFhb3NjcW5y`;

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#1E201E] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            
            {/* Contact Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif text-amber-100 mb-4">
                Contact Us
              </h1>
              <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
                Reach out to us through WhatsApp or Instagram for inquiries, custom orders, or just to say hello!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* WhatsApp Card */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#1E201E] to-[#252725] border border-green-900/30 rounded-2xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  {/* WhatsApp Icon */}
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 text-green-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.663 4.1 1.789 5.719L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif text-amber-100 mb-2">WhatsApp</h3>
                  <p className="text-amber-100/70 mb-4">Message us directly</p>
                  <p className="text-green-400 font-medium text-lg">{whatsappNumber}</p>
                  
                  <div className="mt-4 text-sm text-green-400/70">
                    <p>Click to chat on WhatsApp</p>
                    <p className="text-xs mt-1">(Response within 24 hours)</p>
                  </div>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#1E201E] to-[#252725] border border-pink-900/30 rounded-2xl p-6 md:p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,48,108,0.1)] cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Instagram Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 text-pink-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif text-amber-100 mb-2">Instagram</h3>
                  <p className="text-amber-100/70 mb-4">Follow and DM us</p>
                  <p className="text-pink-400 font-medium text-lg">{instagramHandle}</p>
                  
                  <div className="mt-4 text-sm text-pink-400/70">
                    <p>Click to view our Instagram</p>
                    <p className="text-xs mt-1">(See latest collections & stories)</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="max-w-2xl mx-auto mt-12 text-center">
              <div className="bg-gradient-to-b from-amber-900/10 to-transparent border border-amber-900/20 rounded-2xl p-6">
                <h3 className="text-lg font-serif text-amber-100 mb-4">Contact Information</h3>
                <div className="space-y-3 text-amber-100/70">
                  <p><span className="font-medium">Business Hours:</span> Monday - Saturday, 10AM - 6PM</p>
                  <p><span className="font-medium">Response Time:</span> Usually within 24 hours</p>
                  <p><span className="font-medium">Location:</span> Based in Pakistan, shipping worldwide</p>
                  <p className="text-sm mt-4 italic">For custom orders, please message us with your requirements!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;