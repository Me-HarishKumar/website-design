import { FunctionComponent } from "react";
import styles from "./Property1Variant8.module.css";

export type Property1Variant8Type = {
  className?: string;
};

const Property1Variant8: FunctionComponent<Property1Variant8Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant3, className].join(" ")}>
      <div className={styles.groupS1}>
        <div className={styles.groupHtms}>
          <img
            className={styles.serviceHrms1Icon}
            alt=""
            src="/servicehrms-1@2x.png"
          />
          <div className={styles.variantSubItems}>
            <div className={styles.recruitmentHiringTheContainer}>
              <p className={styles.recruitment}>
                <span>
                  <b>Recruitment</b>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.hiringTheRightResourceIsA}>
                <span>
                  <span
                    className={styles.hiringTheRight}
                  >{`Hiring the right resource is always a challenge, but with the blend of dedicated recruiters, technology & best hiring practices we provide the right set of resources for any challenging positions. Our recruitment process is crafted specifically to match your business needs and to streamline & enhance the quality of your human capital. Get ready to leverage the cost and time efficient recruitment with us!`}</span>
                </span>
              </p>
            </div>
          </div>
          <img
            className={styles.serviceRecruitment1Icon}
            loading="lazy"
            alt=""
            src="/servicerecruitment-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Variant8;
