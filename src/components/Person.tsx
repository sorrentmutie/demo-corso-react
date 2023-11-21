import { PersonProps } from "./personPros";

export const Person: React.FC<PersonProps> = (props) => {

    const wrapperClass: string =   props.gender === 'M' ? "App-male" : "App-female";

    return (
        <div className={wrapperClass}>
            You are {props.gender === 'M' ? "male": "female"}
        </div>
    )
}