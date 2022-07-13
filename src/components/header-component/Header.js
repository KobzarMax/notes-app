import SearchBox from "./SearchBox";

function Header({onAddNote, setSearchTerm}) {

    return (
        <header className="header">
            <SearchBox setSearchTerm={setSearchTerm} />
        </header>
    );

}

export default Header;