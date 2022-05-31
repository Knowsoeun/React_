import Category from "./Category";
import Rows from "./Rows";

const Table = ({data, isCheck, filterText})=>{
    const rows=() => {
        let lastCategory ="";
        let dataRow=[];
        data.forEach((row)=> {
            if (row.name.indexOf(filterText) === -1){
                //filter text가 없으면
                return;
            }
            if (iscCheck && !row.stocked){
                //체크 되어있고 data에 stocked가 false일때
                return;
            }
            if (lastCategory !== row.category){
                dataRow.push(<Category category={row.category} key={row.category}></Category>);
            }
            dataRow.push(<Rows row={row} key={row.name}></Rows>);
            lastCategory = row.category;
        });
        return dataRow;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
        </table>
    );
};

export default Table;