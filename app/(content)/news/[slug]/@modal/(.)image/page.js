'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';
export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsItemSlug = params.slug;
  const newsDetail = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsDetail) {
    notFound();
  }

  return (
    <>
      <div className='modal-backdrop' onClick={router.back} />
      <dialog className='modal' open>
        <div className='fullscreen-image'>
          <img
            src={`/images/news/${newsDetail.image}`}
            alt={newsDetail.title}
          ></img>
        </div>
      </dialog>
    </>
  );
}
