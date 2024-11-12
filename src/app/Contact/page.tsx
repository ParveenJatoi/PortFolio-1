import Link from 'next/link';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <div className="contact-details">
            <h2>Email</h2>
            <p>
              <Link href="mailto:your-email@gmail.com">your-email@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <div className="contact-details">
            <h2>Mobile</h2>
            <p>+1 234 567 890</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🏠</span>
          <div className="contact-details">
            <h2>Home Phone</h2>
            <p>+1 234 567 891</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
