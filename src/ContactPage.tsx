import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="font-sans bg-white text-black min-h-screen w-screen overflow-x-hidden" style={{fontFamily: 'Rajdhani, sans-serif'}}>
      {/* Navigation */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="text-xl font-bold">HONGYUAN E</Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-600">Home</Link>
              <Link to="/experience" className="hover:text-gray-600">Experience</Link>
              <Link to="/film-works" className="hover:text-gray-600">Film Works</Link>
              <Link to="/game-works" className="hover:text-gray-600">Game Works</Link>
              <Link to="/contact" className="hover:text-gray-600">Contact</Link>
            </div>
            <button className="md:hidden">Menu</button>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="w-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-2" />
                  <a href="mailto:hongyuane@gmail.com" className="hover:underline">hongyuane@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" />
                  <a href="tel:+14372978156" className="hover:underline">+1 (437) 297-8156</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>Toronto, Ontario, Canada</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Connect</h3>
              <div className="flex space-x-4 items-center">
                <a href="https://www.instagram.com/hongyuane/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 flex items-center">
                  <Instagram className="mr-1" />
                  Instagram
                </a>
                <button onClick={() => setShowQRCode(true)} className="text-black hover:text-gray-600 flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.475-3.484-4.271-6.349-8.595-6.349zM18.243 9.75c-4.426 0-8.025 2.978-8.025 6.647 0 3.667 3.599 6.644 8.025 6.644.411 0 .815-.023 1.211-.068a.78.78 0 0 1 .636.085l1.532.895a.26.26 0 0 0 .134.043.233.233 0 0 0 .233-.237c0-.057-.023-.115-.038-.17l-.313-1.196a.474.474 0 0 1 .171-.534c1.513-1.076 2.459-2.67 2.459-4.42 0-3.669-3.599-6.646-8.025-6.646z"/>
                  </svg>
                  WeChat
                </button>
                <a href="https://www.linkedin.com/in/h%C3%B3ng-yu%C3%A1n-%C3%A8-24ab68294/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WeChat QR Code Popup */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowQRCode(false)}>
          <div className="bg-white p-4 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={() => setShowQRCode(false)}>
              <X size={24} />
            </button>
            <img src="./assets/images/wechat-code.jpg" alt="WeChat QR Code" className="max-w-xs" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;