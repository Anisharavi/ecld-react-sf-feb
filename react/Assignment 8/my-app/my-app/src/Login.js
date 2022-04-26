import React from 'react';
import Todo from './component/Todo';
import './Login.css';
import Form from './component/Form';
 


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            error:'',
            isLogged: false,
            isRegister: false
        }

    }
     handleChange = (e) => {
        const  { name, value } = e.target;
         this.setState({
            [name] : value
         })
        }
    
     handleLogin  = () => {
       let olddata = localStorage.getItem('formdata');
       let oldArr = JSON.parse(olddata)
       console.log(oldArr,"arr");
       oldArr.map(arr => {
     
               if(arr.email === this.state.email && (arr.password === this.state.password)) {
                this.setState({
                      isLogged : true
                  })

               } else {
                this.setState({
                    error: "Please SignUp before logging in"
                })
               }
       })
        
    }
     handleRegister = () => {
        this.setState({
            isRegister : true
        })
       
    }
    
    render(){
      if(this.state.isRegister){
         return <Form/>
            
         }
        return (
           <div>
            {
                this.state.isLogged ? (
            <div>
                <Todo/>
            </div>
            ) : (

            <div className='main'>
            <div className='sub-main'>
            <div>
                <h3 className='h3'>{this.state.error}</h3>
                <div className='img'>
                    <div className='container-image'>
                        
                    </div>
                </div>
                <div>
               <h2>Login Form</h2>
               <div>
                
                   <input name='email' type="email" onChange={this.handleChange} className='name' />
               </div>
                <div>
                    
                    <input name='password' type="password" onChange={this.handleChange} className='name'/>
                </div>
                <div className='btn'>
                    <button onClick={this.handleLogin} className='button'>Login</button> 
                </div><br/>
                    <div >
               <p className='p'>Dont't have an account ?<button  className='buttons' onClick={this.handleRegister}>Sign Up </button></p>
               </div>
            </div>
                </div>
                </div>
            </div>
             )
            }
            </div>
            )
       
    }
}
export default Login;