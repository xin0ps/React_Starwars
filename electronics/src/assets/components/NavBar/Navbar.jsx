import './styles.scss'

const Navbar = ({ onSearch }) => {
  return (
    <div className="flex flex-row ml-[100px] items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejbrs15IfDf0gViFxImHhaI1IHhnYe1QySQ&s" alt="icon" className="w-24 h-24" />
      <div className="flex border-[2px] border-[black] rounded-[10px] w-[600px] h-[50px] justify-between p-2 text-xl">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-1/2 border-transparent focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <input type="category" className="flex" />
      </div>
    </div>
  );
}

export default Navbar;
