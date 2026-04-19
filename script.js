
const signbtn = document.getElementById("signup");
// signbtn.disabled=true;
// signbtn.classList.remove("butt01"); // Remove mystyle class from DIV
// signbtn.classList.add("disabled");

// Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
// // Get the modal
// var modal = document.getElementById('id02');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


var pass1 = document.getElementById("psw");
var pass2 = document.getElementById("psw-repeat");

signbtn.onclick = function () { pass_check() };

function pass_check() {
    if (pass1.value!=pass2.value){
        alert("Please enter same password in Confirm Password");

    }
}


