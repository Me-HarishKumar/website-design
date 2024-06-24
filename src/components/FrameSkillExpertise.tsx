import { FunctionComponent } from "react";
import styles from "./FrameSkillExpertise.module.css";

export type FrameSkillExpertiseType = {
  className?: string;
};

const FrameSkillExpertise: FunctionComponent<FrameSkillExpertiseType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameSkillExpertise, className].join(" ")}>
      <img className={styles.image5Icon} alt="" src="/image-5-1@2x.png" />
      <div className={styles.skillsExpertise}>{`Skills & Expertise`}</div>
      <div className={styles.skillsContainer}>
        <div className={styles.groupSkillContent}>
          <div className={styles.hrConsulting90Container}>
            <span>
              <p className={styles.hrConsulting}>HR Consulting</p>
              <p className={styles.p}> 90%</p>
              <p className={styles.odConsultant}>OD Consultant</p>
              <p className={styles.p1}> 95%</p>
              <p className={styles.resumeWriting}>Resume Writing</p>
              <p className={styles.p2}> 85%</p>
              <p className={styles.contentDevelopment}>Content Development</p>
              <p className={styles.p3}> 80%</p>
              <p className={styles.customizedSoftwareDevelopers}>
                Customized Software Developers
              </p>
              <p className={styles.p4}> 95%</p>
            </span>
          </div>
          <div className={styles.skills} />
          <div className={styles.skills1} />
          <div className={styles.skills2} />
          <div className={styles.skillDivider} />
          <div className={styles.skills3} />
        </div>
      </div>
    </section>
  );
};

export default FrameSkillExpertise;
