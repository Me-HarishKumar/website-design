import { FunctionComponent } from "react";
import styles from "./ProcessContainer.module.css";

export type ProcessContainerType = {
  className?: string;
};

const ProcessContainer: FunctionComponent<ProcessContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.processContainer, className].join(" ")}>
      <div className={styles.processInnerContainer}>
        <div className={styles.processInnerContainerChild} />
        <div className={styles.processContent}>
          <div className={styles.getImproveInYourHrProcessParent}>
            <div className={styles.getImproveInContainer}>
              <p className={styles.getImproveInYourHrProcess}>
                <b className={styles.getImproveInYourHrProcess1}>
                  <span>Get Improve In Your HR Process</span>
                </b>
              </p>
              <p className={styles.blankLine}>
                <b className={styles.blankLine1}>
                  <span>&nbsp;</span>
                </b>
              </p>
              <p className={styles.thisIsA}>
                This is a form of HR software that makes day today employee
                related activities and cumbersome HR data feasible to be managed
                through our user friendly HRMS services.
              </p>
            </div>
            <div className={styles.processButton}>
              <div className={styles.groupGetSrays}>
                <div className={styles.spraysBackground} />
                <div className={styles.getSraysNow}>Get Srays Now!</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.ctaImgRemovebgPreview1Icon}
          loading="lazy"
          alt=""
          src="/ctaimgremovebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ProcessContainer;
