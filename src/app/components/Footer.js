import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Section */}
        <div className={styles.section}>
          <h3 className={`${styles.heading} ${styles.highlightedHeading}`}>Call</h3>
          <p className={styles.text}>+91 99080 006766</p>
        </div>
        <div className={styles.section}>
          <h3 className={`${styles.heading} ${styles.highlightedHeading}`}>Email</h3>
          <p className={styles.text}>yukthareddytiles@gmail.com</p>
        </div>

        {/* Products Section */}
        <div className={styles.section}>
          <h3 className={`${styles.heading} ${styles.highlightedHeading}`}>Products</h3>
          <ul className={styles.list}>
            <li><a href="#" className={styles.link}>Bathroom Tiles</a></li>
            <li><a href="#" className={styles.link}>Kitchen Tiles</a></li>
            <li><a href="#" className={styles.link}>Wall Tiles</a></li>
            <li><a href="#" className={styles.link}>Floor Tiles</a></li>
            <li><a href="#" className={styles.link}>Vitrified Tiles</a></li>
            <li><a href="#" className={styles.link}>Ceramic Tiles</a></li>
            <li><a href="#" className={styles.link}>Polished Vitrified Tiles</a></li>
            <li><a href="#" className={styles.link}>Eternity - Glazed Vitrified Tiles</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={`${styles.heading} ${styles.highlightedHeading}`}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="#" className={styles.link}>Metallic Ceramic Tiles</a></li>
            <li><a href="#" className={styles.link}>Wood Wall Tiles</a></li>
            <li><a href="#" className={styles.link}>Rustic Kitchen Wall Tiles</a></li>
            <li><a href="#" className={styles.link}>Where To Buy</a></li>
            <li><a href="#" className={styles.link}>Corporate Office</a></li>
          </ul>
        </div>

        {/* Social Media
        <div className={styles.section}>
          <h3 className={`${styles.heading} ${styles.highlightedHeading}`}>Connect</h3>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" className={styles.icon} /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" className={styles.icon} /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Twitter" className={styles.icon} /></a>
            <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" className={styles.icon} /></a>
            <a href="#"><img src="/youtube-icon.png" alt="YouTube" className={styles.icon} /></a>
          </div>
        </div> */}
      </div>

      {/* Company Address & Copyright */}
      <div className={styles.bottomFooter}>
        <h3 className={`${styles.companyName} ${styles.highlightedHeading}`}>Yuktha Reddy Tiles and Sanitory</h3>
        <p className={styles.address}>Rajampeta, Near SR Petrol bunk | Andhra Pradesh | 516115</p>
        <p className={styles.bottomText}>
          &copy; {new Date().getFullYear()} Yuktha Reddy Tiles and Sanitory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
