import { useEffect, useState } from 'react'
import { createHash } from 'crypto';

export default function Comics() {
  const [ comicList, setComicList ] = useState<[]>([]);

  useEffect(() => {
    getComics();
  }, []);

  // pu: fea51487254ee228542369281f464255
  // pr: 15ae1385eb652244d3212c9cf411c411841ede47
  async function getComics() {
    const time = new Date();
    const pub = 'fea51487254ee228542369281f464255';
    const pri = '15ae1385eb652244d3212c9cf411c411841ede47';
    const hash = createHash('md5').update(time + pri + pub).digest('hex');
    const comics = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${pub}&hash=${hash}`)
      .then(response => response.json())
      .then(resp => console.log(resp.data.results));
  }
  
  return (
    <section className="comics">
      <p>image carousel goes here</p>
    </section>
  )
}