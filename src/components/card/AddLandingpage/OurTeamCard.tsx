


export default function OurTeamCard({item}:any){
    return(
        <section className="w-full flex flex-col items-start justify-center gap-4">
            <div className="w-full h-96 relative rounded-lg">
                <img src={item.img.src} alt="" className="w-full h-full" />
                <span className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-0 rounded-lg hover:bg-opacity-50 hover:border-4 border-[#e2689a] transition-all duration-500 ease-in-out group">
                    <span className="w-full flex flex-col items-start justify-start gap-4 group-hover:translate-y-20 opacity-0 group-hover:opacity-100 px-4 transition-all duration-500 ease-in-out">
                        <h1 className="text-2xl font-bold tracking-wider">{item.title}</h1>
                        <h1 className="text-xl text-gray-600 font-bold tracking-wider">{item.description}</h1>
                    </span>
                </span>
            </div>
            <div>
                <h1 className="text-3xl font-bold uppercase">{item.name}</h1>
                <h1 className="text-xl text-gray-600 font-bold uppercase">{item.position}</h1>
            </div>
        </section>
    )
}