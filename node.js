  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let name= document.querySelector("#name");
  let num= document.querySelector("#num");
  let submit= document.querySelector("#submitBtn");
  let form= document.querySelector("#form");
  const db= getDatabase(app);
        

  submit.addEventListener('click', (event)=>{

  const nameVal= name.value;
  const numVal= num.value;

  event.preventDefault();
    set(ref(db, 'currentUser/'),{
      User: nameVal,
    }).then(()=>{
      set(ref(db, 'users/' +nameVal ), {
        username: nameVal,
        number: numVal,
        products: ""
      }).then(()=>{
        if (nameVal==="") {
            alert("name is necessary");        
        }
        else{
          form.submit();
        }
      })
    })
    
  })