import { Modal } from './modal';

export default function MovieModal({
  params: { id: movieId },
}: {
  params: { id: string };
}) {
  return <Modal>{movieId}</Modal>;
}
