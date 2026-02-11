import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faGraduationCap,
  faBriefcase,
  faFileLines
} from "@fortawesome/free-solid-svg-icons";
import NoPaperFormWidget from "./NoPaperFormWidget";

const courseData = {
  // ============================
  //            BBA
  // ============================
  "BBA": {
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 Years | Full-Time",
    image: "/herosection/course1.webp",
    eligibility: ["Passed 10+2 from a recognized board"],

    specializations: {
      "Financial Management": {
        summary:
          "BBA in Financial Management gives you a strong foundation in corporate finance, investment analysis, risk management, and financial planning. Through practical projects, real-world case studies, and hands-on learning, you’ll develop the skills to analyze financial data, make informed decisions, and think strategically. This program blends business knowledge with financial expertise, preparing you to confidently navigate the complex world of finance.",
        careers: [
          "Financial Analyst",
          "Corporate Finance Executive",
          "Investment Banker",
          "Risk Manager",
          "Portfolio Manager",
          "Accounts & Audit Executive",
          "Treasury Analyst",
          "Wealth Manager"
        ]
      },

      "Marketing Management": {
        summary:
          "BBA in Marketing Management equips you with a solid foundation in marketing strategy, consumer behavior, brand management, digital marketing, and market research. Through practical projects, case studies, and hands-on learning, you’ll develop the skills to analyze markets, craft effective strategies, and create value-driven campaigns. This program blends business knowledge with marketing expertise, enabling you to think creatively and strategically in the dynamic world of marketing.",
        careers: [
          "Marketing Executive / Manager",
          "Brand Manager",
          "Digital Marketing Specialist",
          "Sales Executive / Manager",
          "Market Research Analyst",
          "Advertising & Promotions Executive",
          "Product Manager",
          "Social Media Manager"
        ]
      },

      "Human Resource Management": {
        summary:
          "BBA in Human Resource Management provides a strong foundation in talent management, organizational behavior, recruitment, training & development, and employee relations. Through practical projects, real-world case studies, and hands-on learning, you’ll develop the skills to manage people effectively, build strong teams, and drive organizational success. This program blends business knowledge with HR expertise, enabling you to strategically shape workplace culture and performance.",
        careers: [
          "HR Executive / Manager",
          "Talent Acquisition Specialist",
          "Training & Development Officer",
          "Employee Relations Manager",
          "Payroll & Compensation Specialist",
          "HR Analytics Specialist",
          "Organizational Development Consultant"
        ]
      },

      "International Business": {
        summary:
          "BBA in International Business equips you with a solid foundation in global trade, international marketing, cross-cultural management, global finance, and international business strategy. Through practical projects, case studies, and real-world exposure, you’ll develop the skills to understand global markets, make strategic business decisions, and operate effectively across borders. This program blends business knowledge with international expertise, preparing you to thrive in today’s interconnected world.",
        careers: [
          "International Business Manager",
          "Export-Import Executive",
          "Global Supply Chain Analyst",
          "International Marketing Manager",
          "Business Development Manager",
          "Trade Compliance Specialist",
          "International Sales Manager"
        ]
      },

      "Business Analytics": {
        summary:
          "BBA in Business Analytics provides a strong foundation in data analysis, business intelligence, statistical modeling, predictive analytics, and decision-making tools. Through hands-on projects, real-world case studies, and practical exposure, you’ll develop the skills to analyze complex business data, uncover insights, and drive strategic decisions. This program blends business knowledge with analytical expertise, preparing you to solve real-world business challenges with data-driven precision.",
        careers: [
          "Business Analyst",
          "Data Analyst / Data Scientist",
          "Market Research Analyst",
          "Operations Analyst",
          "Business Intelligence Analyst",
          "Risk & Strategy Analyst",
          "Analytics Consultant"
        ]
      },

      "Digital Marketing": {
        summary:
          "BBA in Digital Marketing equips you with a solid foundation in SEO, social media marketing, content strategy, digital advertising, and data-driven marketing insights. Through hands-on projects, real-world case studies, and practical exposure, you’ll develop the skills to create impactful campaigns, analyze audience behavior, and drive results in the digital landscape. This program blends business knowledge with digital expertise, preparing you to lead in today’s fast-paced online world.",
        careers: [
          "Digital Marketing Executive / Manager",
          "SEO / SEM Specialist",
          "Social Media Manager",
          "Content Marketing Strategist",
          "Email Marketing Manager",
          "Online Advertising / PPC Specialist",
          "Marketing Analytics Specialist",
          "Brand & Campaign Manager"
        ]
      }
    }
  },

  // ============================
  //            B.Com.
  // ============================
  "B.Com.": {
    title: "Bachelor of Commerce (B.Com.)",
    duration: "3 Years | Full-Time",
    image: "/herosection/course2.webp",
    eligibility: ["Passed 10+2 in Commerce or any stream from a recognized board"],

    specializations: {
      "Accounting & Finance": {
        summary:
          "B.Com. in Accounting and Finance builds a strong foundation in financial accounting, taxation, auditing, cost accounting, and financial analysis. Through practical learning and real-world case studies, the program equips you with the skills to interpret financial data, manage accounts, and make informed financial decisions. It blends essential commerce knowledge with financial expertise to help you understand and strengthen an organization’s financial health.",
        careers: [
          "Accountant",
          "Financial Analyst",
          "Tax Consultant",
          "Audit Assistant / Auditor",
          "Accounts Executive",
          "Finance Officer",
          "Financial Planner",
          "Payroll Executive",
          "Compliance & Reporting Assistant"
        ]
      },

      "Costing": {
        summary:
          "B.Com. in Costing provides a strong foundation in cost accounting, budgeting, cost analysis, pricing strategies, and financial control. Through practical exercises and real-world case studies, the program helps you develop the skills to identify, manage, and optimize costs, ensuring better decision-making and operational efficiency. It blends core commerce knowledge with specialized costing techniques to help you understand and improve an organization’s financial performance.",
        careers: [
          "Cost Accountant Assistant",
          "Cost Analyst",
          "Budget Analyst",
          "Cost Controller",
          "Pricing Analyst",
          "Production Cost Supervisor",
          "Cost Audit Assistant"
        ]
      }
    }
  },

  // ============================
  //            MBA
  // ============================
  "MBA": {
    title: "Master of Business Administration (MBA)",
    duration: "2 Years | Full-Time",
    image: "/herosection/cource3.webp",
    eligibility: ["Any graduation with minimum 50% marks"],

    specializations: {
      "Marketing Management": {
        summary:
          "MBA in Marketing Management builds advanced expertise in marketing strategy, consumer behavior, branding, digital marketing, market analytics, and integrated communication. Through case studies, live projects, and practical simulations, the program equips you with the ability to analyze markets, understand customer needs, craft powerful campaigns, and drive business growth. It blends strategic business insight with creative marketing skills, preparing you to lead and innovate in a dynamic, competitive marketplace.",
        careers: [
          "Marketing Manager / Executive",
          "Brand Manager",
          "Product Manager",
          "Digital Marketing Strategist",
          "Market Research Analyst",
          "Sales Manager",
          "Social Media Manager"
        ]
      },

      "Financial Management": {
        summary:
          "MBA in Financial Management provides advanced knowledge in corporate finance, investment analysis, financial planning, risk management, and strategic decision-making. Through real-world case studies, practical projects, and analytical tools, the program helps you develop the expertise to evaluate financial performance, manage capital, optimize investments, and guide organizations toward sustainable growth. It blends strong business leadership skills with deep financial expertise, preparing you to navigate complex financial environments with confidence.",
        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Corporate Finance Manager",
          "Risk Manager",
          "Portfolio Manager",
          "Accounts & Audit Manager",
          "Treasury Analyst"
        ]
      },

      "Human Resource Management": {
        summary:
          "MBA in Human Resource Management offers advanced learning in talent management, organizational behavior, leadership development, HR analytics, employee relations, and strategic workforce planning. Through practical projects, case studies, and experiential learning, the program equips you with the ability to build high-performing teams, shape workplace culture, design effective HR policies, and align people strategies with organizational goals. It blends strong leadership skills with modern HR expertise, preparing you to lead and inspire in today’s evolving work environments.",
        careers: [
          "HR Manager / Executive",
          "Talent Acquisition Manager",
          "Training & Development Manager",
          "Employee Relations Manager",
          "Compensation & Benefits Specialist",
          "HR Analytics Specialist",
          "Organizational Development Consultant"
        ]
      },

      "International Business": {
        summary:
          "MBA in International Business offers focused learning in global trade, international marketing, cross-cultural management, and global finance. Through practical projects and international business simulations, the program builds the skills to analyze global markets, manage cross-border operations, and make strategic decisions in a global environment.",
        careers: [
          "International Business Manager",
          "Global Marketing Manager",
          "Export–Import Manager",
          "International Trade Analyst",
          "International Sales Manager",
          "Foreign Market Entry Specialist",
          "International Finance Executive",
          "International Operations Manager",
          "Trade Compliance Officer"
        ]
      }
    }
  },

  // ============================
  //      NEW AGE MBA
  // ============================
  "New Age MBA": {
    title: "New Age MBA",
    duration: "2 Years | Future-Ready Program",
    image: "/herosection/course4.webp",
    eligibility: ["Graduation in any stream from a recognized university"],

    specializations: {
      "Banking and Financial Services": {
        summary:
          "New Age MBA in Banking and Financial Services combines advanced finance concepts, banking operations, risk management, and investment strategies with practical, industry-focused learning from the very first semester. The program also offers exclusive international industry exposure, giving you a global perspective on modern banking and finance. Gain the skills to analyze financial markets, manage banking operations, and make strategic decisions with confidence.",
        careers: [
          "Banking Operations Manager",
          "Corporate Finance Manager",
          "Investment Banker",
          "Risk & Compliance Manager",
          "Financial Analyst",
          "Treasury Manager",
          "Wealth & Portfolio Manager",
          "Credit & Loan Manager",
          "Financial Strategy Consultant"
        ]
      },

      "Business Analytics": {
        summary:
          "New Age MBA in Business Analytics combines advanced data analysis, predictive modeling, business intelligence, and decision-making tools with practical, industry-focused learning from the very first semester. The program also includes exclusive international industry exposure, giving you a global perspective on how businesses leverage data to drive growth. Develop the skills to analyze complex datasets, extract actionable insights, and make data-driven strategic decisions with confidence.",
        careers: [
          "Business / Data Analyst",
          "Business Intelligence (BI) Specialist",
          "Market Research Analyst",
          "Predictive Analytics Specialist",
          "Operations Analyst",
          "Risk & Strategy Analyst",
          "Data-Driven Decision Consultant",
          "Analytics Project Manager",
          "Insights & Reporting Manager"
        ]
      }
    }
  }
};



