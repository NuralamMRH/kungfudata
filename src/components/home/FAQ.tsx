import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need a local entity or team in China to work with KFD?",
    answer:
      "No. You sell inventory to us at wholesale. We operate fully under our licenses and infrastructure. No local setup or team required.",
  },
  {
    question: "Who controls pricing, content, and strategy?",
    answer:
      "We do - but always in alignment with your brand goals. We own execution across platforms, but you’ll always have visibility and strategic input.",
  },
  {
    question: "What platforms do you sell on?",
    answer:
      "We operate your official presence across platforms like Tmall, JD.com, Douyin, Little Red Book, WeChat, etc. depending on what’s right for your category and growth goals.",
  },
  {
    question: "How is KFD different from a TP or agency?",
    answer:
      "We’re not a service provider. We buy your inventory, run the business in-house, and only make money when you do. No fees, no retainers - just aligned incentives.",
  },
  {
    question: "What kind of brands do you work with?",
    answer:
      "We partner with global fashion, lifestyle and performance brands that have strong equity, differentiated product, and are serious about long-term China growth.",
  },
  {
    question: "What’s the risk on our side?",
    answer:
      "Very little. You sell us inventory at wholesale - we take on the operational risk, marketing spend, and sell-through responsibility.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Typically within 8-12 weeks, depending on platform approval timelines and inventory logistics.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="framer-19dlgb6" data-framer-name="FAQ" id="faq">
      <div className="framer-slggos" data-framer-name="Container">
        <div className="framer-6gocsa" data-framer-name="Heading">
          <div className="ssr-variant">
            <div
              className="framer-gldmxa"
              style={{ opacity: 1, transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="framer-text framer-styles-preset-4vuy4n"
                data-styles-preset="nCOD2Sdie"
              >
                FAQ -{" "}
                <span
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  className="framer-text"
                >
                  What Brands Ask Us Most
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ssr-variant">
          <div
            className="framer-uWCdK framer-10950d3 framer-v-10950d3"
            data-framer-name="Desktop"
            style={{ width: "100%" }}
          >
            <div className="framer-mbtw9f-container">
              <div style={{ width: "100%" }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "4px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    <div
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "26px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            color: "rgb(10, 10, 10)",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "1.3em",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <img
                        src="https://framerusercontent.com/assets/j6H7CUu4CDaOQoux5xCbVztY18.svg"
                        alt="icon"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginLeft: "16px",
                          transform:
                            openIndex === index ? "rotate(180deg)" : "none",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        height: openIndex === index ? "auto" : "0px",
                        transition: "height 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          padding: "0 26px 26px 26px",
                          boxSizing: "border-box",
                        }}
                      >
                        <p
                          style={{
                            color: "rgba(10, 10, 10, 0.6)",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "15px",
                            fontWeight: 500,
                            lineHeight: "1.4em",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
