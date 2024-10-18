import React, { useState } from 'react';
import phonephoto from './phonephoto.webp'; // Import the phone photo
import arianImage from './arian.webp'; // Arian's image
import amandaImage from './amanda.webp'; // Amanda's image
import paulImage from './paul.webp'; // Paul's image
import firstHome from './first-home.webp'; // Importing first home image
import oneDayMortgage from './one-day-mortgage.webp'; // Importing one day mortgage image
import betterHeloc from './better-heloc.webp'; // Importing better HELOC image
import insurance from './insurance.webp'; // Importing insurance imag
const Hero = () => {
  // State to manage current testimonial
  const [activeTestimonial, setActiveTestimonial] = useState('arian');

  // Function to handle image changes based on button click
  const getTestimonialImage = () => {
    switch (activeTestimonial) {
      case 'amanda':
        return amandaImage;
      case 'paul':
        return paulImage;
      default:
        return arianImage;
    }
  };

  return (
    <div>
      <div className="relative p-10 w-full min-h-[138vh] overflow-hidden">
        {/* Green background with z-0 */}
        <div className="absolute inset-0 bg-[#004733] z-0"></div>

        {/* Phone image with z-1 */}
        <div className="absolute inset-0 z-1 flex justify-center items-center overflow-hidden">
          <img
            src={phonephoto}
            alt="Phone showing rate drop notification"
            className="mt-80 w-1/3 h-auto"
          />
        </div>

        {/* Main content with z-2 */}
        <div className="relative z-2 flex flex-col items-center justify-start text-center text-white min-h-[120vh] space-y-6">
          {/* Rate Drop Alert Icon and Text */}
          <div className="text-white text-xl font-semibold flex items-center space-x-3">
            <span className="rounded-full bg-white p-2">
              <svg
                className="w-10 h-10 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <span className="text-4xl">Rate drop alert</span>
          </div>

          {/* Main headline */}
          <h1 className="text-9xl font-bold max-w-7xl leading-tight">
            The rate drop you’ve been waiting for
          </h1>

          {/* CTA Button */}
          <div className="flex justify-between items-center w-full px-72 py-40">
            {/* CTA Button */}
            <div className="flex flex-col">
              <button className="bg-[#1EE07F] text-black font-bold py-6 px-16 rounded-full transition duration-300 ease-in-out hover:bg-[#004733] hover:text-white">
                Start my approval
              </button>
              <span>3 min | No credit impact</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              {/* Reviews Section */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-white text-xl">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3 7h7l-5.5 4.5 2 8L12 16l-6 4.5 2-8L2 9h7l3-7z"
                    />
                  </svg>
                </span>
                <span>4.6 Stars | 3177 Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative z-2 flex justify-between items-center mt-16 px-52 py-12 bg-white text-black">
        {/* Testimonial card */}
        <div className="w-1/3 bg-white rounded-xl p-6 text-black shadow-md">
          <img
            src={getTestimonialImage()}
            alt={`${activeTestimonial} testimonial`}
            className="rounded-xl mb-4"
          />
          <div className="mt-8 flex space-x-4">
            <button
              onClick={() => setActiveTestimonial('arian')}
              className={`py-2 px-6 rounded-full border-2 ${
                activeTestimonial === 'arian'
                  ? 'border-green-600 text-black border-4'
                  : 'border-black'
              }`}
            >
              Arian
            </button>
            <button
              onClick={() => setActiveTestimonial('amanda')}
              className={`py-2 px-6 rounded-full border-2 ${
                activeTestimonial === 'amanda'
                  ? 'border-green-600 text-black  border-4'
                  : 'border-black'
              }`}
            >
              Amanda
            </button>
            <button
              onClick={() => setActiveTestimonial('paul')}
              className={`py-2 px-6 rounded-full border-2 ${
                activeTestimonial === 'paul'
                  ? 'border-green-600 text-black  border-4 '
                  : 'border-black'
              }`}
            >
              Paul
            </button>
          </div>
         
        </div>

        {/* Main content: "Find out why we're better" */}
        <div className="w-full pl-64 pb-40  text-left">
          <h2 className="text-6xl font-bold mb-4 ">Find out why we’re better.</h2>
          <button className="bg-[#004733] text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out hover:bg-green-500">
            See all our stories
          </button>
          <div className="flex items-center space-x-2 mt-4">
            <svg
              className="w-6 h-6 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.293 9.293a1 1 0 011.414 0L12 10.586l1.293-1.293a1 1 0 111.414 1.414"
              />
            </svg>
            <span className="text-xl">Trustpilot</span>
            <span className="text-green-600 font-semibold">Excellent</span>
            <span className="text-xl">4.4 out of 5</span>
          </div>
          
        </div>

      </div>

      <div className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold">Got questions? We’ve got answers</h2>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center space-x-6 mb-16">
          <button className="bg-white text-black border border-gray-300 py-3 px-8 rounded-full font-semibold hover:border-green-600 hover:bg-green-100 transition">
            Our products
          </button>
          <button className="bg-white text-black border border-gray-300 py-3 px-8 rounded-full font-semibold hover:border-green-600 hover:bg-green-100 transition">
            Calculators
          </button>
          <button className="bg-white text-black border border-gray-300 py-3 px-8 rounded-full font-semibold hover:border-green-600 hover:bg-green-100 transition">
            Guides & FAQs
          </button>
        </div>

        {/* Grid Section */}
        <div className=" ml-40 flex flex-wrap ">
          {/* Buying your first home card */}
          <div className="bg-[#edf6f3] p-6  mr-12 rounded-lg">
            <div className="flex flex-wrap w-60 justify-between items-center mb-2 ">
              <h3 className=" mb-2 text-xl font-bold">Buying your first home with Better</h3 >
              <button className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center hover:bg-green-800 hover:text-white justify-center text-2xl font-bold text-green-800">
                ➜
              </button>
            </div>
            <img
              src={firstHome}
              alt="First Home"
              className=" h-40 w-80 object-cover rounded-md"
            />
          </div>

          {/* One Day Mortgage card */}
          <div className="bg-[#edf6f3] p-6 w-[700px] rounded-lg flex  justify-between items-center">
  {/* Left content: text and button */}
  <div className="flex flex-col justify-between w-72  ">
    <h3 className="text-xl font-bold mb-4">One Day Mortgage 1</h3>
    <p className="text-gray-700 mb-4">
      Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
    </p>
    <button className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center hover:bg-green-800 hover:text-white justify-center text-2xl font-bold text-green-600">
      ➜
    </button>
  </div>

  {/* Right content: image */}
 
    <img
      src={oneDayMortgage}
      alt="One Day Mortgage"
      className="rounded-lg  object-contain w-72 h-[300px]"
    />
 
</div>


          {/* Better HELOC card */}
<div className="bg-[#edf6f3] w-1/2 h-52  mt-12  p-6 rounded-lg flex items-center justify-between">
  {/* Left: Image */}
  
    <img
      src={betterHeloc}
      alt="Better HELOC"
      className="w-60 h-auto object-cover overflow-hidden mt-10 mb-10 rounded-md"
    />


  {/* Right: Text and Button */}
  <div className="w-1/2 pl-4">
    <h3 className="text-xl font-bold mb-2">Better HELOC</h3>
    <p className="text-sm mb-6">
      Introducing One Day HELOC™—your express lane to getting cash from your
      home with our Home Equity Line of Credit². Access up to 90% of your home
      equity as cash in as little as 7 days.³
    </p>
    <button className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center hover:bg-green-800 hover:text-white justify-center text-2xl font-bold text-green-600">
      ➜
    </button>
  </div>
</div>


          {/* Insurance card */}
          <div className="bg-[#edf6f3] p-6 mt-12 ml-12 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Insurance</h3>
              <button className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center hover:bg-green-800 hover:text-white justify-center text-2xl font-bold text-green-600">
                ➜
              </button>
            </div>
            <img
              src={insurance}
              alt="Insurance"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
