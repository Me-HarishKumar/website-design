import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.newsContainerParent, className].join(" ")}>
      <div className={styles.newsContainer}>
        <div className={styles.latestNewsContainer}>
          <div className={styles.newsHeaderContainer}>
            <div className={styles.latestNews}>Latest News</div>
          </div>
          <div className={styles.newsContentPreview}>
            <img
              className={styles.image25Icon}
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <div className={styles.newsWebsitesAnd}>
              News websites and blogs are common sources for web feeds, but
              feeds are also used to deliver structured
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameNwesContent}>
        <div className={styles.articleElements} />
        <div className={styles.readMoreContainer}>
          <span className={styles.readMoreContainer1}>
            <span>{`Read More `}</span>
            <span className={styles.span}>{`>`}</span>
            <span>{` `}</span>
          </span>
        </div>
        <div className={styles.articleDivider} />
        <div className={styles.aBusinessPlan}>
          A business plan is a formal written document containing business
          goals. The methods on how these goals can be....
        </div>
        <div className={styles.bySrays}>By SRays</div>
        <a
          className={styles.aBusinessPlan1}
          href="https://www.srayssolutions.in/#"
          target="_blank"
        >
          A Business plan is a formal written document business goal
        </a>
        <div className={styles.march2019}>12 March,2019</div>
        <img
          className={styles.screenshot1321}
          loading="lazy"
          alt=""
          src="/screenshot-132-1@2x.png"
        />
        <div className={styles.articleElements1} />
        <div className={styles.readMoreContainer2}>
          <span className={styles.readMoreContainer3}>
            <span>{`Read More `}</span>
            <span className={styles.span1}>{`>`}</span>
            <span>{` `}</span>
          </span>
        </div>
        <div className={styles.image6Wrapper}>
          <img
            className={styles.image6Icon}
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
        <div className={styles.screenshot1331Parent}>
          <img
            className={styles.screenshot1331}
            loading="lazy"
            alt=""
            src="/screenshot-133-1@2x.png"
          />
          <div className={styles.trainingNewsContainer}>
            <div className={styles.groupNewsSkillTrain}>
              <div className={styles.groupNewsSkillTrainChild} />
              <img
                className={styles.screenshot1311}
                loading="lazy"
                alt=""
                src="/screenshot-131-1@2x.png"
              />
              <div className={styles.trainingNewsContent}>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.bySraysParent}>
                      <div className={styles.bySrays1}>By SRays</div>
                      <div className={styles.hrSkillsTraining}>
                        HR Skills Training Program
                      </div>
                    </div>
                  </div>
                  <div className={styles.trainingDescriptionContainer}>
                    <div className={styles.happyToAssociateContainer}>
                      <p className={styles.blankLine}>
                        <a
                          className={styles.blankLine1}
                          href="https://www.srayssolutions.in/#"
                          target="_blank"
                        >
                          <span className={styles.blankLine2}>&nbsp;</span>
                        </a>
                      </p>
                      <p className={styles.happyToAssociate}>
                        Happy to associate with K. S. R. Educational
                        institutions for HR skills training program...
                      </p>
                    </div>
                  </div>
                  <div className={styles.trainingDateContainer}>
                    <div className={styles.trainingInnerDateContainer}>
                      <div className={styles.may2022}>28 May, 2022</div>
                    </div>
                    <div className={styles.trainingReadMoreContainer}>
                      <div className={styles.trainingReadMoreContainerChild} />
                      <div className={styles.readMoreContainer4}>
                        <span>
                          <span>{`Read More `}</span>
                          <span className={styles.span2}>{`>`}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.businessNewsContent}>
              <div className={styles.businessNewsContainer}>
                <div className={styles.businessMayOffer}>
                  Business may offer to many differing activities, such as the
                  activity of buying or selling in trade. Business activity ....
                </div>
                <div className={styles.aBusinessPlan2}>
                  A Business plan is the activity of making one’s living
                </div>
                <div className={styles.businessNewsAuthorDate}>
                  <div className={styles.bySrays2}>By SRays</div>
                  <div className={styles.businessNewsDateContainer}>
                    <div className={styles.businessDateDivider} />
                    <div className={styles.march20191}>12 March,2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleHideNews} />
      </div>
    </div>
  );
};

export default FrameComponent1;
