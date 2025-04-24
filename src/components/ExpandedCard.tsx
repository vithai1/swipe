import React from "react";
import wellsfargo from "../assets/wellsfargo.png";
import bilt from "../assets/bilt.png";
import alaska from "../assets/alaska.png";
import caretRight from "../assets/caret-right.svg";
import checkCircle from "../assets/check-circle.svg";
import logo from "../assets/logo.svg";
import minus from "../assets/minus.svg";
import exitIcon from "../assets/exitIcon.svg";
import { DetailContainer } from "./DetailContainer";
import styles from "../styles/ExpandedCard.module.css";

export const ExpandedCard: React.FC = () => {
  return (
    <div className={styles.maximizedPopUp}>
        <div className={styles.topBar}>
            <div className={styles.textWrapper}>Our Recommendations</div>
            <div className={styles.frame}>
            <img src={minus} className={styles.minusIcon} />
            <img src={exitIcon} className={styles.exitIcon} />
            </div>
        </div>

        <div className={styles.verticalWrapper}>
            <DetailContainer
            imageSrc={wellsfargo}
            rewardValue="$0.81"
            rewardType="2% cash back"
            cardName="Wells Fargo Active Cash"
            caretSrc={caretRight}
            fillBarClass="fillBar"
            checkCircleSrc={checkCircle}
            tags={["Best cash rewards", "Best card spend"]}
            isOurPick
            />
            <DetailContainer
            imageSrc={bilt}
            rewardValue="$0.56 / 45 pts"
            rewardType="1x pts"
            cardName="BILT Mastercard"
            caretSrc={caretRight}
            fillBarClass="fillBar2"
            tags={["Best day-to-day rewards"]}
            />
            <DetailContainer
            imageSrc={alaska}
            rewardValue="$0.45 / 45 miles"
            rewardType="1x miles"
            cardName="Alaska Airlines Signature®"
            caretSrc={caretRight}
            fillBarClass="fillBar3"
            tags={["Best travel rewards"]}
            />

            <button className={styles.button}>
            <div className={styles.buttonText}>add new card</div>
            </button>
        </div>

        <div className={styles.buttonContainer}>
            <button className={styles.button2}>
            <img className={styles.logo} alt="Logo" src={logo} />
            <div className={styles.buttonText2}>pay with selected card</div>
            </button>
        </div>

        <div className={styles.opacityEffect} />
        </div>
  );
};