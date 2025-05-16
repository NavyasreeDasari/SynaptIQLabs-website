import React from 'react';

const ReachOutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Reach Out to Us</h1>
      <p className="text-lg mb-8 text-gray-700">
        We’re here to help, listen, and connect. Have a question, feedback, or need support? Whether you’re a potential customer, partner, or just someone curious about what we do, we’d love to hear from you.
      </p>

      {/* Contact Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">📞 Contact Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Phone:</strong> +91 8639189175</li>
          <li><strong>Email:</strong> info@nexminds.in</li>
          <li><strong>Address:</strong> 3rd floor, 25/529, Rd Number 1, opp. GHMC park, above HDFC Bank, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</li>
        </ul>
      </section>

      {/* Unique Form Section */}
      <section className="mb-16 bg-blue-50 rounded-xl p-6 shadow-lg border border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800"> Send Us a Message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 md:col-span-2 p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="col-span-1 md:col-span-2 p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl transition duration-300"
            >
               Submit Message
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600">We typically respond within 24 hours on business days.</p>
      </section>

      {/* Office Hours */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Office Hours</h2>
        <ul className="space-y-1">
          <li>• <strong>Monday – Saturday:</strong> 11:00 AM – 8:00 PM</li>
          <li>• <strong>Sunday:</strong> Closed</li>
        </ul>
      </section>

      {/* Follow Us Section with Links */}
      {/* Follow Us Section with Icons and Styled Buttons */}
<section>
  <h2 className="text-2xl font-semibold text-blue-700 mb-4">Follow Us</h2>
  <div className="flex space-x-4">
    <a
      href="https://www.instagram.com/synaptiqlabs/" // replace with actual link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5ZM4 7.75C4 5.68 5.68 4 7.75 4h8.5C18.32 4 20 5.68 20 7.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5ZM16.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4.5 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" />
      </svg>
      <span>Instagram</span>
    </a>

    <a
      href="https://www.linkedin.com/company/synaptiqlabs/" // replace with actual link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98s1.98-.88 1.98-1.98c0-1.1-.88-1.98-1.98-1.98Zm.02 4.48H2V21h3V7.98Zm5.5 0H7.5V21h3V14c0-2.05 2.5-2.22 2.5 0V21h3v-7.59c0-4.26-4.5-4.1-5.5-2v-1.43Z" />
      </svg>
      <span>LinkedIn</span>
    </a>
  </div>
</section>

    </div>
  );
};

export default ReachOutPage;
