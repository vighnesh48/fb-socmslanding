import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What programs are offered under Sandip University’s School of Commerce & Management Studies?",
    a: "We offer undergraduate programs like BBA and B.Com., as well as postgraduate programs such as MBA and specialized New Age MBA programs.",
  },
  {
    q: "What is the eligibility criteria for BBA admission at Sandip University?",
    a: "Passed 10+2 from a recognized board with minimum required marks depending on the category. Specific requirements may vary for different specializations.",
  },
  {
    q: "What is the eligibility criteria for B.Com. admission at Sandip University?",
    a: "Passed 10+2 in Commerce or any stream from a recognized board with minimum required marks.",
  },
  {
    q: "Do I need to appear for an entrance exam for MBA programs at Sandip University?",
    a: "Some MBA programs require entrance tests or personal interviews. For New Age MBA programs, industry exposure and prior academic performance are also considered.",
  },
  {
    q: "Can I switch my specialization after taking admission at Sandip University?",
    a: "Yes, in some cases, students may switch specializations depending on seat availability and academic guidelines.",
  },
  {
    q: "Are internships included in the curriculum at Sandip University?",
    a: "Yes, internships and industry projects are integrated into the curriculum for practical exposure.",
  },
  {
    q: "What is the duration of the BBA, B.Com., and MBA programs at Sandip University?",
    a: "BBA and B.Com. programs are 3 years each, while MBA and New Age MBA programs are 2 years each.",
  },
  {
    q: "What career opportunities are available after graduation from Sandip University?",
    a: "Graduates can pursue careers in Marketing, Finance, Human Resource Management, Business Analytics, Digital Marketing, International Business, and more, depending on their specialization.",
  },
  {
    q: "Is hostel accommodation available on the Sandip University campus?",
    a: "Yes, Sandip University provides hostel facilities within the campus for students.",
  }
];




export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

  <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-3xl font-semibold tracking-wide text-center text-slate-700 mb-8"
                >
          FAQ's
                </motion.h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="w-full">
              
              {/* FAQ HEADER */}
              <button
                className="w-full bg-[#f5f7fa] px-5 py-2 rounded-md flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-[#1f2c40]">
                  {item.q}
                </span>

                <span className="text-[#1f3b5f]">
                  {openIndex === index ? (
                    <FaMinus size={18} />
                  ) : (
                    <FaPlus size={18} />
                  )}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-[#34445c] text-base leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
