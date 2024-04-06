import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles.js";
import { EarthCanvas } from "./canvas/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { slideIn } from "../utils/motion.js";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    //template_2860rcb
    //service_p5tu8jd
    //4XYvsy6PWDLs_FhcW

    emailjs
      .send(
        "service_p5tu8jd",
        "template_2860rcb",
        {
          from_name: form.name,
          to_name: "Fardin",
          from_email: form.email,
          to_email: "islamabirfardin@gmail.com",
          message: form.message,
        },
        "4XYvsy6PWDLs_FhcW"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong!");

          console.log(error);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] contact-card-bg_morph p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary font-medium rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary font-medium rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary font-medium rounded-lg outline-none border-none"
            />
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-tertiary py-3 px-8 oultine-none w-fit rounded-xl text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
