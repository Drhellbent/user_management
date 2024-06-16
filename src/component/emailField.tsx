interface emailProps{
    handleInputChange:Function,
}
export default function EmailField(props:emailProps){
  
    return (
        <input 
        type="email"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email" 
        onChange={(e)=>{props?.handleInputChange("email", e.target.value)}}
        
        />
    )
}