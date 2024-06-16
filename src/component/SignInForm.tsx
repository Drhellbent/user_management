import { useEffect, useState } from "react"
import { loginUser } from "../services/auth_service"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { validateEmail } from "../utils/validation";
import EmailField from "./emailField";
import PasswordField from "./passwordField";

export default function SignInForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [S_formData, setFormData] = useState({"email":"","password":""});
  const [S_errorMsg, setErrorMsg] = useState("");
  const [S_disabled, setDisabled] = useState(true)
  const handleSubmit=async ()=>{
    try{
      const response = await loginUser(S_formData)
      if(response.token){
        dispatch(login(response.token))
        navigate("/dashboard")
      }else{
        setErrorMsg("Invalid Password or Email")
      }
    }catch(err){
      return ``
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
  useEffect(()=>{
        
    
    const emailValidation = validateEmail(S_formData?.email)
    const passwordValidation = S_formData?.password && S_formData?.password.length >=8  ? true : false
    if(emailValidation && passwordValidation){
      setDisabled(false)
    }else if(S_disabled == false){
      setDisabled(true)
    }

},[S_formData])
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
          <EmailField handleInputChange={handleInputChange}/>
          <PasswordField handleInputChange={handleInputChange}/>
              {S_errorMsg &&  <span className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{S_errorMsg}</span>}
              <div>
                <button
                disabled={S_disabled}
                  onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:border-none"
                >
                  Sign in
                </button>
              </div>
            
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  