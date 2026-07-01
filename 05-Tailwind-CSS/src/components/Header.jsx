const header = () => {
  return (
    <div className="h-20 flex  justify-between items-center text-white bg-black">
      <h1 className="w-1.5 ml-5 font-black text-3xl">Logo</h1>
      <ul className="flex mr-5 gap-4 ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default header;
