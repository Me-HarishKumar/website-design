import { FunctionComponent } from "react";
import styles from "./SubscriptionInput.module.css";

export type SubscriptionInputType = {
  className?: string;
};

const SubscriptionInput: FunctionComponent<SubscriptionInputType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscriptionInput, className].join(" ")}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputField}>
            <div className={styles.justAMomentContainer}>
              <span>
                <p className={styles.justAMoment}>Just a moment</p>
                <p className={styles.subscribeToOurNewsletter}>
                  <span>
                    <span>Subscribe to our newsletter</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.subscribeToOurNewsletterW}>
                  <span>
                    <span>
                      Subscribe to our Newsletter. We'll send email
                      notifications every time we release new Template.
                    </span>
                  </span>
                </p>
              </span>
            </div>
            <div className={styles.inputActions}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.instanceChild}
                  alt=""
                  src="/rectangle-27.svg"
                />
                <div className={styles.enterYourEmail}>Enter your Email id</div>
                <img className={styles.iconSend} alt="" src="/-icon-send.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupLettimg}>
          <img
            className={styles.newsLetterImg1Icon}
            alt=""
            src="/newsletterimg-1@2x.png"
          />
          <div className={styles.image11Parent}>
            <img
              className={styles.image11Icon}
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            <div className={styles.image12Wrapper}>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
          <div className={styles.image10Wrapper}>
            <img
              className={styles.image10Icon}
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInput;
