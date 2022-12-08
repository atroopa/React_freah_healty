

function App() {
  return (
    <div className="flex flex-col-reverse justify-center items-center min-h-screen w-screen bg-gradient-to-r from-[#F0F4FD] via-purple-200 to-[#A1A3BA]" >



      <div className="mt-5">
        <h1 className="font-black text-4xl text-center">
          Fresh Healty
          Delicious Salads
        </h1>

        <p>
        we made fresh and healty foods
        </p>

        <span>
          Explore
        </span>
      </div>



      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} 
           alt="food" 
           className="w-screen" />


    </div>
  );
}

export default App;
