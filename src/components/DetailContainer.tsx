import React from "react";
import medal from "../assets/medal.svg";
import styles from "../styles/DetailContainer.module.css";

interface CardProps {
  imageSrc: string;
  rewardValue: string;
  rewardType: string;
  cardName: string;
  caretSrc: string;
  fillBarClass: string;
  checkCircleSrc?: string;
  tags: string[];
  isOurPick?: boolean;
}

export const DetailContainer: React.FC<CardProps> = ({
  imageSrc,
  rewardValue,
  rewardType,
  cardName,
  caretSrc,
  fillBarClass,
  checkCircleSrc,
  tags,
  isOurPick = false,
}) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.cardInfo}>
        <div className={styles.horizontalContainer}>
          <div className={styles.cardImageContainer}>
            <img className={styles.cardImage} alt="Card image" src={imageSrc} />
            {checkCircleSrc && (
              <img className={styles.checkCircle} alt="Check circle" src={checkCircleSrc} />
            )}
          </div>

          <div className={styles.horizontalContainer2}>
            <div className={styles.content}>
              <div className={styles.rewardValue}>{rewardValue}</div>
              <div className={styles.textWrapper3}>{rewardType}</div>
              <div className={styles.textWrapper3}>{cardName}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img className={styles.caretRight} alt="Caret right" src={caretSrc} />
            </div>
          </div>
        </div>

        <div className={styles.spendBar}>
          <div className={styles.totalBar}>
            <div className={styles[fillBarClass]} />
          </div>
        </div>
      </div>

      <div className={styles.cardDetails}>
        <p className={"text" /* still global if needed */}>
          <span>Extended warranty, Purchase protection, return protection </span>
          <span className={styles.textWrapper4}>read more </span>
          <span>&gt;</span>
        </p>
      </div>

      <div className={styles.cardTags}>
        {isOurPick && (
          <div className={styles.tag}>
            <img className={styles.medal} alt="Medal" src={medal} />
            <div>Our Pick</div>
          </div>
        )}
        {tags.map((tag, index) => (
          <div key={index} className={styles[`tag${index + 2}`]}>
            <div>{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
