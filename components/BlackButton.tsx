export default function BlackButton({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`grayButton bg-[#1c1d1e] py-1 px-2 lg:py-2 lg:px-4 rounded-[50px] text-sm lg:text-base text-white ${className}`}
    >
      ✦ {children} ✦
    </button>
  );
}
