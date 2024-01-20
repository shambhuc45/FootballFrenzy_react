import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function Footer() {
  const socialMediaData = [
    {
      id: "facebook",
      url: "https://www.facebook.com/",
      icon: "logos:facebook",
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/",
      icon: "skill-icons:instagram",
    },
    {
      id: "twitter",
      url: "https://twitter.com/",
      icon: "skill-icons:twitter",
    },
  ];
  const openSocialMediaLink = (e, url) => {
    e.preventDefault();
    const newTab = window.open(url, "_blank");
    newTab.focus();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer row">
        <div className="flex">
          <div className="footer__content">
            <h4 className="footer__content--heading">Info</h4>
            <ul className="footer__content--list">
              <li className="footer__content--list-item">
                <Link to="/" className="footer__content--list-item-links">
                  Home
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/aboutus"
                  className="footer__content--list-item-links"
                >
                  About Us
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/contactus"
                  className="footer__content--list-item-links"
                >
                  Contact Us
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/reviews"
                  className="footer__content--list-item-links"
                >
                  Football Frenzy Reviews
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link to="/terms" className="footer__content--list-item-links">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h4 className="footer__content--heading">Shop By</h4>
            <ul className="footer__content--list">
              <li className="footer__content--list-item">
                <Link
                  to="/nationalkits"
                  className="footer__content--list-item-links"
                >
                  National Kits
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/clubkits"
                  className="footer__content--list-item-links"
                >
                  Club Kits
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/barcelona"
                  className="footer__content--list-item-links"
                >
                  FC Barcelona
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/realmadrid"
                  className="footer__content--list-item-links"
                >
                  Real Madrid
                </Link>
              </li>
              <li className="footer__content--list-item">
                <Link
                  to="/manunited"
                  className="footer__content--list-item-links"
                >
                  Manchester United
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h4 className="footer__content--heading">Reach Us</h4>
            <ul className="footer__content--list social-links flex">
              {socialMediaData.map((socialLink) => (
                <li className="footer__content--list-item" key={socialLink.id}>
                  <a
                    href={socialLink.url}
                    onClick={(e) => openSocialMediaLink(e, socialLink.url)}
                    rel="noopener noreferrer"
                    className={`social-media-link ${socialLink.icon}`}
                  >
                    <Icon icon={socialLink.icon} height="2.5rem" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__logo">
            <img src="logo.png" alt="Logo" />
          </div>
        </div>
        <div className="pay-methods flex">
          <h4 className="heading"> We Accept:</h4>
          <img src="pay.png" alt="Pay Methods" className="image-paymethod" />
          <div className="btn-top" onClick={scrollToTop}>
            <Icon icon="subway:up-2" className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
