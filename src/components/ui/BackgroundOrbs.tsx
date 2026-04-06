export default function BackgroundOrbs() {
  return (
    <>
      <div className="pointer-events-none fixed -right-[100px] top-[10%] -z-10 h-[400px] w-[400px] rounded-full bg-accent-4 opacity-15 blur-[80px] animate-float-orb max-md:h-[250px] max-md:w-[250px]" />
      <div className="pointer-events-none fixed -left-[80px] bottom-[20%] -z-10 h-[300px] w-[300px] rounded-full bg-accent-2 opacity-15 blur-[80px] animate-float-orb-reverse max-md:h-[180px] max-md:w-[180px]" />
    </>
  );
}
