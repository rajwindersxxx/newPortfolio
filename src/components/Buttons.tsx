interface props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export function PrimaryButton({ children, onClick, className }: props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-teal-700 text-teal-200  min-w-24 min-h-12 rounded hover:bg-teal-800 transition-all cursor-pointer flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
export function SecondaryButton({ children, onClick, className }: props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-backgroundColor/50 border-2 border-teal-700 text-teal-200  min-w-24 min-h-12 rounded hover:bg-teal-800 transition-all cursor-pointer flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
