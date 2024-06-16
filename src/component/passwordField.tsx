interface passwordProps{
    handleInputChange:Function,
}
export default function PasswordField(props:passwordProps) {
    return (
        <>
        <input 
        type="password"
        className="block border border-grey-light w-full p-3 rounded"
        name="password"
        placeholder="Password" 
        onChange={(e)=>{props?.handleInputChange("password", e.target.value)}}
        />
        <span className="text-xs text-gray-400  mb-4">Minimumn Allow Character is 8</span>
        </>
    )
}
