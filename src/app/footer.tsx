import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h2 className="footer-title">Connect with Us</h2>
        <ul className="social-links">
          <li>
            <Link href="https://linkedin.com/in/yourhandle" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/yourhandle" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="social-icon github" />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/yourhandle" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-secondary">
        <p className="footer-description">About Us: Your one-stop platform for awesome content, connecting you to the world.</p>
        <ul className="footer-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
        </ul>
        <p className="footer-copyright">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
