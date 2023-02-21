// import {lazy, React} from "react"
// import {BrowserRouter as Router,Routes,Route, Outlet, useLocation} from "react-router-dom"
//  //  import {Home} from "./Home"
// import './App.css';
// import "./ContactUs"
// import Contact from "./ContactUs";

// // import {useState} from "react"



// const Home= lazy(()=>import("./Home"));

// function App() {

//   // const [comp,setComp]=useState("Before Load");
//   // useEffect(function(){cd 
//   //   setTimeout(function(){
//       // const loadHomeComp=async function(){
//       //   const resp = await import("./Home");
//       //   setComp(resp.Home)
//       // };
//   //     loadHomeComp();
//   //   },2000);

//   // },[]);
//   // const onBtnClick=async function(){
//   //   const resp=await import("./Home");
//   //   setComp(resp.Home)

//   // }
//   // const onBtnClick = function(){
//   //   setComp(
//   //     <React.Suspense>
//   //       <Home/>
//   //     </React.Suspense>
//   //   );
//   // };
//   return (
//     <div className="App">
//       <Router> 
//             <Routes>
            
//               <Route path=":env" element={<WrapperComponent/>}/>
//                     {/* <Route path="'Home" element={<Home/>}/>
//                     <Route path="/ContactUs" element={<Contact/>}/> */}                  
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// const WrapperComponent=function(){
//   const loc= useLocation();
//   debugger;
//   switch(loc.pathname){
//     case "/":{  
//       return <SuspenseWrap component={<div>This is a landing page</div>}/>
//     }
//     case "Home":{  
//       return <SuspenseWrap component={<Home/>}/>
//     }
//     case "ContactUs":{  
//       return <SuspenseWrap component={<Contact/>}/>
//     }
//   }
// }
// const SuspenseWrap=function(props){
// return <React.Suspense>
//   {props.component }
// </React.Suspense>
// }
// export default App;




import React from "react";
import "./App.css";
import {  BrowserRouter as Router,Route,Routes,useLocation,} from "react-router-dom";

// always make sure you export the component as default for using in React.Lazy
const HomePage = React.lazy(() => import("./home"));
const ContactPage = React.lazy(() => import("./contactus"));

function App() {
    // const [comp, setComp] = React.useState("Before Load");

    // This example is used for dynamic import
    // const onBtnClick = async function () {
    //     const resp = await import("./home");

    //     setComp(resp.NewComponent);
    // };

    // This example is used for React Lazy
    // const onBtnClick = function () {
    //     setComp(
    //         <React.Suspense>
    //             <HomePage />
    //         </React.Suspense>
    //     );
    // };

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/:env" element={<WrapperComponent />} />
                </Routes>
            </Router>
        </div>
    );
}

const WrapperComponent = function () 
    let   loc = useLocation();
    switch (loc.pathname) {
        case "/": {
            return <SuspenceWrap component={<div>This is Default Page</div>} />;}
        
        case "/Home": {
            return <SuspenceWrap component={<HomePage />} />;
        }
        case "/contact": {
            return <SuspenceWrap component={<ContactPage />} />;
        
    
};

const SuspenceWrap = function (props) {
    return <React.Suspense>{props.component}</React.Suspense>;
};

export default App;