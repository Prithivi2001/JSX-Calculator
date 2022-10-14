import { Link } from "react-router-dom"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";




const Welcome = (props) => {

    const [username,setUsername] = useLocalStorage("username",'');
    const navigate = useNavigate();
    function formCheck(event){
        event.preventDefault();
        navigate('/calculator');

    }
    return (
    <div className = "class_wrapper">
        <div align = "center" className = "welcomeSection">
            <h1>Welcome!</h1>
            <br/>
            <form className = "userdetails" onSubmit = {formCheck}>
                <div className = "userdiv">
                    <label >Please type your name to proceed:</label>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Insert name here." id="name" value={username} onChange={(event) => setUsername(event.target.value)} required ></input>
                    <br/>
                    <br/>
                </div>
                    <button type="submit" value = "Submit" className = "usernamesubmit">Submit</button>
                <br/>
                <br/>
                <Link to="/calculator"></Link>
            </form>
        </div>
    </div>
  )
}
export default Welcome
