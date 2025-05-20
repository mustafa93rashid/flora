import React from "react";
import "./Footer.css";
import type { FooterData } from "../../types/Footer";
import type { LinkItem } from "../../types/Link";

/* FooterProps interface defines the expected data structure for the footer */
interface FooterProps {
  data: FooterData;
}

/* Footer component: renders branding, sections, contact info, social icons, and legal links */
const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    /* Main footer wrapper with padding and top margin */
    <footer className="px-150 mt-160" data-aos="fade-down">

      {/* Top section of the footer containing brand and column sections */}
      <div className="footerMain">

        {/* Brand section: displays logo and brand description */}
        <div className="footerBrand">
          <img src={data.brand.logo} alt="Logo" />
          <p className="fs-20">{data.brand.description}</p>
        </div>

        {/* Dynamic footer sections: each section contains a title and a list of links */}
        {data.sections.map((section, index) => (
          <div key={index} className="footerColumn">
            <h3 className="fs-24">{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a className="fs-20" href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Location/contact section with title, description, and social media links */}
        <div className="footerColumn">
          <h3 className="fs-24">{data.location.title}</h3>
          <p className="fs-20">{data.location.description}</p>

          {/* Social media icons section */}
          <div className="socialIcons">
            {data.socialLinks.map((link, index) => (
              <a key={index} href={link.path}>
                <div>
                  <img src={link.name} alt="social icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section of the footer containing privacy notice and legal links */}
      <div className="footerBottom">
        {/* Text for copyright or privacy */}
        <span className="fs-18">{data.privacy}</span>

        {/* List of privacy or legal related links */}
        <div className="footerLinks">
          {data.privacyLink.map((item: LinkItem, index) => (
            <a className="fs-18" key={index} href={item.path}>{item.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
