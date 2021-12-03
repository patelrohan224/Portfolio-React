import React, { useEffect } from "react";
import bounce from "../script/bounce";
import lion from "../script/Lionn"

export default function About() {
  


  useEffect(() => {

    document.title = "Rohan Patel | About Me ";
    lion()
    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
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
            <span className="blast" style={{ color: "#23ffde" }}>
              M
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              y
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              ,&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              M
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              y
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              s
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              l
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              f&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              & &nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              l
            </span>
          </h1>
          <p align="LEFT">
            A skilled and knowledge computer science student with extensive
            knowledge of <strong>programming</strong> and&nbsp;
            <strong>computer applications</strong> . 👨‍💻
            <br />
            <br />
            Well-organised enthusiastic person, problem solver, quick learner,
            debugger and,
            <br />
            a fan of "G O T", Outdoor Sports, and
            recently, Gaming.
            <br />
            <br />
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Web Development.
            <br />
            <br />
            Follow me on&nbsp;
            <a
              href="https://www.linkedin.com/in/rohan-patel-18a7091ab/"
              style={{ color: "#23ffde" }}
            >
              LinkedIn&nbsp;
            </a>
            to know more or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>
        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
      <div id="world"></div>
      </div>
    </>
  );
}
