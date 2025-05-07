import instance from "@/api/instance";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import PageWarapper from "@/components/PageWarapper";
import { useState } from "react";
import { toast } from "react-toastify";


export default function Cadastrar() {
    const [titulo, setTilulo] = useState("");
    const [diretor, setDiretor] = useState("");
    const [ano, setAno] = useState(0);
    const [genero, setGenero] = useState("");
    const [nota, setNota] = useState(0);
    const [sinopse, setSinopse] = useState("");
    const [bamer, setBamer] = useState("");
    async function handleSumit(event) {
        event.preventDefault();
        try {
            await instance.post("/api/movies", {
                titulo: titulo,
                diretor: diretor,
                ano: ano,
                nota:nota,
                genero:genero,
                sinopse:sinopse,
                bamer:bamer
            })
            toast.success("filme Cadastar com sucesso!")
            setTilulo("")
            setDiretor("")
            setAno(0)
            setGenero("")
            setNota(0)
            setSinopse("")
            setBamer("")


        } catch (error) {
         console.error(error) 
        }

    }

    return (
        <PageWarapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[40px] font-bold  text-[#e41eda]">Adicionar novo filme</h1>
                <p className="text-[20px] text-gray-600">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form onSubmit={handleSumit}
                        className="w-[50%] h-auto min-h-[200px] bg-[#363333] border border-[#e41eda] rounded-2xl flex flex-col p-6 gap-4">
                        <CustomInput
                            label="Título*"
                            placehoder="Digite o nome do filme"
                            type="text"
                            value={titulo}
                            onChange={(event) => setTilulo(event.target.value)}
                        />
                        <CustomInput
                            label="Diretor*"
                            placehoder="Digite o nome do diretor"
                            type="text"
                            onChange={(event) => setDiretor(event.target.value)}
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    placehoder="Digite o ano de lançamento"
                                    type="number"
                                    onChange={(event) => setAno(event.target.value)}
                                />

                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                    label="Gênero*"
                                    options={[
                                        "Ação",
                                        "Comédia",
                                        "Drama",
                                        "Terror",
                                        "Ficção cientifica",
                                        "Romance"
                                    ]}
                                    onChange={(event) => setGenero(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] items-center flex gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    label="Nota"
                                    placehoder="0"
                                    type="number"
                                    onChange={(event) => setNota(event.target.value)}
                                />

                            </div>
                            <p className="flex mt-8">10/10</p>
                        </div>
                        <div
                            className="w-full flex flex-col gap-2">
                            <label className="text-[17px] font-bold">Sinopse</label>
                            <textarea
                                onChange={(event) => setSinopse(event.target.value)}
                                className="w-full h-[150px] max-h-[150px] bg-[#141414] 
                            rounded-lg p-2  border border-[#ffffff1a] outline-none cursor-pointer 
                            focus:border-purple-400"></textarea>
                        </div>
                        <CustomInput
                            label="Bamer"
                            onChange={(event) => setBamer(event.target.value)}
                            placehoder="URL do imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100 px] h-[50px] rounded-b-md bg-[#141414] 
                            borderborder-[#423b39] cursor-pointer hover:bg-white/10 
                            text-yellow-300 ">Cancelar</button>
                            <button type="submit" className="w-[130px] h-[50px] rounded-md 
                             bg-[#e41eda] cursor-pointer font-bold hover:bg-[#e41eda]/30
                              text-yellow-300 ">Salva filme</button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWarapper>
    )
}