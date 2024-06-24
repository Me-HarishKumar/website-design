import { FunctionComponent } from "react";
import styles from "./VisionMission.module.css";

export type VisionMissionType = {
  className?: string;
};

const VisionMission: FunctionComponent<VisionMissionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.visionMission, className].join(" ")}>
      <div className={styles.visionMissionContent}>
        <div className={styles.visionMissionHeader}>
          <div className={styles.vision}>VISION</div>
          <div className={styles.mission}>MISSION</div>
        </div>
      </div>
      <div className={styles.frameVisionMission}>
        <div className={styles.frameVisionMissionChild} />
        <img className={styles.frameVisionMissionItem} loading="lazy" alt="" />
        <div className={styles.groupVisionIn}>
          <img className={styles.pheyeBoldIcon} loading="lazy" alt="" />
          <div className={styles.weWishToBeTheHrFronRunnWrapper}>
            <div className={styles.weWishToContainer}>
              <span>
                <p className={styles.weWishTo}>
                  We wish to be the HR fron-runners in setting
                </p>
                <p
                  className={styles.upCustomizedViral}
                >{`up customized viral HR & HRMS Systems at`}</p>
                <p className={styles.aMostViable}>a most viable price.</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.groupMissionIn}>
          <img
            className={styles.missionIcon}
            loading="lazy"
            alt=""
            src="/mission@2x.png"
          />
          <div className={styles.weAspireToContainer}>
            <span className={styles.weAspireToContainer1}>
              <p
                className={styles.weAspireTo}
              >{`We aspire to innovate more and more state of `}</p>
              <p
                className={styles.theArtSolutions}
              >{`the art solutions in the HR and technological `}</p>
              <p className={styles.domainsInThe}>
                domains in the years to come.
              </p>
            </span>
          </div>
        </div>
        <textarea
          className={styles.frameVisionMissionInner}
          rows={8}
          cols={26}
        />
      </div>
    </div>
  );
};

export default VisionMission;
