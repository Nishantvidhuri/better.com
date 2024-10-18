import React, { useState, useEffect } from 'react';
import dtiFormula from '../Images/dti-formula.jpg';
import monthlydti from '../Images/dti-example.jpg'
const MortgageCalculator = () => {
  const [principalInterest, setPrincipalInterest] = useState(0);
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeownersInsurance, setHomeownersInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);
  
  const total =
    principalInterest + propertyTaxes + homeownersInsurance + hoaFees + utilities;

  const calculateWidth = (value) => (value / total) * 100;
  const [homePrice, setHomePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30); 
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanLength * 12;

    if (principal <= 0 || monthlyInterestRate <= 0 || numberOfPayments <= 0) {
      setMonthlyPayment(0);
      return;
    }

    const mortgagePayment =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(mortgagePayment.toFixed(2)); 
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanLength]);

  return (
    <div className="min-h-screen bg-[#edf6f3] py-12 px-10 lg:px-72 rounded-lg mx-auto text-left">
      <h2 className="text-4xl font-bold mb-4">Mortgage calculator</h2>
      <p className="text-lg mb-6">
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private
        mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
      </p>

      {/* Home Price Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Home price</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="text-4xl font-bold border-none outline-none focus:ring-0 focus:border-transparent"
            min="50000"
            max="1000000"
          />
        </div>
        <div className="flex flex-col items-end">
          <label className="font-semibold text-gray-700 mb-1">Monthly payment</label>
          <span className="text-4xl font-bold">${monthlyPayment}/mo</span>
        </div>
      </div>

      {/* Slider for Home Price */}
      <div className="mb-6">
      <input
    type="range"
    min="50000"
    max="1000000"
    step="1000"
    value={homePrice}
    onChange={(e) => setHomePrice(Number(e.target.value))}
    className="slider w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
    style={{
      accentColor: "#004733", // Custom slider thumb color
    }}
  />
      </div>

      {/* Inputs for ZIP code, Down Payment, Interest Rate, Loan Length */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className="block text-gray-700">ZIP code</label>
          <input
            type="text"
            value="201002"
            className="border border-gray-300 p-2 rounded-md w-full"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700">Down payment</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Interest rate (%)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">Length of loan</label>
          <select
            value={loanLength}
            onChange={(e) => setLoanLength(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value={15}>15 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateMortgage}
        className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Get pre-approved
      </button>
      
      {/* Color blobs and breakdown */}
      <div className="bg-white p-8 max-w-6xl mt-12 mx-auto rounded-lg">
        <div className="flex justify-between items-start space-x-4">
          {/* Color blobs */}
          <div className="flex items-center w-1/2 space-x-0 my-6">
            <div className="h-12 rounded-l-full bg-green-600" style={{ width: `${calculateWidth(principalInterest)}%` }}></div>
            <div className="h-12 bg-purple-600" style={{ width: `${calculateWidth(propertyTaxes)}%` }}></div>
            <div className="h-12 bg-blue-400" style={{ width: `${calculateWidth(homeownersInsurance)}%` }}></div>
            <div className="h-12 bg-yellow-400" style={{ width: `${calculateWidth(hoaFees)}%` }}></div>
            <div className="h-12 rounded-r-full bg-red-400" style={{ width: `${calculateWidth(utilities)}%` }}></div>
          </div>

          {/* Breakdown items */}
          <div className="flex justify-between w-1/2 items-start space-x-4">
            {/* Legend */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 bg-green-600 rounded-full"></span>
                <span>Principal & interest</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 bg-purple-600 rounded-full"></span>
                <span>Property taxes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 bg-blue-400 rounded-full"></span>
                <span>Homeowners insurance</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 bg-yellow-400 rounded-full"></span>
                <span>HOA fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-4 w-4 bg-red-400 rounded-full"></span>
                <span>Utilities</span>
              </div>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  value={principalInterest}
                  onChange={(e) => setPrincipalInterest(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-md w-24 text-right"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  value={propertyTaxes}
                  onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-md w-24 text-right"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  value={homeownersInsurance}
                  onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-md w-24 text-right"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-md w-24 text-right"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  value={utilities}
                  onChange={(e) => setUtilities(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-md w-24 text-right"
                />
              </div>
            </div>
          </div>
          
        </div>
        <div className="py-12 bg-white">
  {/* How does a mortgage calculator help me? */}
  <div className="max-w-6xl mx-auto text-left">
    <h2 className="text-3xl font-semibold mb-4">How does a mortgage calculator help me?</h2>
    <p className="text-lg text-gray-700 mb-8">
      When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget.
      A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest
      rates to help determine what is affordable for you.
    </p>
    <hr className="border-t-2 border-gray-200 my-8" />
  </div>

  {/* How much monthly mortgage payment can I afford? */}
  <div className="max-w-6xl mx-auto text-left">
    <h2 className="text-3xl font-semibold mb-4">How much monthly mortgage payment can I afford?</h2>
    <p className="text-lg text-gray-700 mb-4">
      Lenders determine how much you can afford on a monthly housing payment by calculating your
      <a href="#" className="text-green-700 underline"> debt-to-income ratio (DTI)</a>.
      The maximum DTI you can have in order to qualify for most mortgage loans is often between 45–50%, with your anticipated housing costs included.
    </p>
    <p className="text-lg text-gray-700">
      Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan.
      A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable
      income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
    </p>
    <p className='ml-52 text-sm'>Formula for calculating your debt-to-income (DTI) ratio:</p>
    <img src={dtiFormula} alt="DTI Formula" />
    <p className='ml-52 text-sm'>Here’s an example of what calculating your DTI might look like</p>
    <img src={monthlydti} alt="DTI Formula" />
    <div className="max-w-4xl mx-auto p-8">
  <h2 className="text-3xl font-bold mb-4">How to calculate monthly mortgage payments?</h2>
  <p className="text-lg mb-6">
    Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. 
    While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, 
    so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
  </p>
  
  <h3 className="text-2xl font-semibold mb-4">Formula for calculating monthly mortgage payments</h3>
  <p className="text-lg mb-6">
    The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:
  </p>

  {/* Formula Image or Placeholder */}
  <div className="bg-gray-100 p-6 rounded-lg mb-6">
    <h3 className="text-lg font-bold">Monthly mortgage payments (M) = <span className="text-green-600">P x [ r(1+r)<sup>n</sup> / (1+r)<sup>n</sup> - 1 ]</span></h3>
  </div>

  <p className="text-lg mb-6">Where:</p>
  <ul className="list-disc list-inside text-lg text-gray-700">
    <li><strong>M</strong> is monthly mortgage payments</li>
    <li><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
    <li><strong>r</strong> is the monthly interest rate (annual interest rate divided by 12 and expressed as a decimal)</li>
    <ul className="ml-8">
      <li>For example: if the annual interest rate is 5%, the monthly rate would be 0.05/12 = 0.00417, or 0.417%</li>
    </ul>
    <li><strong>n</strong> is the total number of payments in months</li>
    <ul className="ml-8">
      <li>For example: for a 30-year loan, n = 30 × 12 = 360 months</li>
    </ul>
  </ul>
</div>
<div className="max-w-4xl mx-auto p-8">
  {/* How to use this mortgage calculator section */}
  <h2 className="text-3xl font-bold mb-4">How to use this mortgage calculator?</h2>
  <p className="text-lg mb-6">
    Play around with different home prices, locations, <a href="#" className="text-green-600 underline">down payments</a>, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
  </p>
  <p className="text-lg mb-6">
    Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, <a href="#" className="text-green-600 underline">private mortgage insurance (PMI)</a> costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
  </p>
  <p className="text-lg mb-6">
    The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the <a href="#" className="text-green-600 underline">Better home affordability calculator</a>.
  </p>
  <p className="text-lg mb-6">
    Fun fact: <a href="#" className="text-green-600 underline">Property tax rates</a> are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
  </p>

  {/* Do you know your property tax rate section */}
  <h2 className="text-3xl font-bold mb-4">Do you know your property tax rate?</h2>
  <p className="text-lg mb-6">
    While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from <a href="#" className="text-green-600 underline">Forbes</a> breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:
  </p>
</div>
<div className="max-w-4xl mx-auto p-8 space-y-8">
  {/* How is Better’s mortgage calculator different? */}
  <h2 className="text-3xl font-bold">How is Better’s mortgage calculator different?</h2>
  <p className="text-lg">
    The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
  </p>
  <p className="text-lg">
    Your lender will usually require you to have homeowners insurance while you’re settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that’s been damaged or destroyed.
  </p>
  <p className="text-lg">
    Here’s an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
  </p>

  {/* This mortgage calculator shows your mortgage costs with PMI */}
  <h2 className="text-3xl font-bold">This mortgage calculator shows your mortgage costs with PMI</h2>
  <p className="text-lg">
    PMI, an abbreviation for private mortgage insurance, helps potential homeowners qualify for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs.
  </p>
  <p className="text-lg">
    Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.
  </p>

  {/* HOA fees */}
  <h2 className="text-3xl font-bold">This mortgage calculator includes HOA fees</h2>
  <p className="text-lg">
    Homeowners association (HOA) fees are typically charged directly by a homeowners association. These fees come with condos, townhomes, and planned housing developments. HOA fees should be factored in when calculating your mortgage costs.
  </p>

  {/* How to reduce your monthly mortgage payments? */}
  <h2 className="text-3xl font-bold">How to reduce your monthly mortgage payments?</h2>
  <p className="text-lg">The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less willing to cut a deal, here are other options.</p>

  <h3 className="text-xl font-semibold">Extend the length of your mortgage</h3>
  <p className="text-lg">
    The more time you have to pay off the mortgage, the lower each monthly mortgage payment will be. This is why people often choose a 30-year fixed-rate mortgage over a 15- or 20-year term.
  </p>

  <h3 className="text-xl font-semibold">Increase your down payment</h3>
  <p className="text-lg">
    The smaller the mortgage, the smaller your monthly payments will be. If you can put at least 20% of the home price toward your down payment, you will be able to avoid PMI (private mortgage insurance).
  </p>

  <h3 className="text-xl font-semibold">Get a lower interest rate</h3>
  <p className="text-lg">
    Increasing your down payment can help you qualify for a lower interest rate. The amount of your down payment compared to the total loan amount is your loan-to-value ratio (LTV).
  </p>

  {/* How much home can I afford? */}
  <h2 className="text-3xl font-bold">How much home can I afford?</h2>
  <p className="text-lg">
    Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our <a href="#" className="text-green-600 underline">home affordability calculator</a>.
  </p>

  {/* Next steps to buying a house */}
  <h2 className="text-3xl font-bold">Next steps to buying a house</h2>
  <p className="text-lg">
    There are <a href="#" className="text-green-600 underline">8 steps to buying a house</a>, and by using this calculator, you’ve completed step 2 (calculating your home affordability). The next step is getting pre-approved.
  </p>
  <p className="text-lg">
    A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy and the mortgage options you qualify for.
  </p>
</div>

  </div>
</div>

      </div>
    </div>
  );
};

export default MortgageCalculator;
