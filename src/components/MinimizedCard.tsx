import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { IoIosCheckmarkCircle, IoIosClose } from "react-icons/io";
import wellsfargo from "../assets/wellsfargo.png";
import alaska from "../assets/alaska.png";
import bilt from "../assets/bilt.png";
import sapphireR from "../assets/sapphireR.png";
import { FaCreditCard } from "react-icons/fa6";
import "../styles/MinimizedCard.css";


export const MinimizedCard: React.FC = () => {
    return (
        <div className={`MinimizedCard`}>
            <div className="card-container">
                <div className="content">
                    <div className="frame">
                        <div className="div">
                            <div className="frame-2">
                                <img className="image" alt="Image" src={wellsfargo} />
                                <IoIosCheckmarkCircle />
                            </div>

                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="frame-5">
                                        <div className="text-wrapper">$2.71</div>

                                        <div className="text-wrapper-2">cash back</div>
                                    </div>

                                    <div className="text-wrapper-3">Wells Fargo Active Cash</div>
                                </div>
                            </div>
                        </div>

                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="frame-7">
                                    <img className="img" alt="Image" src={bilt} />

                                    <img className="img" alt="Image" src={alaska} />

                                    <img className="img" alt="Image" src={sapphireR} />
                                </div>

                                <div className="div-wrapper">
                                    <div className="text-wrapper-4">+5</div>
                                </div>
                            </div>

                            <div className="frame-8">
                                <div className="text-wrapper-5">see all cards</div>
                                <RxCaretRight />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="button">
                    <FaCreditCard />
                    <div className="button-text">pay with selected card</div>
                </button>
            </div>

            <div className="exit-icon">
                <IoIosClose />
            </div>
        </div>
    );
};

