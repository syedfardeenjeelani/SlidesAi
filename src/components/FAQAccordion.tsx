import React, { useState } from "react";

const FAQAccordion = () => {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time with no penalties.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices.",
    },
    {
      question: "How does billing work?",
      answer: "We process billing monthly and send invoices via email.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in your profile settings.",
    },
  ];

  const [activeIndex, setActiveIndex]: any = useState(0);

  const toggleAccordion = (index:number  | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:h-[504px] max-w-[788px] mx-auto p-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-[#EAECF0]">
          <button
            className="w-full py-4 flex justify-between items-center text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-[#212F40] text-[18px] font-medium">
              {item.question}
            </span>
            <span className="ml-6 flex-shrink-0">
              {activeIndex === index ? (
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </span>
          </button>
          {activeIndex === index && (
            <div className=" pb-[32px] leading-6 pt-[8px] text-[#697586]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
