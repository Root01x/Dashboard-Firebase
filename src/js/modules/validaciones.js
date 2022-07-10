import {getAuth, onAuthStateChanged } from "firebase/auth";


onAuthStateChanged(getAuth(), (user) => {

    if (user!=null) {

        if(window.location.pathname==="/index.html" || window.location.pathname==="/"){
            document.getElementById("btnIndexLogin").textContent = "Dashboard";
            document.getElementById("btnIndexLogin").href = "./dashboard.html";
        }
        
        if (window.location.pathname === "/login.html") {
            window.location.href = "./index.html";
        }
    }          
    
      
     else {
         if (window.location.pathname === "/dashboard.html") {
                window.location.href = "./index.html";
        }
    }
  });