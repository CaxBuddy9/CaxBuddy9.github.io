const nftData = []; // Remplissez ceci avec les URL ou les données de vos NFT
const itemsPerPage = 20;
let currentPage = 0;

// Fonction pour afficher les NFT
function displayNFTs() {
    const container = document.getElementById('nft-container');
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = nftData.slice(start, end);

    itemsToDisplay.forEach(nft => {
        const nftItem = document.createElement('div');
        nftItem.className = 'nft-item';
        nftItem.innerHTML = `
            <img src="${nft.imageUrl}" alt="${nft.description}" onclick="openModal('${nft.imageUrl}', '${nft.description}')">
            <p>${nft.description}</p>
        `;
        container.appendChild(nftItem);
    });

    currentPage++;
}

// Fonction pour ouvrir la modal
function openModal(imgSrc, description) {
    const modal = document.getElementById('nftModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = description;
}

// Fonction pour fermer la modal
function closeModal() {
    const modal = document.getElementById('nftModal');
    modal.style.display = "none";
}

// Charger les NFT au chargement de la page
window.onload = function() {
    displayNFTs();
}

// Chargement plus de NFT lorsque le bouton est cliqué
document.getElementById('load-more').onclick = function() {
    displayNFTs();
}

// Fermer la modal lorsque l'utilisateur clique en dehors de l'image
window.onclick = function(event) {
    const modal = document.getElementById('nftModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const nftData = []; // Remplissez ceci avec les URL ou les données de vos NFT
const itemsPerPage = 20;
let currentPage = 0;

// Fonction pour afficher les NFT
function displayNFTs() {
    const container = document.getElementById('nft-container');
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = nftData.slice(start, end);

    itemsToDisplay.forEach(nft => {
        const nftItem = document.createElement('div');
        nftItem.className = 'nft-item';
        nftItem.innerHTML = `
            <img src="${nft.imageUrl}" alt="${nft.description}" onclick="openModal('${nft.imageUrl}', '${nft.description}')">
            <p>${nft.description}</p>
        `;
        container.appendChild(nftItem);
    });

    currentPage++;
}

// Fonction pour ouvrir la modal
function openModal(imgSrc, description) {
    const modal = document.getElementById('nftModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = description;
}

// Fonction pour fermer la modal
function closeModal() {
    const modal = document.getElementById('nftModal');
    modal.style.display = "none";
}

// Charger les NFT au chargement de la page
window.onload = function() {
    displayNFTs();
}

// Charger plus de NFT lorsque le bouton est cliqué
document.getElementById('load-more').onclick = function() {
    displayNFTs();
}

// Fermer la modal lorsque l'utilisateur clique en dehors de l'image
window.onclick = function(event) {
    const modal = document.getElementById('nftModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
