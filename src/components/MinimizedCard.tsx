import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import wellsfargo from "../assets/wellsfargo.png";
import bilt from "../assets/bilt.png";
import alaska from "../assets/alaska.png";
import sapphireR from "../assets/sapphireR.png";
import logo from "../assets/logo.svg";
import styles from "../styles/MinimizedCard.module.css";

export const MinimizedCard: React.FC<{ onExpand: () => void }> = ({ onExpand }) => {
  return (
    <div className={styles.minimizedCard}>
      <div className={styles.cardContainer}>
        <div className={styles.content}>
          <div className={styles.horizontalContainer}>
            <div className={styles.cardImageContainer}>
              <img className={styles.cardImage} alt="Card" src={wellsfargo} />
              <div className={styles.checkCircleWrapper}>
                <MdCheck className={styles.checkIcon} />
              </div>
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.cardContent}>
                <div className={styles.cardReward}>
                  <div className={styles.textWrapper}>$2.71</div>
                  <div className={styles.div}>cash back</div>
                </div>
                <div className={styles.cardName}>Wells Fargo Active Cash</div>
              </div>
            </div>
          </div>

          <div className={styles.horizontalContainer2}>
            <div className={styles.div2}>
              <div className={styles.div2}>
                <img className={styles.img} alt="Card" src={bilt} />
                <img className={styles.img} alt="Card" src={alaska} />
                <img className={styles.img} alt="Card" src={sapphireR} />
              </div>
              <div className={styles.additionalCards}>
                <div className={styles.numberOfAdditional}>+5</div>
              </div>
            </div>

            <button className={styles.buttonContainer} onClick={onExpand}>
              <div className={styles.buttonText}>see all cards</div>
              <RxCaretRight className={styles.caretRight} />
            </button>
          </div>
        </div>

        <button className={styles.button}>
          <img src={logo} className={styles.logo} />
          <div className={styles.buttonText2}>pay with selected card</div>
        </button>
      </div>
      <IoIosClose size={32} className={styles.exitIcon} />
    </div>
  );
};
