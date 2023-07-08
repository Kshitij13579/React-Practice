import '../index.css'

function DynamicComponent(props){
    return(
        <li className="concept">
          <img src={props.concept.image} alt="TODO: TITLE" />
          <h2>{props.concept.title}</h2>
          <p>{props.concept.description}</p>
        </li>
    );
}

export default DynamicComponent;