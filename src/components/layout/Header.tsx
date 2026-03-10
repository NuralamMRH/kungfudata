import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="framer-gdzxqr-container">
      <header
        className="framer-wfyqv framer-0CPYn framer-m9VkI framer-ZkB8p framer-bzu5mb framer-v-1lqqdz1"
        data-framer-name="Desktop-Dark"
        style={{
          backdropFilter: "blur(7px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          WebkitBackdropFilter: "blur(7px)",
          width: "100%",
          boxShadow: "none",
        }}
      >
        <nav className="framer-120hnkq" data-framer-name="Top">
          <div className="framer-305coq">
            <Link
              className="framer-iogiyt framer-1a90gm8"
              data-framer-name="Link"
              to="/"
              data-framer-page-link-current={isHome ? "true" : undefined}
            >
              <div className="framer-kxb2zt-container">
                <div
                  className="framer-0ZjEy framer-1ppeyn8 framer-v-1ppeyn8"
                  data-framer-name="Desktop"
                  style={{ height: "100%", width: "100%" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="async"
                      width="1901"
                      height="823"
                      sizes="(min-width: 1200px) 70px, (min-width: 810px) and (max-width: 1199.98px) 70px, (max-width: 809.98px) 70px"
                      srcSet="
                        https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=512   512w,
                        https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png?scale-down-to=1024 1024w,
                        https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png                    1901w
                      "
                      src="https://framerusercontent.com/images/Lb06yxoqfIPx6VHqbx3U3xq7M.png"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="framer-1omgnrp"
              style={{
                backgroundColor:
                  "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
              }}
            ></div>
            <div className="framer-1fls40a">
              <div className="framer-1ubnatg-container" style={{ opacity: 1 }}>
                <Link
                  className="framer-p35K2 framer-7g0p1o framer-v-7g0p1o framer-1ljdjoh"
                  data-framer-name="Default"
                  to="/our-model"
                >
                  <div
                    className="framer-xu6ifz"
                    style={
                      {
                        // @ts-ignore
                        "--extracted-r6o4lv":
                          "var(--variable-reference-YcbtSTF5J-ebExugia5)",
                        "--framer-paragraph-spacing": "0px",
                        "--variable-reference-YcbtSTF5J-ebExugia5":
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        transform: "none",
                      } as React.CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={
                        {
                          // @ts-ignore
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": 600,
                          "--framer-letter-spacing": "-0.04em",
                          "--framer-line-height": "110%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))",
                        } as React.CSSProperties
                      }
                      className="framer-text"
                    >
                      Our Model
                    </p>
                  </div>
                </Link>
              </div>
              <div className="framer-1phpovz-container" style={{ opacity: 1 }}>
                <Link
                  className="framer-p35K2 framer-7g0p1o framer-v-7g0p1o framer-1ljdjoh"
                  data-framer-name="Default"
                  to="/brands"
                >
                  <div
                    className="framer-xu6ifz"
                    style={
                      {
                        // @ts-ignore
                        "--extracted-r6o4lv":
                          "var(--variable-reference-YcbtSTF5J-ebExugia5)",
                        "--framer-paragraph-spacing": "0px",
                        "--variable-reference-YcbtSTF5J-ebExugia5":
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        transform: "none",
                      } as React.CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={
                        {
                          // @ts-ignore
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": 600,
                          "--framer-letter-spacing": "-0.04em",
                          "--framer-line-height": "110%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))",
                        } as React.CSSProperties
                      }
                      className="framer-text"
                    >
                      Brands
                    </p>
                  </div>
                </Link>
              </div>
              <div className="framer-1q78hcd-container" style={{ opacity: 1 }}>
                <Link
                  className="framer-p35K2 framer-7g0p1o framer-v-7g0p1o framer-1ljdjoh"
                  data-framer-name="Default"
                  to="/why-china"
                >
                  <div
                    className="framer-xu6ifz"
                    style={
                      {
                        // @ts-ignore
                        "--extracted-r6o4lv":
                          "var(--variable-reference-YcbtSTF5J-ebExugia5)",
                        "--framer-paragraph-spacing": "0px",
                        "--variable-reference-YcbtSTF5J-ebExugia5":
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        transform: "none",
                      } as React.CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={
                        {
                          // @ts-ignore
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": 600,
                          "--framer-letter-spacing": "-0.04em",
                          "--framer-line-height": "110%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))",
                        } as React.CSSProperties
                      }
                      className="framer-text"
                    >
                      Why China
                    </p>
                  </div>
                </Link>
              </div>
              <div className="framer-13ph7yy-container" style={{ opacity: 1 }}>
                <Link
                  className="framer-p35K2 framer-7g0p1o framer-v-7g0p1o framer-1ljdjoh"
                  data-framer-name="Default"
                  to="/resources"
                >
                  <div
                    className="framer-xu6ifz"
                    style={
                      {
                        // @ts-ignore
                        "--extracted-r6o4lv":
                          "var(--variable-reference-YcbtSTF5J-ebExugia5)",
                        "--framer-paragraph-spacing": "0px",
                        "--variable-reference-YcbtSTF5J-ebExugia5":
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        transform: "none",
                      } as React.CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={
                        {
                          // @ts-ignore
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": 600,
                          "--framer-letter-spacing": "-0.04em",
                          "--framer-line-height": "110%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))",
                        } as React.CSSProperties
                      }
                      className="framer-text"
                    >
                      Resources
                    </p>
                  </div>
                </Link>
              </div>
              <div className="framer-jspa9w-container" style={{ opacity: 1 }}>
                <Link
                  className="framer-p35K2 framer-7g0p1o framer-v-7g0p1o framer-1ljdjoh"
                  data-framer-name="Default"
                  to="/contact"
                >
                  <div
                    className="framer-xu6ifz"
                    style={
                      {
                        // @ts-ignore
                        "--extracted-r6o4lv":
                          "var(--variable-reference-YcbtSTF5J-ebExugia5)",
                        "--framer-paragraph-spacing": "0px",
                        "--variable-reference-YcbtSTF5J-ebExugia5":
                          "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                        transform: "none",
                      } as React.CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      style={
                        {
                          // @ts-ignore
                          "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": 600,
                          "--framer-letter-spacing": "-0.04em",
                          "--framer-line-height": "110%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--variable-reference-YcbtSTF5J-ebExugia5))",
                        } as React.CSSProperties
                      }
                      className="framer-text"
                    >
                      Contact
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="framer-ednsow"
            data-framer-name="Button container"
            data-highlight="true"
            tabIndex={0}
          >
            <div className="framer-eda3z9-container">
              <div
                className="framer-d16yv framer-1qd80pl framer-v-1qd80pl"
                data-framer-name="Closed"
                data-highlight="true"
                tabIndex={0}
              >
                <div
                  className="framer-1jxc6iw"
                  style={{
                    backgroundColor:
                      "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                    transform: "none",
                  }}
                ></div>
                <div
                  className="framer-qxejnu"
                  style={{
                    backgroundColor:
                      "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                    transform: "none",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
