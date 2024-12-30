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
      className={`flex min-h-12 min-w-24 cursor-pointer items-center justify-center rounded bg-teal-700 text-teal-200 transition-all hover:bg-teal-800 ${className}`}
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
      className={`flex min-h-12 min-w-24 cursor-pointer items-center justify-center rounded border-2 border-teal-700 bg-backgroundColor/50 text-teal-200 transition-all hover:bg-teal-800 ${className}`}
    >
      {children}
    </button>
  );
}
