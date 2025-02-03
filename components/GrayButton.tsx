export default function GrayButton({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`grayButton bg-[#2b2c2c] py-2 px-4 rounded-[50px]  ${className}`}
    >
      ✦ {children} ✦
    </button>
  );
}
