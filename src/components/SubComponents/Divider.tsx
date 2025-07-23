interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`w-full bg-[#0e1117] py-4 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-purple-500 to-transparent opacity-60"></div>
    </div>
  );
}
