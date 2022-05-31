
const Second= ({name}) => {
    return (
        <>
            <p>{`Second: ${name}`}</p>
            <button onClick={() => {
                console.log(name);
            }}
            >
                Second name set react
            </button>
        </>
    );
};
export default Second;