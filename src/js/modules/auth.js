import "./firebase"
// import { getDatabase, ref, push, set } from "firebase/database";
// import Component from "./componentes";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const $ = (id) =>document.querySelector(id)
document.addEventListener("click", (e) => {

        if(e.target.id != "btnLogin") return false;

        e.preventDefault();
        const auth = getAuth();
        const email = $('#emailLogin').value;
        const password = $('#passwordLogin').value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "./dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}  ${errorMessage}`);
            alert('ACCESO DENEGADO!') 
        });

})
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    
    const uid = user.uid;
    console.log(uid);
   // window.location.href = "./index.html";
    
    // ...
  } else {
    console.log("No user is signed in");
    // User is signed out
    // ...
  }
});



// const app = new Component({
//     el: "#app",
//     data: {
//         listas:[]
//     },
//     template: (props) => {
//         if(props.listas.length === 0){
//             return `
//                 <div class="alert alert-info" role="alert">
//                     No hay listas creadas
//                 </div>
//             `
//         }
//         let list = props.listas.map(item => `<p>${item}</p>`).join("");
//         return list
//     } 
// })

// document.addEventListener("DOMContentLoaded",app.render)

// app.setState({
//     listas: [`<h1 class="display-4 fw-bold mb-3 text-black" >REACTIVIDAD JS</h1>`,
//         `<button id="btnContinuar" href="" class="align-middle btn btn-danger btn-lg mt-n1" >Continuar</button>`,
//       ]
// })


// document.querySelector('#btnCont').addEventListener('click', e=>{
//     e.preventDefault();     
//     const lastState = app.getState()
//     lastState.listas.push('<button class="align-middle btn btn-dark btn-lg mt-n1" >TURN ON</button>`')
//     app.setState({listas: lastState.listas})


// })


// const db = getDatabase();
// const postListRef = ref(db, 'tareas');
// const newPostRef = push(postListRef);

// set(newPostRef, {
//     title: "Tarea 1",
//     description: "Descripcion de la tarea 1",
//     status: "Pendiente"
    
// });


// function writeUserData(userId, name, email) {
//     const db = getDatabase();
//     set(ref(db, 'tareas/' + userId), {
//       username: name,
//       email: email,
     
//     });
//   }

// export default writeUserData
