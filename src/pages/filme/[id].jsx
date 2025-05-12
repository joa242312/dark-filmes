import PageWrapper from "@/components/PageWrapper"
import { LuArrowLeft } from "react-icons/lu"
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import instance from "@/api/instance";
import { useRouter } from "next/router";

export default function Filme() {
    const [filmes, setFilmes] = useState([]);
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        async function getFilmesByid() {
            const response = await instance.get(`/api/movies/${id}`)
            setFilmes(response.data)
        }
        getFilmesByid()
    }, []);

    return (
        <PageWrapper
            showHeader={false}
        >
            <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
                <button
                    onClick={() => router.back()}
                    className="px-5 py-2 text-[#8a898c] gap-2 flex 
                    items-center justify-center rounded-lg hover:bg-[#27282B] hover:text-[#F587F0FF]">
                    <LuArrowLeft />
                    <p>Voltar para lista de filmes</p>
                </button>
                <div className="w-full min-h-[90vh] flex ">
                    <div className="w-[30%] h-full flex flex-col ">
                        <div className="w-full h-[90%]">
                            <img className="w-full h-full rounded-lg object-cover"
                                src="https://cinema10.com.br/upload/filmes/filmes_17225_leo-filme-netflix-2.jpg?default=poster"
                                alt="" />
                        </div>
                        <div className="w-full h-[10%] flex pt-4  justify-between">
                            <button className="w-[46%] h-full border border-[#a85bf0] 
                            rounded-b-md text-[#F587F0FF] hover:bg-[#F587F0FF]/20
                            flex items-center justify-center gap-2 py-2"><FaEdit size={20} /> Editar filme</button>
                            <button className="w-[46%] flex items-center border border-[#EC0808FF] 
                            text-[#EC0808FF] hover:bg-[#EC0808FF]/20 py-2 "> <FaTrashAlt size={20} />Excluir filme</button>
                        </div>
                    </div>
                    <div className="w-[70%] pl-4 h-full flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#F587F0FF] font-bold">Leo</h1>
                            <p className="text-[#95A3A08C] font-semibold text-[17px]">(2023)</p>
                        </div>
                        <div className="w-ful gap-4 flex">
                            <div className="gy-1 px-4 rounded-2xl bg-[#4ade88]/20 text-[[#4ade88]">
                                <p className="text-[17px]">10/10</p>
                            </div>
                            <div className="gy-1 px-4 rounded-2xl  bg-[#F587F0FF]/20 text-[#F587F0FF]">
                                <p className="text-[17px]">Comédia</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Diretor</h4>
                            <p className="text-[#8a898c] font-bold">Robert W.</p>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Sinopse</h4>
                            <p className="text-[#8a898c] font-bold">Várias informações</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}