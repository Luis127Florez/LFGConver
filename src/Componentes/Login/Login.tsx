import useIngreso from '../hooks/useIngreso';
import './Login.css';

function Login(params:any) {

    function leerdatos(params:any) {
        useIngreso(params.target.user.value, params.target.pass.value)
        params.preventDefault()
    }

    return(
        <div className='login'>
        <form onSubmit={leerdatos} className='FormLogin'>
            <h3>Login</h3>
            <input  placeholder='User' name='user' type="text"/>
            <input  placeholder='Password' name='pass' type='text'/>
            <input className='button' type='submit'/>
    
            <a href=""><p>Forgot your Password ?</p></a> 
        </form>
    </div>
    ) 
}



export default Login;