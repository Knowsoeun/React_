import "./TodoListItem.css"
import {GrDisabledOutline, GrCheckbox, GrCheckboxSelected} from "react-icons/gr";
import cn from "classnames";

const TodoListItem=({todo, onRemove, onToggle})=>{
    const {id,text, checked}= todo;
    return(
        <div className="TodoListItem">
            <div className={cn("checkbox", {checked})} onClick={()=>onToggle(id)}>
                {checked?<GrCheckboxSelected/>:<GrCheckbox/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <GrDisabledOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;