import bmi from "./../assets/bmi.png"

export default function CardMenu({ imgShow, titleShow, description }) {
  return (
    <div>
        <div className ='border-1 rounded-2xl border-gray-200 shadow-2xl p-10 flex flex-col items-center'>
            <img src={imgShow} alt={titleShow} className="w-35" />
        </div>
        <p className="font-kanit text-xl font-bold mt-4">
            {titleShow}
        </p>
        <p className="font-charm text-xl text-gray-500 mt-4 text-center">
            {description}
        </p>
        <p>

        </p>
    </div>
  )
}
