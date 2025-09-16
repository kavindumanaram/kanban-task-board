import React, { useRef, useEffect } from "react";

interface TaskModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const TaskModal: React.FC<TaskModalProps> = ({
  open,
  title,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      style={{ padding: "20px", borderRadius: "8px", width: "400px" }}
    >
      <h2>{title}</h2>
      {children}
      <button
        type="button"
        onClick={onClose}
        style={{ marginTop: "10px", background: "#eee" }}
      >
        Close
      </button>
    </dialog>
  );
};

export default TaskModal;
