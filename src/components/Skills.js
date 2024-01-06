import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Rohan Patel | Skills ";

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
              S
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              k
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              i
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              l
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              l
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              s&nbsp;
            </span>
            {/* <span className="blast" style={{ color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              E
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              x
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              p
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              r
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              i
            </span>
            
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span> */}
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development.
            <br />
            <br />
            Tech I know: &nbsp;&nbsp;{" "}
            <b>React &nbsp;|&nbsp; Express &nbsp;|&nbsp; JavaScript &nbsp;</b>
            <br />
            <br />
            <ul>
              &nbsp;&nbsp; • &nbsp;&nbsp; HTML , CSS , ReactJs , Nodejs
              <br />
              &nbsp;&nbsp; • &nbsp;&nbsp; Express , MongoDB
              <br />
              &nbsp;&nbsp; • &nbsp;&nbsp; Material-UI , Bootstrap
              <br />
              &nbsp;&nbsp; • &nbsp;&nbsp; NPM , JSON , Starpi , Postman , Git
              <br />
            </ul>
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/rohan-patel-%F0%9F%87%AE%F0%9F%87%B3-18a7091ab"
              style={{ color: "#23ffde" }}
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
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
      <div id="mysvg"></div>
    </>
  );
}
