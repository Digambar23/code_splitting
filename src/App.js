import {lazy, React} from "react"
// import {Home} from "./Home"
import './App.css';
import {useState} from "react"
const HomePage= lazy(()=>import("./Home"));

function App() {

  const [comp,setComp]=useState("Before Load");
  // useEffect(function(){
  //   setTimeout(function(){
      // const loadHomeComp=async function(){
      //   const resp = await import("./Home");
      //   setComp(resp.Home)
      // };
  //     loadHomeComp();
  //   },2000);

  // },[]);
  // const onBtnClick=async function(){
  //   const resp=await import("./Home");
  //   setComp(resp.Home)

  // }
  const onBtnClick = function(){
    setComp(
      <React.Suspense>
        <HomePage/>
      </React.Suspense>
    );
  };
  return (
    <div className="App"><button onClick={onBtnClick}>Go to Home</button>
    <div>{comp}</div>
    </div>
  );
}

export default App;
