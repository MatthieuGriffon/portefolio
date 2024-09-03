import Image from "next/image";

export default function HomePage() {
  return (
    <section className="home">
      <div className="intro">
        <div className="photo">
          <Image
            src="/photo.jpg"
            alt="Matthieu Griffon"
            width={120}
            height={120}
            className="profile-photo"
          />
        </div>
        <div className="presentation">
          <p>
            {`Bonjour ! Je suis Matthieu Griffon, développeur full-stack passionné par la création d'applications web robustes et intuitives.`}
          </p>
        </div>
      </div>
      <hr className="separator" />
      <div className="presentation">
        <p>
          {`Découvrez mes projets, mon blog et comment me contacter pour discuter de vos besoins en développement web.`}
        </p>
      </div>
    </section>
  );
}
