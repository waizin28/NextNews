import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsDetail = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsDetail) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <img
          src={`/images/news/${newsDetail.image}`}
          alt={newsDetail.title}
        ></img>
        <h1>{newsDetail.title}</h1>
        <time dateTime={newsDetail.date}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
