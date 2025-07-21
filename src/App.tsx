import React, { useState, useEffect } from 'react';
import { Phone, Mail, TrendingUp, Shield, BarChart3, Award, ChevronRight, Menu, X, Star, Users, Building2 } from 'lucide-react';
import Logo from './components/Logo';
import LoadingPage from './components/LoadingPage';

interface Bond {
  name: string;
  isin: string;
  rating: string;
  coupon: string;
  maturity: string;
  yield: string;
  description: string;
  currency: string;
  logo: string;
  minInvestment: string;
}

const bonds: Bond[] = [
  {
    name: "Deutsche Bank",
    isin: "DE000A30VT97",
    rating: "A-",
    coupon: "Annual",
    maturity: "14/11/2049",
    yield: "10.00%",
    description: "Premium institutional-grade bond from Germany's leading investment bank with strong covenant protection.",
    currency: "GBP",
    logo: "/deutsche bank-logo-png.png",
    minInvestment: "£100,000"
  },
  {
    name: "Barclays",
    isin: "US06738ECN31",
    rating: "A",
    coupon: "Quarterly",
    maturity: "22/11/2049",
    yield: "9.625%",
    description: "High-grade sterling bond from UK's premier investment banking institution with quarterly distributions.",
    currency: "GBP",
    logo: "/barclays-logo.png",
    minInvestment: "£100,000"
  },
  {
    name: "Santander",
    isin: "USH05971KAQ22",
    rating: "A",
    coupon: "Quarterly",
    maturity: "21/11/2049",
    yield: "9.625%",
    description: "Investment-grade fixed income security from leading European banking group with proven track record.",
    currency: "GBP",
    logo: "/santander-logo.png",
    minInvestment: "£100,000"
  },
  {
    name: "UBS",
    isin: "USH3698DDW14",
    rating: "A",
    coupon: "Semi-annual",
    maturity: "15/11/2033",
    yield: "9.016%",
    description: "Swiss precision in fixed income investing with medium-term maturity and institutional-grade credit quality.",
    currency: "GBP",
    logo: "/ubs-logo.png",
    minInvestment: "£100,000"
  },
  {
    name: "JP Morgan",
    isin: "US06423AAJ25",
    rating: "BBB+",
    coupon: "Semi-annual",
    maturity: "01/09/2030",
    yield: "8.750%",
    description: "Global investment banking leader offering attractive yield with semi-annual coupon payments.",
    currency: "GBP",
    logo: "/jpmorgan-logo-png.png",
    minInvestment: "£100,000"
  }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    investmentAmount: '',
    investmentTimeline: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleBondClick = () => {
    scrollToSection('contact');
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Logo size="md" showText={true} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Investment Solutions
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  Investment Solutions
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="London Financial District"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#012169]/85 via-[#012169]/75 to-[#012169]/90"></div>
        </div>
        
        {/* Subtle UK flag elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#012169] to-[#C8102E] transform rotate-12 -skew-x-12"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C8102E] to-[#012169] transform -rotate-12 skew-x-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Institutional-Grade
              <span className="block text-blue-200">Bond Investments</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-sm">
              Access premium fixed-income opportunities typically reserved for institutional investors. 
              Professional portfolio management with transparent pricing and institutional execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-white to-gray-100 text-[#012169] px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Investment Solutions
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-white via-blue-50/20 to-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Shield className="w-8 h-8 text-[#012169]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">FCA Regulated</h3>
              <p className="text-gray-600">Fully authorized and regulated by the Financial Conduct Authority</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Building2 className="w-8 h-8 text-[#012169]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Institutional Access</h3>
              <p className="text-gray-600">Direct access to institutional-grade investment opportunities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-8 h-8 text-[#012169]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Advisory</h3>
              <p className="text-gray-600">Dedicated relationship managers with institutional experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Solutions */}
      <section id="products" className="py-20 bg-gradient-to-b from-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Fixed Income Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated portfolio of investment-grade bonds from leading global financial institutions. 
              Each opportunity undergoes rigorous due diligence and credit analysis.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#012169] to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {bonds.map((bond, index) => (
              <div 
                key={index} 
                onClick={handleBondClick}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#012169]/20 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <img 
                        src={bond.logo} 
                        alt={`${bond.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{bond.name}</h3>
                      <p className="text-sm text-gray-500">{bond.currency} Denominated</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#012169] to-blue-600 bg-clip-text text-transparent">{bond.yield}</div>
                    <div className="text-sm text-gray-500">Annual Yield</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Credit Rating</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {bond.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Coupon Frequency</span>
                    <span className="text-sm font-medium text-gray-900">{bond.coupon}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Maturity Date</span>
                    <span className="text-sm font-medium text-gray-900">{bond.maturity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Minimum Investment</span>
                    <span className="text-sm font-medium text-gray-900">{bond.minInvestment}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{bond.description}</p>
                
                <div className="flex items-center text-[#012169] text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Institutional Excellence, Personal Service
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Rate Move bridges the gap between institutional-grade investment opportunities and individual investors. 
                Our team of experienced professionals provides access to premium fixed-income securities typically reserved 
                for large institutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We maintain the highest standards of due diligence, transparency, and client service, ensuring that every 
                investment opportunity meets our rigorous criteria for credit quality, liquidity, and return potential.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#012169] to-blue-600 bg-clip-text text-transparent mb-2">£2.5B+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#012169] to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#012169] to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#012169] to-blue-600 bg-clip-text text-transparent mb-2">A+</div>
                  <div className="text-sm text-gray-600">Credit Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose The Rate Move</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Award className="w-3 h-3 text-[#012169]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Institutional Access</h4>
                    <p className="text-gray-600 text-sm">Direct access to institutional-only investment opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-3 h-3 text-[#012169]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rigorous Due Diligence</h4>
                    <p className="text-gray-600 text-sm">Comprehensive credit analysis and risk assessment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-3 h-3 text-[#012169]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden fees, competitive institutional pricing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#012169]/10 to-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-3 h-3 text-[#012169]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personal Relationship Manager</h4>
                    <p className="text-gray-600 text-sm">Dedicated support from experienced professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#012169]/85 via-[#012169]/75 to-[#012169]/90 relative overflow-hidden">
        {/* Subtle UK flag pattern in background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-[#C8102E] to-transparent transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-tr from-white to-transparent transform -rotate-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-300">
              Speak with our investment specialists to discuss your portfolio objectives and explore suitable opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:border-[#012169] transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:border-[#012169] transition-all duration-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:border-[#012169] transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount (GBP) *
                </label>
                <select
                  id="investmentAmount"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:border-[#012169] transition-all duration-200"
                  required
                >
                  <option value="">Select investment amount</option>
                  <option value="100000-250000">£100,000 - £250,000</option>
                  <option value="250000-500000">£250,000 - £500,000</option>
                  <option value="500000-1000000">£500,000 - £1,000,000</option>
                  <option value="1000000-2500000">£1,000,000 - £2,500,000</option>
                  <option value="2500000+">£2,500,000+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="investmentTimeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Timeline *
                </label>
                <select
                  id="investmentTimeline"
                  name="investmentTimeline"
                  value={formData.investmentTimeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:border-[#012169] transition-all duration-200"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#012169] to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Or call us directly at{' '}
                <a href="tel:+442071234567" className="text-[#012169] hover:text-blue-600 font-medium transition-colors duration-200">
                  +44 (0) 20 7123 4567
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-[#012169]/90 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo size="md" variant="white" showText={true} />
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Institutional-grade fixed income investments with personal service. 
                Authorized and regulated by the Financial Conduct Authority.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+44 (0) 20 7123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>enquiries@theratemove.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>FCA Registration: 123456</p>
                <p>Company No: 12345678</p>
                <p>Registered in England & Wales</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} The Rate Move Ltd. All rights reserved. 
              Capital at risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;