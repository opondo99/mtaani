const installable = document.querySelector('input[name="installable"]')
const version = document.getElementById('version')
const notinstallable = document.querySelector('input[name="notinstallable"]')
const faiba = document.querySelector('input[name="faiba"]')
const wifi = document.querySelector('input[name="wifi"]')



const toggle1 = () => {
    if (installable.checked === true) {

        notinstallable.checked = false

    } else {
        fadeFunc(version)
        notinstallable.checked = true

    }
}

const toggle2 = () => {
    if (notinstallable.checked != true) {
        installable.checked = true
        
    } else {
        installable.checked = false
    }
}


function viewDetails(evt, description) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(description).style.display = "block";
    evt.currentTarget.className += " active";
}