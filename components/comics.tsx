import Image from 'next/image';
import Flickity from 'react-flickity-component';
import { useEffect, useState } from 'react'
import { createHash } from 'crypto';

export default function Comics() {
  const [ comicList, setComicList ] = useState<[]>([]);

  useEffect(() => {
    getComics();
  }, []);

  async function getComics() {
    const time = new Date();
    const pub = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;
    const pri = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
    const hash = createHash('md5')
      .update(time + pri + pub)
      .digest('hex');
    const comics = await fetch(`https://gateway.marvel.com/v1/public/characters/1009368/comics?ts=${time}&apikey=${pub}&hash=${hash}`)
      .then(response => response.json())
      .then(resp => {
        const data = resp.data.results;
        const filtered = data.filter(item => {
          return item.images.length > 0;
        });
        setComicList(filtered);
      });
  }
  type ComicThumb = {
    images: {
      path: string,
      extension: string,
    }[],
  }

  const flickityOptions = {
    initialIndex: 2
  }
  
  return (
    <Flickity
      className={'carousel'}
      elementType={'section'}
      options={flickityOptions}
      disableImagesLoaded={false}
    >
      {
        comicList.map((item: ComicThumb, i: number) => {
          return (
            <Image
              key={i}
              src={item.images[0].path + '.' + item.images[0].extension}
              width="100"
              height="50"
              alt="Comic thumb" />
          )
        })
      }
    </Flickity>
  )
}