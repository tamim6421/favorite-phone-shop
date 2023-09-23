import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SinglePhone from "./SinglePhone";
import useGetPhones from "../../Hook/useGetPhones";

// const getHook = useGetPhones()
// console.log(getHook)
const Phone = () => {
  const [phone, setPhone] = useState({});
  const phones = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  
  return (
    <div>
        <SinglePhone phone={phone}></SinglePhone>
    </div>
  );
};

export default Phone;
