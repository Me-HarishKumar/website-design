import { FunctionComponent } from "react";
import styles from "./Property1Default.module.css";

export type Property1DefaultType = {
  className?: string;
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.groupS1}>
        <div className={styles.groupHtms}>
          <img
            className={styles.serviceHrms1Icon}
            alt=""
            src="/servicehrms-1-1@2x.png"
          />
          <div className={styles.hrmsThisIsContainer}>
            <p className={styles.hrms}>
              <span>
                <span>HRMS</span>
              </span>
            </p>
            <p className={styles.blankLine}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.thisIsA}>
              This is a form of HR software that makes day today employee
              related activities and cumbersome HR data feasible to be managed
              through our user friendly HRMS services. End to end automation of
              HR processes is assured without manual intervention
            </p>
          </div>
        </div>
        <div className={styles.webDesign}>
          <div className={styles.reqWebDesign}>
            <div className={styles.webContent}>
              <div className={styles.webDesignTheContainer}>
                <p className={styles.webDesign1}>
                  <span className={styles.webDesign2}>Web Design</span>
                </p>
                <p className={styles.blankLine1}>
                  <span>
                    <span className={styles.blankLine2}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.theDifferentAreasOfWebDes}>
                  <span>
                    <span className={styles.theDifferentAreas}>
                      The different areas of web design include web graphic
                      design; interface design; authoring. including standard
                      code and proprietary software, user experience design; and
                      search engine optimization. Often many individuals will
                      work in teams covering different aspects
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <img
              className={styles.serviceWebDesign1Icon}
              loading="lazy"
              alt=""
              src="/servicewebdesign-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
