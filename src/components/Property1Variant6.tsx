import { FunctionComponent } from "react";
import styles from "./Property1Variant6.module.css";

export type Property1Variant6Type = {
  className?: string;
};

const Property1Variant6: FunctionComponent<Property1Variant6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant5, className].join(" ")}>
      <img
        className={styles.serviceStatutoryCompliance1Icon}
        loading="lazy"
        alt=""
        src="/servicestatutorycompliance-1@2x.png"
      />
      <div className={styles.groupS1Wrapper}>
        <div className={styles.groupS1}>
          <div className={styles.groupHtms}>
            <div className={styles.statutoryComplianceWeContainer}>
              <p className={styles.statutoryCompliance}>
                <span>
                  <b>Statutory Compliance</b>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </span>
              </p>
              <p className={styles.weProvideAnEffectiveStatut}>
                <span>
                  <span
                    className={styles.weProvideAn}
                  >{`We provide an effective statutory compliance for Micro to Large scale companies and enterprise with a precise and well-managed solution. Our expert's works to align your organization with the updated statutory laws and norms which keeps you safe from compliance risk We have a structured approach towards both HR (ESI, PF and Gratuity) and Payroll & Tax (TDS & Professional Tax) which results in better growth of your organization.`}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant6;
