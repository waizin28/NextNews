import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsItem } from '@/lib/news';

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsDetail = await getNewsItem(newsSlug);

  if (!newsDetail) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsDetail.slug}/image`}>
          <img
            src={`/images/news/${newsDetail.image}`}
            alt={newsDetail.title}
          ></img>
        </Link>
        <h1>{newsDetail.title}</h1>
        <time dateTime={newsDetail.date}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
