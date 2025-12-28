import React, { useEffect, useState } from 'react';
import Header from './Header';
import SidebarFilters from './SidebarFilters';
import ProductGrid from './ProductGrid';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { AiOutlineClose } from 'react-icons/ai';

function Products() {
  const [filters, setFilters] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currency, setCurrency] = useState('PKR'); // PKR, USD, EUR
  const [exchangeRates] = useState({
    PKR: 1,
    USD: 280,
    EUR: 330
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Format price function
  const formatPrice = (price, currencyType = currency) => {
    const currencySymbols = {
      PKR: 'PKR ',
      USD: '$',
      EUR: '€'
    };
    
    let convertedPrice = price;
    if (currencyType === 'USD') {
      convertedPrice = (price / exchangeRates.USD).toFixed(2);
    } else if (currencyType === 'EUR') {
      convertedPrice = (price / exchangeRates.EUR).toFixed(2);
    }
    
    return `${currencySymbols[currencyType]}${Number(convertedPrice).toLocaleString('en-US', {
      minimumFractionDigits: currencyType === 'PKR' ? 0 : 2,
      maximumFractionDigits: currencyType === 'PKR' ? 0 : 2
    })}`;
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#1E201E] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="gap-1 px-4 md:px-6 flex flex-1 justify-center py-5">
          {/* Sidebar visible only on desktop */}
          <div className="hidden md:block">
            <SidebarFilters onFilterChange={setFilters} />
          </div>

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Mobile Categories Header with Filters Button and Currency Selector */}
            <div className="flex items-center justify-between md:hidden mb-4 px-4">
              <h2 className="text-lg font-semibold text-white">Products</h2>
              <div className="flex gap-2">
                {/* Currency Selector */}
                <div className="flex gap-1">
                  {['PKR', 'USD', 'EUR'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-2 py-1 text-xs rounded-full transition-colors ${
                        currency === curr
                          ? 'bg-white text-black font-medium'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
                <button
                  className="bg-black text-white px-3 py-1 rounded-md text-sm"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>
              </div>
            </div>

            {/* Desktop Currency Selector */}
            <div className="hidden md:flex items-center justify-between mb-4 px-4">
              <h2 className="text-lg font-semibold text-white">Products</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">Currency:</span>
                <div className="flex gap-1">
                  {['PKR', 'USD', 'EUR'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        currency === curr
                          ? 'bg-white text-black font-medium'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Fullscreen Filter Overlay */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto md:hidden">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-gray-500"
                  >
                    <AiOutlineClose className="w-6 h-6" />
                  </button>
                </div>
                <SidebarFilters onFilterChange={setFilters} onClose={() => setMobileFiltersOpen(false)} />
              </div>
            )}

            <ProductGrid 
              products={allProducts} 
              filters={filters} 
              currency={currency}
              formatPrice={formatPrice}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;