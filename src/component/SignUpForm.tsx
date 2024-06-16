import { useEffect, useState } from "react"
import { createUser } from "../services/auth_service";
import { validateEmail } from "../utils/validation";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
import EmailField from "./emailField";
import PasswordField from "./passwordField";
import { useNavigate } from "react-router-dom";

export default function SignUpForm(){
    
    const [S_disabled, setDisabled] = useState(true);
    const [S_formData, setFormData] = useState({"name":"","email":"","password":""});
    const [S_confrmPass, setConfrmPass] = useState('');
    const dispatch = useDispatch()
    const [S_errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        
        const nameValidation = S_formData?.name.length >= 2 ? true : false
        const emailValidation = validateEmail(S_formData?.email)
        const passwordValidation = S_formData?.password && S_formData?.password.length >=8 && S_formData?.password == S_confrmPass ? true : false
        if(nameValidation && emailValidation && passwordValidation){
            setDisabled(false)
        }else if(S_disabled == false){
            setDisabled(true)
        }

    },[S_formData, S_confrmPass])
    const handleSubmit=async()=>{
        try{
            const response = await createUser(S_formData);
            if(response.token){
                dispatch(login(response.token))
                navigate("/")
            }else{
                setErrorMsg("Unable To Login")
            }
        }catch(err){    
            console.log("err",err);
            return ''
        }
    }
    const handleInputChange=(key:string, value:string)=>{
        try{
            const formData = {...S_formData, [key]:value}
            setFormData(formData);

        }catch(err){
            console.log("err", err);
            return {}
        }
    }

    return <> 
    
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" 
                        onChange={(e)=>{handleInputChange("name", e.target.value)}}
                        />

                    <EmailField handleInputChange={handleInputChange}/>
                    <PasswordField handleInputChange={handleInputChange}/>
                  
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={(e)=>{setConfrmPass(e.target.value)}}/>
                        
                    {S_errorMsg &&  <span className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{S_errorMsg}</span>}
                    <button
                        onClick={handleSubmit}
                        disabled = {S_disabled}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:border-none"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                
                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/signin">
                         Log in
                    </a>.
                </div>
            </div>
        </div>
    </>
}
