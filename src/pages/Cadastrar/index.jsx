import Header from "@/components/Header";
import PageWarapper from "@/components/PageWarapper";

export default function Cadastrar() {
    return (
        <PageWarapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[40px] font-bold text-#F587F0FF">Adicionar novo filme</h1>
                <p className="text-[20px] text-gray-600">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
            </div>
            <div className="w-full flex justify-center pt-[40px]">
                <form className="w-[50%] h-auto min-h-[200px] bg-[#363333] border border-[#F587F0FF] rounded-2xl flex flex-col p-3"></form>
            </div>
        </PageWarapper>
    )
}