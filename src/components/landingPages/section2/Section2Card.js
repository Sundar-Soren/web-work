import React from "react";
import "./section2Card.scss";
const Section2Card = () => {
  return (
    <div className="section2_card">
      <div className="section2_card_container">
        <div className="section2Card_img_container">
          <img
            src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb218ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="section2Card_text">
          <h2>Product Showroom ( Cromax sinf sdfn ficsdekefns śwwfkms</h2>
          <div className="section2Card_profile_info">
            <img
              src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />

            <div className="section2Card_profile_name">
              <p className="creator_text">creator</p>
              <p>MetaQube Design</p>
            </div>
            <div className="section2Card_profile_explore">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Card;
