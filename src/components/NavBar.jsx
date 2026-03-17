const NavBar = ()=>{
    return (
        <div className="flex justify-between items-center w-1200px bg-purple-300 p-10 h-10">
            <div className="text-xl font-bold bg-purple-600 p-2 text-white rounded-r-full">
                <h1>React</h1>
            </div>
            <div className="text-md font-bold bg-purple-600 p-2 text-white rounded-l-full">
                <button>Log Out</button>

            </div>
        </div>
    )
}

export default NavBar;