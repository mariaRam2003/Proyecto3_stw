import React from "react";
import "./styles/Work.css";
import { Link } from "react-scroll";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// imagenes
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import Img6 from "../assets/portfolio-img6.png";
import Img7 from "../assets/portfolio-img7.png";

const Work = () => {
  return (
    <div className="work.section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-9 mb-10 lg:mb-0"
          >
            {/* texto */}
            <div>
              <h2 className="h2 leading-tigh text-accent">
                Mi <br />
                Portafolio.
              </h2>
              <p className="max-w-sm mb-16">
                Visita mi trabajo hasta el momento. Proyectos que he realizado
                dentro de la universidad como parte del curso Sistemas y
                Tecnoloias Web.
              </p>
              <a
                href="https://github.com/mariaRam2003"
                className="btn btn-lg cursor-pointer"
                style={{ padding: "15px 20px", marginTop: "10px" }}
                target="_blank"
              >
                Visita todo mi trabajo
              </a>
            </div>
            {/* imagen 1*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Html Only Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://libreria-html-only.web.app/index.html"
                    target="_blank"
                  >
                    Biblioteca
                  </a>
                </span>
              </div>
            </div>
            {/* imagen 4*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img4}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Free Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a href="https://f1-memorygame.web.app" target="_blank">
                    F1 Memory Game
                  </a>
                </span>
              </div>
            </div>
            {/* imagen 6*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img6}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Api Project</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a href="https://proyecto2-stw-377bf.web.app" target="_blank">
                    Weather Dashboard
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            {/* imagen 2*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Css Only Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a href="https://ironman-css-only.web.app" target="_blank">
                    Iron Man
                  </a>
                </span>
              </div>
            </div>
            {/* imagen 3*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">JavaScript Only Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://chat-javascript-only.web.app"
                    target="_blank"
                  >
                    Chat Online
                  </a>
                </span>
              </div>
            </div>
            {/* imagen 5*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img5}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Recreate Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a href="https://tesla-clone-2023.web.app" target="_blank">
                    Tesla WebSite Clone
                  </a>
                </span>
              </div>
            </div>
            {/* imagen 7*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlays */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-110 transition-all duration-500"
                src={Img7}
                alt=""
              />
              {/* subtitulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">All-Together Design</span>
              </div>
              {/* titulo */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">
                  <a href="https://calculadora-app-23.web.app" target="_blank">
                    Calculator
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
