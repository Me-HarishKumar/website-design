import { FunctionComponent } from "react";
import SubscriptionInput from "../components/SubscriptionInput";
import FrameComponent2 from "../components/FrameComponent2";
import FrameHome from "../components/FrameHome";
import VisionMission from "../components/VisionMission";
import AboutUs from "../components/AboutUs";
import ServicesList from "../components/ServicesList";
import EndorsementLink from "../components/EndorsementLink";
import ServiceGrid from "../components/ServiceGrid";
import FrameSkillExpertise from "../components/FrameSkillExpertise";
import ProcessContainer from "../components/ProcessContainer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop2}>
      <footer className={styles.window}>
        <img className={styles.windowChild} alt="" src="/rectangle-31.svg" />
        <img
          className={styles.groupMessLines}
          loading="lazy"
          alt=""
          src="/group-mess-lines.svg"
        />
      </footer>
      <section className={styles.image26Parent}>
        <img
          className={styles.image26Icon}
          loading="lazy"
          alt=""
          src="/image-26@2x.png"
        />
        <div className={styles.groupSubLetter}>
          <div className={styles.groupSubLetterChild} />
          <SubscriptionInput />
          <FrameComponent2 />
          <img className={styles.groupSubLetterItem} loading="lazy" alt="" />
          <div className={styles.touchContentWrapper}>
            <div className={styles.touchContent}>
              <div className={styles.dropDownTo}>Drop Down to Get in Touch</div>
              <div className={styles.talkButton}>
                <div className={styles.helloLetsTalk}>hello! Let's Talk</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.desktop2Child} />
      <div className={styles.desktop2Item} />
      <section className={styles.header}>
        <FrameHome />
        <VisionMission />
      </section>
      <AboutUs />
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <section className={styles.servicesContainer}>
        <div className={styles.servicesContent}>
          <ServicesList />
          <div className={styles.endorsementContainer}>
            <div className={styles.endorsementContent}>
              <div className={styles.endorsementTitle}>
                <b className={styles.endorsementOfOur}>
                  Endorsement of our Success
                </b>
              </div>
              <div className={styles.endorsementQuote}>
                <img
                  className={styles.endorsementQuoteChild}
                  alt=""
                  src="/ellipse-5.svg"
                />
                <div className={styles.weDontWrite}>
                  We don`t write stories, but imprint out Success - Success
                  Stories more to come.
                </div>
              </div>
            </div>
          </div>
          <EndorsementLink />
        </div>
        <ServiceGrid />
      </section>
      <FrameSkillExpertise />
      <section className={styles.footerLogos}>
        <img
          className={styles.logoHeaderRemovebgPreview2Icon}
          loading="lazy"
          alt=""
          src="/logo-headerremovebgpreview-2@2x.png"
        />
        <img
          className={styles.image21Icon}
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
        <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
        <img
          className={styles.image23Icon}
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
        <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
        <img className={styles.footerLogosChild} alt="" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </section>
      <section className={styles.processContainerParent}>
        <ProcessContainer />
        <FrameComponent1 />
        <div className={styles.knowledgeContainer}>
          <div className={styles.knowledgeInnerContainer}>
            <div className={styles.knowledgeHeaderContainer}>
              <div className={styles.knowledgeSpot}>Knowledge Spot</div>
            </div>
            <div className={styles.newsWebsitesAndContainer}>
              <span>
                <p className={styles.newsWebsitesAnd}>
                  News websites and blogs are common sources for web feeds, but
                  feeds are
                </p>
                <p className={styles.alsoUsedTo}>
                  also used to deliver structured
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.knowledgeContent}>
          <div className={styles.frameParent}>
            <div className={styles.videoContentContainerParent}>
              <div className={styles.videoContentContainer}>
                <div
                  className={styles.pepTalkSeries}
                >{`Pep Talk Series on Talent Development & Retention Strategy`}</div>
              </div>
              <div className={styles.youtubeAndVimeoVideo} />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.recruitmentTrendsChallengeWrapper}>
                  <div className={styles.recruitmentTrendsContainer}>
                    <p
                      className={styles.recruitmentTrends}
                    >{`Recruitment Trends & Challenges`}</p>
                  </div>
                </div>
                <div className={styles.youtubeAndVimeoVideoWrapper}>
                  <div className={styles.youtubeAndVimeoVideo1} />
                </div>
                <div className={styles.buildingSustainingACareerParent}>
                  <div
                    className={styles.buildingSustaining}
                  >{`Building & Sustaining a career in HR`}</div>
                  <div className={styles.youtubeAndVimeoVideoContainer}>
                    <div className={styles.youtubeAndVimeoVideo2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.messageContainerWrapper}>
        <div className={styles.messageContainer}>
          <div className={styles.messageHeaderContainer}>
            <div className={styles.sendMessage}>Send Message</div>
          </div>
          <div className={styles.address}>Address</div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default Desktop;
