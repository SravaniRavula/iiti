import React, {Component} from 'react' ;
import './studentsForm.css';




class Home extends Component {
    render() {
        return (
              <>
              
                <h3 className="form">
                Application Form for Admission into the Industrial Training Institute for the session 2020 for Phase-4 
                </h3>
                
                <section  className="container">
                <table className="studentform ">
                  <tbody>
                    <tr bgcolor="#4ab131">
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                      <td>SSC HallTicket Number</td>
                      <td><input type="text" name="ssc_regno" maxlength="10" value="" onkeypress="return NumericsOnly(event);" id="ssc_regno" /></td>
                   </tr>
                   <tr>
                    <td>Date of Birth</td>
                    <td> <input type="text" name="dob" value="" id="dob" class="tcal tcalInput tcalActive" /></td>  
                  </tr>
                  
                  <tr className="p-3 click">
                        <td align="right"><a href='/home'> <input id="mysubmit"  value="Back to Home" tabindex="4" type="submit" /></a></td>
                        <td align="left">  <input id="captchaRef" value="Submit" type="button" tabindex="5" /></td>
                   </tr> 
                  
                 
                  <tr bgcolor="#4ab131">
                    <td colspan="2">&nbsp;</td>
                  </tr>
                  
                  </tbody>
                </table>
              <div>&nbsp;</div>
              <div>
              &nbsp;
              </div>
              <div>&nbsp;</div>
               {/* <table>

                <tbody><tr bgcolor="#4ab131">
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                <td>SSC HallTicket Number</td>
                <td><input type="text" name="ssc_regno" maxlength="10" value="" onkeypress="return NumericsOnly(event);" id="ssc_regno" /></td>
            </tr> 
            <tr>
                <td>Date of Birth</td>
                <td> <input type="text" name="dob" value="" id="dob" class="tcal tcalInput tcalActive" />
                </td>      
        </tr>          
        <tr colspan="4">
        <td style="text-align: center">
              <a href="login.jsp"> <input type="button" name="back" id="submit" style="width:100px;" value="Back to Home" /></a>
            <input type="submit" value="Submit" /></td>
        
        </tr>
        <tr bgcolor="#4ab131">
                    <td colspan="2">&nbsp;</td>
                </tr>
    </tbody>
                </table>
                   */}
                    </section> 
					
             </>                         
            
        );
    }
}

export default Home;