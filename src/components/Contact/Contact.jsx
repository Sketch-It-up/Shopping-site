import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <div className="About">
//                 <div className="container gx-0">
//                     <div className="row gx-0">
//                         <div className="col-12">
//                             <div className="About_col">
//                                 <h1 className="main_head">Contact Us</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Contact


import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Phone Section */}
        <div className="bg-red-100 p-6 rounded-lg text-center">
          <Phone className="mx-auto text-red-500" size={24} />
          <h2 className="text-lg font-semibold mt-2">Phone No</h2>
          <p className="text-gray-600">+88 01682 825 123</p>
        </div>
        {/* Email Section */}
        <div className="bg-blue-100 p-6 rounded-lg text-center">
          <Mail className="mx-auto text-blue-500" size={24} />
          <h2 className="text-lg font-semibold mt-2">Email</h2>
          <p className="text-gray-600">EXstore@gmail.com</p>
        </div>
        {/* Address Section */}
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <MapPin className="mx-auto text-green-500" size={24} />
          <h2 className="text-lg font-semibold mt-2">Address</h2>
          <p className="text-gray-600">Abbottabad, Pakistan</p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-full h-40 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Your Subject Here"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Type Your Message Here"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
          ></textarea>
          <button className="w-full bg-red-300 text-white py-3 rounded-lg hover:bg-red-400">
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}

