import { FunctionComponent } from "react";
import styles from "./EndorsementLink.module.css";

export type EndorsementLinkType = {
  className?: string;
};

const EndorsementLink: FunctionComponent<EndorsementLinkType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.endorsementLink, className].join(" ")}>
      <div className={styles.linkContent}>
        <div className={styles.linkButton}>
          <div className={styles.linkIcon}>
            <img
              className={styles.frameEndrosementIcon}
              alt=""
              src="/frame-endrosement.svg"
            />
            <img
              className={styles.materialSymbolsLightarrowFIcon}
              alt=""
              src="/materialsymbolslightarrowforward.svg"
            />
          </div>
          <div className={styles.weAreDelighted}>
            We are delighted to announce the successful endorsement by SRays, HR
            training and development skills. This partnership reinforces our
            dedication to nurturing talent and enhancing organizational
            effectiveness through robust training initiatives.
          </div>
        </div>
        <div className={styles.forward}>
          <img
            className={styles.materialSymbolsLightarrowFIcon1}
            alt=""
            src="/materialsymbolslightarrowforward-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EndorsementLink;
