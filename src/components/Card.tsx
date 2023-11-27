import { CardProps } from "../shared/cardProps";

export const Card: React.FC<CardProps> = (props) => 
{
    return (
        <div className="card CardWidth">
          <img src={props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.link} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    )
}