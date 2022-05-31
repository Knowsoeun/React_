const Title = (props) => {
    console.log(props);
    return (
      <div>
      <h1>{props.title}</h1>
      <h3>{props.name}</h3>
      {props.children && props.children}
      </div>
    );
  };
  
  
  export default Title;