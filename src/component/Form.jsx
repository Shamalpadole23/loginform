import { useState } from "react";
import '../styles/form.css';


function Form(){
    const initialValues = {username: "", email: "", password: ""};
    const [formValues, setFormValues]= useState(initialValues);

    const handleChange = (e) =>{
        console.log(e.target);
        const {name, value} = e.target
    }
    return(
        
        <div className="container">
<form>
    <h1>Login Form</h1>
    <div className="ui-divider"></div>
    <div className="ui-form">
        <div className="field">
            <label htmlFor="uname">Username</label>
            <input type="text" name='username' placeholder='Username'  value={formvalues.username} onChange={handleChange} />
        </div>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Email' value={formvalues.email} onChange={handleChange}/>
        </div>
        <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Password' value={formvalues.password} onChange={handleChange}/>
        </div>
        <button className='fluid-ui-button-blue' type='submit'>Submit</button>
    </div>
</form>
        </div>
    );
}

export default Form;