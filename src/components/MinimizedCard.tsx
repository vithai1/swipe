import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import wellsfargo from "../assets/wellsfargo.png";
import bilt from "../assets/bilt.png";
import alaska from "../assets/alaska.png";
import sapphireR from "../assets/sapphireR.png";
import { FaCreditCard } from "react-icons/fa6";
import "../styles/MinimizedCard.css";

export const MinimizedCard: React.FC = () => {
  return (
    <div className="MinimizedCard">
      <div className="card-container">
        <div className="content">
          <div className="horizontal-container">
            <div className="card-image-container">
              <img className="card-image" alt="Card" src={wellsfargo} />
              <div className="check-circle-wrapper">
                <MdCheck className="check-icon" />
              </div>
            </div>

            <div className="card-details">
              <div className="card-content">
                <div className="card-reward">
                  <div className="text-wrapper">$2.71</div>
                  <div className="div">cash back</div>
                </div>
                <div className="card-name">Wells Fargo Active Cash</div>
              </div>
            </div>
          </div>

          <div className="horizontal-container-2">
            <div className="div-2">
              <div className="div-2">
                <img className="img" alt="Card" src={bilt} />
                <img className="img" alt="Card" src={alaska} />
                <img className="img" alt="Card" src={sapphireR} />
              </div>
              <div className="additional-cards">
                <div className="number-of-additional">+5</div>
              </div>
            </div>

            <div className="button-container">
              <div className="button-text">see all cards</div>
              <RxCaretRight className="caret-right" />
            </div>
          </div>
        </div>

        <button className="button">
          <FaCreditCard className="logo" />
          <div className="button-text-2">pay with selected card</div>
        </button>
      </div>
      <IoIosClose size={32} className="exit-icon" />
    </div>
  );
};
