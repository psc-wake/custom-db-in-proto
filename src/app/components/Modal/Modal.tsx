"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export default function Modal(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, onClose } = props;

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    if (isOpen) {
      if (dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.close();
      if (onClose) {
        onClose();
      }
    }
  }, [isOpen, onClose]);

  return (
    <dialog
      className="fixed left-0 right-0 top-10 z-10 m-auto border bg-white p-4 shadow rounded"
      ref={dialogRef}
    >
      {props.children}
    </dialog>
  );
}
