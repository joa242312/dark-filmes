export default function CustomInput({label,placehoder,type}){
    return(
        <div className="flex flex-col w-full gap-2">
            <label className="text-[17px] font-bold text-yellow-300">{label}</label>
            <input className="w-full h-[50%] bg-[#141414] rounded-lg pl-2  border border-[#ffffff1a] outline-none cursor-pointer focus:border-purple-400" 
            type={type}
            placeholder={placehoder}
            />

        </div> 
    )
}