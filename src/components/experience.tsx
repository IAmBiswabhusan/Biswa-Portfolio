import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { ACADEMICS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type AcademicCardProps = {
  academic: (typeof ACADEMICS)[number];
};

// Academic Card
const AcademicCard = ({ academic }: AcademicCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={academic.date}
    iconStyle={{ background: academic.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={academic.icon}
          alt={academic.institution_name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{academic.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {academic.institution_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {academic.points.map((point, i) => (
        <li
          key={`academic-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Academic Timeline
export const Academics = () => {
  return (
    <SectionWrapper idName="academics">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My academic background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {ACADEMICS.map((academic, i) => (
              <AcademicCard key={i} academic={academic} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
