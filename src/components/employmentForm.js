import React, {Component} from 'react' ;
import './employmentForm.css';
import Login from './Login';





class emplyomentForm extends Component {
    render() {
        return (
              <>
                   <section  className="container">                                                    
                    <table >
                    <tbody className="">                                                    
                              <tr>
                                  <td colspan="2" align="center"><h6><font color="#660000"><b>Employee Login Here</b></font></h6></td> </tr>
                                  <tr><td><font color="#27004F"><strong>UserName<font color="red"><span>*</span></font></strong></font></td>
                                  <td><input id="uname" name="uname" minlength="4" type="text" autocomplete="off" autofocus="" tabindex="1" required="" /></td>
                             </tr> 
                             <tr>
                                  <td><font color="#27004F"><strong>Password<font color="red"><span>*</span></font></strong></font></td>
                                  <td><input id="pwd" name="pwd" minlength="2" type="password" required="" autocomplete="off" autofocus="" tabindex="2" /></td>
                             </tr>                   
                             <tr>
                                  <td><label for="email">Captcha<font color="#eaf3d7">*</font>&nbsp;&nbsp;</label></td>
                                  <td><input type="text" autocomplete="off" id="captcha" name="captcha" tabindex="3" required="" onblur="validateFreeSpace(this.value, this, 'Please Enter The Letters Shown In Picture')" onkeypress="return  (event);" /> </td>
                             </tr>
                             <tr>
                                <td align="center"></td>                              
                             </tr> 
                                <Login />
                            </tbody>                                                     
                    </table>                                          
                   </section>
             </>                           
            );
        }
    }
    
    export default emplyomentForm;