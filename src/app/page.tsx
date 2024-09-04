import Image from "next/image";

export default function HomePage() {
  return (
    <>
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

        {/* Nouvelle section avec logos */}
        <div className="web-development-section">
          <div className="text">
            <p>
              {`Je me spécialise dans la création de sites web modernes et performants, en utilisant des technologies de pointe comme React, Node.js, et Next.js.`}
            </p>
            <p>
              {`J'ai une vaste expérience dans le développement d'applications web sur mesure, allant des plateformes e-commerce aux systèmes de gestion de contenu.`}
            </p>
          </div>
          <div className="logos">
            <Image
              src="/logo_react.png"
              alt="React Logo"
              width={80}
              height={80}
            />
            <Image
              src="/logo_nodejs.png"
              alt="Node.js Logo"
              width={80}
              height={80}
            />
            <Image
              src="/logo_nextjs.png"
              alt="Next.js Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </section>
    </>
  );
}
