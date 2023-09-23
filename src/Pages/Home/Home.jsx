import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Header/Banner/Banner";
import Phones from "../../component/Phones/Phones";


const Home = () => {
    const phones = useLoaderData()
    // console.log(phones)
    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;