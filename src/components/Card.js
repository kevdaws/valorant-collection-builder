function Card(props) {
    return (
      <div className="card">
          <h2 className="card_name">{props.name}</h2>
          <img src={props.image} className="card_img"/>
      
      <h1>Hello World</h1>
      </div>
    );
  }
  
  export default Card;