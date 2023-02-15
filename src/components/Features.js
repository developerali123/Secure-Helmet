import Container from "react-bootstrap/esm/Container";

export default function Features() {
  return (
    <div className="features">
      <Container>
        <h2>Helmet Features</h2>
        <ul>
          <li data-aos="fade-up">
            <span>Accident Detection:</span> Secure uses advanced sensors to
            detect an accident and instantly send a distress signal.
          </li>
          <li data-aos="fade-up">
            <span>Location Sharing:</span> In the event of an accident, Secure
            will share your exact location with your designated contacts,
            ensuring that help reaches you as soon as possible.
          </li>
          <li data-aos="fade-up">
            <span>Easy to Use:</span> Secure is easy to attach to your helmet
            and does not interfere with your riding experience.
          </li>
          <li data-aos="fade-up">
            <span>Reliable:</span> Our device is designed to work under harsh
            weather conditions and even in remote areas with limited network
            coverage.
          </li>
          <li data-aos="fade-up">
            <span>Peace of Mind:</span> With Secure, you can focus on your ride
            and leave the safety concerns to us.
          </li>
        </ul>
      </Container>
    </div>
  );
}
