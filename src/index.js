
import ReactDOM from "react-dom/client";
import "./style.css"
import One from "./assets/images/Dog-Picture6.jpg"
import Two from "./assets/images/364377-puppies-puppy-baby-dog-dogs-41.jpg"
import Three from "./assets/images/animal-blur-canine-551628.jpg"
import Four from "./assets/images/wp9015508.webp"


const root = ReactDOM.createRoot(document.getElementById("root"));



function Dogs(props){
  return(
   
      <div class="dogNames">
      
            <img src= {props.dogPic} alt="dog1" ></img>
            <div>{props.dogName}</div>
        
    </div>
 
  )
}

var dogList = [

       {
        dogPic: One,
        dogName: "Dogs are cute"
       },


       {
        dogPic: Two,
        dogName: "Dogs are cute"
       },

       {
        dogPic:Three,
        dogName: "Dogs are cute"
       },

       {
        dogPic:Four,
        dogName: "Dogs are cute"
       },
       {
        dogPic: Three,
        dogName: "Dogs are cute"
       },


       {
        dogPic: Four,
        dogName: "Dogs are cute"
       },

       {
        dogPic: One,
        dogName: "Dogs are cute"
       },

       {
        dogPic:Two,
        dogName: "Dogs are cute"
       }
       
       

      ]

root.render(
  <div class="container">
    {
      dogList.map(function(item,index){

        return <Dogs key={index} dogPic={item.dogPic} dogName={item.dogName}></Dogs>



      })
    }
  </div>
  
);


