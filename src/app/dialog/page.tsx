
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close dialog when Escape is pressed
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close dialog when clicking outside the dialog box
  function handleOverlayClick(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Open Dialog Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Open Dialog
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={handleOverlayClick}
        >
          {/* Dialog Box */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              &times;
            </button>

            {/* Dialog Content */}
            <h2
              id="dialog-title"
              className="mb-3 pr-8 text-2xl font-bold text-gray-900"
            >
              Welcome!
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              This is a popup dialog built with React,
              TypeScript, and Tailwind CSS v4. Click outside
              this box or press the cross button to close it.
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
