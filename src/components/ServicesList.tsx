import { FunctionComponent } from "react";
import Property1Variant9 from "./Property1Variant9";
import Property1Variant8 from "./Property1Variant8";
import Property1Variant7 from "./Property1Variant7";
import Property1Variant6 from "./Property1Variant6";
import Property1Variant5 from "./Property1Variant5";
import Property1Variant4 from "./Property1Variant4";
import Property1Variant3 from "./Property1Variant3";
import styles from "./ServicesList.module.css";

export type ServicesListType = {
  className?: string;
};

const ServicesList: FunctionComponent<ServicesListType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.servicesList, className].join(" ")}>
      <div className={styles.servicesHeadings}>
        <div className={styles.webDesignRecruitmentContainer}>
          <p className={styles.webDesign}>WEB DESIGN</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.recruitment}>RECRUITMENT</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.trainingAndDevelopment}>
            TRAINING AND DEVELOPMENT
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.statutoryCompliance}>STATUTORY COMPLIANCE</p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.payrollServices}>PAYROLL SERVICES </p>
          <p className={styles.eLearning}>E-LEARNING</p>
          <p className={styles.blankLine4}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.servicesScroll}>
        <div className={styles.frameServicesScroll}>
          <Property1Variant9 />
          <Property1Variant8 />
          <Property1Variant7 />
          <Property1Variant6 />
          <Property1Variant5 />
          <Property1Variant4 />
          <Property1Variant3 />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
