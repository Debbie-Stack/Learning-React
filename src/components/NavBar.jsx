const NavBar = ()=>{
    return (
        <div className="flex justify-between items-center w-1200px bg-black p-10 h-10">
            <div className="text-xl text-purple-500 font-bold bg-white p-2 rounded-lg">
                <h1>React</h1>
            </div>
            <div>
                <ul className="flex justify-between items-center gap-20 bg-white rounded-full py-2 px-3 font-bold text-purple-500">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Call</li>
                </ul>
            </div>
            <div className="text-md text-purple-500 bg-white p-2 rounded-lg">
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default NavBar;