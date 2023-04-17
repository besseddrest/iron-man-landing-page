import Image from 'next/image';

export default function Hero(props: any) {
  const { heroDesc } = props;

  return (
    <section className="hero">
      <div className="columns is-flex">
        <div className="column">
        { /* ToDo: populate hero__description via API response */ }
          <p className="hero__description">
            { heroDesc }
          </p>
          <button className="button hero__button">Get Started</button>
        </div>
        <div className="column is-flex-shrink-1">
          <Image src="/images/hero-iron-man.png" width="410" height="559" alt="Iron Man Cartoon" />
        </div>
      </div>
    </section>
  );
}