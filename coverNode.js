import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getDatabase, update, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBB84qmvf_c_TXWKLt_V2J3nLkKxi39JS8",
  authDomain: "matrix-91f0d.firebaseapp.com",
  databaseURL: "https://matrix-91f0d-default-rtdb.firebaseio.com",
  projectId: "matrix-91f0d",
  storageBucket: "matrix-91f0d.appspot.com",
  messagingSenderId: "415451118095",
  appId: "1:415451118095:web:1728b9cadda38627b1817a",
  measurementId: "G-R4C758V2CD"
};




function change(event) {
   
  trash= event.currentTarget.childNodes[1].innerHTML;

  if (event.currentTarget.classList.contains("producing")) {
        
     
        event.currentTarget.classList.remove("producing")
        event.currentTarget.classList.add("products")
        
        delete(productNum[trash]);

        checkNum-=1;

        }
      
    else{
        event.currentTarget.classList.remove("products")
        event.currentTarget.classList.add("producing")
        let q= event.currentTarget.childNodes[7].childNodes[9].value;
        productNum[trash]= q;
        checkNum+=1;
    }


}



var productNum= {};

var  trash;

var checkNum=0;







document.addEventListener('DOMContentLoaded',()=>{

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const form= document.querySelector(".form");
    const analytics = getAnalytics(app);
    
    const db= getDatabase();
    const next= document.querySelector(".nextBtn");

    next.addEventListener('click',(event)=>{
        event.preventDefault();
        const userInfo = ref(db, 'currentUser/');

        onValue(userInfo, (snapshot)=>{
          const data= snapshot.val();
 
          update(ref(db,  'users/' + data.User),{
            products: productNum,
          }).then(()=>{
              if(checkNum>=1)
              {
            form.submit();
              }
              else{
                alert("choose atleast one product")
              }
          })
        })

        
        
    })

    const productInfoRef = ref(db, 'info/');


    onValue(productInfoRef, (snapshot) => {
      const data = snapshot.val();
      let x= Object.entries(data);

      for (let index = 1; index <= x.length; index++) {
        
        let p= document.getElementById(`${index}`)
        p.innerHTML= ` Price: ${x[index-1][1].price} <br> Stock: ${x[index-1][1].stock} <br> Expiry: ${x[index-1][1].expiry}<br> Product ${index} <br> <select name="select" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>`
        
      }


    });
    




    const blocks= document.querySelectorAll(".products");

    blocks.forEach(function(block){
      
      block.addEventListener('click', change)
    } );

   
 
})



 