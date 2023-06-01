import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* texto */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Ponte en contacto conmigo
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Trabajemos <br />
              juntos!
            </h2>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-xl flex flex-col p-6 mb-24 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-4"
              type="text"
              placeholder="Tu nombre"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-4"
              type="text"
              placeholder="Tu email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-4"
              placeholder="Tu mensaje"
            ></textarea>
            <button className="btn btn-lg">Enviar mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
