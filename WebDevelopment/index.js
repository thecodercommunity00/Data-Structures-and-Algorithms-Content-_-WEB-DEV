document.getElementById("inputText").addEventListener("keydown", function () {
    let data = document.getElementById("inputText").value;
    document.getElementsByClassName("limit")[0].innerHTML = " &nbsp;&nbsp;(" + (700 - data.length) + " characters)";
    if (data.length > 700) {
        document.getElementsByClassName("limit")[0].classList.add("limit-reached");
        document.getElementById("publish").disabled = true;
    }
    else {
        document.getElementById("publish").disabled = false;
        document.getElementsByClassName("limit")[0].classList.remove("limit-reached");
    }
})