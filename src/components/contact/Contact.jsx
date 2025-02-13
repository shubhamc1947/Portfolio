import { useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import socialLinks from "../hero/socialLinks";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const variants = {
  initial: { y: 100, opacity: 0.3 },
  animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .send("service_7zvsutf", "template_tptylxk", formData, "fxF_YGSHATYiWsnP0")
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => setError(true)
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="wrapper">
          <motion.div className="heading">Code: Contact</motion.div>
          <motion.div className="contactwrap">
            <motion.div className="textContainer" variants={variants}>
              <h1>Let’s Talk</h1>
              <motion.div className="item">
                <h2>Mail</h2>
                <span>shubhamchat03@gmail.com</span>
              </motion.div>
              <motion.div className="item">
                <h2>Address</h2>
                <span>Bangalore, Karnataka</span>
              </motion.div>
            </motion.div>
            <motion.div className="formContainer">
              <form onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                <input type="email" required placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                <textarea rows={8} placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
                <button disabled={isLoading}>{isLoading ? "Sending..." : "Submit"}</button>
                {error && <p className="error">Something Went Wrong! Please try again 😢</p>}
                {success && <p className="success">Email Sent Successfully ❤</p>}
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <hr />
      <motion.div className="footer" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="leftside">
          <motion.div className="icons">
            {socialLinks.map((item) => (
              <a key={item.id} target="_blank" href={item.link} data-tooltip-id={item.content} data-tooltip-content={item.content}>
                <i className={item.icon}></i>
                <Tooltip id={item.content} className="tooltipcustom" />
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="rightside">Developed by SHUBHAM WITH ❤</motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
