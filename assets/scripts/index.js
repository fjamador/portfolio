document.getElementById("defaultOpen").click();

function openTab(evt, btnName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(btnName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openRedirect(url) {
    window.location.href = url;
}


// When the user scrolls the page, execute onscrollEvent functions
window.onscroll = function() {onscrollEvent(); // When the user scrolls down show the scroll bar on top of page
                             scrollToTopFunction(); // When the user scrolls down 20px from the top of the document, show the button
                             }

function onscrollEvent() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollToTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    sbttbutton.style.display = "block";
  } else {
    sbttbutton.style.display = "none";
  }
}
                              
                              
//Scroll Back To Top Button
sbttbutton = document.getElementById("sbttBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// Modal box for contact info

// Get the modal
var modal = document.getElementById("CntcModal");

// Get the button that opens the modal
var btn = document.getElementById("CntcMdlBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
*/
























