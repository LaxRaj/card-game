import './login.css'
import Image from 'next/image'



export default function Login() {
    return(
        <main className='main'>
            {/* main container  */}    

            {/* login form  */}
            <div class= "login-box">
                <form class= "total-form">
                    <h1 className='header'> BlackJack *</h1>
                    
                        <table class="table-input">
                            <tr>
                                <td>
                                    Username
                                </td>
                                <td>
                                    <input type="text" id="username" name="username" required/>
                                </td>

                            </tr>


                            <tr>
                                <td>
                                    Password
                                </td>
                                <td>
                                    <input type="text" id="password" name="password" required/>
                                </td>

                            </tr>

                        </table>
    
                   

                    

                    <div class="login-button">
                        <button type="submit"> Login</button>
                     </div>
                </form>
                
            </div>
        </main>
    )
}