export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("BBA");
  const [activeSpec, setActiveSpec] = useState(
    Object.keys(courseData["BBA"].specializations)[0]
  );
  const [openApply, setOpenApply] = useState(false);
  // PRELOAD ALL IMAGES (removes first-time lag)
  React.useEffect(() => {
    Object.values(courseData).forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <section className=" w-full py-5 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl font-semibold tracking-wide text-center text-slate-700 mb-8"
        >
          Programs Offered
        </motion.h2>
        <div className="absolute -bottom-10 left-[30%] w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>

        {/* MAIN TABS (Sliding Pill Design) */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex relative">
            {Object.keys(courseData).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSpec(Object.keys(courseData[tab].specializations)[0]);
                }}
                className={`relative px-4 py-1 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 z-10  ${activeTab === tab ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#0E1B50] rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* LEFT COLUMN: Image (constant, no blink) */}
          <div className="lg:col-span-6 relative flex flex-col">
            <motion.div
              key={`image-${activeTab}`}   // ✅ changes only when tab changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full min-h-[460px]"
            >
              <img
                src={courseData[activeTab].image}
                alt={courseData[activeTab].title}
                className="w-full h-full object-cover"
              />
            </motion.div>


            {/* Decorative Border */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-3xl border-2 border-[#0E1B50]/10 hidden md:block"></div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               onClick={() => setOpenApply(true)}
              className="mt-4 w-full sm:w-auto px-8 py-3 bg-[#0E1B50] text-white rounded-xl font-semibold shadow-lg
            shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
            >
              Download Brochure
              <FontAwesomeIcon icon={faArrowRight} className="text-sky-400" />
            </motion.button>
          </div>

          {/* RIGHT COLUMN (equal height, no overlap) */}
          <div className="lg:col-span-6 flex flex-col h-full">

            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col h-full"
            >


              {/* Header */}
              <div className="mb-3">
                <h3 className=" text-2xl md:text-3xl font-bold text-[#0E1B50] mb-1">
                  {courseData[activeTab].title}
                </h3>

                <div className="flex items-center gap-4 text-slate-500 font-medium">
                  <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
                  {courseData[activeTab].duration}

                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Choose Specialization
                  </h4>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-2">
                <div className="flex flex-wrap gap-2">
                  {Object.keys(courseData[activeTab].specializations).map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setActiveSpec(spec)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border ${activeSpec === spec
                        ? "bg-sky-50 border-sky-200 text-[#0E1B50] shadow-sm ring-1 ring-sky-200"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stable Height Content Box */}
              <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-grow 
        min-h-[350px]">

                <motion.div
                  key={activeSpec}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* SUMMARY SECTION */}
                  <div className="bg-sky-50 p-4 rounded-xl border border-rose-100 mb-3 md:h-[220px]">
                    <h4 className="font-bold text-[#0E1B50] flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-yellow-600">
                        <FontAwesomeIcon icon={faFileLines} size="sm" />
                      </span>
                      Summary
                    </h4>

                    <p className="text-slate-600 text-sm ml-1">
                      {courseData[activeTab].specializations[activeSpec].summary}
                    </p>
                  </div>

                  <div className="h-px w-full bg-slate-100 mb-3"></div>

                  {/* CAREER OPPORTUNITIES */}
                  <div className="mb-3 bg-sky-50 p-4 rounded-xl border border-sky-100 md:h-[180px]">
                    <h4 className="font-bold text-[#0E1B50] flex items-center gap-2 mb-2 ">
                      <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <FontAwesomeIcon icon={faBriefcase} size="sm" />
                      </span>
                      Career Opportunities
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {courseData[activeTab].specializations[activeSpec].careers.map((career, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                          {career}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-100 mb-3"></div>

                  {/* ELIGIBILITY */}
                  <div className="bg-sky-50 p-4 rounded-xl border border-rose-100 md:h-[130px]">
                    <h4 className="font-bold text-[#0E1B50] flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                      </span>
                      Eligibility
                    </h4>

                    <ul className="space-y-1">
                      {courseData[activeTab].eligibility.map((e, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>



              </div>
            </motion.div>
          </div>
        </div>


      </div>
        {/* APPLY POPUP */}
      {openApply && (
        <div style={overlay}>
          <div style={modal}>
            <button onClick={() => setOpenApply(false)} style={closeBtn}>
              ✖
            </button>
             <h2 className="text-xl font-semibold text-black text-center mb-4">Enquire Now</h2>
            <NoPaperFormWidget />
          </div>
        </div>
      )}

    </section>
  );
}

/* ---------- MODAL STYLES ---------- */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: "20px",
  width: "90%",
  maxWidth: "600px",
  borderRadius: "10px",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "12px",
  cursor: "pointer",
  fontSize: "18px",
};
