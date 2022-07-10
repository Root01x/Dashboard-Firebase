import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const $ = (id) =>document.querySelector(id)
document.addEventListener("click", (e) => {
    if(e.target.id != "btnRegister") return false;
    e.preventDefault();
    const auth = getAuth();
    let email = $('#emailRegister').value;
    let password = $('#passwordRegister').value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode}  ${errorMessage}`);
    // ..
  });
});

// export default auth ;  
