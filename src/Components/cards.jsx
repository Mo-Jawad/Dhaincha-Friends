const Cards = ({Data}) => {
    return (
        <div className="flex flex-wrap gap-10 justify-evenly mt-3">
        {
            Data.map(dhaicha =>
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-3 hover:scale-110 transition-transform hover:shadow-2xl hover:shadow-green-700">
    <img className="object-cover w-full h-56 rounded-md" src={dhaicha.image} alt="avatar"/>
    <a href="#" className="block text-gray-800 dark:text-white pt-7 text-2xl font-bold text-center" tabindex="0" role="link">{dhaicha.Name}</a>
    <div className="pb-5 font-bold text-center">
        
        <div className="text-[25px] pb-3 text-gray-700 dark:text-gray-200">Student</div> 
        <div className="text-lg text-gray-700 dark:text-gray-200">SSC: {dhaicha.SSC}</div>
        <div className="text-lg text-gray-700 dark:text-gray-200">HSC: {dhaicha.HSC}</div>
        
    </div>
    <button className="w-full bg-blue-700 text-2xl  text-white hover:bg-green-600 transition-colors font-bold p-1 rounded-md">See More</button>
</div>
            )
        }
        </div>
    )
}

export default Cards;