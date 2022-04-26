import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            Age: "", 
            address:"",
            departmen:"",
            martialstatus:"",
            email:"",
            password:"",
            cpassword:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
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
            Address: event.target.value
        })
    }
    departmenthandler = (event) => {
        this.setState({
            Department: event.target.value
        })
    }
    martialstatushandler = (event) => {
        this.setState({
            Martialstatus: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            Email: event.target.value
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
        alert(`${this.state.firstName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
        
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Signup</h1>
                    <label>Name</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Name..." /><br />
                    
                    <label>Age</label> <input type="number" value={this.state.age} onChange={this.agehandler} placeholder="Age..." /><br />
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
                    <label>Conformed Password :</label> <input type="password" value={this.state.password} onChange={this.cpasswordhandler} placeholder="Password..." /><br />
                    
                    <input type="submit" value="Sign up" />
                </form>

            </div>
            
        )
    }
}

export default Form
