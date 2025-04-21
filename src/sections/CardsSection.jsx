import { abilities } from "../constants"

const CardsSection = () => {
  return (
    <section className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map((item) => (
                <div key={item.title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                    <div className="size-14 rounded-full flex justify-center items-center">
                        <img src={item.imgPath} alt={item.title} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-4xl font-bold mt-2">{item.title}</h3>
                        <p className="text-white-50 text-2xl">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CardsSection