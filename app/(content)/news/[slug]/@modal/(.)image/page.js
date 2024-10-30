import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsDetail = await getNewsItem(newsItemSlug);

  if (!newsDetail) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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
