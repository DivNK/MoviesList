import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import images from './components/Imgdis';
import Imgdis from './components/Imgdis';
import Imdb from './components/Imdbmovielst';
import Netmov from './components/Netflixmovie';

function App() {
 
//   let mndiv=document.querySelector("full") 
  
//   mndiv.addEventListener('mousehover',fun)
//   let[imgtemp,setImgtemp]=useState("10px")
//   let hover=0
//   function fun()
// {console.log("fun");

// setImgtemp("20px")

// }
// mndiv.addEventListener('mouseout',fun1)
// function fun1()
// {
// console.log("fun1");

// setImgtemp("10px")

// }
  return (<>
  <h3>IMDB All time Top 10 Movies</h3>
    <div className="App">
      
      {Imdb.map(a=><Imgdis mov={a}></Imgdis>)}
      
      </div>
      <h3>Netflix – Most Popular movie (Based on Hours Watched)</h3>
    <div className="App">
      
      {Netmov.map(a=><Imgdis mov={a}></Imgdis>)}
      
      </div>
      
      </>
  );
}

export default App;


// function App() {
//   const [isShown, setIsShown] = useState(false);

//   return (
//     <div className="App">
//       <button
//         onMouseEnter={() => setIsShown(true)}
//         onMouseLeave={() => setIsShown(false)}>
//         Hover over me!
//       </button>
//       {isShown && (
//         <div>
//           I'll appear when you hover over the button.
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;