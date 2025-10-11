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
  FaShoppingCart,
  FaSearch,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPalette,
  FaAws,
  FaDocker,
  FaChartBar,
  FaDatabase,
  FaUsers,
  FaBullhorn,
  FaJava,
} from 'react-icons/fa';
import { SiAngular, SiExpress, SiJavascript } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si/index.esm';
import AutoScrollCarousel from '../components/AutoScrollCarousel';

const Services = () => {
  const servicesDetailed = [
    {
      id: 'fullstack',
      icon: <FaCode className="text-5xl" />,
      title: 'Full Stack Web Development',
      subtitle: 'Build Powerful Web Applications That Drive Results',
      description: 'In today\'s digital landscape, your website is more than just an online presence—it\'s your most powerful business tool. We craft high-performance web applications using cutting-edge technologies and industry best practices.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        {
          icon: <FaReact />,
          title: 'Frontend Development',
          items: [
            'React - Dynamic, component-based interfaces',
            'Next.js - SEO-optimized server-side rendering',
            'Angular - Enterprise-grade applications',
            'Vue.js - Progressive, lightweight applications',
            'Mobile-first, responsive design',
            'Progressive Web Apps (PWA)'
          ]
        },
        {
          icon: <FaNodeJs />,
          title: 'Backend Development',
          items: [
            'Node.js & Express - Fast, scalable applications',
            'Java - Enterprise solutions with Spring Boot',
            'PHP - Reliable web applications & CMS',
            'Python - Data-driven applications',
            'RESTful API design and development',
            'Database design (SQL & NoSQL)'
          ]
        },
        {
          icon: <FaShoppingCart />,
          title: 'E-commerce Development',
          items: [
            'Custom shopping cart & checkout',
            'Payment gateway integration',
            'Inventory management systems',
            'Product catalog with advanced search',
            'Multi-vendor marketplace platforms',
            'Headless commerce solutions'
          ]
        }
      ],
      benefits: [
        'Modern, scalable tech stack',
        'Security-first approach',
        'Clean, maintainable code',
        'Agile development methodology',
        'Post-launch support & maintenance',
        'Performance optimization'
      ]
    },
    {
      id: 'marketing',
      icon: <FaChartLine className="text-5xl" />,
      title: 'Digital Marketing Services',
      subtitle: 'Grow Your Business with Data-Driven Digital Marketing',
      description: 'In the crowded digital marketplace, visibility is everything. We combine strategic thinking, creative execution, and data analytics to deliver marketing campaigns that convert audiences into loyal customers.',
      color: 'from-purple-500 to-pink-500',
      features: [
        {
          icon: <FaSearch />,
          title: 'Search Engine Optimization (SEO)',
          items: [
            'Technical SEO - Speed, mobile, structured data',
            'On-Page SEO - Keywords, content, meta tags',
            'Off-Page SEO - Link building, authority',
            'Local SEO - Google Business Profile optimization',
            'E-commerce SEO - Product optimization',
            'Comprehensive SEO audits'
          ]
        },
        {
          icon: <FaGoogle />,
          title: 'Pay-Per-Click Advertising (PPC)',
          items: [
            'Google Ads - Search, Display, Shopping, YouTube',
            'Facebook & Instagram Ads campaigns',
            'LinkedIn Ads for B2B targeting',
            'Compelling ad copy & creative design',
            'Landing page optimization',
            'Detailed ROI reporting'
          ]
        },
        {
          icon: <FaInstagram />,
          title: 'Social Media Management',
          items: [
            'Instagram - Visual storytelling & Reels',
            'Facebook - Community building & engagement',
            'LinkedIn - B2B networking & thought leadership',
            'Content calendar & creation',
            'Community management',
            'Analytics & performance reporting'
          ]
        },
        {
          icon: <FaEnvelope />,
          title: 'Content & Email Marketing',
          items: [
            'SEO-optimized blog posts & articles',
            'Email campaign design & copywriting',
            'Marketing automation workflows',
            'Segmentation & personalization',
            'A/B testing & optimization',
            'Newsletter & content distribution'
          ]
        },
        {
          icon: <FaPalette />,
          title: 'Branding & Design',
          items: [
            'Brand strategy & positioning',
            'Logo design & brand identity',
            'Brand guidelines & style guides',
            'Marketing collateral design',
            'Website & digital design',
            'Brand refresh & rebranding'
          ]
        }
      ],
      benefits: [
        'Data-driven strategies',
        'Multi-channel expertise',
        'Creative excellence',
        'Transparent reporting',
        'Continuous optimization',
        'Proven industry experience'
      ]
    },
    {
      id: 'saas',
      icon: <FaRocket className="text-5xl" />,
      title: 'Custom SaaS & Product Development',
      subtitle: 'Launch and Scale Your SaaS Product with Expert Guidance',
      description: 'Building a successful SaaS product requires more than just great code—it demands strategic thinking, market understanding, and growth expertise. We\'re your end-to-end partner for SaaS success.',
      color: 'from-orange-500 to-red-500',
      features: [
        {
          icon: <FaCode />,
          title: 'SaaS Product Development',
          items: [
            'Multi-tenant architecture design',
            'Subscription & billing integration',
            'User authentication & access control',
            'API-first development',
            'Real-time features & notifications',
            'Analytics & reporting dashboards'
          ]
        },
        {
          icon: <FaLightbulb />,
          title: 'Product Strategy & Planning',
          items: [
            'Market research & competitive analysis',
            'User persona development',
            'MVP definition & feature prioritization',
            'Product roadmap creation',
            'Pricing strategy & monetization',
            'Go-to-market strategy'
          ]
        },
        {
          icon: <FaBullhorn />,
          title: 'Product Launch & Growth',
          items: [
            'Pre-launch marketing campaigns',
            'Beta testing & feedback collection',
            'Product Hunt launch strategies',
            'User acquisition strategies',
            'Onboarding optimization',
            'Retention & churn reduction'
          ]
        },
        {
          icon: <FaUsers />,
          title: 'Brand Building for SaaS',
          items: [
            'Brand positioning & messaging',
            'Visual identity & design system',
            'Website & landing page design',
            'Product UI/UX design',
            'Marketing collateral & assets',
            'Brand voice & content guidelines'
          ]
        }
      ],
      benefits: [
        'End-to-end SaaS expertise',
        'Technical excellence',
        'Growth-focused approach',
        'Market experience',
        'Long-term partnership',
        'Scalable architecture'
      ]
    },
    {
      id: 'cloud',
      icon: <FaCloud className="text-5xl" />,
      title: 'Cloud & DevOps Solutions',
      subtitle: 'Deploy, Scale, and Optimize with Modern Cloud Infrastructure',
      description: 'Reliable infrastructure and efficient deployment processes are critical to success. We deliver enterprise-grade cloud and DevOps solutions that ensure your applications are always available, performant, and ready to scale.',
      color: 'from-green-500 to-teal-500',
      features: [
        {
          icon: <FaAws />,
          title: 'Cloud Application Development',
          items: [
            'AWS, Azure, Google Cloud, Render',
            'Serverless architecture (Lambda, Functions)',
            'Containerization with Docker & Kubernetes',
            'Microservices architecture',
            'Cloud-native database solutions',
            'CDN setup & load balancing'
          ]
        },
        {
          icon: <FaDocker />,
          title: 'CI/CD Pipeline Implementation',
          items: [
            'Automated build & test pipelines',
            'Continuous integration workflows',
            'Deployment automation',
            'Automated testing integration',
            'Code quality & security scanning',
            'Rollback & disaster recovery'
          ]
        },
        {
          icon: <FaChartBar />,
          title: 'Analytics & Monitoring',
          items: [
            'Application performance monitoring',
            'Infrastructure monitoring & alerting',
            'Log aggregation & analysis',
            'Error tracking & debugging',
            'Uptime monitoring',
            'Custom dashboards & reporting'
          ]
        },
        {
          icon: <FaDatabase />,
          title: 'DevOps Services',
          items: [
            'Infrastructure as Code (IaC)',
            'Configuration management',
            'Environment provisioning',
            'Security & compliance',
            'Performance optimization',
            'Cost optimization'
          ]
        }
      ],
      benefits: [
        'Cloud platform expertise',
        'Automation-first approach',
        'Scalable infrastructure',
        'Cost optimization',
        'Enterprise security',
        '24/7 monitoring'
      ]
    },
    {
      id: 'consulting',
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Consultation & Strategy Services',
      subtitle: 'Navigate Digital Transformation with Expert Guidance',
      description: 'Digital transformation isn\'t just about technology—it\'s about reimagining how your business operates, engages customers, and creates value. We provide strategic consultation that bridges the gap between business objectives and technical execution.',
      color: 'from-yellow-500 to-orange-500',
      features: [
        {
          icon: <FaLightbulb />,
          title: 'Digital Transformation Consulting',
          items: [
            'Digital maturity assessment',
            'Transformation roadmap development',
            'Technology stack evaluation',
            'Process optimization & automation',
            'Change management & training',
            'Implementation oversight'
          ]
        },
        {
          icon: <FaChartBar />,
          title: 'Data Analytics Consulting',
          items: [
            'Analytics strategy development',
            'Data infrastructure design',
            'Analytics tool implementation',
            'Dashboard & reporting design',
            'Predictive analytics & modeling',
            'Marketing attribution modeling'
          ]
        },
        {
          icon: <FaChartLine />,
          title: 'Marketing Strategy Consulting',
          items: [
            'Marketing audit & gap analysis',
            'Competitive analysis & positioning',
            'Target audience research',
            'Channel strategy optimization',
            'Content strategy & planning',
            'Budget allocation & ROI optimization'
          ]
        },
        {
          icon: <FaRocket />,
          title: 'Business Growth Consulting',
          items: [
            'Growth opportunity identification',
            'Market expansion strategies',
            'Customer acquisition strategies',
            'Retention & loyalty programs',
            'Pricing optimization',
            'Sales funnel optimization'
          ]
        }
      ],
      benefits: [
        'Cross-functional expertise',
        'Practical experience',
        'Actionable insights',
        'Objective perspective',
        'Proven methodologies',
        'Measurable results'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">
              Our <span className="text-primary-200">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Overview Carousel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Explore Our Strategic Service Pillars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Swipe through our primary service categories to see how we combine technology and marketing expertise to accelerate your growth.
            </p>
          </div>
          <AutoScrollCarousel
            items={servicesDetailed}
            gap="gap-10"
            className="pb-10"
            speed="slow"
            duplicate={3}
            renderItem={(service) => (
              <div className="card p-8 w-[320px] md:w-[360px] lg:w-[380px] mx-3">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg animate-float`}>
                  {service.icon}
                </div>
                <h3 className="heading-sm text-center mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center mb-6">
                  {service.subtitle}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheckCircle className="text-primary-400 mr-2" />
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`#${service.id}`}
                  className="mt-6 inline-flex items-center text-primary-400 hover:text-primary-200 font-semibold transition-colors"
                >
                  View Details
                  <span className="ml-2 transition-transform">→</span>
                </Link>
              </div>
            )}
          />
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {servicesDetailed.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`mb-24 ${index !== 0 ? 'pt-16 border-t border-gray-200' : ''}`}
            >
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-xl`}
                >
                  {service.icon}
                </div>
                <h2 className="heading-lg mb-4">{service.title}</h2>
                <p className="text-2xl font-semibold text-primary-600 mb-4">{service.subtitle}</p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="card p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl mr-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Service Benefits */}
              <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our {service.title}?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <FaCheckCircle className="mr-3 flex-shrink-0 text-xl" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and results at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery & Strategy',
                description: 'Understanding your business, goals, and challenges to craft a customized strategy.'
              },
              {
                number: '02',
                title: 'Design & Development',
                description: 'Bringing your vision to life with modern technologies and best practices.'
              },
              {
                number: '03',
                title: 'Launch & Optimize',
                description: 'Monitoring performance and continuously optimizing for maximum ROI.'
              },
              {
                number: '04',
                title: 'Scale & Grow',
                description: 'Scaling infrastructure and campaigns as your business grows.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Let's discuss your project and create a customized solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Schedule Your Free Consultation
              </Link>
              <a href="mailto:contact@rightmediamarketing.com" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;