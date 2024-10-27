import Link from 'next/link';

export default function NewsList({ news }) {
  return (
    <ul className='news-list'>
      {news.map((newsDetail) => (
        <li key={newsDetail.id}>
          <Link href={`/news/${newsDetail.slug}`}>
            <img
              src={`/images/news/${newsDetail.image}`}
              alt={newsDetail.title}
            ></img>
            <span>{newsDetail.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
