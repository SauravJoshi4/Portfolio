var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function validate(){
    var a=document.getElementById('n1').value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    var d=document.getElementById("n4").value;

    

    if(a==""){
        alert("Please Enter your Name before submitting");
        return false;
    }
    else if(b==""){
        alert("Please Enter your Mail Id!!");
        return false;
    }
    else if(d==""){
        alert("Please Enter a Message before submitting!!");
    }
    else{
        true;
    }
    
}