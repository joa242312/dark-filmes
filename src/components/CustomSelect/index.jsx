export default function CustomSelect({ label, options }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-text-[17px] font-bold text-yellow-300">{label}</label>
            <select className="w-full h-[45px] bg-[#141414] rounded-lg pl-2  
             border border-[#ffffff1a] outline-none cursor-pointer focus:border-purple-400">
            <option vale="">Selecione...</option>
            {options.map((opcao)=>{
                return(<option kay={opcao} vale={opcao}>{opcao}</option>) 
            })}
            </select>

        </div>
    )
}