import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function StudentDetails() {
  const { studentId } = useParams();
  console.log(studentId)
  const [dhainchas, setDhainchas] = useState({});

  useEffect( () => {
     const fetchDatafunc = async () => {
      try {
        const responded = await fetch('../../public/Datafet.json');
        console.log(responded)
        if (!responded.ok) {
          throw new Error('Failed to fetch data');
        }

        
        const dataInt = await responded.json();
        console.log(dataInt);
        
        const found = dataInt.Dhaicha.find(stu => stu.Name.toLowerCase() === studentId.toLowerCase());

        setDhainchas(found)
      
        
        
        
        
        
         // Update state with the fetched data
        
        
        
        
      } catch (error) {
        throw new Error("Error:", error); // Handle errors
      }
  };
      
      
  fetchDatafunc()

}, [studentId]);

  if (!dhainchas) {
    return <div>Loading...</div>;
  }
  console.log(dhainchas.behavior);
  console.log(dhainchas.image);
  return (
    <div className=' h-[35rem] w-full p-4 pt-8 bg-gray-700 items-center'>
      <div className='flex justify-between px-8'>
      <h2 className='font-bold text-white text-2xl tracking-widest'>{dhainchas.Name}'s Details</h2>
      <Link className='p-3 px-5 hover:text-white transition-colors duration-200 bg-amber-400 rounded-md hover:bg-gray-700 hover:border-orange-400 border-2 font-bold border-gray-700' to="/">Back To Home</Link>
      </div>

    <div className='w-full h-full pb-5'>
      <div className='flex items-center justify-around h-full'>
      <figure className='flex h-auto'>
      <img className=" w-90 h-90 rounded-md items-center hover:scale-110 transition duration-150" src={`../../${dhainchas.image}`} alt={dhainchas.name}  />
      </figure>

      <div className='w-2xl h-fit flex-col rounded-md shadow-md hover:shadow-green-600 text-center items-center justify-center p-5 py-8 text-2xl  font-bold text-orange-400 border-2 border-amber-400 bg-gray-800 transition duration-200'>
      <div className='flex-col pl-4 space-y-3 justify-start text-start h-full'>
      <h2>Name : {dhainchas.Name}</h2>
      <h4>Home Town : {dhainchas.hometown}</h4>
      <p>SSC : {dhainchas.SSC}</p>
      <p>HSC : {dhainchas.HSC}</p>

      { dhainchas.id !== 8 && (
      <div className='flex-col items-start space-y-2 text-blue-300'>
          <div className='w-full '>Behavior:</div>

          <ul>
            {dhainchas.behavior?.map((behave, index) => <div><li key={index}>  {`    ${index + 1}.  
              ${behave}`}</li></div>)}
          </ul>
      </div> )
      }
      </div>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default StudentDetails;