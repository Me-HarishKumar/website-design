import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameClientsWrapper, className].join(" ")}>
      <div className={styles.frameClients}>
        <div className={styles.headerBackground} />
        <div className={styles.clientHead}>
          <div className={styles.clients}>Clients</div>
        </div>
        <div className={styles.clientsLogos}>
          <div className={styles.groupKsr}>
            <img
              className={styles.image13Icon}
              loading="lazy"
              alt=""
              src="/image-13@2x.png"
            />
            <div className={styles.kSRName}>
              <div className={styles.ksrEducationalInstitutions}>
                KSR Educational Institutions
              </div>
            </div>
          </div>
          <div className={styles.groupSairam}>
            <img
              className={styles.image14Icon}
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
            <div className={styles.sairamName}>
              <div className={styles.sairamGroupOf}>
                Sairam Group of Institutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
