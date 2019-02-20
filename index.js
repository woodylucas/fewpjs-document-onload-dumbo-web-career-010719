// Your code goes here

function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  updateDOM()
  });
}


function updateDOM (){
  document.querySelector('#text').textContent =  "This is really cool!"
}
