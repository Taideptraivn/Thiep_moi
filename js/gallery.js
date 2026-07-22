document
.querySelectorAll('.memory-card img')
.forEach(img=>{

    img.addEventListener('click',()=>{

        window.open(
            img.src,
            '_blank'
        );

    });

});
function toggleInvite(){

    const content =
        document.getElementById("inviteContent");

    if(content.style.display === "block"){
        content.style.display = "none";
    }else{
        content.style.display = "block";
    }

}
function openLetter(){

    document
        .getElementById("letterModal")
        .style.display = "flex";
}

function closeLetter(){

    document
        .getElementById("letterModal")
        .style.display = "none";
}