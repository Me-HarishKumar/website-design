import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUs, className].join(" ")}>
      <div className={styles.groupAboutUs}>
        <div className={styles.groupAboutUsChild} />
        <div className={styles.aboutUsImage}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <div className={styles.aboutUsImageInner}>
            <div className={styles.aboutUsTitleParent}>
              <div className={styles.aboutUsTitle}>
                <b className={styles.aboutUs1}>ABOUT US</b>
              </div>
              <div className={styles.aboutUsDescription}>
                <img className={styles.aboutUsDescriptionChild} alt="" />
                <div className={styles.hrOutsourcingFirmContainer}>
                  <p className={styles.hrOutsourcingFirm}>
                    HR outsourcing firm focused on virtualizing HR processes.
                  </p>
                  <p className={styles.foundedByExperienced}>
                    Founded by experienced HR professionals.
                  </p>
                  <p className={styles.offersHrSolutions}>
                    Offers HR solutions, HRMS software, and IT services.
                  </p>
                  <p className={styles.servingStartupsSmes}>
                    Serving startups, SMEs, family businesses, and corporates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whatWeOffer}>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <div className={styles.whatWeOfferInner}>
            <div className={styles.whatWeOfferParent}>
              <b className={styles.whatWeOffer1}>WHAT WE OFFER</b>
              <div className={styles.offerDescription}>
                <textarea
                  className={styles.continueButton}
                  rows={9}
                  cols={33}
                />
                <div className={styles.hrSolutionsTailoredContainer}>
                  <p className={styles.blankLine}>
                    <i className={styles.blankLine1}>&nbsp;</i>
                  </p>
                  <p className={styles.hrSolutionsTailored}>
                    HR solutions tailored to diverse business needs.
                  </p>
                  <p className={styles.stateOfTheArtHrmsSoftware}>
                    State-of-the-art HRMS software for efficient management.
                  </p>
                  <p className={styles.itServicesFor}>
                    IT services for seamless integration and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.community}>
          <div className={styles.communityContent}>
            <div className={styles.communityImage}>
              <img
                className={styles.image5Icon}
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <div className={styles.communityInitiativesParent}>
              <b className={styles.communityInitiatives}>
                COMMUNITY INITIATIVES
              </b>
              <div className={styles.communityDescription}>
                <textarea className={styles.image} rows={8} cols={37} />
                <div className={styles.hrSkillDevelopmentContainer}>
                  <span>
                    <p className={styles.blankLine2}>
                      <i className={styles.blankLine3}>&nbsp;</i>
                    </p>
                    <p className={styles.hrSkillDevelopment}>
                      HR Skill Development Programs for students.
                    </p>
                    <p className={styles.technicalSkillDevelopment}>
                      Technical Skill Development Programs for HR pros and
                      entrepreneurs.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whyUs}>
          <div className={styles.whyUsContent}>
            <div className={styles.frameWhyUs}>
              <div className={styles.frameWhyUsChild} />
              <div className={styles.qualityProcess}>
                <div className={styles.qualityDriven}>
                  <div className={styles.groupDna}>
                    <img
                      className={styles.groupDnaChild}
                      loading="lazy"
                      alt=""
                    />
                    <div className={styles.qualityOurDna}>Quality our DNA</div>
                  </div>
                  <div className={styles.processDriven}>
                    <div className={styles.groupProcess}>
                      <img className={styles.groupProcessChild} alt="" />
                      <div className={styles.processDrivenApproach}>
                        Process Driven approach
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupCost}>
                <img className={styles.groupCostChild} alt="" />
                <div className={styles.costEffectiveCustomization}>
                  Cost Effective Customization
                </div>
              </div>
              <div className={styles.groupBestQual}>
                <img className={styles.groupBestQualChild} alt="" />
                <div className={styles.bestQualityServices}>
                  Best Quality Services
                </div>
              </div>
            </div>
            <div className={styles.whyUsTitle}>
              <div className={styles.whyUs1}>Why Us!</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.businessContainer}>
        <div className={styles.businessContent}>
          <div className={styles.businessTitle}>
            <b className={styles.businessServices}>BUSINESS SERVICES</b>
          </div>
          <div className={styles.businessServicesAreContainer}>
            <p className={styles.businessServicesAre}>
              Business services are activities that combine or consolidate
              certain
            </p>
            <p className={styles.enterpriseWideNeededSupport}>
              enterprise-wide needed support services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
