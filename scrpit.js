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
