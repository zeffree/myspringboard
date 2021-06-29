const toggleSwitch = document.querySelector('input[type="checkbox"]');


if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark'
    toggleSwitch.checked = true;
}


toggleSwitch.addEventListener('click', function(e){
    const {checked} = toggleSwitch;
    if(checked){
        localStorage.setItem('darkModeEnabled', true);
    }
    else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = toggleSwitch.checked ? 'dark':''
    
})


const preferences = {
    fontSize : '18px',
    color: 'purple'
}

localStorage.setItem('preferences', JSON.stringify(preferences))

const {color} = JSON.parse(localStorage.preferences);
document.body.style.backgroundColor = color;