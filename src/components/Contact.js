import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import bounce from "../script/bounce";
import emailjs from "emailjs-com";

export default function Contact() {
  const search = useLocation().search;
  const resp = new URLSearchParams(search).get("response");

  const [thank, setThank] = useState(false);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Rohan Patel | Contact Me";
    setThank(resp);
    setTimeout(() => setThank(false), 5000);
    bounce();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_po2qqqf",
        "template_8myz7f3",
        form.current,
        "user_UTRKgtH1gzvqXk75IiidS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setThank(true);
        },
        (error) => {
          console.log(error.text);
          setThank(false);
        }
      );
  };
  return (
    <>
      {thank && (
        <div
          style={{
            position: "absolute",
            zIndex: 999999,
            top: "10px",
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
        >
          <div
            style={{
              padding: "2rem 4rem",
              backgroundColor: "#222",
              textAlign: "center",
              borderRadius: "1rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            <h3 style={{ color: "#23ffde", fontSize: "2rem" }}>Thank you !</h3>
            <p style={{ color: "#fff", fontSize: "1rem" }}>
              We will soon get in touch 😃.
            </p>
          </div>
        </div>
      )}
      <div className="container home-page" style={{ zoom: "95%" }}>
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
              C
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              a
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
            <a
              href="mailto:rohanpateloff@gmail.com"
              style={{ color: "#23ffde" }}
            >
              &nbsp;&nbsp;rohanpateloff@gmail.com&nbsp;
            </a>
          </p>

          <div className="icons_contact">
            <a href="https://github.com/patelrohan224" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-patel-%F0%9F%87%AE%F0%9F%87%B3-18a7091ab"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/rohanpatel224?t=ecNeeiKVsaimYC-qtZKcVA&s=09"
              target="_blank"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
          <div className="contact">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form"
              action="https://formsubmit.co/b6a7714e1b4daa06870a4ac3e0718e01"
              method="POST"
              autoComplete="off"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/contact?response=true"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <motion.input
                id="name"
                type="text"
                name="user_name"
                placeholder="Name *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.1 }}
              />
              &nbsp;
              <motion.input
                id="email"
                type="email"
                name="user_email"
                placeholder="Email *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.2 }}
              />
              <br />
              <motion.input
                id="sbj"
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.4 }}
              />
              <br />
              <motion.textarea
                id="msg"
                type="text"
                name="message"
                placeholder="Message *"
                required={true}
                cols="50"
                rows="10"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.7 }}
              ></motion.textarea>
              <br />
              <motion.input
                id="sub-btn"
                type="submit"
                value="Send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
            </form>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>

      <motion.div
        className="mapouter"
        style={{ backgroundColor: "#e2e2e2" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="gmap_canvas">
          <iframe
            title="gmap_canvas"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.076279495979!2d73.0991921146081!3d23.780297893551214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5cba457c1511b4d!2zMjPCsDQ2JzQ5LjEiTiA3M8KwMDYnMDUuMCJF!5e0!3m2!1sen!2sin!4v1636990646841!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            scrolling="no"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
// 23.7802930,73.1013808
