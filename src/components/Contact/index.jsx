const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="heading">Contact</div>
        <div className="icon-container">
          <a href="mailto:ashwary.jharbade999@gmail.com">
            <div className="icon">
              <span className="fa  fa-envelope"></span>
              <div className="details">Write an Email</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ashwary-jharbade/"
            target="_blank"
          >
            <div className="icon">
              <span className="fa fa-linkedin-square"></span>
              <div className="details">Connect on Linkedin</div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1996633,77.2658041,11z/data=!3m1!4b1!4m5!3m4!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615"
          >
            <div className="icon">
              <span className="fa fa-address-card-o"></span>
              <div className="details">Bhopal, Madhya Pradesh, India</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
