var input = document.querySelector('#color-input');
var navbar = document.querySelector('.nav-bar');
var footer = document.querySelector('#footer')
var button = document.querySelector('.dropbtn')

input.addEventListener('change', function(){
  footer.style.setProperty('--nav-color', input.value);
  navbar.style.setProperty('--nav-color', input.value);
  button.style.setProperty('--nav-color', input.value);
})


function dropMenu() {
  document.getElementById("coursework").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}