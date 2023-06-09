import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            3 wolf moon praxis umami twee kitsch kinfolk franzen helvetica
            succulents viral put a bird on it af. Pitchfork shoreditch
            gluten-free pour-over sriracha direct trade la croix. Hella fam
            tumeric tumblr whatever, air plant intelligentsia pinterest coloring
            book craft beer. Affogato selvage echo park migas.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman with browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
