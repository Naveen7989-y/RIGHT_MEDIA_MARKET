import { Link } from 'react-router-dom';

import { 
  FaCode, 
  FaChartLine, 
  FaCloud, 
  FaRocket, 
  FaLightbulb,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';
import AnimatedHero from '../components/AnimatedHero';
import AutoScrollCarousel from '../components/AutoScrollCarousel';


const Home = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Full Stack Web Development',
      description: 'Build powerful, scalable web applications with modern frameworks and best practices.',
      features: ['React, Angular, Next.js', 'Node.js, Express, Java, PHP', 'RESTful APIs & E-commerce'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Digital Marketing',
      description: 'Reach your ideal customers and maximize ROI with strategic, multi-channel marketing campaigns.',
      features: ['SEO & PPC Advertising', 'Social Media Management', 'Content & Email Marketing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Custom SaaS & Product',
      description: 'Launch and scale your SaaS product with expert development and growth marketing strategies.',
      features: ['Product Development', 'Brand Building', 'Growth Marketing'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: 'Cloud & DevOps',
      description: 'Deploy with confidence using modern cloud infrastructure and automated workflows.',
      features: ['AWS, Render, Azure', 'CI/CD Pipelines', 'DevOps Automation'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Consultation & Strategy',
      description: 'Navigate digital transformation with expert guidance and actionable strategies.',
      features: ['Digital Strategy', 'Data Analytics', 'Marketing Consulting'],
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const valueProps = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Modern Tech Stack Expertise',
      description: 'We leverage the latest technologies—React, Next.js, Node.js, AWS—to build fast, scalable, and future-proof solutions that give you a competitive edge.'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Data-Driven Decision Making',
      description: 'Every strategy we implement is backed by analytics and insights. We don\'t guess—we measure, optimize, and deliver ROI you can track.'
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Full-Service Digital Partner',
      description: 'From concept to launch to growth, we handle it all. One team, one vision, seamless execution across development, marketing, and strategy.'
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'Agile & Results-Focused',
      description: 'We move fast without compromising quality. Our agile approach means rapid deployment, continuous improvement, and tangible results in weeks, not months.'
    },
  ];

  const technologies = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <FaGoogle />, name: 'Google Ads' },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and challenges. Through in-depth analysis and consultation, we craft a customized strategy aligned with your objectives.'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Our expert team brings your vision to life using modern technologies and best practices. We focus on user experience, performance, and scalability from day one.'
    },
    {
      number: '03',
      title: 'Launch & Optimize',
      description: 'We don\'t just launch and disappear. We monitor performance, gather data, and continuously optimize to ensure you\'re getting maximum ROI and sustained growth.'
    },
    {
      number: '04',
      title: 'Scale & Grow',
      description: 'As your business grows, we scale with you. From infrastructure upgrades to expanded marketing campaigns, we\'re your long-term growth partner.'
    },
  ];

  return (
    
    <div className="overflow-hidden">
      {/* Hero Section */}
      
    
      <AnimatedHero/>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Why Leading Brands Choose <span className="gradient-text">Right Media Marketing</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-primary-600 mb-4">{prop.icon}</div>
                <h3 className="heading-sm mb-3">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Comprehensive Solutions for <span className="gradient-text">Digital Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with marketing mastery to deliver end-to-end solutions that drive business growth.
            </p>
          </div>
          <AutoScrollCarousel
            items={services}
            gap="gap-8"
            className="pb-6 md:pb-8"
            renderItem={(service) => (
              <div className="card p-8 w-80 md:w-96 mx-2 group">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="heading-sm mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services" 
                  className="text-primary-300 hover:text-primary-200 font-semibold inline-flex items-center group"
                >
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            )}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Proven Process for <span className="gradient-text">Digital Success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Built with <span className="gradient-text">Industry-Leading Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>
          <AutoScrollCarousel
            items={technologies}
            gap="gap-6"
            speed="slow"
            className="pb-8"
            renderItem={(tech) => (
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 w-40 mx-3">
                <div className="text-4xl text-primary-400 mb-3 drop-shadow-lg">{tech.icon}</div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            )}
          />
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">And many more cutting-edge technologies...</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Angular', 'Vue.js', 'TypeScript', 'Java', 'PHP', 'Python', 'Docker', 'Kubernetes', 'SEMrush', 'HubSpot'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Trusted by <span className="gradient-text">Businesses Ready to Grow</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Right Media Marketing transformed our online presence. Within 3 months, our organic traffic increased by 240% and our conversion rate doubled. Their team truly understands both the technical and marketing sides of digital growth.",
                author: "Sarah Johnson",
                role: "CEO of TechStart Inc."
              },
              {
                quote: "From concept to launch, the team delivered beyond expectations. They built our SaaS platform using cutting-edge tech and created a marketing strategy that helped us acquire our first 1,000 users in record time.",
                author: "Michael Chen",
                role: "Founder of CloudSync"
              },
              {
                quote: "Working with Right Media Marketing feels like having an entire digital department at your fingertips. Their expertise in both development and marketing is unmatched.",
                author: "Emily Rodriguez",
                role: "Marketing Director at GrowthCo"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="text-primary-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Let's discuss how Right Media Marketing can help you achieve your business goals. Whether you need a new website, a comprehensive marketing strategy, or a custom SaaS solution, we're here to make it happen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
              {[
                'Free initial consultation and strategy session',
                'Custom solutions tailored to your business',
                'Transparent pricing and clear timelines',
                'Dedicated team committed to your success',
                'Ongoing support and optimization',
                'Proven track record of delivering results'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-100">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Schedule Your Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;