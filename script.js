function openModal(imgSrc, description) {
    var modal = document.getElementById('nftModal');
    var modalImg = document.getElementById('modalImg');
    var captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = description;
}

function closeModal() {
    var modal = document.getElementById('nftModal');
    modal.style.display = "none";
}

// Fermer la modal lorsque l'utilisateur clique en dehors de l'image
window.onclick = function(event) {
    var modal = document.getElementById('nftModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
