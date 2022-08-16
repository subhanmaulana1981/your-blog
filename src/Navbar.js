const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Your Blog</h1>
            <div className="links">
                <a href="/">Beranda</a>
                <a href="/create">Blog baru</a>
            </div>
        </nav>
    );
}

export default Navbar;