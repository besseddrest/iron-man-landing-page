import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="columns is-flex">
        <div className="column">
        { /* ToDo: populate hero__description via API response */ }
          <p className="hero__description">
            API Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.
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