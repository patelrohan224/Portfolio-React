import React, { useEffect } from "react";
import bounce from "../script/bounce";
import circleAnim from "../script/circle";
import { useHistory } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Rohan Patel | Full Stack Developer";

    bounce();
    // circleAnim()
    // guitarAnim();

    const s = document.querySelector(".Slast");

    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";

    return () => {
      s.style.opacity = 0;
      s.style.transform = "rotate(0deg)";
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        {/* <div id="world"></div> */}

        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
        </span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Rohan Patel,web developer."
            className="blast-root"
          >
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m&nbsp;</span>
            <span className="Slast">R</span>
            <span className="blast">o</span>
            <span className="blast">h</span>
            <span className="blast">a</span>
            <span className="blast">n&nbsp;</span>
            <span className="blast">P</span>
            <span className="blast" style={{ paddingLeft: "3px" }}>
              a
            </span>
            <span className="blast">t</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">w</span>
            <span className="blast">e</span>
            <span className="blast">b&nbsp;</span>
            <span className="blast">d</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">p</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
            <span className="blast">.</span>
          </h1>
          <p
            aria-label=" Hi, I’m Rohan Patel,web developer."
            className="blast-root"
          >
            <h2>Full Stack Web Developer </h2>
            <h2 className="h2_about">
              A passionate full stack web developer from India. My passion for
              software lies with dreaming up ideas and making them come true
              with elegant interfaces.
            </h2>
          </p>

          <h5
            aria-label=" Hi, I’m Rohan Patel,web developer."
            className="blast-root"
          >
            <div className="icons">
              <a href="https://github.com/patelrohan224" target="_blank">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-patel-%F0%9F%87%AE%F0%9F%87%B3-18a7091ab"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a
                href="https://twitter.com/rohanpatel224?t=ecNeeiKVsaimYC-qtZKcVA&s=09"
                target="_blank"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
              {/* <a href="https://patelrohan224.github.io/rohanpatel/Fw11_289_Rohan_Patel.pdf" target="_blank" >
              <i className="fas fa-file fa-3x"></i>
            </a> */}
            </div>
          </h5>
        </div>
        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>

        <div id="mysvg">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </>
  );
}
