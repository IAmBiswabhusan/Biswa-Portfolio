import { motion, useMotionValue, useTransform } from "framer-motion";

import { CERTIFICATIONS, EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

/* ---------------------- Motion Utilities ---------------------- */
const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/* ---------------------- Certification Card ---------------------- */
const CertificationCard = ({
  index,
  title,
  org,
  year,
  icon,
  link,
}: {
  index: number;
  title: string;
  org: string;
  year: string;
  icon: string;
  link?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [10, -10]);
  const rotateX = useTransform(y, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="bg-black-200 p-8 rounded-3xl flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-200 perspective-1000"
    >
      <div className="relative w-64 h-48 mb-6">
        <motion.div className="absolute inset-0 rounded-lg z-0 border-[3px] border-transparent bg-gradient-to-r from-pink-500 via-blue-400 to-green-400 animate-border-glow"></motion.div>
        <img
          src={icon}
          alt={`${title}-certificate`}
          className="w-full h-full object-contain rounded-lg relative z-10 shadow-md"
        />
      </div>

      <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>
      <p className="text-secondary text-[15px] mt-2 text-center">
        Issued by <span className="text-white font-medium">{org}</span>
      </p>
      <p className="text-secondary text-[14px] mt-1">{year}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
        >
          View Certificate
        </a>
      )}
    </motion.div>
  );
};

/* ---------------------- Experience Card ---------------------- */
const ExperienceCard = ({
  index,
  role,
  company,
  duration,
  desc,
  icon,
}: {
  index: number;
  role: string;
  company: string;
  duration: string;
  desc: string;
  icon: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [10, -10]);
  const rotateX = useTransform(y, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <motion.div
      variants={fadeIn(direction, "spring", index * 0.15, 0.6)}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="bg-black-200 p-8 rounded-3xl flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-200 perspective-1000 w-full max-w-lg"
    >
      <div className="relative w-20 h-20 mb-6">
        <motion.div className="absolute inset-0 rounded-full z-0 border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400 animate-border-glow"></motion.div>
        <img
          src={icon}
          alt={`${company}-logo`}
          className="w-full h-full object-contain rounded-full relative z-10 shadow-md"
        />
      </div>

      <h3 className="text-white font-bold text-[22px] text-center">{role}</h3>
      <p className="text-secondary text-[15px] mt-2 text-center">
        {company} • <span className="text-white font-medium">{duration}</span>
      </p>
      <p className="text-gray-300 text-[14px] mt-4 text-center leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

/* ---------------------- Main Feedbacks Section ---------------------- */
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      {/* Certifications */}
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Achievements</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
        </div>

        <motion.div
          className={cn(
            styles.paddingX,
            "-mt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          )}
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard key={cert.title} index={i} {...cert} />
          ))}
        </motion.div>
      </div>

      {/* Experience */}
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[250px]"
          )}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Where I’ve Worked</p>
            <h2 className={styles.sectionHeadText}>Experience.</h2>
          </motion.div>
        </div>

        <motion.div
          className={cn(
            styles.paddingX,
            "pt-10 pb-14 flex flex-wrap justify-center gap-8"
          )}
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.role} index={i} {...exp} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
