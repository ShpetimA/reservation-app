import React,{useEffect, useState} from 'react'
import CompanyItems from './CompanyItems';

const Companys = () => {
  const [companys,setCompanys] = useState([]);

  useEffect(()=>{
    const fetchCompanys = async ()=> {
      const resposne = await fetch(' http://localhost:3000/companys');

      const responseData = await resposne.json();

      let loadedData = responseData.map((item)=>{
        return {
          id:item.id,
          name: item.name,
          type: item.type,
          time_slots: item.time_slots
        }
      });

      setCompanys(loadedData);
    }
    fetchCompanys();
  },[])
  return (
    <CompanyItems companys={companys}></CompanyItems>
  )
}

export default Companys