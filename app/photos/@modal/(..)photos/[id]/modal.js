'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    !showModal && setShowModal(true);
  }, []);

  function onDismiss() {
    router.back();
  }

  function handleDetailPage() {
    location.reload(true);
    setShowModal(false);
  }

  // modal-root elementinin varlığını kontrol ediyoruz
  const modalRoot =
    typeof window !== 'undefined'
      ? document.getElementById('modal-root')
      : null;

  if (!modalRoot) return null;

  return createPortal(
    showModal && (
      <div className="modal-backdrop">
        <dialog ref={dialogRef} className="modal" style={{ height: '300px' }}>
          {children}
          <button onClick={onDismiss} className="close-button" />
          <button
            onClick={handleDetailPage}
            className="detail-button"
          >{`Detail >`}</button>
        </dialog>
      </div>
    ),
    modalRoot // modal-root elementine içerik render edilir
  );
}
