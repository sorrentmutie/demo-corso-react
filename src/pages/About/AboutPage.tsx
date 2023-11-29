import { useState } from "react";
import cn from "classnames";
import { ReqResFormData } from "./models/reqresFormData";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function AboutPage(){
    //const [job, setJob]= useState("");
   const [formData, setFormData] = useState<ReqResFormData>({job: "", name: ""});
   const navigate = useNavigate();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { 
       // setJob(e.target.value);
       setFormData({
        ...formData,
        [e.target.name]: e.target.value
       })
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault();        
        axios.post("https://reqres.in/api/users", formData)
        .then( response => {
            console.log(response);
            navigate("/", {state: {message: "User created successfully"}});
            
        })
    }    

    const isJobValid = formData.job && formData.job.length > 3;
    const isNameValid = formData.name && formData.name.length > 3;
    const isFormValid = isJobValid && isNameValid;

    return(
        <div className="container">
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input 
                            placeholder="Insert a job" 
                            id="job" className=
                            { cn("form-control",
                                {"is-valid": isJobValid},
                                {"is-invalid": !isJobValid}
                            )}
                            
                            type="text" name="job"
                            onChange= {onChangeHandler}
                            value={formData.job} />
                    <span className="invalid-feedback">Job is not valid</span>
            </div>

            <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                            placeholder="Insert a name" 
                            id="name" className=
                            { cn("form-control",
                                {"is-valid": isNameValid},
                                {"is-invalid": !isNameValid}
                            )}
                            type="text" name="name"
                            onChange= {onChangeHandler}
                            value={formData.name} />
                    <span className="invalid-feedback">Name is not valid</span>
                </div>


               <br/>
               <button disabled={!isFormValid} type="submit" 
                    className="btn btn-info">SEND</button>

           </form>

        </div>
    );
}