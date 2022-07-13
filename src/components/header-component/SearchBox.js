function SearchBox({setSearchTerm}) {

    return (
        <div className="searchbox__wrapper">
            <input onChange={event => {setSearchTerm(event.target.value)}} className="searchbox__input" type='text' placeholder="Search"></input>
        </div>
    );

}

export default SearchBox;