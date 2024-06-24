import { FunctionComponent } from "react";
import styles from "./Property1Variant4.module.css";

export type Property1Variant4Type = {
  className?: string;
};

const Property1Variant4: FunctionComponent<Property1Variant4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant7, className].join(" ")}>
      <div className={styles.groupS1}>
        <div className={styles.groupHtms}>
          <img
            className={styles.serviceElearning1Icon}
            alt=""
            src="/serviceelearning-1@2x.png"
          />
          <div className={styles.eLearningToSatisfyPeoplesWrapper}>
            <div className={styles.eLearningToSatisfyContainer}>
              <p className={styles.eLearning}>
                <span>
                  <b>E-Learning</b>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.toSatisfyPeoplesHungerOn}>
                <span>
                  <span className={styles.toSatisfyPeoples}>
                    To satisfy people's hunger on learning, we provide HR Skill
                    development courses for professional and Management students
                    with the modern HR Trends to meet out the industrial
                    expectations. A perfect landscape designed for live learning
                    sessions along with case study workouts providing practical
                    implementation of HR Concepts. Get ready to set out your
                    career in HR with our skill development programs under the
                    guidance of industrial experts
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant4;
