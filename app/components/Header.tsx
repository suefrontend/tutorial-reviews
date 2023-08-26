const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container flex justify-between items-center">
        <h1 className="text-primary font-semibold">Tutorial Paradise</h1>
        <input
          type="text"
          placeholder="Search tutorial"
          className="bg-bggray px-3 py-1 rounded-sm"
        />
      </div>
    </header>
  );
};

export default Header;
