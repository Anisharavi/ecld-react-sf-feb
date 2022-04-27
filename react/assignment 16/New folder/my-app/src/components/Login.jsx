



import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from "../components/Auth";


 export const Login = () => {
     
     
    const [ user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.state?.path || '/Students'

    const handleLogin = () =>{
       auth.login(user);
       navigate(redirect, { replace: true});
    }
    return(
        
        <div className="contact-container">
        <div className="contact-header">
          <h2>USER LOGIN</h2>
         
        </div>
  
        <div class="grid-contact">
          <div class="contact-item1">
           
          </div>
          <div class="contact-item2">
            <div>
              <div class="input-icons">
                <i class="fa fa-user icon"></i>
                <input class="input-field" type="text" placeholder="Userid*" onChange={(e) => setUser(e.target.value)} /><br/>
                
                <input class="input-field" type="password" placeholder="Password*" onChange={(e) => setUser(e.target.value)} /><br/>
                
                <button onClick={handleLogin}>LOGIN</button> 
               
              </div>
            </div>
          </div>
          
       
              
              <div>
                
              </div>
            </div>
          
        
      </div>
            

        );

};
