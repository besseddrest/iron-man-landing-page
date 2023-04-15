import Image from 'next/image';

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__header">Contrary to popular belief, he knows exactly what he’s doing.</h2>
      <div className="profile__content columns">
        <div className="profile__image column">
          <Image src="/images/Iron Man API Asset.png" width="417" height="417" alt="API asset" />
        </div>
        <div className="profile__attributes column columns is-multiline">
          { /* ToDo: populate via API response, add icons */ }
          <div className="profile__attribute column is-half">
            <Image className="profile__attribute-icon" src="/images/icon-intelligence.png" width="53" height="55" alt="Iron Man: Intelligence" />
            <h3 className="profile__attribute-name">Super-Genius Intelligence</h3>
            <p className="profile__attribute-desc">
              Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.
            </p>
          </div>
          <div className="profile__attribute column is-half">
            <Image className="profile__attribute-icon" src="/images/icon-intelligence.png" width="53" height="55" alt="Iron Man: Intelligence" />
            <h3 className="profile__attribute-name">Super-Genius Intelligence</h3>
            <p className="profile__attribute-desc">
              Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.
            </p>
          </div>
          <div className="profile__attribute column is-half">
            <Image className="profile__attribute-icon" src="/images/icon-intelligence.png" width="53" height="55" alt="Iron Man: Intelligence" />
            <h3 className="profile__attribute-name">Super-Genius Intelligence</h3>
            <p className="profile__attribute-desc">
              Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.
            </p>
          </div>
          <div className="profile__attribute column is-half">
            <Image className="profile__attribute-icon" src="/images/icon-intelligence.png" width="53" height="55" alt="Iron Man: Intelligence" />
            <h3 className="profile__attribute-name">Super-Genius Intelligence</h3>
            <p className="profile__attribute-desc">
              Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}