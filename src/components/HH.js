import emailjs from 'emailjs-com';
import bounce from "../script/bounce";
import circleAnim from "../script/circle";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "../json/projects"
import "../work.css";
import Aos from "aos"
import 'aos/dist/aos.css';
import { Posts } from "./Poost";

const container = {
  hidden: { scale: 1 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

function Post({ img, name, ext, git, live }) {
  return (
    <motion.div className="box" variants={item}>
      <img
        alt="projimg"
        src={img}
        className="image"
        style={{ backgroundColor: "#c2c2c2" }}
      />
      <button className="prj">
        {name}
        <span> . {ext}</span>
      </button>
      <a href={git} className="show1">
        Learn More
      </a>
      <a href={live} className="show2">
        Visit
      </a>
    </motion.div>
  );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

export default function HH(){
  const search = useLocation().search;
const resp = new URLSearchParams(search).get('response');

const [thank, setThank] = useState(false);
const form = useRef();
  
const sendEmail = (e) => {
  e.preventDefault();
  console.log(form.current);
  emailjs.sendForm('service_po2qqqf', 'template_8myz7f3', form.current, 'user_UTRKgtH1gzvqXk75IiidS')
    .then((result) => {
        console.log(result.text);
        setThank(true);
    }, (error) => {
        console.log(error.text);
        setThank(false);
    });
};
    const [filter, setFilter] = useState("")
 
    useEffect(() => {
        document.title =
          "Rohan Patel | Full Stack Developer";
    
        bounce();
        // circleAnim()
        // guitarAnim();
    
        const s = document.querySelector(".Slast");
    
        s.style.opacity = 1;
        s.style.transform = "rotate(360deg)";
    
        Aos.init({offset:350})
        
        return () => {
          s.style.opacity = 0;
          s.style.transform = "rotate(0deg)";
        };
      }, []);
    
      return (
        <>
         <div style={{height:"100%"}}>
            <div  className="container home-page">
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
          <h2>Full Stack Web Developer  </h2>
          <h2 className="h2_about">A passionate full stack web developer from India. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces.</h2>
         </p><div className="icons">
            <a href="https://github.com/patelrohan224" target="_blank" >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohan-patel-18a7091ab/" target="_blank" >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://twitter.com/rohanpatel224?t=ecNeeiKVsaimYC-qtZKcVA&s=09" target="_blank" >
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://patelrohan224.github.io/rohanpatel/Resume.pdf" target="_blank" >
              <i className="far fa-file fa-3x"></i>
            </a>
          
          </div>
        </div>
        {/* <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span> */}
    
      <div id="mysvg">
        <div className="prof_pick_div">
        {/* <h6> */}
          <img src="https://patelrohan224.github.io/rohanpatel/profile_p.jpg" />
          {/* </h6> */}
          </div>
      {/* <canvas id="canvas"></canvas> */}
      </div>
      </div>
       {/* about */}
         <div data-aos="fade-up" className="container-2 home-page">
         {/* <span className="tags top-tags">
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
       
        </span> */}
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
        {/* <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span> */}
      </div>
      <div id="mysvg">
      <div id="world"></div>
      </div>
      {/* skill */}
      <div data-aos="fade-up" className="container-3 home-page">
      {/* <span className="tags top-tags">
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
       
        </span> */}
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
            Tech I know:
            &nbsp;&nbsp; <b>React &nbsp;|&nbsp; Express &nbsp;|&nbsp; JavaScript  &nbsp;</b><br />
            <br />
            <ul>  
            &nbsp;&nbsp; • &nbsp;&nbsp; HTML , CSS , ReactJs , Nodejs<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Express , MongoDB<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Material-UI , Bootstrap<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NPM , JSON , Starpi , Postman , Git<br />
            </ul>  
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/rohan-patel-18a7091ab/"
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

        {/* <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span> */}
      </div>
      <div id="mysvg">
       
       
      </div>
          {/* Work */}


          <div data-aos="fade-up"  className="gal-container_1" >
        {/* <span className="tags top-tags">
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
       
        </span> */}
      <h1  aria-label=" Hi, I’m Rohan Patel,web developer."
            className="blast-root" style={{ textAlign: "center", margin: "1rem", color: "#23ffde" }}>
        <span className="blast">My</span>
        <span className="blast">_Projects . </span>
        <select
          className="select-css"
          value={filter}
          defaultValue={filter}
          onChange={({ target: { value } }) => setFilter(value)}
        >
          <option value="">all</option>
          <option value="js">js</option>
          <option value="py">py</option>
          <option value="games">games</option>
        </select>
      </h1>
      <motion.div
        className="gallery"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.filter(d => d.lang.search(filter) !== -1)
          .map((d) => (
            <Posts {...d} />
          ))}
      </motion.div>
            
    </div>



    {/* contect */}

    {thank &&
    // style={{ position: "absolute", zIndex: 999999, top: "10px", left: "50%", transform: "translate(-50%, 0%)",marginTop:"3550px" }}
        <div  className="thankyoudiv">
          <div style={{
            padding: "2rem 4rem", backgroundColor: "#222", 
            textAlign: "center", borderRadius: "1rem",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }}>
            <h3 style={{ color: "#23ffde", fontSize: "2rem" }}>
              Thank you !
            </h3>
            <p style={{ color: "#fff", fontSize: "1rem" }}>We will soon get in touch 😃.</p>
          </div>
        </div>
      }
      <div data-aos="fade-up"  className="container-4 home-page" style={{ zoom: "95%" }}>
      {/* <span className="tags top-tags">
      
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
       
        </span> */}
        <div  className="text-zone">
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
            <a href="https://github.com/patelrohan224" target="_blank" >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohan-patel-18a7091ab/" target="_blank" >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://twitter.com/rohanpatel224?t=ecNeeiKVsaimYC-qtZKcVA&s=09" target="_blank" >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
          <div className="contact">
            <form ref={form} onSubmit={sendEmail}
              className="form"
              action="https://formsubmit.co/b6a7714e1b4daa06870a4ac3e0718e01"
              method="POST"
              autoComplete="off"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:3000/contact?response=true" />
              <input type="text" name="_honey" style={{ "display": "none" }} />
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
      </div>

     
      </div>
        </>

      );
    }
    
    
    
