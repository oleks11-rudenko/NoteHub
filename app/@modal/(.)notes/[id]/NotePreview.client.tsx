'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api/clientApi';
import Loader from '@/components/Loader/Loader';
import css from './NotePreview.module.css';

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();
  const close = () => router.back();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;
  if (error || !note) return <p>Could not fetch note. {error?.message}</p>;

  return (
    <Modal onClose={close}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <p>{note.tag}</p>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
      <button className={css.button} onClick={close}>
        Close
      </button>
    </Modal>
  );
}
