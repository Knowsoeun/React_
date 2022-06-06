import './TodoTemplate.css';

const TodoTemplate =({children})=> {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
                <div className="content">{children}</div>
                {/* 나중에 content에 적은 text가 children에 들어가게 된다. */}
        </div>
    );
};

export default TodoTemplate;