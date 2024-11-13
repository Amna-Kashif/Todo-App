  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMk0dHun3FZa-OnTqoerGy45k8cSm6Bew",
    authDomain: "todo-app-937e5.firebaseapp.com",
    projectId: "todo-app-937e5",
    storageBucket: "todo-app-937e5.firebasestorage.app",
    messagingSenderId: "399266083011",
    appId: "1:399266083011:web:6debd912c9363dc7d3f276"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

var list = document.getElementById('list')



// Register function
function register(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => Swal.fire("Success", "Registration successful", "success"))
      .catch((error) => Swal.fire("Error", error.message, "error"));
  }
  
  // Login function
  function login(email, password) {
    console.log("email", email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Swal.fire("Success", "Login successful", "success");
        document.getElementById("authSection").style.display = "none";
        document.getElementById("todoSection").style.display = "block";
        loadTodos(); // Load todos after login
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  }
  
  // Show login form
  function showLoginForm() {
    Swal.fire({
      title: "Login",
      html:
        '<input id="loginEmail" class="swal2-input" placeholder="Email">' +
        '<input id="loginPassword" type="password" class="swal2-input" placeholder="Password">',
      focusConfirm: false,
      preConfirm: () => {
        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        login(email, password);
      },
    });
  }
  
  // Show register form
  function showRegisterForm() {
    Swal.fire({
      title: "Register",
      html:
        '<input id="registerEmail" class="swal2-input" placeholder="Email">' +
        '<input id="registerPassword" type="password" class="swal2-input" placeholder="Password">',
      focusConfirm: false,
      preConfirm: () => {
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;
        register(email, password);
      },
    });
  }
  




function addTodo(){
    var input = document.getElementById('todoInput');
 
    var liElement = document.createElement('li');

    var liText = document.createTextNode(input.value)

    liElement.appendChild(liText)

    list.appendChild(liElement)

    // DELETE BUTTON


    var delBtnElement = document.createElement('button');

    var delBtnText = document.createTextNode('Delete');

    delBtnElement.setAttribute('onclick','deleteSingleTodo(this)')

    // // Get the unique ID from the Firebase data

//    var firebaseId = data.key;
//    delBtnElement.setAttribute("id", firebaseId);

    delBtnElement.setAttribute('class','delete-btn')


    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);


    // EDIT BUTTON

    var editBtnELEMENT = document.createElement('button');   //

    var editBtnText = document.createTextNode('Edit');    //

    editBtnELEMENT.setAttribute('onclick','editTodo(this)')    //

    // editbtn.setAttribute("id", firebaseId);   //

    editBtnELEMENT.setAttribute('class','edit-btn')       //

    editBtnELEMENT.appendChild(editBtnText);    //

    liElement.appendChild(editBtnELEMENT)         //


    // console.log(liElement); 
    
    input.value = ""
    
}

function deleteAllTodos(){
    list.innerHTML = ""
}

function deleteSingleTodo(e){
    e.parentNode.remove()
    
}

function editTodo(e){
    var updateVal = prompt("Enter updated value");

   e.parentNode.firstChild.nodeValue = updateVal
    
}