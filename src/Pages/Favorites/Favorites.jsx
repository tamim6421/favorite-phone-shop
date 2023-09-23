import { useState } from "react";
import PhoneCard from "../../component/Phones/PhoneCard";


const Favorites = () => {
    const [favorite, setFavorite] = useState([])
    const [nodata, setNodata] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useState(()=>{
        const favoritesItems = JSON.parse(localStorage.getItem('items'))
        if(favoritesItems){
            setFavorite(favoritesItems)
            const total = favoritesItems.reduce((p, c) => p + c.price ,0)
            setTotalPrice(total)
        }
        else{
            setNodata('No data Available')
        }
       

    } ,[])
    // console.log(favorite)

    const handleRemove =() =>{
        localStorage.clear()
        setFavorite([])
        setNodata('No data Available')
    }


    return (
        <div>
            {nodata ?<p className="h-[70vh] flex justify-center items-center">{nodata}</p> :
             <div>

                {favorite.length > 0 && <div>
                    <button
                onClick={handleRemove}
                className="bg-green-200 px-3 rounded-lg p-2 mx-auto my-5 shadow-lg block">Delete All</button>
                <h2 className="text-2xl font-semibold">Total Price : {totalPrice}</h2>
                </div> }
                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    {
                       isShow ?  favorite.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>) :  favorite.slice(0, 3).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    }
                </div>
                {
                    favorite.length > 3 && <button
                    onClick={()=>setIsShow(!isShow)}
                    className="bg-green-200 px-3 rounded-lg p-2 mx-auto my-5 shadow-lg block">{isShow?'See Less' : 'See More'}</button>
                }

            </div> }
        </div>
    );
};

export default Favorites;