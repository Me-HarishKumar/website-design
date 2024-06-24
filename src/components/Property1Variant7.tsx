import { FunctionComponent } from "react";
import styles from "./Property1Variant7.module.css";

export type Property1Variant7Type = {
  className?: string;
};

const Property1Variant7: FunctionComponent<Property1Variant7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant4, className].join(" ")}>
      <div className={styles.trainingDevelopmentWeTraiWrapper}>
        <div className={styles.trainingDevelopmentContainer}>
          <p className={styles.trainingDevelopment}>
            <span>
              <b>{`Training & Development`}</b>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.weTrainYourEmployeesToDev}>
            <span>
              <span className={styles.weTrainYour}>
                We train your employees to develop them as successful resources
                who can contribute to the revenue of the organization. We as a
                consultant see through the client training needs and would
                execute training programs and events, through veteran trainers
                associated with us.
              </span>
            </span>
          </p>
        </div>
      </div>
      <img
        className={styles.serviceTrainingDevelopementIcon}
        loading="lazy"
        alt=""
        src="/servicetrainingdevelopement-1@2x.png"
      />
    </div>
  );
};

export default Property1Variant7;
