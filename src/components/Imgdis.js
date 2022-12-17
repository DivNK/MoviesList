// import img1 from "./images/img1.jpg"
// import img2 from "./images/invitation.jpg"
import { useState } from "react"
function Imgdis({mov})
{
  // let mndiv=document.querySelector(".full")
  
  // mndiv.addEventListener('mouseenter',fun)
  let[imgtemp,setImgtemp]=useState("imghome")
  const [hover, setHover] = useState(false); // initial false

  const title = "The Shawshank Redemption";
  const year = "Year:1994";
  const duration = "Duration:2:22";

  function fun(e)
{console.log("fun");
e.preventDefault();
setHover(true); // turn true
console.log("hovered");
setImgtemp("imghome1")

}
// mndiv.addEventListener('mouseleave',fun1)
function fun1(e)
{
  e.preventDefault(); // turn false
  setHover(false);
  console.log("hovered over");
  setImgtemp("imghome")

}
  

    return(

      <div className='containerlocal'  onMouseEnter={fun} onMouseLeave={fun1} >
     <div className="full"> <img src={mov.img} className={imgtemp} />
     {hover && <p className="fullwd">{mov.title}<br></br>{mov.year}<br></br>{mov.duration}<br></br>{mov.rate}<br></br><br></br>{mov.plot}</p>} 
    
     </div>{mov.title}
     </div>
    );
}

export default Imgdis;