import CardFilmes from "@/components/CardFilmes";
import PageWarapper from "@/components/PageWarapper";

export default function Home() {
  return(
  <PageWarapper>
    <div className="w-full flex flex-col items-center justify-center pt-7 pb-4">
    <h1 className="text-[30px] text-[#F587F0FF] font-bold">Sua Coleção de FiLme</h1>
    <p className="text-[#8a8987] text-[20px]">Acompanhe seus filmes favoritos. 
      Adicione novos filmes à sua coleção 
      e organize seu banco de dados pessoal de filmes.</p>
    </div>
    <div className="w-full h-auto flex flex-wrap justify-center gap-2">
      <CardFilmes></CardFilmes>
      <CardFilmes></CardFilmes>
    </div>

  </PageWarapper>
  )
}