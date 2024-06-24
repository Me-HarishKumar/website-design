import { FunctionComponent } from "react";
import styles from "./Property1Variant2.module.css";

export type Property1Variant2Type = {
  className?: string;
};

const Property1Variant2: FunctionComponent<Property1Variant2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.groupS2}>
        <div className={styles.grpReqWrapper}>
          <div className={styles.grpReq}>
            <img
              className={styles.serviceRecruitment1Icon}
              alt=""
              src="/servicerecruitment-1-1@2x.png"
            />
            <div className={styles.recruitmentHiringTheRightRWrapper}>
              <div className={styles.recruitmentHiringTheContainer}>
                <p className={styles.recruitment}>
                  <span>
                    <span>Recruitment</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p
                  className={styles.hiringTheRight}
                >{`Hiring the right resource is always a challenge, but with the blend of dedicated recruiters, technology & best hiring practices we provide the right set of resources for any challenging positions. Our recruitment process is crafted specifically to match your business needs and to streamline & enhance the quality of your human capital. Get ready to leverage the cost and time efficient recruitment with us!`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groTrainDevel}>
          <div className={styles.trainingContent}>
            <div className={styles.trainingDevelopmentContainer}>
              <p className={styles.trainingDevelopment}>
                <span>
                  <span>{`Training & Development`}</span>
                </span>
              </p>
              <p className={styles.blankLine1}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.weTrainYour}>
                We train your employees to develop them as successful resources
                who can contribute to the revenue of the organization. We as a
                consultant see through the client training needs and would
                execute training programs and events, through veteran trainers
                associated with us.
              </p>
            </div>
          </div>
          <img
            className={styles.serviceTrainingDevelopementIcon}
            alt=""
            src="/servicetrainingdevelopement-1-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Variant2;
