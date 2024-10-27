import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <>
      <h1>This is news page</h1>
      <ul className='news-list'>
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title}></img>
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
