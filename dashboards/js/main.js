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