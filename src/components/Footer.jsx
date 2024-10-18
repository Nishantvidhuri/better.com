import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black mx-36 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Better Information */}
        <div>
          <h3 className="font-bold text-green-700 text-2xl">Better</h3>
          <p className="mt-4">
            Better is a family of companies serving all your homeownership needs.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-bold text-green-700">Better Mortgage</h4>
              <p>We can’t wait to say "Welcome home." Apply 100% online, with expert customer support.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700">Better Real Estate</h4>
              <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700">Better Cover</h4>
              <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700">Better Inspect</h4>
              <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
            </div>
            <div>
              <h4 className="font-bold text-green-700">Better Settlement Services</h4>
              <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>hello@better.com</li>
            <li>(415) 523-8837</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>
          <h3 className="font-bold text-lg mt-6">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Legal section below */}
      <div className=" py-6 mt-10">
        <div className="container mx-auto text-sm text-gray-600">
          <p>
            <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a href="#">One Day Mortgage™ Terms and Conditions</a>.
          </p>
          <p>
            <sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a href="#">One Day HELOC™ Terms and Conditions</a>.
          </p>
          <p>
            <sup>3</sup> Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
          </p>
          <hr className="my-4 border-gray-400" />

          <p>
            © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="#">NMLS Consumer Access</a>.
          </p>
          <p>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s <a href="#">license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
          </p>
          <p>
            <a href="#">New York State Housing and Anti-Discrimination Notice</a> | <a href="#">New York Standard Operating Procedures</a>
          </p>
          <p>
            Texas Real Estate Commission: <a href="#">Information About Brokerage Services</a> | <a href="#">Consumer Protection Notice</a>
          </p>
          <p>
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
          </p>
          <p>
            Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>
          <p>
            Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <a href="#">license numbers</a>.
          </p>
          <p>
            Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
