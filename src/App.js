import { useState, useEffect } from "react";


function App() {

  const [isAnimated, setIsAnimated] = useState(false); 

  useEffect(() => {
    setIsAnimated(true);
  }, []);


  return (
    <div className="lg:justify-around lg:flex-row flex flex-col-reverse justify-center items-center min-h-screen w-screen bg-gradient-to-r from-[#F0F4FD] via-purple-200 to-[#A1A3BA]" >

      <div className="mt-5 text-center lg:text-left">
        <h1 className="font-black text-5xl lg:text-6xl">
          Fresh Healty <br/>
          <span className="font-mono font-light">Delicious Salads</span>
        </h1>

        <p className="text-base text-gray-700">
          we made fresh and healty foods
        </p>

        <span className="inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg shadow-purple-300 uppercase text-lg tracking-wide mt-5">
          Explore
        </span>
      </div>



      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} 
           alt="food"
           className={`${isAnimated ? 'scale-150': 'translate-x-full translate-y-full'
                        } w-screen lg:max-w-lg transform transition duration-1000 ease-in-out`} />


    </div>
  );
}

export default App;
