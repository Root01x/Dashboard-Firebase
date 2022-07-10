import { getAuth, signOut } from "firebase/auth";


document.addEventListener("click", (e) => {

        if(e.target.id != "btnSalir") return false
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            window.location.href = "./index.html";// Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
    })
