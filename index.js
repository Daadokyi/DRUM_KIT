var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrums;  i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
            case "w":
                var audio = new Audio('Sounds/crash.mp3');
        audio.play();
                break;
        
            default:
                break;
        }
        
    });
}




