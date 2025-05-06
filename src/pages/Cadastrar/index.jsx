import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import PageWarapper from "@/components/PageWarapper";


export default function Cadastrar() {
    return (
        <PageWarapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[40px] font-bold  text-[#e41eda]">Adicionar novo filme</h1>
                <p className="text-[20px] text-gray-600">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto min-h-[200px] bg-[#363333] border border-[#e41eda] rounded-2xl flex flex-col p-6 gap-4">
                        <CustomInput
                            label="Título*"
                            placehoder="Digite o nome do filme"
                            type="text"
                        />
                        <CustomInput
                            label="Diretor*"
                            placehoder="Digite o nome do diretor"
                            type="text"
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    placehoder="Digite o ano de lançamento"
                                    type="number"
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
                                    ]} />
                            </div>
                        </div>
                        <div className="w-[30%] items-center flex gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    label="Nota"
                                    placehoder="0"
                                    type="number"
                                />
                            </div>
                            <p className="flex mt-8">10/10</p>
                        </div>
                        <div
                            className="w-full flex flex-col gap-2">
                            <label className="text-[17px] font-bold">Sinopse</label>
                            <textarea className="w-full h-[150px] max-h-[150px] bg-[#141414] rounded-lg p-2  border border-[#ffffff1a] outline-none cursor-pointer focus:border-purple-400"></textarea>
                        </div>
                        <CustomInput
                            label="Bamer"
                            placehoder="URL do imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button type="reset" className="w-[100 px] h-[50px] rounded-b-md bg-[#141414] border border-[#e41] cursor-pointer hover:bg-white/10 ">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </PageWarapper>
    )
}