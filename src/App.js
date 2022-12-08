

function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-[#F0F4FD] via-purple-200 to-[#A1A3BA]" >
      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} 
           alt="food" 
           className="w-screen" />

    </div>
  );
}

export default App;
