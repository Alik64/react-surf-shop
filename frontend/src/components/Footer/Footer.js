import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer_content">
        <div className="footer_about">
          <h6>A propos</h6>
          <p>
            Le Surfshop Biarritz a été fondé en 1995 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni eveniet, natus et neque
            inventore illo ex sed nihil. Nostrum non ipsum cumque provident
            corporis quos eius suscipit laboriosam, aliquam consequuntur modi
            incidunt voluptatum id aliquid odit illo dignissimos? Inventore
            corporis vitae facilis ratione expedita quibusdam deserunt minus,
            repudiandae quos quasi.
          </p>
        </div>

        <div className="footer_links">
          <div className="footer_categories">
            <h6>Catégories</h6>
            <ul>
              <li>
                <Link to="#">Longboards</Link>
              </li>
              <li>
                <Link to="#">Funboards</Link>
              </li>
              <li>
                <Link to="#">Hybride</Link>
              </li>
              <li>
                <Link to="#">Shortboard</Link>
              </li>
            </ul>
          </div>

          <div className="footer_liens">
            <h6>Lien rapides</h6>
            <ul>
              <li>
                <Link to="#">Produits</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Compte</Link>
              </li>
              <li>
                <Link to="#">Panier</Link>
              </li>
            </ul>
          </div>

          <div className="footer_socials">
            <ul>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
            </ul>
          </div>

          <div className="footer_contact">
            <ul>
              <li>
                <i className="fas fa-mobile"></i> 06 12 34 56 78
              </li>
              <li>
                <i className="fas fa-envelope"></i> btz-surf@shop.com
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          Copyright &copy; 2021, crée par
          <a href="https://www.linkedin.com/in/albert-barsamov-2009041a0/">
            _ Albert _
          </a>
        </div>
        <hr />
      </div>
    </footer>
  );
}
