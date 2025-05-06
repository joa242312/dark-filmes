import Header from "../Header"

export default function PageWarapper({ children , showButton }) {
    return (
        <div className="w-full h-full flex flex-col">
            <Header showButton={showButton} />
            <div className="w-full h-screen bg-gradient-to-t from-[#020204] to-[#141a25]">
                {children}
            </div>
        </div>
    )
}