import React from "react";
import { Link } from "react-scroll";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 gap-x-12 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* imagen */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* texto */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Acerca de mi.</h2>
            <h3 className="h3 mb-4">
              Actualmente curso el 3er. año de Coputer Science &#x0026; TI
            </h3>
            <p className="mb-6">
              Soy estudiante en la Universidad del Valle de Guatemala.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                  mb-2"
                >
                  {inView ? <CountUp start={0} end={100} duration={5} /> : null}
                  %
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Desarrollo <br />
                  Web
                </div>
              </div>
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                  mb-2"
                >
                  {inView ? <CountUp start={0} end={95} duration={5} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Bases
                  <br />
                  de Datos
                </div>
              </div>
              <div>
                <div
                  className="text-[40px] font-tertiary text-gradient
                  mb-2"
                >
                  {inView ? <CountUp start={0} end={75} duration={5} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Desarrolo <br />
                  de Apps
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                className="btn btn-lg cursor-pointer"
                style={{ padding: "15px 20px", marginTop: "10px" }}
              >
                Contáctame
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
