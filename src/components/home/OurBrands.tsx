import React from "react";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "G-STAR",
    id: "gstar",
    description:
      "G-Star entered China with KFD in 2022. Within 6 months, it became one of the fastest-growing denim brands on Tmall. Full channel control, no discounting, and brand integrity fully protected.",
    image:
      "https://framerusercontent.com/images/HMtmIMM18YpEUXpGpFnMfgCmL3E.png?width=447&height=441",
  },
  {
    name: "2XU",
    id: "2xu",
    description:
      "Premium performance brand 2XU struggled with fragmented ops in China. KFD relaunched the brand on Tmall, JD, Douyin and RED, consolidating control and delivering consistent double-digit MoM growth.",
    image:
      "https://framerusercontent.com/images/6DoZnOvN7fYANFBwW7BRF9ZVYk.png?width=448&height=441",
  },
  {
    name: "CEP",
    id: "cep",
    description:
      "German compression wear brand CEP needed a partner who could navigate China's unique ecommerce demands. KFD built their entire online footprint from scratch - with full price protection and fast growth.",
    image:
      "https://framerusercontent.com/images/yER3heUap0Xdx0uKsqIGh3C5DWc.png?width=448&height=441",
  },
];

const OurBrands: React.FC = () => {
  return (
    <section
      className="framer-1uqamhb"
      data-framer-name="Projects"
      id="our-brands"
    >
      <div className="framer-1dgdgfy" data-framer-name="Container">
        <div className="framer-160imuk" data-framer-name="Top">
          <div className="framer-cz0hs" data-framer-name="Heading">
            <div className="ssr-variant">
              <div
                className="framer-1n7fmjy"
                data-framer-name="Title"
                style={{ transform: "none" }}
                data-framer-component-type="RichTextContainer"
              >
                <h2
                  className="framer-text framer-styles-preset-4vuy4n"
                  data-styles-preset="nCOD2Sdie"
                >
                  Real Brands.{" "}
                  <span
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    className="framer-text"
                  >
                    Real Growth.
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="framer-iz4kd2" data-framer-name="Description">
            <div
              className="framer-1h35oa6"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1hin0ji"
                data-styles-preset="fN1_sGlJp"
              >
                Success stories from our partners.
              </p>
            </div>
          </div>
        </div>

        <div
          className="framer-1ovulc"
          style={{
            willChange: "transform",
            opacity: 1,
            transform: "none",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="ssr-variant">
              <div
                className="framer-1mpwda1-container"
                style={{
                  willChange: "transform",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <Link
                  className="framer-PPyLO framer-WyC4r framer-Pv7XK framer-PU6Rs framer-1pvanvp framer-v-1pvanvp framer-jfqukl"
                  data-framer-name="Desktop"
                  style={{
                    width: "100%",
                    borderRadius: "18px",
                    textDecoration: "none",
                  }}
                  to="/brands"
                >
                  <div
                    className="framer-1phl3yp"
                    data-border="true"
                    data-framer-name="Project header"
                    style={
                      {
                        // @ts-ignore
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-4ed04b9e-fc44-46ee-a998-d1f9a24ecaf1, rgb(255, 255, 255))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor:
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        borderRadius: "18px",
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="framer-1ngy3nr"
                      data-framer-name="Project info"
                    >
                      <div
                        className="framer-1nrdfqm"
                        data-framer-name="Project name"
                        style={{
                          // @ts-ignore
                          "--extracted-r6o4lv":
                            "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-9v8dhs"
                          data-styles-preset="oFAZmwcVJ"
                          style={
                            {
                              // @ts-ignore
                              "--framer-text-color": "var(--extracted-r6o4lv)",
                            } as React.CSSProperties
                          }
                        >
                          {brand.name}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1k24nbf" data-framer-name="Dots">
                      <div
                        className="framer-1cd8tzb"
                        data-framer-name="Ellipse 5"
                        style={{
                          backgroundColor: "rgb(231, 231, 231)",
                          borderRadius: "100%",
                        }}
                      ></div>
                      <div
                        className="framer-lfceny"
                        data-framer-name="Ellipse 6"
                        style={{
                          backgroundColor: "rgb(231, 231, 231)",
                          borderRadius: "100%",
                        }}
                      ></div>
                      <div
                        className="framer-c0phxw"
                        data-framer-name="Ellipse 7"
                        style={{
                          backgroundColor: "rgb(231, 231, 231)",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className="framer-1ji9qc6"
                    data-border="true"
                    data-framer-name="Background"
                    style={
                      {
                        // @ts-ignore
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-4ed04b9e-fc44-46ee-a998-d1f9a24ecaf1, rgb(255, 255, 255))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor:
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        borderRadius: "18px",
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="framer-g0v85h"
                      data-framer-name="Image container"
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        className="framer-1re9uu1"
                        data-framer-name="Image"
                        style={{ filter: "none", transform: "none" }}
                      >
                        <div
                          style={{ position: "absolute", inset: 0 }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            loading="lazy"
                            src={brand.image}
                            alt={brand.name}
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1iebpup"
                      data-framer-name="Text"
                      style={{ padding: "20px" }}
                    >
                      <div
                        className="framer-1d7jhgk"
                        data-framer-name="Join Us Description"
                        style={{
                          // @ts-ignore
                          "--framer-paragraph-spacing": "0px",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1n1wh7h"
                          data-styles-preset="gd6AWaps9"
                        >
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
