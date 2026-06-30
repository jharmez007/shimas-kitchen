export default function HeroBackground() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-yellow-100 blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent_65%)]" />
    </>
  );
}