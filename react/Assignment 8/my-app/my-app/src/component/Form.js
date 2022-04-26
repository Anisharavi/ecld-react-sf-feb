import React, { Component } from 'react'
import './Form.css'
import Login from '../Login'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Age: "", 
            address:"",
            department:"",
            martialstatus:"",
            email:"",
            password:"",
            cpassword:"",
            isRedirect:false

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    agehandler = (event) => {
        this.setState({
            Age: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    departmenthandler = (event) => {
        this.setState({
            department: event.target.value
        })
    }
    martialstatushandler = (event) => {
        this.setState({
            Martialstatus: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    cpasswordhandler = (event) => {
        this.setState({
            cpassword: event.target.value
        })
    }

    
    handleSubmit = (event) => {
        alert(`${this.state.Name}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            Name: "",
        
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }

    handleSignup = (e)=> {
        e.preventDefault();

        let ob = {

        Name : this.state.Name,

        age : this.state.Age,

        address : this.state.address,

        department : this.state.department,

        email : this.state.email,

        password : this.state.password,

        confirmPassword : this.state.cpassword

        }

     

       let olddata = localStorage.getItem('formdata');

       console.log(olddata,"olddata");

       if(olddata == null){

           olddata = []

           olddata.push(ob)

           localStorage.setItem('formdata',JSON.stringify(olddata));

         

       }
       else{
           let oldArr = JSON.parse(olddata)
            oldArr.push(ob)
            localStorage.setItem('formdata', JSON.stringify(oldArr))
       }

      alert("Submitted Successfully")
    }

    handleRedirect=()=>{
        this.setState({
            isRedirect: true
        })
    }

    render() {
        if(this.state.isRedirect){
            return  <Login/>
            
        }
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Signup</h1>
                    <label>Name</label> <input type="text" value={this.state.Name}  onChange={this.firsthandler} placeholder="Name..." /><br />
                    
                    <label>Age</label> <input type="number" value={this.state.Age} onChange={this.agehandler} placeholder="Age..." /><br />
                    <label>Address:</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..." /><br />
                    <label>Department</label><select onChange={this.departmenthandler} defaultValue="Selecting dept">
                        <option defaultValue>Selecting dept</option>
                        <option value="male">Marketing</option>
                        <option value="female">HR</option>
                        <option value="male">Finance</option>
                        <option value="female">IT</option>
                        </select><br />
                        
                        <label>Martial status:</label><select onChange={this.martialstatushandler} defaultValue="Selecting Martial status">
                        <option defaultValue>Selecting Martial status</option>
                        <option value="male">Single</option>
                        <option value="female">Married</option>
                    </select><br/>

                    <label>Email:</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Confirm Password :</label> <input type="password" value={this.state.cpassword} onChange={this.cpasswordhandler} placeholder="Password..." /><br />
                   <button onClick={this.handleSignup}>
                       signup
                       </button>
                </form>
                <button onClick={this.handleRedirect}>
                    login
                    </button>

            </div>
            
        )
    }
}

export default Form
