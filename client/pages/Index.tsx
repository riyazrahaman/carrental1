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
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Form state for booking
  const [bookingForm, setBookingForm] = useState({
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    carType: "",
    pickupTime: "",
    returnTime: "",
  });

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Featured cars data
  const featuredCars = [
    {
      id: 1,
      name: "Toyota Etios",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2F588584f8ded14eb483b87f65836ae8b2?format=webp&width=800",
      seats: 5,
      fuel: "Gasoline",
      type: "Sedan",
      price: "",
    },
    {
      id: 2,
      name: "Toyota Glanza",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2Fe5384010f0fc4c52817dd6cce57f7fb1?format=webp&width=800",
      seats: 5,
      fuel: "Gasoline",
      type: "Hatchback",
      price: "",
    },
    {
      id: 3,
      name: "Kia Carens",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2F3084b3e50b814ab684a02b7ca70bd563?format=webp&width=800",
      seats: 7,
      fuel: "Gasoline",
      type: "MPV",
      price: "",
    },
    {
      id: 4,
      name: "Swift Dzire",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F366dffc22aa74658b3ec0d3a7655c090%2F5cc5f67a239a4620be4bca5e3f78e48f?format=webp&width=800",
      seats: 5,
      fuel: "Gasoline",
      type: "Sedan",
      price: "",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Venkatesh",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      review:
        "I rented a car for a one-week trip from Puri Tours and Travels on the recommendation of my friend. Actually, I am satisfied with them.",
    },
    {
      id: 2,
      name: "Ramu",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      review:
        "During my last trip, I used a Puri Tours and Travels car. The car was completely clean and had enough gas.",
    },
    {
      id: 3,
      name: "Rahul",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      review:
        "Excellent service from Puri Tours and Travels! The booking process was smooth and the car was in perfect condition. Highly recommended for family trips.",
    },
    {
      id: 4,
      name: "Shiva",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      review:
        "Great experience with Puri Tours and Travels. Professional staff, clean vehicles, and affordable rates. Will definitely book again for my next trip.",
    },
  ];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Carousel navigation functions - for 3 cars visible with 4th car accessible
  const nextCar = () => {
    // Only 2 positions: 0 (showing cars 1,2,3) and 1 (showing cars 2,3,4)
    setCurrentCarIndex((prev) => (prev + 1) % 2);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + 2) % 2);
  };

  const goToSlide = (index: number) => {
    setCurrentCarIndex(index);
  };

  // Testimonial navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length,
    );
  };

  // Contact form WhatsApp function
  const sendContactToWhatsApp = () => {
    const { name, email, message } = contactForm;

    if (!name || !email || !message) {
      alert("Please fill in all contact details");
      return;
    }

    const whatsappMessage =
      `Hello! New contact form submission:\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `💬 Message: ${message}\n\n` +
      `Please respond to this inquiry. Thank you!`;

    const whatsappUrl = `https://wa.me/919494222882?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setContactForm({ name: "", email: "", message: "" });
  };

  // WhatsApp booking function
  const sendBookingToWhatsApp = () => {
    const {
      pickupLocation,
      pickupDate,
      returnDate,
      carType,
      pickupTime,
      returnTime,
    } = bookingForm;

    if (
      !pickupLocation ||
      !pickupDate ||
      !returnDate ||
      !carType ||
      !pickupTime ||
      !returnTime
    ) {
      alert("Please fill in all booking details");
      return;
    }

    const message =
      `Hello! I would like to book a car with the following details:\n\n` +
      `🚗 Car Type: ${carType}\n` +
      `📍 Pickup Location: ${pickupLocation}\n` +
      `📅 Pickup Date: ${pickupDate}\n` +
      `🕐 Pickup Time: ${pickupTime}\n` +
      `📅 Return Date: ${returnDate}\n` +
      `🕐 Return Time: ${returnTime}\n\n` +
      `Please confirm availability and pricing. Thank you!`;

    const whatsappUrl = `https://wa.me/919494222882?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // WhatsApp car booking function
  const sendCarBookingToWhatsApp = (carName: string) => {
    const message = `Hello! I want to book ${carName}. Please provide more details and pricing. Thank you!`;
    const whatsappUrl = `https://wa.me/919494222882?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-carent-light">
      {/* Navigation Header */}
      <nav className="relative z-50 px-4 lg:px-40 py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-carent-orange font-arial-black text-lg font-black">
            PURI TOURS AND TRAVELS
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection("cars")}
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Cars
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-carent-dark font-poppins hover:text-carent-orange transition-colors"
            >
              Contacts
            </button>
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
              <button
                onClick={() => scrollToSection("hero")}
                className="text-carent-dark font-poppins text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-carent-dark font-poppins text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="text-carent-dark font-poppins text-left"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className="text-carent-dark font-poppins text-left"
              >
                Cars
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-carent-dark font-poppins text-left"
              >
                Contacts
              </button>
              <button className="bg-carent-orange text-carent-dark px-6 py-2 rounded font-poppins self-start">
                Login | Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen lg:h-[742px] overflow-hidden"
      >
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Black background that covers part of the hero */}
          <div className="absolute top-0 left-0 w-full xl:w-[43%] 2xl:w-[613px] h-full bg-carent-dark z-10"></div>

          {/* Main car image positioned to the right */}
          <div className="absolute top-0 right-0 w-full xl:w-[63%] 2xl:w-[909px] h-[70%] xl:h-[545px] xl:top-[104px] z-20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ae11437062dd40b1430c2ccd639fc14fb3ecae?width=1818"
              alt="Luxury car"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Social Menu - Vertical */}
          <div className="flex flex-col items-center absolute left-[3%] xl:left-[72px] top-1/3 space-y-4 z-30">
            <div className="w-px h-[38px] bg-carent-orange"></div>
            <div className="flex flex-col space-y-3">
              <div className="w-4 h-4 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.6338 0C12.5316 2.48539e-09 13.4807 -0.000146601 14.2031 0.375C14.8119 0.691252 15.3087 1.18806 15.625 1.79688C16.0001 2.51925 16 3.4684 16 5.36621V10.6338C16 12.5316 16.0001 13.4807 15.625 14.2031C15.3087 14.8119 14.8119 15.3087 14.2031 15.625C13.4807 16.0001 12.5316 16 10.6338 16H9.33398V10.2227H11.1113L11.4668 8H9.33398V6.44434C9.334 5.82225 9.55586 5.33316 10.5332 5.33301H11.5557V3.28906C10.978 3.20019 10.356 3.11135 9.77832 3.11133C7.9561 3.11133 6.66699 4.22266 6.66699 6.22266V8H4.66699V10.2227H6.66699V16H5.36621C3.4684 16 2.51925 16.0001 1.79688 15.625C1.18806 15.3087 0.691252 14.8119 0.375 14.2031C-0.000146601 13.4807 2.48539e-09 12.5316 0 10.6338V5.36621C2.49042e-09 3.4684 -0.000146895 2.51925 0.375 1.79688C0.691252 1.18806 1.18806 0.691252 1.79688 0.375C2.51925 -0.000146895 3.4684 2.49042e-09 5.36621 0H10.6338Z" />
                </svg>
              </div>
              <div className="w-4 h-4 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M7.99902 2.18164C6.4203 2.18164 6.22169 2.18858 5.60156 2.2168C4.98237 2.24515 4.5593 2.34349 4.18945 2.4873C3.8068 2.63591 3.48159 2.83469 3.1582 3.1582C2.83475 3.48145 2.63636 3.80614 2.4873 4.18848C2.34309 4.55847 2.2447 4.98162 2.2168 5.60059C2.18904 6.22118 2.18164 6.41994 2.18164 8C2.18164 9.58008 2.18868 9.77787 2.2168 10.3984C2.24528 11.0178 2.34355 11.4406 2.4873 11.8105C2.636 12.1931 2.83481 12.5175 3.1582 12.8408C3.48147 13.1645 3.80606 13.3641 4.18848 13.5127C4.55861 13.6566 4.98142 13.7548 5.60059 13.7832C6.22112 13.8114 6.41942 13.8184 7.99902 13.8184C9.57886 13.8184 9.7772 13.8114 10.3975 13.7832C11.0168 13.7548 11.4404 13.6566 11.8105 13.5127C12.1931 13.3641 12.5176 13.1645 12.8408 12.8408C13.1642 12.5175 13.3627 12.193 13.5117 11.8105C13.6547 11.4405 13.7531 11.0176 13.7822 10.3984C13.8101 9.77796 13.8174 9.57998 13.8174 8C13.8174 6.41994 13.8101 6.22118 13.7822 5.60059C13.7531 4.98144 13.6547 4.55833 13.5117 4.18848C13.3627 3.80607 13.1643 3.48142 12.8408 3.1582C12.5172 2.83462 12.1935 2.63578 11.8105 2.4873C11.4397 2.34346 11.0166 2.24519 10.3975 2.2168C9.77697 2.18856 9.57893 2.18164 7.99902 2.18164Z"
                    fill="url(#paint0_radial_1_122)"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M10.3203 3.78906C9.14981 3.78911 8.20117 4.81569 8.20117 6.08301C8.2012 6.25988 8.21977 6.43668 8.25586 6.60449C6.49489 6.5091 4.93248 5.59605 3.8877 4.20605C3.70423 4.54674 3.60059 4.94244 3.60059 5.36035C3.60061 6.15521 3.97468 6.8591 4.54395 7.27246C4.1964 7.25883 3.86896 7.1544 3.58301 6.98633V7.01367C3.58301 8.12658 4.3139 9.05374 5.28418 9.2627C5.10508 9.31717 4.91803 9.34375 4.72559 9.34375C4.58912 9.34374 4.45575 9.32998 4.32617 9.30273C4.5962 10.2112 5.37943 10.879 6.30664 10.8926C5.58141 11.5104 4.6665 11.8789 3.67383 11.8789C3.50294 11.8789 3.33467 11.8648 3.16895 11.8467C4.10684 12.4962 5.21988 12.8779 6.41699 12.8779C10.3144 12.8779 12.4462 9.38039 12.4463 6.35059C12.4463 6.25067 12.4453 6.1507 12.4414 6.05078C12.8552 5.7283 13.2134 5.32393 13.498 4.86523C13.1186 5.04693 12.7092 5.16912 12.2803 5.22363C12.7185 4.94206 13.0539 4.49284 13.2129 3.95703C12.803 4.22039 12.3497 4.41083 11.8662 4.51074C11.4799 4.0657 10.9296 3.78906 10.3203 3.78906Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M8.17969 2.19043C5.04099 2.19056 2.48661 4.74371 2.48535 7.88184C2.48494 8.88503 2.74678 9.86437 3.24512 10.7275L2.4375 13.6768L5.45605 12.8857C6.28782 13.3392 7.22464 13.5778 8.17773 13.5781H8.17969C11.318 13.5781 13.8735 11.0248 13.875 7.88672C13.8756 6.36593 13.2832 4.93519 12.208 3.85938C11.2002 2.85103 9.88078 2.26696 8.46484 2.19727L8.17969 2.19043Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M12.9131 4.52148C13.081 3.8482 12.6567 3.54259 12.2168 3.74219L2.58398 7.45703C1.92662 7.72078 1.93037 8.08743 2.46387 8.25098L4.86621 9.00098L5.78613 11.8193C5.89783 12.1277 5.84237 12.2499 6.16602 12.25C6.41597 12.25 6.5268 12.136 6.66602 12C6.75454 11.9134 7.28033 11.4026 7.86719 10.832L10.3662 12.6787C10.8261 12.9324 11.158 12.8003 11.2725 12.251L12.9131 4.52148Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
            </div>
            <div className="w-px h-[38px] bg-carent-orange"></div>
          </div>

          {/* Hero Content - positioned over the black background */}
          <div className="absolute left-[8%] xl:left-[160px] top-[20%] xl:top-[149px] w-[35%] xl:w-[528px] bg-black bg-opacity-15 p-6 xl:p-8 z-30">
            <div className="flex flex-col gap-8 xl:gap-12">
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-montserrat text-3xl xl:text-5xl font-bold leading-tight xl:leading-normal">
                  Enjoy your life with our comfortable cars.
                </h1>
                <p className="text-white text-opacity-85 font-poppins text-lg xl:text-2xl leading-relaxed xl:leading-10">
                  Puri Tours and Travels, is ready to serve the best experience
                  in car rental.
                </p>
              </div>
              <button className="bg-carent-orange text-carent-dark px-6 py-3 rounded font-poppins text-lg xl:text-2xl w-48 xl:w-64 flex justify-center items-center hover:opacity-90 transition-opacity">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden relative min-h-screen flex flex-col">
          {/* Mobile car image background */}
          <div className="absolute inset-0 z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ae11437062dd40b1430c2ccd639fc14fb3ecae?width=1818"
              alt="Luxury car"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-carent-dark bg-opacity-60"></div>
          </div>

          {/* Mobile Hero Content */}
          <div className="relative z-30 flex-1 flex items-center justify-center px-6 py-16">
            <div className="text-center space-y-8 max-w-lg">
              <div className="space-y-4">
                <h1 className="text-white font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                  Enjoy your life with our comfortable cars.
                </h1>
                <p className="text-white text-opacity-85 font-poppins text-lg md:text-xl leading-relaxed">
                  Puri Tours and Travels, is ready to serve the best experience
                  in car rental.
                </p>
              </div>
              <button className="bg-carent-orange text-carent-dark px-8 py-3 rounded font-poppins text-lg hover:opacity-90 transition-opacity">
                Explore Now
              </button>
            </div>
          </div>

          {/* Mobile Social Icons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-4">
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.6338 0C12.5316 2.48539e-09 13.4807 -0.000146601 14.2031 0.375C14.8119 0.691252 15.3087 1.18806 15.625 1.79688C16.0001 2.51925 16 3.4684 16 5.36621V10.6338C16 12.5316 16.0001 13.4807 15.625 14.2031C15.3087 14.8119 14.8119 15.3087 14.2031 15.625C13.4807 16.0001 12.5316 16 10.6338 16H9.33398V10.2227H11.1113L11.4668 8H9.33398V6.44434C9.334 5.82225 9.55586 5.33316 10.5332 5.33301H11.5557V3.28906C10.978 3.20019 10.356 3.11135 9.77832 3.11133C7.9561 3.11133 6.66699 4.22266 6.66699 6.22266V8H4.66699V10.2227H6.66699V16H5.36621C3.4684 16 2.51925 16.0001 1.79688 15.625C1.18806 15.3087 0.691252 14.8119 0.375 14.2031C-0.000146601 13.4807 2.48539e-09 12.5316 0 10.6338V5.36621C2.49042e-09 3.4684 -0.000146895 2.51925 0.375 1.79688C0.691252 1.18806 1.18806 0.691252 1.79688 0.375C2.51925 -0.000146895 3.4684 2.49042e-09 5.36621 0H10.6338Z" />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M7.99902 2.18164C6.4203 2.18164 6.22169 2.18858 5.60156 2.2168C4.98237 2.24515 4.5593 2.34349 4.18945 2.4873C3.8068 2.63591 3.48159 2.83469 3.1582 3.1582C2.83475 3.48145 2.63636 3.80614 2.4873 4.18848C2.34309 4.55847 2.2447 4.98162 2.2168 5.60059C2.18904 6.22118 2.18164 6.41994 2.18164 8C2.18164 9.58008 2.18868 9.77787 2.2168 10.3984C2.24528 11.0178 2.34355 11.4406 2.4873 11.8105C2.636 12.1931 2.83481 12.5175 3.1582 12.8408C3.48147 13.1645 3.80606 13.3641 4.18848 13.5127C4.55861 13.6566 4.98142 13.7548 5.60059 13.7832C6.22112 13.8114 6.41942 13.8184 7.99902 13.8184C9.57886 13.8184 9.7772 13.8114 10.3975 13.7832C11.0168 13.7548 11.4404 13.6566 11.8105 13.5127C12.1931 13.3641 12.5176 13.1645 12.8408 12.8408C13.1642 12.5175 13.3627 12.193 13.5117 11.8105C13.6547 11.4405 13.7531 11.0176 13.7822 10.3984C13.8101 9.77796 13.8174 9.57998 13.8174 8C13.8174 6.41994 13.8101 6.22118 13.7822 5.60059C13.7531 4.98144 13.6547 4.55833 13.5117 4.18848C13.3627 3.80607 13.1643 3.48142 12.8408 3.1582C12.5172 2.83462 12.1935 2.63578 11.8105 2.4873C11.4397 2.34346 11.0166 2.24519 10.3975 2.2168C9.77697 2.18856 9.57893 2.18164 7.99902 2.18164Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M10.3203 3.78906C9.14981 3.78911 8.20117 4.81569 8.20117 6.08301C8.2012 6.25988 8.21977 6.43668 8.25586 6.60449C6.49489 6.5091 4.93248 5.59605 3.8877 4.20605C3.70423 4.54674 3.60059 4.94244 3.60059 5.36035C3.60061 6.15521 3.97468 6.8591 4.54395 7.27246C4.1964 7.25883 3.86896 7.1544 3.58301 6.98633V7.01367C3.58301 8.12658 4.3139 9.05374 5.28418 9.2627C5.10508 9.31717 4.91803 9.34375 4.72559 9.34375C4.58912 9.34374 4.45575 9.32998 4.32617 9.30273C4.5962 10.2112 5.37943 10.879 6.30664 10.8926C5.58141 11.5104 4.6665 11.8789 3.67383 11.8789C3.50294 11.8789 3.33467 11.8648 3.16895 11.8467C4.10684 12.4962 5.21988 12.8779 6.41699 12.8779C10.3144 12.8779 12.4462 9.38039 12.4463 6.35059C12.4463 6.25067 12.4453 6.1507 12.4414 6.05078C12.8552 5.7283 13.2134 5.32393 13.498 4.86523C13.1186 5.04693 12.7092 5.16912 12.2803 5.22363C12.7185 4.94206 13.0539 4.49284 13.2129 3.95703C12.803 4.22039 12.3497 4.41083 11.8662 4.51074C11.4799 4.0657 10.9296 3.78906 10.3203 3.78906Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M8.17969 2.19043C5.04099 2.19056 2.48661 4.74371 2.48535 7.88184C2.48494 8.88503 2.74678 9.86437 3.24512 10.7275L2.4375 13.6768L5.45605 12.8857C6.28782 13.3392 7.22464 13.5778 8.17773 13.5781H8.17969C11.318 13.5781 13.8735 11.0248 13.875 7.88672C13.8756 6.36593 13.2832 4.93519 12.208 3.85938C11.2002 2.85103 9.88078 2.26696 8.46484 2.19727L8.17969 2.19043Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
              <div className="w-5 h-5 text-carent-orange cursor-pointer">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M12.9131 4.52148C13.081 3.8482 12.6567 3.54259 12.2168 3.74219L2.58398 7.45703C1.92662 7.72078 1.93037 8.08743 2.46387 8.25098L4.86621 9.00098L5.78613 11.8193C5.89783 12.1277 5.84237 12.2499 6.16602 12.25C6.41597 12.25 6.5268 12.136 6.66602 12C6.75454 11.9134 7.28033 11.4026 7.86719 10.832L10.3662 12.6787C10.8261 12.9324 11.158 12.8003 11.2725 12.251L12.9131 4.52148Z"
                    fill="#FE8400"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Background SVG */}
      <div className="absolute bottom-0 left-0 w-full h-[648px] z-0">
        <svg
          width="1439"
          height="527"
          viewBox="0 0 1439 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M0 0H1439V648H712.5H0V0Z" fill="#141414" />
        </svg>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 lg:px-20 relative z-10 mt-16">
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
      <section id="booking" className="py-20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
            Book Now
          </h2>
          <div className="w-44 h-0.5 bg-carent-orange mx-auto"></div>
        </div>

        <div className="bg-carent-cream py-8 lg:py-10 px-4 lg:px-10">
          <div className="max-w-7xl mx-auto">
            {/* First row of form fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-end mb-6">
              {/* Pickup Location */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <MapPin className="text-gray-600" size={18} />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={bookingForm.pickupLocation}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        pickupLocation: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Pickup Date */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <Calendar className="text-gray-600" size={18} />
                  <input
                    type="date"
                    value={bookingForm.pickupDate}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        pickupDate: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <Calendar className="text-gray-600" size={18} />
                  <input
                    type="date"
                    value={bookingForm.returnDate}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        returnDate: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Second row of form fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 items-end">
              {/* Car Type */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <Car className="text-gray-600" size={18} />
                  <select
                    value={bookingForm.carType}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        carType: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none"
                  >
                    <option value="">Car Type</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sports">Sports Car</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
              </div>

              {/* Pickup Time */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <Clock className="text-gray-600" size={18} />
                  <input
                    type="time"
                    value={bookingForm.pickupTime}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        pickupTime: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none"
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="bg-white rounded p-3 lg:p-4 h-12 lg:h-15">
                <div className="flex items-center gap-1 lg:gap-2 h-full">
                  <Clock className="text-gray-600" size={18} />
                  <input
                    type="time"
                    value={bookingForm.returnTime}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        returnTime: e.target.value,
                      })
                    }
                    className="flex-1 text-carent-dark font-poppins text-sm lg:text-base bg-transparent border-none outline-none"
                  />
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={sendBookingToWhatsApp}
                className="bg-carent-orange text-carent-dark px-4 lg:px-6 py-3 lg:py-4 rounded font-poppins text-base lg:text-lg hover:opacity-90 transition-opacity h-12 lg:h-15"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Featured Cars Section */}
      <section id="cars" className="py-20 px-4 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              Our Featured Cars
            </h2>
            <div className="w-72 h-0.5 bg-carent-orange mx-auto"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevCar}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="text-carent-orange" size={24} />
            </button>
            <button
              onClick={nextCar}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="text-carent-orange" size={24} />
            </button>

            {/* Carousel Content - Shows 3 cars at a time */}
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentCarIndex * (100 / 3)}%)`,
                }}
              >
                {featuredCars.map((car, index) => (
                  <div key={car.id} className="w-1/3 flex-shrink-0 px-3">
                    <div className="border border-carent-gray-light rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-44 object-cover rounded-lg mb-4"
                      />
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-poppins text-lg text-carent-dark mb-3 font-semibold">
                            {car.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm flex-wrap">
                            <div className="flex items-center gap-1">
                              <User className="text-carent-gray" size={14} />
                              <span className="text-carent-dark">
                                {car.seats}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Fuel className="text-carent-gray" size={14} />
                              <span className="text-carent-dark">
                                {car.fuel}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Car className="text-carent-gray" size={14} />
                              <span className="text-carent-dark">
                                {car.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-carent-dark text-lg font-poppins font-bold">
                              Best price
                            </p>
                          </div>
                          <button
                            onClick={() => sendCarBookingToWhatsApp(car.name)}
                            className="bg-carent-orange text-carent-dark px-3 py-2 rounded text-sm hover:opacity-90 transition-opacity font-semibold"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            <button
              onClick={() => setCurrentCarIndex(0)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentCarIndex === 0 ? "bg-carent-orange" : "bg-gray-300"
              }`}
            />
            <button
              onClick={() => setCurrentCarIndex(1)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentCarIndex === 1 ? "bg-carent-orange" : "bg-gray-300"
              }`}
            />
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
                Puri Tours and Travels is a reputable car rental company that
                offers a wide range of useful services for every taste.
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
      <section className="py-20 px-4 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-carent-dark font-montserrat text-3xl mb-2">
              What Our Clients Say?
            </h2>
            <div className="w-80 h-0.5 bg-carent-orange mx-auto"></div>
          </div>

          <div className="flex items-center justify-center gap-4 lg:gap-8">
            <ArrowLeft
              className="text-carent-orange cursor-pointer hidden lg:block"
              size={32}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl w-full lg:w-auto">
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
                  I rented a car for a one-week trip from Puri Tours and Travels
                  on the recommendation of my friend. Actually, I am satisfied
                  with them.
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
                  During my last trip, I used a Puri Tours and Travels sport car
                  . The car was completely clean and had enough gas.
                </p>
              </div>
            </div>

            <ArrowRight
              className="text-carent-orange cursor-pointer hidden lg:block"
              size={32}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-carent-cream py-16 px-4 relative z-10">
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
      <section id="contact" className="py-20 px-4 lg:px-20 relative z-10">
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

              {/* Contact Image - using the specific image from Figma */}
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
      <footer className="bg-carent-dark py-10 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-5">
            <p className="text-white font-poppins text-base">
              Need help renting a car? Please call +91-9494-222-882
            </p>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-auto gap-5">
              <div className="text-carent-orange font-arial-black text-lg font-black">
                PURI TOURS AND TRAVELS
              </div>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 text-carent-orange cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.6338 0C12.5316 2.48539e-09 13.4807 -0.000146601 14.2031 0.375C14.8119 0.691252 15.3087 1.18806 15.625 1.79688C16.0001 2.51925 16 3.4684 16 5.36621V10.6338C16 12.5316 16.0001 13.4807 15.625 14.2031C15.3087 14.8119 14.8119 15.3087 14.2031 15.625C13.4807 16.0001 12.5316 16 10.6338 16H9.33398V10.2227H11.1113L11.4668 8H9.33398V6.44434C9.334 5.82225 9.55586 5.33316 10.5332 5.33301H11.5557V3.28906C10.978 3.20019 10.356 3.11135 9.77832 3.11133C7.9561 3.11133 6.66699 4.22266 6.66699 6.22266V8H4.66699V10.2227H6.66699V16H5.36621C3.4684 16 2.51925 16.0001 1.79688 15.625C1.18806 15.3087 0.691252 14.8119 0.375 14.2031C-0.000146601 13.4807 2.48539e-09 12.5316 0 10.6338V5.36621C2.49042e-09 3.4684 -0.000146895 2.51925 0.375 1.79688C0.691252 1.18806 1.18806 0.691252 1.79688 0.375C2.51925 -0.000146895 3.4684 2.49042e-09 5.36621 0H10.6338Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 text-carent-orange cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M7.99902 2.18164C6.4203 2.18164 6.22169 2.18858 5.60156 2.2168C4.98237 2.24515 4.5593 2.34349 4.18945 2.4873C3.8068 2.63591 3.48159 2.83469 3.1582 3.1582C2.83475 3.48145 2.63636 3.80614 2.4873 4.18848C2.34309 4.55847 2.2447 4.98162 2.2168 5.60059C2.18904 6.22118 2.18164 6.41994 2.18164 8C2.18164 9.58008 2.18868 9.77787 2.2168 10.3984C2.24528 11.0178 2.34355 11.4406 2.4873 11.8105C2.636 12.1931 2.83481 12.5175 3.1582 12.8408C3.48147 13.1645 3.80606 13.3641 4.18848 13.5127C4.55861 13.6566 4.98142 13.7548 5.60059 13.7832C6.22112 13.8114 6.41942 13.8184 7.99902 13.8184C9.57886 13.8184 9.7772 13.8114 10.3975 13.7832C11.0168 13.7548 11.4404 13.6566 11.8105 13.5127C12.1931 13.3641 12.5176 13.1645 12.8408 12.8408C13.1642 12.5175 13.3627 12.193 13.5117 11.8105C13.6547 11.4405 13.7531 11.0176 13.7822 10.3984C13.8101 9.77796 13.8174 9.57998 13.8174 8C13.8174 6.41994 13.8101 6.22118 13.7822 5.60059C13.7531 4.98144 13.6547 4.55833 13.5117 4.18848C13.3627 3.80607 13.1643 3.48142 12.8408 3.1582C12.5172 2.83462 12.1935 2.63578 11.8105 2.4873C11.4397 2.34346 11.0166 2.24519 10.3975 2.2168C9.77697 2.18856 9.57893 2.18164 7.99902 2.18164Z"
                      fill="#FE8400"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 text-carent-orange cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 text-carent-orange cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919494222882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 text-carent-orange cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.067-.315-.099-.445.099-.133.197-.513.644-.627.777-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.067-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.336-.445-.342-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.708 1.922.806 2.054.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.480 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
