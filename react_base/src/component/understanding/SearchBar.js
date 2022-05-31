const SearchBar = ({isCheck, setIsCheck, filterText, setFilterText}) => {
    return (
        <div>
            <input type={"text"} value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
            <p>
                <input type={"checkbox"} onChange={() => setIsCheck} checked={isCheck}></input>
                Only show products in stock
            </p>
        </div>
    )
}
export default SearchBar;