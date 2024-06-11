"use client";

import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className='max-h-screen overflow-y-hidden backdrop-blur-md absolute inset-0 bg-qBlack/30 z-50'>
      <dialog
        ref={dialogRef}
        className='w-1/2 max-w[500px] h-auto max-h-[500px] bg-white relative flex items-center font-[48px]'
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className='close-button absolute top-[10px] right-[10px] w-[48px] h-[48px] bg-transparent cursor-pointer flex items-center justify-center font-24px]'
        />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
