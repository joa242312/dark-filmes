import { LuFilm } from "react-icons/lu";
export default function Header({showButton =true}) {
    return (
        <header className="w-full h-[50px] flex bg-[#181616] justify-between items-center pl-2 cursor-pointer">
            <div onClick={() => window.location.href ="/"} className="flex h-full gap-2 items-center justify-center pl-2">
                <LuFilm color="#F587F0FF" size={25} />
                <h2 className="font-bold text-[20px]">Dark Films</h2>
            </div>
            {showButton &&(
            <button onClick={() => window.location.href ="/cadastrar"}
            className="w-[150px] h-[60%] rounded-md 
            bg-[#F587F0FF] font-black hover:bg-[#F587F0FF]/70 cursor-pointer">Adicionar FiLme</button>
            )}
        </header>
    )
} 