function Sidebar() {
    return (
        <div className="relative flex flex-col
        items-center w-1/4 p-3 bg-stone-900">
            <div className="flex flex-col
        items-center">
                <img className="w-1/2 pt-6" src="/marvel_logo.png" alt="logo" />
                <h1 className="font-serif text-center text-lg text-red-500">All a b o u t <br />M A R V E L<br />C O M I C S</h1>
            </div>
        </div>
    )
}

export default Sidebar;