export default function Services() {
    return (
      <div className="services-container">
        <h1 className="services-title">My Services</h1>
        <p className="services-intro">
          As a dedicated web developer, I offer a range of services to help businesses establish their online presence and achieve their goals.
        </p>
        
        <div className="services-grid">
          <section className="service">
            <h2>Web Development</h2>
            <p>Custom website development using modern technologies.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript, React, Next.js</p>
            <p><strong>Key Features:</strong> Responsive design, user-friendly interfaces</p>
          </section>
      
          <section className="service">
            <h2>E-commerce Solutions</h2>
            <p>Development of robust e-commerce platforms.</p>
            <p><strong>Key Features:</strong> Payment gateway integration, inventory management</p>
          </section>
      
          <section className="service">
            <h2>UI/UX Design</h2>
            <p>Creating intuitive and engaging user interfaces.</p>
            <p><strong>Key Features:</strong> User research, wireframing, prototyping</p>
          </section>
        </div>
  
        <div className="testimonials">
          <h3>Testimonials</h3>
          <blockquote>
            Parveen's work transformed our online presence. Highly recommended! - Client Name
          </blockquote>
        </div>
        
        <div className="contact-cta">
          <h3>Get In Touch</h3>
          <p>If you're interested in working together, feel free to <a href="/Contact">contact me</a> for a consultation!</p>
        </div>
      </div>
    );
  }
  