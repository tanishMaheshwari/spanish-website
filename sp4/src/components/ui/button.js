
export function Button({ children, onClick, className }) {
  return <button onClick={onClick} className={`px-4 py-2 text-white rounded-lg ${className}`}>{children}</button>;
}
