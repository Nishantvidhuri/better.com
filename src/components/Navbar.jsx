import React, { useState, useEffect } from 'react';
import downloadIcon from './download.png'; // Original phone icon
import downloadblackIcon from './callblack.png'; // Black phone icon

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover for phone icon
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle
  const [hoveredMenu, setHoveredMenu] = useState(null); // State to manage hovered menu for popup
  const [activeSubMenu, setActiveSubMenu] = useState(null); // State to manage the opened submenu in mobile view

  // Handle toggling the mobile menu and lock the main page's scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent body from scrolling when the mobile menu is open
    } else {
      document.body.style.overflow = ''; // Restore body scroll when the menu is closed
    }
  }, [isMenuOpen]);

  const menuItems = [
    {
      title: 'Buy',
      subItems: [
        'Apply now',
        'Purchase rates',
        'Affordability calculator',
        'Mortgage calculator',
        'Rent vs buy calculator',
        'Find an agent',
        'VA loans',
        'Learning center',
      ],
    },
    {
      title: 'Refinance',
      subItems: [
        'Apply Now',
        'Refinance rates',
        'Cash-out refinance calculator',
        'Learning Center',
      ],
    },
    {
      title: 'HELOC',
      subItems: [
        'Apply Now',
        'Calculate your Cash 💵',
        'HELOC vs. Cash-out Refinance',
        'Learning Center',
      ],
    },
    {
      title: 'Rates',
      subItems: [
        'Purchase mortgage rates',
        'Refinance rates',
        'Refinance cash-out rates',
        'HELOC rates',
        'Purchase VA rates',
      ],
    },
    {
      title: 'Better+',
      subItems: [
        'Get Insurance',
        'Title and Closing',
        'Better Attorney Match',
        'Learning Center',
        {
          label: 'Better Agent Match',
          additionalLabel: 'For Agents',
        },
        {
          label: 'Better Duo',
          additionalLabel: 'For Agents',
        },
      ],
    },
  ];

  // Toggle submenu items on mobile screens
  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index); // Open the clicked submenu or close if it's already open
  };

  return (
    <nav style={{ backgroundColor: '#004733' }} className="px-9 text-white py-5 relative">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-8 flex-shrink-0">
          <div className="text-2xl font-extrabold hover:text-white">Better</div>
          <div className="hidden lg:flex space-x-14 flex-shrink-0">
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="#"
                  className="font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition duration-300"
                >
                  {menuItem.title}
                </a>

                {/* Dropdown popup when hovered */}
                {hoveredMenu === index && (
                  <div className="absolute top-full mt-2 left-0 bg-white text-black p-4 rounded-lg shadow-lg z-50 w-72">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="py-2 px-2 flex justify-between items-center hover:bg-gray-200 rounded-md transition duration-200"
                      >
                        {typeof subItem === 'string' ? (
                          <>
                            {subItem}
                          </>
                        ) : (
                          <>
                            {subItem.label}
                            <span className="text-xs text-gray-500 block">
                              {subItem.additionalLabel}
                            </span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>

        {/* Right side: Phone icon, Sign In link, and Get Started button */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white hover:bg-white hover:border-transparent transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? downloadblackIcon : downloadIcon}
              alt="Phone icon"
              className="w-5 h-5"
            />
          </div>
          <a href="#" className="font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition duration-300">
            Sign in
          </a>

          <button
            className="bg-[#1EE07F] text-black font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out hover:bg-[#004733] hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>


      {/* Full-Screen Mobile menu */}
<div
  className={`fixed top-0 left-0 w-full h-full bg-white transform ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform duration-300 ease-in-out z-50 shadow-lg overflow-auto`}
>
  {/* Top section with logo and close button */}
  <div className="flex justify-between items-center p-6 border-b border-gray-200">
    {/* Better logo on the left */}
    <div className="text-2xl font-extrabold text-black">Better</div>

    {/* Close icon on the right */}
    <button
      className="text-black focus:outline-none"
      onClick={() => setIsMenuOpen(false)}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  {/* Call section */}
 

  {/* Mobile Menu items */}
  <div className="flex flex-col items-start p-6 space-y-4">
    {menuItems.map((menuItem, index) => (
      <div key={index} className="w-full">
        <button
          className="flex justify-between items-center font-semibold text-black py-2 px-4 transition duration-300 w-full"
          onClick={() => toggleSubMenu(index)}
        >
          {menuItem.title}
          {/* Arrow icon for open/close positioned on the far right */}
          <i
            className={`fas fa-chevron-${
              activeSubMenu === index ? 'up' : 'down'
            } transition-transform duration-300 ml-auto`}
          ></i>
        </button>
        {/* Submenu items (conditionally visible based on state) */}
        {activeSubMenu === index && (
          <div className="ml-6 mt-2">
            {menuItem.subItems.map((subItem, subIndex) => (
              <a
                key={subIndex}
                href="#"
                className="block text-black py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                {typeof subItem === 'string' ? subItem : subItem.label}
              </a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Buttons at the bottom */}
  <div className="absolute bottom-0 left-0 w-full flex flex-col items-center space-y-4 p-6 bg-gray-50">
  <div className="flex items-center space-x-4 mt-52 ml-20 border-b bg-gray-200 rounded-full p-1 w-5/6">
          <div className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300">
            <img src={downloadblackIcon} alt="Call icon" className="w-5 h-5" />
          </div>
          <div className="text-black font-semibold">
            Call us anytime at <br />
            <a href="tel:+141552388371" className="text-green-600">(415) 523 88371</a>
          </div>
        </div>
    <button className="w-full bg-green-500 text-white py-3 rounded-full text-center font-semibold hover:bg-[#004733] transition duration-300">
      Get started <br />
      <span className="text-xs">(3 min | No credit impact)</span>
    </button>

    <button className="  w-full bg-transparent text-black border-2 border-gray-500 py-3 px-4 rounded-full text-center font-semibold hover:border-[#004733] hover:text-[#004733] transition duration-300">
      <i className="fas fa-user"></i> Sign in
    </button>
  </div>
</div>


      {/* Overlay when the menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
