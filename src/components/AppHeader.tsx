const AppHeader = () => {
  return (
    <header className="fixed w-full h-12 z-[9999] px-6 flex items-center">
      <div>ㅎㅎ</div>

      <div className="flex gap-4 relative">
        <button className="w-24 text-center">1</button>
        <button className="w-24 text-center">2</button>
        <button className="w-24 text-center">3</button>

        <div className="absolute bottom-0 mx-10 w-4 h-1 bg-itzy-500 rounded-full" />
      </div>
    </header>
  );
};

export default AppHeader;
