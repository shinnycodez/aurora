import { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturedCategories from './components/FeaturedCategories';
import ShopTheLook from './components/ShopTheLook';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#1E201E] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            <HeroBanner />
            <FeaturedCategories />
            <ShopTheLook />
            
            {/* About Us Section - Aurora by FK */}
            <div className="mt-16 mb-12 relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"></div>
              <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full border border-amber-300/10 animate-pulse"></div>
              <div className="absolute -right-4 bottom-1/4 w-6 h-6 rounded-full border border-amber-300/10 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="bg-gradient-to-b from-[#1E201E] to-[#252725] rounded-2xl border border-amber-900/20 p-6 md:p-8 relative overflow-hidden group">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMC0xOGM5Ljk0MSAwIDE4IDguMDU5IDE4IDE4cy04LjA1OSAxOC0xOCAxOC0xOC04LjA1OS0xOC0xOCA4LjA1OS0xOCAxOC0xOHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+')]"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Section Header */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-300/30"></div>
                      <h2 className="text-3xl md:text-4xl font-serif text-amber-100 tracking-wider text-center">
                        Aurora by FK
                      </h2>
                      <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300/30"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Quote Card */}
                    <div className="lg:w-2/5">
                      <div className="sticky top-24">
                        <div className="bg-gradient-to-br from-amber-900/20 to-transparent p-6 rounded-xl border border-amber-800/30 backdrop-blur-sm">
                          <div className="text-amber-300/80 text-sm mb-2">From textile to jewelry</div>
                          <h3 className="text-xl font-serif text-amber-100 mb-4 leading-relaxed">
                            A journey of courage, creativity, and handmade dreams.
                          </h3>
                          <div className="flex items-center gap-3 mt-6">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500"></div>
                            <div>
                              <div className="text-amber-100 font-medium">FK</div>
                              <div className="text-amber-300/60 text-sm">Founder & Designer</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Signature */}
                        <div className="mt-8 opacity-60">
                          <div className="text-amber-100/80 italic text-sm">Handmade with love ❤️</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Story Content */}
                    <div className="lg:w-3/5">
                      <div className="space-y-6">
                        <p className="text-amber-100/90 leading-relaxed">
                          I started my journey as a Textile Designer, weaving stories through fabric, colors, and textures. With time, I worked as a Fashion Designer for different brands, learning the value of detail, craftsmanship, and creative discipline.
                        </p>
                        
                        <div className="relative pl-6 border-l-2 border-amber-300/20">
                          <div className="absolute -left-1 top-3 w-2 h-2 rounded-full bg-amber-300/40"></div>
                          <p className="text-amber-100/90 leading-relaxed italic">
                            But growth often demands courage. I chose to step away from a toxic environment and listen to my inner voice — the one that believed creativity should heal, not exhaust.
                          </p>
                        </div>
                        
                        <p className="text-amber-100/90 leading-relaxed">
                          That moment of pause became a new beginning. From threads to stones, from fabric to form, <span className="text-amber-300 font-medium">Aurora by FK</span> was born.
                        </p>
                        
                        {isExpanded ? (
                          <>
                            <p className="text-amber-100/90 leading-relaxed">
                              Each handmade piece carries a story of resilience, freedom, and self-belief — created slowly, thoughtfully, and with heart.
                            </p>
                            
                            <p className="text-amber-100/90 leading-relaxed font-medium">
                              This is more than jewelry. It is a celebration of starting over, of choosing passion, and of turning handmade dreams into reality.
                            </p>
                            
                            <button
                              onClick={() => setIsExpanded(false)}
                              className="text-amber-300 hover:text-amber-200 text-sm flex items-center gap-2 transition-colors mt-4"
                            >
                              <span>Read less</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="text-amber-100/90 leading-relaxed">
                              Each handmade piece carries a story of resilience, freedom, and self-belief...
                            </p>
                            
                            <button
                              onClick={() => setIsExpanded(true)}
                              className="text-amber-300 hover:text-amber-200 text-sm flex items-center gap-2 transition-colors mt-2"
                            >
                              <span>Continue reading</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </>
                        )}
                        
                        {/* Materials/Symbols */}
                        <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-amber-900/30">
                          {['Textile', 'Stones', 'Thread', 'Form', 'Heart', 'Dreams'].map((item, index) => (
                            <div key={index} className="px-4 py-2 rounded-full bg-amber-900/10 border border-amber-800/20">
                              <span className="text-amber-300/80 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;