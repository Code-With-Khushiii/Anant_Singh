import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Business Analyst with experience across risk advisory, financial analysis, internal controls, MIS reporting, and data-driven business decision support. Analyzed $60M+ in inventory exposure, built reconciliation models that delivered $0.24M in cost savings, and segmented 100+ B2B customers to improve pricing, retention, and procurement risk visibility. Experienced in SQL, Excel, Power BI, Tableau, Python, SAP, financial modeling, IFC testing, KPI dashboards, market analysis, valuation, and control gap assessment.";

  const experience = [
    {
      company: "West Coast Laboratories - Pan-India Laboratory Chemicals Distributor",
      role: "Business Analyst",
      location: "Mumbai, India",
      dates: "Sep 2024 - Jun 2025",
      highlights: [
        "Evaluated market pricing, competitor positioning, and procurement trends across laboratory chemical categories, identifying cost-risk patterns and supporting data-driven pricing decisions for pan-India distribution operations.",
        "Segmented 100+ B2B customers by purchase frequency, order value, and payment behavior, enabling targeted sales prioritization, retention planning, and improved visibility into customer profitability.",
        "Automated recurring MIS reports and KPI dashboards using SQL, Excel, and visualization tools, streamlining reporting workflows and improving leadership access to sales, procurement, and inventory performance metrics.",
        "Partnered with procurement, finance, sales, and operations teams to convert business data into actionable recommendations, improving planning accuracy, demand visibility, and cross-functional decision-making across regional accounts."
      ]
    },
    {
      company: "Ernst & Young LLP - Business Risk Advisory",
      role: "Risk Analyst",
      location: "Mumbai, India",
      dates: "Jun 2023 - Aug 2024",
      highlights: [
        "Architected Excel and Power BI reconciliation models to monitor distributor-level buyback exposure across North and West India, identifying recovery gaps and delivering $0.24M in cost savings.",
        "Assessed $60M+ in inventory exposure for a listed chemical company, reviewing costing accuracy, user access rights, quality compliance, and financial reporting risks across key business processes.",
        "Executed IFC testing and internal control assessments across inventory and financial reporting processes, identifying SOP gaps and control deficiencies, and presented risk findings and remediation recommendations to a board-level audit committee, influencing CFO-approved process changes across inventory, reporting, and compliance workflows.",
        "Led a nationwide mystery shopping study for a German automotive OEM, coordinating dealer-level research and analyzing competitor pricing, service quality, and inventory data to support market growth and pricing strategy redesign."
      ]
    },
    {
      company: "Broadview Research Private Limited - Division of UK-Based Hedge Fund",
      role: "Equity Research Intern",
      location: "Mumbai, India",
      dates: "Apr 2022 - May 2022",
      highlights: [
        "Built financial models for 3+ Indian ethnic wear companies, forecasting revenue growth, margins, and operating performance to support equity research and investment analysis.",
        "Performed DCF valuation using WACC, terminal value assumptions, and discounted cash flow analysis, evaluating 3 valuation scenarios across base, upside, and downside cases.",
        "Conducted sensitivity analysis across revenue growth, EBITDA margins, and discount rates, identifying valuation ranges and investment themes including higher-margin product mix and Tier II/III market expansion."
      ]
    }
  ];

  const projects = [
    {
      title: "Leveraged Buyout Model for Dave & Buster's",
      subtitle: "Excel, Financial Modeling, DCF, IRR Analysis",
      category: "Financial Modeling",
      introduction: "Built an LBO model with unit-level revenue build, capital expenditure forecasting, three-statement integration, debt schedules, and IRR sensitivity analysis.",
      problem: "Private equity acquisition analysis requires a structured model connecting operating assumptions, financing, debt repayment, and exit economics.",
      objective: "Evaluate private equity acquisition returns using an integrated LBO and sensitivity framework.",
      methodology: [
        "Built unit-level revenue build and capital expenditure forecasts.",
        "Integrated three-statement model logic and debt schedules.",
        "Created IRR sensitivity analysis to evaluate return scenarios."
      ],
      results: [
        "Produced a private equity acquisition return model.",
        "Linked operating assumptions to debt paydown and IRR outcomes.",
        "Supported investment evaluation through scenario analysis."
      ],
      conclusion: "The model demonstrated applied transaction analysis, valuation, and private equity return evaluation."
    },
    {
      title: "Zomato Delivery Time Optimization",
      subtitle: "Python, Regression, PCA, Operations Analytics",
      category: "Operations Analytics",
      introduction: "Analyzed delivery operations data using PCA, regression modeling, and hypothesis testing to identify delay drivers.",
      problem: "Food delivery operations need better visibility into delay drivers during peak-hour and festival-season demand.",
      objective: "Identify operational bottlenecks and recommend resource allocation strategies.",
      methodology: [
        "Applied PCA and regression modeling in Python.",
        "Conducted hypothesis testing across delivery operations variables.",
        "Analyzed demand patterns during peak and festival periods."
      ],
      results: [
        "Identified delivery delay drivers.",
        "Recommended resource allocation strategies for high-demand windows.",
        "Generated operations analytics insights for service optimization."
      ],
      conclusion: "The project translated delivery data into practical operational recommendations."
    },
    {
      title: "Dognition Consumer Retention Analysis",
      subtitle: "SQL, Relational Databases, Customer Analytics",
      category: "Customer Analytics",
      introduction: "Analyzed a 6-table consumer database using SQL, relational schema design, and retention analysis.",
      problem: "Consumer platforms need visibility into sign-up, membership, test completion, and drop-off patterns to improve engagement.",
      objective: "Identify customer retention patterns and translate them into product engagement recommendations.",
      methodology: [
        "Analyzed a 6-table relational consumer database using SQL.",
        "Evaluated sign-up, membership, test completion, and drop-off behavior.",
        "Mapped retention patterns across the customer lifecycle."
      ],
      results: [
        "Identified key customer engagement and drop-off patterns.",
        "Produced retention insights for product recommendations.",
        "Applied relational database analysis to customer behavior data."
      ],
      conclusion: "The project used SQL-based retention analytics to support customer engagement strategy."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Analytics & BI',
      skills: ['SQL', 'Python', 'R', 'Power BI', 'Tableau', 'KPI Dashboards', 'MIS Reporting', 'Data Visualization']
    },
    {
      icon: TrendingUp,
      title: 'Financial & Business Analysis',
      skills: ['Advanced Excel', 'Pivot Tables', 'XLOOKUP', 'INDEX MATCH', 'Power Query', 'Solver', 'Financial Modeling', 'DCF Valuation', 'Sensitivity Analysis']
    },
    {
      icon: Users,
      title: 'Risk & Controls',
      skills: ['Internal Controls', 'IFC Testing', 'Risk Assessment', 'Control Gap Analysis', 'Reconciliation', 'Financial Reporting Analysis']
    },
    {
      icon: Lightbulb,
      title: 'Enterprise Tools',
      skills: ['SAP']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Science in Quantitative Management, Business Analytics & Finance",
      location: "Durham, NC",
      dates: "May 2026",
      details: "Graduate business analytics and finance education focused on quantitative decision-making, analytics, and financial analysis."
    },
    {
      school: "H.R. College of Commerce and Economics",
      degree: "Bachelor of Management Studies, Finance",
      location: "Mumbai, India",
      dates: "Apr 2023",
      details: "Finance-focused management education with applied exposure to business analysis, financial modeling, and valuation."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0 pr-4 text-lg sm:text-xl md:text-2xl font-display text-black tracking-wide leading-tight truncate">
              ANANT SINGH
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? "text-black font-medium" : "text-brown hover:text-black"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img src="images/image.png" alt="Anant Singh" className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              ANANT SINGH
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              BUSINESS ANALYST | RISK & FINANCIAL CONTROLS | DATA ANALYTICS
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">{summary}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('experience')} className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                VIEW EXPERIENCE
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'INVENTORY EXPOSURE', value: '$60M+', detail: 'Risk & Controls Assessment' },
              { label: 'COST SAVINGS', value: '$0.24M', detail: 'Reconciliation Models' },
              { label: 'B2B CUSTOMERS SEGMENTED', value: '100+', detail: 'Pricing & Retention Visibility' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors" onClick={() => scrollToSection('summary')} />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Risk advisory and business analytics professional connecting internal controls, financial analysis, MIS reporting, market analysis, and data-backed business recommendations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'Risk & Controls', detail: 'Assess IFC controls, inventory exposure, reporting risks, SOP gaps, reconciliation issues, and remediation recommendations.' },
              { icon: Rocket, title: 'Business Analytics', detail: 'Build KPI dashboards, MIS reports, customer segmentation, procurement insights, and data-driven recommendations across functions.' },
              { icon: Lightbulb, title: 'Financial Analysis', detail: 'Create financial models, DCF valuations, sensitivity analyses, pricing models, and equity research forecasts.' }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Business analysis, risk advisory, internal controls, market analysis, MIS reporting, and equity research experience.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{role.location} | {role.dates}</div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              LBO modeling, delivery operations optimization, and customer retention analytics projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setSelectedProject(index)}>
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">{project.category}</span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">{project.title}</h3>
                <p className="text-sm text-brown mb-4 font-light">{project.subtitle}</p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">{project.introduction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">{projects[selectedProject].title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-brown hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">{projects[selectedProject].category}</span>
                <p className="text-brown font-light mt-2">{projects[selectedProject].subtitle}</p>
              </div>
              {[
                ['INTRODUCTION', projects[selectedProject].introduction],
                ['PROBLEM STATEMENT', projects[selectedProject].problem],
                ['OBJECTIVE', projects[selectedProject].objective],
                ['CONCLUSION', projects[selectedProject].conclusion]
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">{title}</h3>
                  <p className="text-brown leading-relaxed font-light">{body}</p>
                </div>
              ))}
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Analytics, BI, financial analysis, internal controls, risk assessment, and enterprise tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{edu.location} | {edu.dates}</div>
                </div>
                <p className="text-brown leading-relaxed font-light">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss business analytics, risk advisory, internal controls, financial modeling, or data-driven decision support.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+19192010169" className="text-white/80 font-light hover:text-white transition-colors">+1 (919) 201-0169</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a href="https://www.linkedin.com/in/anant-singh-fuqua/" className="text-white/80 font-light hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:anantsingh04142002@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">anantsingh04142002@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Anant Singh | Risk, Financial Controls & Data Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
