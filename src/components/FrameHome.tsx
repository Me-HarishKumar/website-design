import { FunctionComponent } from "react";
import styles from "./FrameHome.module.css";

export type FrameHomeType = {
  className?: string;
};

const FrameHome: FunctionComponent<FrameHomeType> = ({ className = "" }) => {
  return (
    <header className={[styles.frameHome, className].join(" ")}>
      <div className={styles.homeAboutServiceContainer}>
        <span className={styles.homeAboutServiceContainer1}>
          <span className={styles.home}>
            HOME ABOUT SERVICE PORTFOLIO BLOG KNOWLEDGE SPOT CLIENTS CONTACT
          </span>
          <span className={styles.span}>{`   `}</span>
        </span>
      </div>
      <img
        className={styles.homeIcon}
        loading="lazy"
        alt=""
        src="/frame@2x.png"
      />
      <img
        className={styles.logoHeaderRemovebgPreview3Icon}
        loading="lazy"
        alt=""
        src="/logo-headerremovebgpreview-3@2x.png"
      />
      <div className={styles.homeContent}>
        <div className={styles.groupHomeTexts}>
          <div className={styles.homeDescription}>
            <h1 className={styles.designAnOptimalContainer}>
              <span className={styles.designAnOptimalContainer1}>
                <span className={styles.designAnOptimal}>
                  Design an optimal business model to reach Your 
                </span>
                <span className={styles.hrSolutions}>HR Solutions</span>
              </span>
            </h1>
            <div className={styles.theProcessOfContainer}>
              <span className={styles.theProcessOfContainer1}>
                <p className={styles.theProcessOf}>
                  The process of business model construction and modification
                </p>
                <p className={styles.isAlsoCalled}>
                  is also called business model innovation.
                </p>
              </span>
            </div>
          </div>
          <div className={styles.learnButton}>
            <div className={styles.button}>
              <div className={styles.learnMore}> Learn more</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameHome;
