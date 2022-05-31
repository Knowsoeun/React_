import {useState} from "react";
import {DATA } from "./Data";
import SearchBar from "./SearchBar";
import Table from "./Table";

const FilterableTable = () => {
    /* const data = DATA; */
    const [isCheck, setIsCheck] = useState[false];
    const [filterText, setFilterText] = useState("");

    return (
        <div>
            <SearchBar isCheck={isCheck} setIsCheck={setIsCheck} filterText={filterText} setFilterText={setFilterText}></SearchBar>
            <Table data={data} isCheck={isCheck} filterText={filterText}></Table>
        </div>
    );
};

export default FilterableTable;