const params = new URLSearchParams(window.location.search)

let country = params.get('country')

if (country === 'Nigeria') {
    document.querySelector('#country').innerHTML = country
    document.querySelector('#errorMessage').style.visibility = 'visible'
} else {
    document.querySelector('#successMessage').style.visibility = 'visible'
}