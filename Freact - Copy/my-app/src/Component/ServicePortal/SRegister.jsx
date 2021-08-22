
import React,{useState, } from 'react'
import { useHistory} from 'react-router-dom'


import ServicePortal from '../ServicePortal/ServiceHome';



const SRegister = () => {
    const history = useHistory();

    const [ user , setUser]= useState({
            sname:"", semail: "", spassword:"", scpassword:""
    })
    let name, value;
    const handleInputs = (e)=>{
        name = e.target.name;
        value= e.target.value
        setUser({ ...user, [name]:value})
    }


    
                
    const postData = async(e)=>{

        e.preventDefault();
        const{ sname, semail, spassword, scpassword}=user
        const res= await fetch("/sregister" , {
            method: "POST",
            headers:{
                "Content-type " : "application/json"
            },
            body: JSON.stringify({
                sname:sname, semail:semail, spassword:spassword, scpassword:scpassword

            })


        }) ;
        const data= await res.json();
        if(res.status ===422 || !data){
           
            console.log("Successfull Registration");
            history.push("/ServiceLogin")

        }


    }

            









    return (
        <div>
            <ServicePortal /> 
            <form method="POST">


                 <h3>Register</h3>

                <div className="form-group">
                    <label htmlFor="Sname">First name</label>
                    <input type="text" name="sname" id="Sname" autoComplete="off"  className="form-control"  value={user.sname}
                    onChange={handleInputs}  placeholder="First name" />
                </div>


                <div className="form-group">
                    <label htmlFor="Slname">Last name</label>
                    <input type="text"  name="slname" id="Slname" autoComplete="off"   value={user.slname}
                    onChange={handleInputs}  className="form-control" placeholder="Last name" /> 
                </div>



                <div className="form-group">
                    <label htmlFor="Semail">Email</label>
                   
                    <input type="email"  name="semail" id="Semail" autoComplete="off"   value={user.semail}
                    onChange={handleInputs} className="form-control" placeholder="Enter email" />
                </div>



                <div className="form-group">
                    <label htmlFor="Spassword">Password </label>
                    <input type="password"  name="spassword" id="Spassword" autoComplete="off"  value={user.spassword}
                    onChange={handleInputs} className="form-control" placeholder="Enter password" />  
                </div>


                <div className="form-group">
                    <label htmlFor="Scpassword">Password </label>
                    <input type="password"  name="scpassword" id="Scpassword" autoComplete="off"  value={user.scpassword}
                    onChange={handleInputs} className="form-control" placeholder="Enter conform password" />  
                </div>

                <button type="submit" onClick={postData}  className="btn btn-dark btn-lg btn-block">Register</button>

                <p className="forgot-password text-right">
                     Already registered <a href="#">log in?</a>
                </p>

            </form>

        </div>
    )
}

export default SRegister
