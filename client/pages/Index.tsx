import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  Car,
  Clock,
  User,
  Fuel,
  Star,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-carent-light">
      {/* Navigation Header */}
      <nav className="relative z-50 px-4 lg:px-40 py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-carent-orange font-arial-black text-2xl font-black">
            CARENT
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Booking
            </a>
            <a
              href="#"
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Cars
            </a>
            <a
              href="#"
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Contacts
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-carent-orange text-carent-dark px-6 py-2 rounded font-poppins hover:opacity-90 transition-opacity">
              Login | Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-carent-dark"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-carent-dark font-poppins">
                Home
              </a>
              <a href="#" className="text-carent-dark font-poppins">
                About
              </a>
              <a href="#" className="text-carent-dark font-poppins">
                Booking
              </a>
              <a href="#" className="text-carent-dark font-poppins">
                Cars
              </a>
              <a href="#" className="text-carent-dark font-poppins">
                Contacts
              </a>
              <button className="bg-carent-orange text-carent-dark px-6 py-2 rounded font-poppins self-start">
                Login | Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left side - Dark background with content */}
          <div className="lg:w-[43%] bg-carent-dark relative">
            {/* Social Menu - Vertical */}
            <div className="hidden lg:flex flex-col items-center absolute left-18 top-1/2 transform -translate-y-1/2 space-y-4">
              <div className="w-px h-10 bg-carent-orange"></div>
              <div className="flex flex-col space-y-3">
                <div className="w-4 h-4 text-carent-orange cursor-pointer">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.6338 0C12.5316 2.48539e-09 13.4807 -0.000146601 14.2031 0.375C14.8119 0.691252 15.3087 1.18806 15.625 1.79688C16.0001 2.51925 16 3.4684 16 5.36621V10.6338C16 12.5316 16.0001 13.4807 15.625 14.2031C15.3087 14.8119 14.8119 15.3087 14.2031 15.625C13.4807 16.0001 12.5316 16 10.6338 16H9.33398V10.2227H11.1113L11.4668 8H9.33398V6.44434C9.334 5.82225 9.55586 5.33316 10.5332 5.33301H11.5557V3.28906C10.978 3.20019 10.356 3.11135 9.77832 3.11133C7.9561 3.11133 6.66699 4.22266 6.66699 6.22266V8H4.66699V10.2227H6.66699V16H5.36621C3.4684 16 2.51925 16.0001 1.79688 15.625C1.18806 15.3087 0.691252 14.8119 0.375 14.2031C-0.000146601 13.4807 2.48539e-09 12.5316 0 10.6338V5.36621C2.49042e-09 3.4684 -0.000146895 2.51925 0.375 1.79688C0.691252 1.18806 1.18806 0.691252 1.79688 0.375C2.51925 -0.000146895 3.4684 2.49042e-09 5.36621 0H10.6338Z" />
                  </svg>
                </div>
                <div className="w-4 h-4 text-carent-orange cursor-pointer">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.7 5.8l-4.2 4.2c-.4.4-1 .4-1.4 0l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4 3.5-3.5c.4-.4 1-.4 1.4 0s.4 1 0 1.4z" />
                  </svg>
                </div>
                <div className="w-4 h-4 text-carent-orange cursor-pointer">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>
                <div className="w-4 h-4 text-carent-orange cursor-pointer">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </div>
                <div className="w-4 h-4 text-carent-orange cursor-pointer">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.067-.315-.099-.445.099-.133.197-.513.644-.627.777-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.067-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.336-.445-.342-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.708 1.922.806 2.054.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.480 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-10 bg-carent-orange"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 lg:px-40 py-20 lg:py-32">
              <div className="max-w-lg">
                <div className="bg-black bg-opacity-15 p-8 rounded">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h1 className="text-white font-montserrat text-3xl lg:text-5xl font-bold leading-tight">
                        Enjoy your life with our comfortable cars.
                      </h1>
                      <p className="text-white text-opacity-85 font-poppins text-lg lg:text-xl leading-relaxed max-w-md">
                        Puri Tours and Travels, is ready to serve the best
                        experience in car rental.
                      </p>
                    </div>
                    <button className="bg-carent-orange text-carent-dark px-6 py-3 rounded font-poppins text-lg hover:opacity-90 transition-opacity">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Car image */}
          <div className="lg:w-[57%] relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ae11437062dd40b1430c2ccd639fc14fb3ecae?width=1818"
              alt="Luxury car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              About Us
            </h2>
            <div className="w-40 h-0.5 bg-carent-orange mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c84ae7d986ab6a9750b31323a6dc03a402dc44?width=1096"
                alt="About us"
                className="w-full h-80 object-cover rounded"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-carent-gray font-poppins text-lg lg:text-xl leading-relaxed">
                We are a specialized team committed to providing reliable car
                rental services. One of the advantages of renting a car from us
                is offering competitive and transparent prices. By providing
                services such as comprehensive insurance ......
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-20">
        <div className="text-center mb-10">
          <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
            Book Now
          </h2>
          <div className="w-44 h-0.5 bg-carent-orange mx-auto"></div>
        </div>

        <div className="bg-carent-cream py-8 lg:py-10 px-4 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 items-end">
              {/* Pickup Location */}
              <div className="bg-white rounded p-3 lg:p-4 flex items-center justify-between h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2">
                  <MapPin className="text-gray-600" size={18} />
                  <span className="text-carent-dark font-poppins text-sm lg:text-base">
                    Pickup Location
                  </span>
                </div>
                <ChevronDown className="text-gray-600" size={18} />
              </div>

              {/* Pickup Date */}
              <div className="bg-white rounded p-3 lg:p-4 flex items-center justify-between h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Calendar className="text-gray-600" size={18} />
                  <span className="text-carent-dark font-poppins text-sm lg:text-base">
                    Pickup Date
                  </span>
                </div>
                <ChevronDown className="text-gray-600" size={18} />
              </div>

              {/* Return Date */}
              <div className="bg-white rounded p-3 lg:p-4 flex items-center justify-between h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Calendar className="text-gray-600" size={18} />
                  <span className="text-carent-dark font-poppins text-sm lg:text-base">
                    Return Date
                  </span>
                </div>
                <ChevronDown className="text-gray-600" size={18} />
              </div>

              {/* Car Type */}
              <div className="bg-white rounded p-3 lg:p-4 flex items-center justify-between h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Car className="text-gray-600" size={18} />
                  <span className="text-carent-dark font-poppins text-sm lg:text-base">
                    Car Type
                  </span>
                </div>
                <ChevronDown className="text-gray-600" size={18} />
              </div>

              {/* Pickup Time */}
              <div className="bg-white rounded p-3 lg:p-4 flex items-center justify-between h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Clock className="text-gray-600" size={18} />
                  <span className="text-carent-dark font-poppins text-sm lg:text-base">
                    Pickup Time
                  </span>
                </div>
                <ChevronDown className="text-gray-600" size={18} />
              </div>

              {/* Book Now Button */}
              <button className="bg-carent-orange text-carent-dark px-4 lg:px-6 py-3 lg:py-4 rounded font-poppins text-base lg:text-lg hover:opacity-90 transition-opacity h-12 lg:h-15 col-span-full xl:col-span-1">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Featured Cars Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              Our Featured Cars
            </h2>
            <div className="w-72 h-0.5 bg-carent-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Car Card 1 */}
            <div className="border border-carent-gray-light rounded p-6 bg-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/257c29ce5b436c9ed822785adde4dac97f63314b?width=639"
                alt="Jeep XD"
                className="w-full h-44 object-cover rounded mb-3"
              />
              <div className="space-y-10">
                <div>
                  <h3 className="font-poppins text-lg text-carent-dark mb-3">
                    Jeep XD
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">Gasoline</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">SUV</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-carent-gray text-sm">Daily rate from</p>
                    <p className="text-carent-dark text-lg font-poppins">
                      $200
                    </p>
                  </div>
                  <button className="bg-carent-orange text-carent-dark px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="border border-carent-gray-light rounded p-6 bg-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad335f4c50a0975635eddc3d73b3aa1d9cbce3c3?width=639"
                alt="Ferrari Enzo"
                className="w-full h-44 object-cover rounded mb-3"
              />
              <div className="space-y-10">
                <div>
                  <h3 className="font-poppins text-lg text-carent-dark mb-3">
                    Ferrari Enzo
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">Electric</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">Sedan</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-carent-gray text-sm">Daily rate from</p>
                    <p className="text-carent-dark text-lg font-poppins">
                      $340
                    </p>
                  </div>
                  <button className="bg-carent-orange text-carent-dark px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="border border-carent-gray-light rounded p-6 bg-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66e57bc69f9c1b439b512aa2dd799fa25a87ef17?width=639"
                alt="Fiat Cope'"
                className="w-full h-44 object-cover rounded mb-3"
              />
              <div className="space-y-10">
                <div>
                  <h3 className="font-poppins text-lg text-carent-dark mb-3">
                    Fiat Cope'
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">4</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">Gasoline</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="text-carent-gray" size={16} />
                      <span className="text-carent-dark">Mini coupe</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-carent-gray text-sm">Daily rate from</p>
                    <p className="text-carent-dark text-lg font-poppins">
                      $167
                    </p>
                  </div>
                  <button className="bg-carent-orange text-carent-dark px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-6">
            <div className="w-4 h-4 bg-carent-orange rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Premium Services Section */}
      <section className="relative py-20">
        {/* Dark background */}
        <div className="absolute inset-0 bg-carent-dark"></div>

        {/* Content */}
        <div className="relative z-10 px-4 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-white font-montserrat text-3xl mb-2">
                Our Premium Services
              </h2>
              <div className="w-80 h-0.5 bg-carent-orange mx-auto mb-6"></div>
              <p className="text-white text-opacity-85 font-poppins text-lg max-w-md mx-auto">
                Carent is a reputable car rental company that offers a wide
                range of useful services for every taste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              {/* Service 1 */}
              <div className="bg-white rounded p-5 text-center shadow-lg h-80 flex flex-col justify-center items-center space-y-4">
                <div className="w-14 h-14 text-carent-orange">
                  <svg viewBox="0 0 57 57" fill="currentColor">
                    <path d="M35.5 53.5834H21.5C8.82999 53.5834 3.41666 48.1701 3.41666 35.5001V21.5001C3.41666 8.83008 8.82999 3.41675 21.5 3.41675H35.5C48.17 3.41675 53.5833 8.83008 53.5833 21.5001V35.5001C53.5833 48.1701 48.17 53.5834 35.5 53.5834ZM21.5 6.91675C10.7433 6.91675 6.91666 10.7434 6.91666 21.5001V35.5001C6.91666 46.2567 10.7433 50.0834 21.5 50.0834H35.5C46.2567 50.0834 50.0833 46.2567 50.0833 35.5001V21.5001C50.0833 10.7434 46.2567 6.91675 35.5 6.91675H21.5Z" />
                  </svg>
                </div>
                <h3 className="text-carent-dark font-montserrat text-xl">
                  24 Hours Support
                </h3>
                <p className="text-carent-gray font-poppins text-sm">
                  We support you all hours of the day,
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded p-5 text-center shadow-lg h-80 flex flex-col justify-center items-center space-y-4">
                <div className="w-14 h-14 text-carent-orange">
                  <Star size={56} />
                </div>
                <h3 className="text-carent-dark font-montserrat text-xl">
                  Qualified Assurance
                </h3>
                <p className="text-carent-gray font-poppins text-sm">
                  All cars have a valid insurance.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded p-5 text-center shadow-lg h-80 flex flex-col justify-center items-center space-y-4">
                <div className="w-14 h-14 text-carent-orange">
                  <svg viewBox="0 0 57 57" fill="currentColor">
                    <path d="M28.5 47.75C17.8833 47.75 9.25 39.1167 9.25 28.5C9.25 17.8833 17.8833 9.25 28.5 9.25C39.1167 9.25 47.75 17.8833 47.75 28.5C47.75 39.1167 39.1167 47.75 28.5 47.75ZM28.5 12.75C19.82 12.75 12.75 19.82 12.75 28.5C12.75 37.18 19.82 44.25 28.5 44.25C37.18 44.25 44.25 37.18 44.25 28.5C44.25 19.82 37.18 12.75 28.5 12.75Z" />
                  </svg>
                </div>
                <h3 className="text-carent-dark font-montserrat text-xl">
                  GPS on Cars
                </h3>
                <p className="text-carent-gray font-poppins text-sm">
                  All cars are equipped with GPS navigation system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              What Our Clients Say?
            </h2>
            <div className="w-80 h-0.5 bg-carent-orange mx-auto"></div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <ArrowLeft
              className="text-carent-orange cursor-pointer"
              size={32}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
              {/* Testimonial 1 */}
              <div className="border border-carent-gray-light rounded p-10 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e27a57389021b76fa2a8c70ef41ccfcf959935e0?width=256"
                  alt="Kristin Watson"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-carent-dark font-montserrat text-xl mb-5">
                  Kristin Watson
                </h4>
                <p className="text-carent-gray font-poppins text-lg leading-relaxed">
                  I rented a car for a one-week trip from Carnet on the
                  recommendation of my friend. Actually, I am satisfied with
                  them.
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="border border-carent-gray-light rounded p-10 text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/21a2d397fbf74d833772591042980cffab761b0f?width=256"
                  alt="Robert Fox"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-carent-dark font-montserrat text-xl mb-5">
                  Robert Fox
                </h4>
                <p className="text-carent-gray font-poppins text-lg leading-relaxed">
                  During my last trip, I used a Carent sport car . The car was
                  completely clean and had enough gas.
                </p>
              </div>
            </div>

            <ArrowRight
              className="text-carent-orange cursor-pointer"
              size={32}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-carent-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-carent-dark font-montserrat text-4xl mb-2">
                10+
              </h3>
              <p className="text-carent-gray font-poppins text-xl">
                Cars For Rent
              </p>
            </div>
            <div>
              <h3 className="text-carent-dark font-montserrat text-4xl mb-2">
                100+
              </h3>
              <p className="text-carent-gray font-poppins text-xl">
                Happy Clients
              </p>
            </div>
            <div>
              <h3 className="text-carent-dark font-montserrat text-4xl mb-2">
                50+
              </h3>
              <p className="text-carent-gray font-poppins text-xl">
                Rental Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              Contact Us
            </h2>
          </div>

          <div className="bg-carent-dark rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Form */}
              <div className="lg:w-1/2 p-10">
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-carent-gray-light rounded bg-carent-light font-poppins"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-carent-gray-light rounded bg-carent-light font-poppins"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-3 border border-carent-gray-light rounded bg-carent-light font-poppins resize-none"
                  ></textarea>
                  <button className="bg-carent-orange text-carent-dark px-6 py-3 rounded font-poppins hover:opacity-90 transition-opacity">
                    Send A Message
                  </button>
                </div>
              </div>

              {/* Contact Image */}
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-carent-dark py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <p className="text-white font-poppins">
              Need help renting a car? Please call +1-333-444-5555
            </p>
            <div className="text-carent-orange font-arial-black text-2xl font-black">
              CARENT
            </div>
            <div className="flex gap-4">
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.6338 0C12.5316 2.48539e-09 13.4807 -0.000146601 14.2031 0.375C14.8119 0.691252 15.3087 1.18806 15.625 1.79688C16.0001 2.51925 16 3.4684 16 5.36621V10.6338C16 12.5316 16.0001 13.4807 15.625 14.2031C15.3087 14.8119 14.8119 15.3087 14.2031 15.625C13.4807 16.0001 12.5316 16 10.6338 16H9.33398V10.2227H11.1113L11.4668 8H9.33398V6.44434C9.334 5.82225 9.55586 5.33316 10.5332 5.33301H11.5557V3.28906C10.978 3.20019 10.356 3.11135 9.77832 3.11133C7.9561 3.11133 6.66699 4.22266 6.66699 6.22266V8H4.66699V10.2227H6.66699V16H5.36621C3.4684 16 2.51925 16.0001 1.79688 15.625C1.18806 15.3087 0.691252 14.8119 0.375 14.2031C-0.000146601 13.4807 2.48539e-09 12.5316 0 10.6338V5.36621C2.49042e-09 3.4684 -0.000146895 2.51925 0.375 1.79688C0.691252 1.18806 1.18806 0.691252 1.79688 0.375C2.51925 -0.000146895 3.4684 2.49042e-09 5.36621 0H10.6338Z" />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.7 5.8l-4.2 4.2c-.4.4-1 .4-1.4 0l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4 3.5-3.5c.4-.4 1-.4 1.4 0s.4 1 0 1.4z" />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.067-.315-.099-.445.099-.133.197-.513.644-.627.777-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.067-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.336-.445-.342-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.708 1.922.806 2.054.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.480 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
