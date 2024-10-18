import React from 'react';
import downloadIcon from '../components/callblack.png'; // Original phone icon

const StartNavBar = () => {
  return (
    <div>
    <div className="bg-white mx-72 mt-10 py-4    border-gray-300 px-6">
      {/* Wrapper to organize two sections */}
      <div className="flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start ">
          <span className="font-bold text-green-600 text-sm">Better</span>
          <span className="text-gray-500 text-sm">Mortgage</span>
        </div>

        {/* Contact Section */}
        <div className=" flex flex-row ">
        <img
              src={downloadIcon}
              alt="Phone icon"
              className="flex items-center h-5 w-5 mr-2 justify-center  rounded-full border border-black hover:bg-white hover:border-transparent transition duration-300"
            />
          <h1 className="text-gray-800 text-sm  mb-2">Need help? Call (415) 523 8837</h1>
        </div>

        {/* Profile image */}
       
      </div>
      <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Profile"
            className="w-10 translate-y-6 translate-x-[450px] h-10 rounded-full"
          />
          
        </div>
        <div className="border-b-4 border-gray-300 w-[80%] mx-auto "></div>
    </div>
    <div className="bg-[#fcf9f6] flex flex-col items-center justify-center py-16">
      {/* Greeting Section */}
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Betsy!</h1>
      <h2 className="text-4xl font-bold  text-gray-700 mb-8">What can I help you with?</h2>
      
      {/* Button Options */}
      <div className="space-y-4 w-full max-w-md">
  <button className="flex  text-black hover:text-green-400  items-center justify-between w-full px-6 py-3 border-4 border-transparent border-gray-300 rounded-lg text-lg font-semibold hover:border-[#004733]">
    <span className="flex items-center space-x-2">
    <i class="fa-solid fa-house"></i>
      <span>Buying a home</span>
    </span>
  </button>

  <button className="flex items-center justify-between w-full px-6 py-3 border-4 border-transparent border-gray-300 rounded-lg text-lg font-semibold hover:border-[#004733]">
    <span className="flex  text-black hover:text-green-400 items-center space-x-2">
    <i class="fa-solid fa-coins"></i>
      <span>Refinance my mortgage</span>
    </span>
  </button>

  <button className="flex items-center justify-between w-full px-6 py-3 border-4 border-transparent border-gray-300 rounded-lg text-lg font-semibold hover:border-[#004733]">
    <span className="flex text-black hover:text-green-400  items-center space-x-2">
    <i class="fa-solid fa-dollar-sign"></i>
      <span>Get cash from my home</span>
    </span>
  </button>
</div>


      {/* Statistics Section */}
      <div className="flex space-x-16 mt-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">$100B</h1>
          <p className="text-gray-600">home loans funded entirely online</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold">400K</h1>
          <p className="text-gray-600">Customers who chose Better Mortgage</p>
        </div>
      </div>

      {/* Unlock Features Section */}
      <div className="bg-[#edf6f3] p-6 mt-12 rounded-lg max-w-lg text-left">
  <h3 className="font-semibold mb-4">After a few questions, you'll unlock:</h3>
  <ul className="list-none space-y-2 text-gray-700">
    <li>
      <i className="fa-solid fa-percent"></i> Custom mortgage rates
    </li>
    <li>
      <i className="fa-solid fa-dollar-sign"></i> Exclusive offers
    </li>
    <li>
      <i className="fa-solid fa-phone"></i> A personalized dashboard
    </li>
  </ul>
</div>

    </div>
    </div>
  );
};

export default StartNavBar;
