import { FunctionComponent } from "react";
import styles from "./Property1Variant.module.css";

export type Property1VariantType = {
  className?: string;
};

const Property1Variant: FunctionComponent<Property1VariantType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant4, className].join(" ")}>
      <div className={styles.groupS4}>
        <div className={styles.groupStatutory}>
          <img
            className={styles.serviceStatutoryCompliance1Icon}
            alt=""
            src="/servicestatutorycompliance-1-1@2x.png"
          />
          <div className={styles.statutoryComplianceWeProvidWrapper}>
            <div className={styles.statutoryComplianceWeContainer}>
              <p className={styles.statutoryCompliance}>
                <span>
                  <span>Statutory Compliance</span>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p
                className={styles.weProvideAn}
              >{`We provide an effective statutory compliance for Micro to Large scale companies and enterprise with a precise and well-managed solution. Our expert's works to align your organization with the updated statutory laws and norms which keeps you safe from compliance risk We have a structured approach towards both HR (ESI, PF and Gratuity) and Payroll & Tax (TDS & Professional Tax) which results in better growth of your organization.`}</p>
            </div>
          </div>
        </div>
        <div className={styles.groupELearnWrapper}>
          <div className={styles.groupELearn}>
            <div className={styles.eLearningToSatisfyPeoplesWrapper}>
              <div className={styles.eLearningToSatisfyContainer}>
                <p className={styles.eLearning}>
                  <span>
                    <span>E-Learning</span>
                  </span>
                </p>
                <p className={styles.blankLine1}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.toSatisfyPeoples}>
                  To satisfy people's hunger on learning, we provide HR Skill
                  development courses for professional and Management students
                  with the modern HR Trends to meet out the industrial
                  expectations. A perfect landscape designed for live learning
                  sessions along with case study workouts providing practical
                  implementation of HR Concepts. Get ready to set out your
                  career in HR with our skill development programs under the
                  guidance of industrial experts
                </p>
              </div>
            </div>
            <img
              className={styles.serviceElearning1Icon}
              alt=""
              src="/serviceelearning-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant;
