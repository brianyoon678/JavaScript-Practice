const button = document.querySelector('.gaming_button_unpressed');

function gaming_button_pressed(){
    if(button.classList.contains('gaming_button_unpressed')){
        button.classList.toggle('gaming_button_pressed');
    } else {
        button.classList.toggle('gaming_button_unpressed');
    }
}