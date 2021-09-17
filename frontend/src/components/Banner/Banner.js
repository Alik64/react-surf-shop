import React from "react";
import "./Banner.css";
import { HashLink } from "react-router-hash-link";

export default function Banner() {
  return (
    <section className="section_banner section">
      <div className="hero-image">
        <div className="hero-text">
          <h1>BTZ Surfshop</h1>

          <h3>Les meilleures planches sur la côte Basque!</h3>
          <br />
          <HashLink to="/#planches">
            <button className="callToAc">Trouver son bonheur</button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
