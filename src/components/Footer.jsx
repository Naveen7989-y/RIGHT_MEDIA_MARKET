import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Full Stack Development',
    'Digital Marketing',
    'SaaS Development',
    'Cloud & DevOps',
    'Consultation & Strategy',
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0E1216] text-neutral-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-400 to-accent-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/30">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <span className="font-bold text-xl text-white">
                Right Media Marketing
              </span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Where Technology Meets Strategy. Empowering businesses with innovative digital solutions and data-driven marketing strategies.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaLinkedin, href: 'https://linkedin.com' },
                { Icon: FaInstagram, href: 'https://instagram.com' },
                { Icon: FaFacebook, href: 'https://facebook.com' },
                { Icon: FaTwitter, href: 'https://twitter.com' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-xl flex items-center justify-center transition-all duration-500 backdrop-blur shadow-md shadow-black/20 hover:-translate-y-1"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-neutral-400 hover:text-white transition-all duration-400 inline-flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                <a href="mailto:contact@rightmediamarketing.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  contact@rightmediamarketing.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Your Location, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Right Media Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;