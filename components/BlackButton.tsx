export default function BlackButton({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`grayButton bg-[#1c1d1e] py-2 px-4 rounded-[50px] text-white ${className}`}
    >
      ✦ {children} ✦
    </button>
  );
}
