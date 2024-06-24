import { FunctionComponent } from "react";
import styles from "./Property1Variant1.module.css";

export type Property1Variant1Type = {
  className?: string;
};

const Property1Variant1: FunctionComponent<Property1Variant1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1variant3, className].join(" ")}>
      <div className={styles.groupS3}>
        <div className={styles.groupOrgDev}>
          <img
            className={styles.serviceOrganizationalDevelopIcon}
            alt=""
            src="/serviceorganizationaldevelopment-1@2x.png"
          />
          <div className={styles.organizationalDevelopmentSupWrapper}>
            <div className={styles.organizationalDevelopmentSupContainer}>
              <p className={styles.organizationalDevelopmentSup}>
                <span>
                  <span>Organizational Development Support</span>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.weProvideA}>
                We provide a personalized OD which is tailored accordingly on
                your organizational assessment An unique framework for OD
                crafted to focus on your organizational priorities and business
                requirements which helps to upheld your business standards. Our
                team provides ideal landscape for SME and fast growing
                corporates which look forward to develop organizational culture
                and performance to meet out their vision and mission
              </p>
            </div>
          </div>
        </div>
        <div className={styles.groupPayrollWrapper}>
          <div className={styles.groupPayroll}>
            <div className={styles.payrollServicesFlexibleContainer}>
              <p className={styles.payrollServices}>
                <span>
                  <span>Payroll Services</span>
                </span>
              </p>
              <p className={styles.blankLine1}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p
                className={styles.flexibleAndSecured}
              >{`Flexible and secured payroll process is a puzzle for employers. We provide end-to-end support for employee payroll with an error free & consistent service. The ideal option is to Leverage the benefits of working with our payroll experts to streamline the process with payroll laws. We are flexible enough to customize according to your expectations with our experts advise which helps to unlock your business insights`}</p>
            </div>
            <img
              className={styles.servicePayrollService1Icon}
              alt=""
              src="/servicepayrollservice-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant1;
