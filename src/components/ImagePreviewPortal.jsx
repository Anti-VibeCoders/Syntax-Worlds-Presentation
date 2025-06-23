import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function ImagePreviewPortal({ open, src, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={onClose}
        >
          <motion.img
            key="modal-img"
            src={src}
            alt="Preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "1rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
              background: "#111",
              display: "block",
            }}
            onClick={e => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
