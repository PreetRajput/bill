import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db= getDatabase();
  let data, a,b,c, ab;
  let goat= [];
  let sum=0;
  let totalBox= document.querySelector("#totalBox")
  let products;
  let name= document.getElementById("name");
  let table= document.querySelector(".table")
  let num= document.getElementById("num");
  let print= document.querySelector(".print");
  let st;
  const abp= ref(db, 'currentUser/')
  const abc= ref(db, 'users/')
  let infoTab= ref(db, "info/")

    print.addEventListener('click', ()=>{
    window.print();
  })
  
  

  onValue(abp, (snapshot)=>{
    data= snapshot.val();
  })
    onValue(abc, (snapshot)=>{
        let userData= snapshot.val();
        a = data.User;
        name.innerText= `Name:  ${userData[a].username}`
        num.innerText= `Number: ${userData[a].number}`
        products= userData[a].products;
         b= Object.keys(products);
         c= Object.values(products);
         console.log("asdsad");
         for (let index = 0; index < b.length; index++) 
          {
                                    let newRow= document.createElement("tr");
                                    let name= document.createElement("td");
                                    let price= document.createElement("td");
                                    let quant= document.createElement("td");
                                    let amt= document.createElement("td");
                                    name.innerText= b[index];
                                    quant.innerText= c[index];
        
        onValue(infoTab, (snapshot)=>
          {
                const info = snapshot.val();
                let k= Object.keys(info);
                let p= Object.values(info);
        
        
        
        
                            for (let i = 0; i < k.length; i++)
                            {
        
                                            if (k[i]===b[index]) 
                                              {
                                            price.innerText= p[i].price;
                                            st= p[i].stock-1;
                                            amt.innerText= p[i].price * c[index];
                                            let v= p[i].price * c[index];
                                            sum+= v;
                                            totalBox.innerText= sum;
                                            console.log()
                                          }
                              
                            }
                          
                          update(ref(db, 'users/' + a),{
                            total: sum,
                          })
                  
              })
              
                
              newRow.appendChild(name)
              newRow.appendChild(price)
              newRow.appendChild(quant)
              newRow.appendChild(amt);
              table.appendChild(newRow);
              
            }
        })
    
      
const p2= new Promise((resolve, reject)=>{

  
  
})
      
        

    


            
        


           


        
      

          