function Header() {
    return (
        <header className="bg-gray-900 text-white px-8 py-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2 md:mb-0">
                Miguel Maldonado Gutierrez
            </h1>
            <nav>
                <ul className="flex space-x-6 text-lg">
                    <li>
                        <a href="#about" className="hover:text-gray-300 transition-colors duration-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-300 transition-colors duration-200">
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;