import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsDetail = await getNewsItem(newsItemSlug);

  if (!newsDetail) {
    notFound();
  }

  return (
    <div className='fullscreen-image'>
      <img
        src={`/images/news/${newsDetail.image}`}
        alt={newsDetail.title}
      ></img>
    </div>
  );
}
