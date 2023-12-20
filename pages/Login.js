import './login.css'
import Image from 'next/image'



export default function Login() {
    return(
        <main className='main'>
            {/* main container  */}    

            {/* login form  */}
            <div class= "login-box">
                <h1 className='header'> BlackJack *</h1>

                
                <form>
                    <div class= "login-group">
                        <label> Username </label>
                        <input type="text" id="username" name="username" required/>
                    </div>

                    <div class="login-group">
                    <label> password </label>
                        <input type="text" id="password" name="password" required/>
                    </div>

                    <div class="login-group">
                        <button type="submit"> login</button>
                     </div>
                </form>
                
            </div>
        </main>
    )
}