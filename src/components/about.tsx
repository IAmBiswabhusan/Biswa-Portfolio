import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

// ✅ Import your picture
import myPic from "../assets/mypic.png";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About Section
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* ✅ Left (title + description) | Right (profile pic with animated 3D effects + neon glow) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Title + Description */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="flex-1"
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>

            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
              I’m a results-driven frontend developer with a strong foundation
              in ABAP and Java, complemented by modern web development expertise
              in JavaScript (ES6+), React, and UI design with Figma. I
              specialize in crafting scalable, user-friendly applications that
              bridge enterprise technologies with intuitive digital experiences.
              With a problem-solving mindset and a commitment to clean,
              efficient code, I thrive in collaborative environments where ideas
              turn into impactful solutions.
            </p>
          </motion.div>

          {/* Right: Profile Picture with Classy 3D Animations + Neon Glow */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            className="relative w-[280px] h-[320px] flex-shrink-0 flex items-center justify-center"
          >
            <Tilt
              options={{ max: 25, scale: 1.05, speed: 400 }}
              className="relative w-full h-full flex items-center justify-center group"
            >
              {/* 🔥 Neon Glow Background */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.6, 0.9, 0.6],
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(168,85,247,0.8), rgba(236,72,153,0.6), rgba(59,130,246,0.5))",
                }}
              ></motion.div>

              {/* Pulsating Neon Rings */}
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full border-4 border-purple-500/40"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute w-[360px] h-[360px] rounded-full border-2 border-pink-400/30"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Floating Profile Image */}
              <motion.img
                src={myPic}
                alt="My Profile"
                className="relative w-[280px] h-auto object-cover rounded-xl shadow-2xl border border-white/10"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 30px rgba(168,85,247,1), 0 0 60px rgba(236,72,153,0.9), 0 0 100px rgba(59,130,246,0.8)",
                  scale: 1.08,
                }}
              />

              {/* Sparkle Particles */}
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.7,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
