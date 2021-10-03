export const Logo = () => {
  return (
    <header className="lg:py-0 py-3 flex items-center">
      <img
        src="/imgs/logo.svg"
        alt="Pexels.com Logo Clone!"
        className="w-10 h-10 rounded-md"
      />
      <h1 className="text-lg sm:block hidden font-medium ml-4 text-white">
        Pexels
      </h1>
    </header>
  );
};
