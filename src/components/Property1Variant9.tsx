import { FunctionComponent } from "react";
import styles from "./Property1Variant9.module.css";

export type Property1Variant9Type = {
  className?: string;
};

const Property1Variant9: FunctionComponent<Property1Variant9Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant2, className].join(" ")}>
      <div className={styles.variantItems}>
        <div className={styles.webDesignTheContainer}>
          <p className={styles.webDesign}>
            <b className={styles.webDesign1}>Web Design</b>
          </p>
          <p className={styles.blankLine}>
            <span>&nbsp;</span>
          </p>
          <p className={styles.theDifferentAreasOfWebDes}>
            <span>
              <span className={styles.theDifferentAreas}>
                The different areas of web design include web graphic design,
                interface design, authoring. including standard code and
                proprietary software, user experience design, and search engine
                optimization. Often many individuals will work in teams covering
                different aspects
              </span>
            </span>
          </p>
        </div>
      </div>
      <img
        className={styles.reqWebDesign}
        loading="lazy"
        alt=""
        src="/req-web-design@2x.png"
      />
    </div>
  );
};

export default Property1Variant9;
