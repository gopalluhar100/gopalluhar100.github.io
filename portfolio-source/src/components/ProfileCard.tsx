"use client";

import { KeyboardEvent, useState } from "react";
import { profile, publicPath } from "@/lib/data";

export function ProfileCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((value) => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={flipped ? "profile-card flipped" : "profile-card"}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? "Gopal Luhar profile, back. Activate to view portrait." : "Gopal Luhar profile, front. Activate to view professional strengths."}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="profile-card-inner">
        <div className="profile-card-face profile-card-front" aria-hidden={flipped}>
          <div className="card-topline"><span>PROFILE</span><span>01 / 02</span></div>
          <img src={publicPath("/portrait/portrait-bust.webp")} alt="" className="card-portrait" />
          <div className="card-person">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
            <small>{profile.location}</small>
          </div>
          <div className="card-bottomline"><span>LEAD GENERATION</span><span>DATA RESEARCH</span></div>
        </div>
        <div className="profile-card-face profile-card-back" aria-hidden={!flipped}>
          <div className="card-topline"><span>WHAT I BRING</span><span>02 / 02</span></div>
          <p className="card-back-lede">Research with care. Delivery with detail.</p>
          <ul>
            <li>Prospect and decision-maker research</li>
            <li>Data cleaning, validation, and CRM enrichment</li>
            <li>Quality-focused remote operations</li>
            <li>Team coordination and onboarding</li>
          </ul>
          <span className="card-back-signoff">Gopal Luhar</span>
          <span className="card-bottomline"><span>BASED IN INDIA</span><span>WORKING WITH US & UK CLIENTS</span></span>
        </div>
      </div>
      <span className="card-hint">Tap or press Enter to flip</span>
    </div>
  );
}
