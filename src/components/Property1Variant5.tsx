import { FunctionComponent } from "react";
import styles from "./Property1Variant5.module.css";

export type Property1Variant5Type = {
  className?: string;
};

const Property1Variant5: FunctionComponent<Property1Variant5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant6, className].join(" ")}>
      <div className={styles.payrollServicesFlexibleAndWrapper}>
        <div className={styles.payrollServicesFlexibleContainer}>
          <p className={styles.payrollServices}>
            <span>
              <b>Payroll Services</b>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.flexibleAndSecuredPayrollP}>
            <span>
              <span
                className={styles.flexibleAndSecured}
              >{`Flexible and secured payroll process is a puzzle for employers. We provide end-to-end support for employee payroll with an error free & consistent service. The ideal option is to Leverage the benefits of working with our payroll experts to streamline the process with payroll laws. We are flexible enough to customize according to your expectations with our experts advise which helps to unlock your business insights`}</span>
            </span>
          </p>
        </div>
      </div>
      <img
        className={styles.servicePayrollService1Icon}
        loading="lazy"
        alt=""
        src="/servicepayrollservice-1@2x.png"
      />
    </div>
  );
};

export default Property1Variant5;
