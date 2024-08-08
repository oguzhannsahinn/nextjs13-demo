import { Modal } from './modal';

export default function PhotoModal({ params }) {
  return <Modal>{params.id}</Modal>;
}
