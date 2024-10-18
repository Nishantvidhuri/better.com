import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to close the modal when clicking outside the modal content
  const closeModalOnClickOutside = (e) => {
    if (e.target.id === 'modalOverlay') {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
    
    <div className="bg-[#fdf8f6]"> {/* Outer div with background */}
      {/* First sub-div for the mission */}
      <div className="flex justify-center items-center text-center h-[100vh] mx-6 lg:mx-20 px-6">
        <div>
          <p className="text-green-600 text-3xl font-semibold">Our mission</p>
          <h1 className="text-2xl md:text-4xl mt-4 md:mt-10 font-semibold text-gray-800">
            We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </div>
      </div>

      {/* New section as shown in the image */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-left mx-6 lg:mx-40 lg:mb-28  px-6 lg:px-20 py-10 lg:py-16 space-y-10 lg:space-y-0">
        <div className=" ml-32 w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">The status quo is broken</h2>
          <p className="text-md md:text-lg text-gray-600 mb-6">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some
            are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful
            processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-green-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-xl transition duration-300 ease-in-out hover:bg-green-800">
            Read Vishal’s story
          </button>
        </div>

        {/* Image with play button overlay */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://img.youtube.com/vi/1KjYlLBM9j4/maxresdefault.jpg"
              alt="Vishal's story"
              className="rounded-lg w-full lg:w-auto h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={toggleModal}
                className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-white text-green-600 text-2xl md:text-3xl flex items-center justify-center"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modalOverlay"
          onClick={closeModalOnClickOutside}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        >
          <div className="relative  p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/1KjYlLBM9j4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Additional section: How we’re changing things */}
      <div className="bg-green-700 text-white py-16">
  <div className="px-8 ml-72 lg:px-20 text-left"> {/* Change text alignment to left */}
    <h2 className="text-4xl font-bold mb-4">How we’re changing things</h2>
    <p className="text-lg leading-relaxed max-w-4xl">
      Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. 
      Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests 
      are misaligned with consumers’.
      <br />
      <br />
      That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more 
      efficient, and humans to help make it friendly and enjoyable.
    </p>
  </div>
</div>

      {/* Backed by section */}
      <div className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Backed by</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/SoftBank_logo_%282019%29.svg" alt="SoftBank" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Ally_Financial_logo.svg" alt="Ally" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Citigroup_logo.svg" alt="Citi" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ping_An_Insurance_Logo.svg" alt="Ping An Bank" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Goldman_Sachs_logo.svg" alt="Goldman Sachs" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Kleiner_Perkins_logo.svg" alt="KPCB" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/American_Express_logo_%282018%29.svg" alt="American Express" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/JPMorgan_Chase_logo.svg" alt="JP Morgan Chase" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Bain_%26_Company_Logo.svg" alt="Bain Capital" className="h-12"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Tiger_Global_Management_logo.svg" alt="Tiger Global" className="h-12"/>
        </div>
      </div>

      {/* Timeline section */}
      <div className="bg-[#fdf8f6] py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Company timeline</h2>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 h-full w-1 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="relative z-10 space-y-12">
            {/* 2014 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-4/12 text-right">
                <div className="bg-gray-200 p-3 text-left rounded-lg">
                  <p className="text-md">After Vishal Garg’s first attempt to purchase his own dream home, he realized the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.</p>
                </div>
              </div>
              <div className="w-1/12 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2014
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>

            {/* 2015 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-5/12"></div>
              <div className="w-1/12 mr-24 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2015
                </div>
              </div>
              <div className="w-4/12 text-left">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-md">Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                </div>
              </div>
            </div>

            {/* 2016 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-4/12 text-right">
                <div className="bg-gray-200 p-3 text-left rounded-lg">
                  <p className="text-md">Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
                </div>
              </div>
              <div className="w-1/12 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2016
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>

            {/* 2017 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-5/12"></div>
              <div className="w-1/12 mr-24 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2017
                </div>
              </div>
              <div className="w-4/12 text-left">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-md">Better expands into the real estate market with Better Real Estate.</p>
                </div>
              </div>
            </div>

            {/* 2018 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-4/12 text-right">
                <div className="bg-gray-200 p-3 text-left rounded-lg">
                  <p className="text-md">Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                </div>
              </div>
              <div className="w-1/12 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2018
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>

            {/* 2019 */}
            <div className="flex  items-center justify-between w-full">
              <div className="w-5/12"></div>
              <div className="w-1/12 mr-24 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2019
                </div>
              </div>
              <div className="w-4/12 text-left">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-md">Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-4/12 text-right">
                <div className="bg-gray-200 p-3 text-left rounded-lg">
                  <p className="text-md">Better acquires Trussle — The UK’s most innovative online mortgage broker.</p>
                </div>
              </div>
              <div className="w-1/12 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2021
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>

            {/* 2022 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-5/12"></div>
              <div className="w-1/12  mr-52 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2022
                </div>
              </div>
              <div className="w-4/12 text-left">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-md">Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex items-center justify-between w-full">
              <div className="w-4/12 text-right">
                <div className="bg-gray-200 p-3 text-left rounded-lg">
                  <p className="text-md">Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.</p>
                </div>
              </div>
              <div className="w-1/12 ml-28 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2023
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>

            {/* Today */}
            <div className="flex items-center justify-between w-full">
              <div className="w-5/12"></div> {/* Empty space on the left */}
              <div className="w-1/12 mr-24 flex justify-center">
                <div className="w-24 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  Today
                </div>
              </div>
              <div className="w-4/12 text-left">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-md">You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
                  <button className="mt-4 bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out hover:bg-green-800">
                    Get started
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
