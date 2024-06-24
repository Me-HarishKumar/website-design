import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.formContainerParent, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formFields}>
          <div className={styles.fullNameEmailContainer}>
            <span className={styles.fullNameEmailContainer1}>
              <p className={styles.fullName}>Full Name</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.emailAddress}>Email Address</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.subject}>Subject</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.yourMessage}>Your Message</p>
              <p className={styles.blankLine3}>&nbsp;</p>
            </span>
          </div>
          <div className={styles.sendMessageButton}>
            <div className={styles.sendMessageButtonChild} />
            <img className={styles.iconSend} alt="" src="/-icon-send-1.svg" />
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.addressContainer}>
            <div className={styles.india7SairamContainer}>
              <span>
                <p className={styles.india}> INDIA</p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.sairamStreetJalladampet}>
                  {" "}
                  7, Sairam street, Jalladampet, Chennai-600100
                </p>
                <p className={styles.p}>{`        `}</p>
                <p className={styles.p1}> 044-42735893</p>
                <p className={styles.blankLine5}>&nbsp;</p>
                <p className={styles.hongKong}> HONG KONG</p>
                <p className={styles.blankLine6}>&nbsp;</p>
                <p className={styles.thFlooramtelBuilding148}>
                  {" "}
                  9th Floor,Amtel Building,148 Des Voeux Road, Central Hong Kong
                </p>
                <p className={styles.blankLine7}>&nbsp;</p>
                <p className={styles.hrsrayssolutionsin}>
                  {`         `}
                  <a
                    className={styles.hrsrayssolutionsin1}
                    href="https://www.srayssolutions.in/#"
                    target="_blank"
                  >
                    <span className={styles.hrsrayssolutionsin2}>
                      hr@srayssolutions.in
                    </span>
                  </a>
                </p>
                <p className={styles.blankLine8}>
                  <a
                    className={styles.blankLine9}
                    href="https://www.srayssolutions.in/#"
                    target="_blank"
                  >
                    <span className={styles.blankLine10}>&nbsp;</span>
                  </a>
                </p>
                <p className={styles.wwwsrayssolutionsin}>
                  {`         `}
                  <a
                    className={styles.wwwsrayssolutionsin1}
                    href="https://www.srayssolutions.in/#"
                    target="_blank"
                  >
                    <span className={styles.wwwsrayssolutionsin2}>
                      www.srayssolutions.in
                    </span>
                  </a>
                </p>
              </span>
            </div>
            <img
              className={styles.entypoaddressIcon}
              alt=""
              src="/entypoaddress.svg"
            />
            <img
              className={styles.mingcutephoneLineIcon}
              alt=""
              src="/mingcutephoneline.svg"
            />
            <img
              className={styles.addressSeparatorIcon}
              alt=""
              src="/vector-1.svg"
            />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigateToAboutContainer}>
            <p className={styles.navigateTo}>Navigate To</p>
            <p className={styles.blankLine11}>&nbsp;</p>
            <p className={styles.aboutUs}>About Us</p>
            <p className={styles.services}>Services</p>
            <p className={styles.portfolio}>Portfolio</p>
            <p className={styles.blankLine12}>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.followUsOn}>Follow Us On</div>
          <div className={styles.socialLinks}>
            <div className={styles.placeholder}>
              <div
                className={styles.weWishTo}
              >{`We wish to be the HR front-runners in setting up customized virtual HR & HRMS systems at a most viable price..`}</div>
              <div className={styles.copyright}>
                <div className={styles.srays2022}>© SRays, 2022.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
