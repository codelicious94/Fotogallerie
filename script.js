let australiaPictures = [
  "./assets/img/australia/australia1.jpg",
  "./assets/img/australia/australia2.jpg",
  "./assets/img/australia/australia3.jpg",
  "./assets/img/australia/australia4.jpg",
  "./assets/img/australia/australia5.jpg",
  "./assets/img/australia/australia6.jpg",
  "./assets/img/australia/australia7.jpg",
  "./assets/img/australia/australia8.jpg",
  "./assets/img/australia/australia9.jpg",
  "./assets/img/australia/australia10.jpg",
  "./assets/img/australia/australia11.jpg",
  "./assets/img/australia/australia12.jpg",
  "./assets/img/australia/australia13.jpg",
  "./assets/img/australia/australia14.jpg",
  "./assets/img/australia/australia15.jpg",
  "./assets/img/australia/australia16.jpg",
  "./assets/img/australia/australia17.jpg",
  "./assets/img/australia/australia18.jpg",
  "./assets/img/australia/australia19.jpg",
  "./assets/img/australia/australia20.jpg",
  "./assets/img/australia/australia21.jpg"
];
let newZealandPictures = [
    "./assets/img/newzealand/newzealand1.jpg",
    "./assets/img/newzealand/newzealand2.jpg",
    "./assets/img/newzealand/newzealand3.jpg",
    "./assets/img/newzealand/newzealand4.jpg",
    "./assets/img/newzealand/newzealand5.jpg",
    "./assets/img/newzealand/newzealand6.jpg",
    "./assets/img/newzealand/newzealand7.jpg",
    "./assets/img/newzealand/newzealand8.jpg",
    "./assets/img/newzealand/newzealand9.jpg",
    "./assets/img/newzealand/newzealand10.jpg",
    "./assets/img/newzealand/newzealand11.jpg",
    "./assets/img/newzealand/newzealand12.jpg",
    "./assets/img/newzealand/newzealand13.jpg",
    "./assets/img/newzealand/newzealand14.jpg",
    "./assets/img/newzealand/newzealand15.jpg",
    "./assets/img/newzealand/newzealand16.jpg",
    "./assets/img/newzealand/newzealand17.jpg",
    "./assets/img/newzealand/newzealand18.jpg",
    "./assets/img/newzealand/newzealand19.jpg",
    "./assets/img/newzealand/newzealand20.jpg",
    "./assets/img/newzealand/newzealand21.jpg",
    "./assets/img/newzealand/newzealand22.jpg",
    "./assets/img/newzealand/newzealand23.jpg",
    "./assets/img/newzealand/newzealand24.jpg",
    "./assets/img/newzealand/newzealand25.jpg",
    "./assets/img/newzealand/newzealand26.jpg",
    "./assets/img/newzealand/newzealand27.jpg",
    "./assets/img/newzealand/newzealand28.jpg"
];
let southAfricaPictures = [
    "./assets/img/southafrica/southafrica1.jpg",
    "./assets/img/southafrica/southafrica2.jpg",
    "./assets/img/southafrica/southafrica3.jpg",
    "./assets/img/southafrica/southafrica4.jpg",
    "./assets/img/southafrica/southafrica5.jpg",
    "./assets/img/southafrica/southafrica6.jpg",
    "./assets/img/southafrica/southafrica7.jpg",
    "./assets/img/southafrica/southafrica8.jpg",
    "./assets/img/southafrica/southafrica9.jpg",
    "./assets/img/southafrica/southafrica10.jpg",
    "./assets/img/southafrica/southafrica11.jpg",
    "./assets/img/southafrica/southafrica12.jpg",
    "./assets/img/southafrica/southafrica13.jpg",
    "./assets/img/southafrica/southafrica14.jpg",
    "./assets/img/southafrica/southafrica15.jpg",
    "./assets/img/southafrica/southafrica16.jpg",
    "./assets/img/southafrica/southafrica17.jpg",
    "./assets/img/southafrica/southafrica18.jpg",
    "./assets/img/southafrica/southafrica19.jpg",
    "./assets/img/southafrica/southafrica20.jpg",
    "./assets/img/southafrica/southafrica21.jpg"
];
let namibiaPictures = [
    "./assets/img/namibia/namibia1.jpg",
    "./assets/img/namibia/namibia2.jpg",  
    "./assets/img/namibia/namibia3.jpg",
    "./assets/img/namibia/namibia4.jpg",
    "./assets/img/namibia/namibia5.jpg",
    "./assets/img/namibia/namibia6.jpg",
    "./assets/img/namibia/namibia7.jpg",
    "./assets/img/namibia/namibia8.jpg",
    "./assets/img/namibia/namibia9.jpg",
    "./assets/img/namibia/namibia10.jpg",
    "./assets/img/namibia/namibia11.jpg",
    "./assets/img/namibia/namibia12.jpg",
    "./assets/img/namibia/namibia13.jpg",
    "./assets/img/namibia/namibia14.jpg",
    "./assets/img/namibia/namibia15.jpg",
    "./assets/img/namibia/namibia16.jpg",
    "./assets/img/namibia/namibia17.jpg",
    "./assets/img/namibia/namibia18.jpg",
    "./assets/img/namibia/namibia19.jpg",
    "./assets/img/namibia/namibia20.jpg",
    "./assets/img/namibia/namibia21.jpg"
];
let dubaiPictures = [
    "./assets/img/dubai/dubai1.jpg",
    "./assets/img/dubai/dubai2.jpg",
    "./assets/img/dubai/dubai3.jpg",
    "./assets/img/dubai/dubai4.jpg",
    "./assets/img/dubai/dubai5.jpg",
    "./assets/img/dubai/dubai6.jpg",
    "./assets/img/dubai/dubai7.jpg",
    "./assets/img/dubai/dubai8.jpg",
    "./assets/img/dubai/dubai9.jpg",
    "./assets/img/dubai/dubai10.jpg",
    "./assets/img/dubai/dubai11.jpg",
    "./assets/img/dubai/dubai12.jpg",
    "./assets/img/dubai/dubai13.jpg",
    "./assets/img/dubai/dubai14.jpg",
    "./assets/img/dubai/dubai15.jpg",
    "./assets/img/dubai/dubai16.jpg",
    "./assets/img/dubai/dubai17.jpg",
    "./assets/img/dubai/dubai18.jpg",
    "./assets/img/dubai/dubai19.jpg",
    "./assets/img/dubai/dubai20.jpg",
    "./assets/img/dubai/dubai21.jpg",
]

function init() {
    renderAustraliaPictures();
    renderNewZealandPictures();
    renderSouthAfricaPictures();
    renderNamibiaPictures();
    renderDubaiPictures();
}

// Australia Images // 

function renderAustraliaPictures() {
    let australiaImages = document.getElementById('australiaGallery');
    australiaImages.innerHTML = "";

    for (let i = 0; i < australiaPictures.length; i++) {
        australiaImages.innerHTML += /*HTML*/ ` 
        <div>
            <img onclick="openAustraliaImage(${i})" class="Image" src="${australiaPictures[i]}" alt="Australien Foto ${i+1}">
        </div>`
    }
}

function openAustraliaImage(i) {
    let popUpImage = document.getElementById('popUpImage');
    popUpImage.classList.remove('d-none');
    document.body.classList.add('no-scroll');  
    popUpImage.innerHTML = /*HTML*/`
    <div class="popUpBackground" onclick="closeImage()">
        <div class="popUpContainer" onclick="event.stopPropagation()">
                <img class="popUpImage" id="img" src="${australiaPictures[i]}" alt="Australien Foto ${i+1}">
            <div class="iconSection">
                <div id="prev" onclick="prevAustraliaImage(${i})" class="icons"><img src="./assets/icons/pfeil_links.png"></div>
                <div id="close-icon" onclick="closeImage()" class="icons"><img src="./assets/icons/löschen.png"></div>
                <div id="next" onclick="nextAustraliaImage(${i})" class="icons"><img src="./assets/icons/pfeil_rechts.png"></div>
            </div>
        </div>
    </div>
    `;
}

function prevAustraliaImage(i) {
    i--;
    if (i === -1) {
        i = australiaPictures.length - 1;
    }

    openAustraliaImage(i);
}
    
function nextAustraliaImage(i) {
    i++;
    if (i === australiaPictures.length) {
        i = 0;
    }
    openAustraliaImage(i);
}

// New Zealand Images // 

function renderNewZealandPictures() {
    let newzealandImages = document.getElementById('newzealandGallery');
    newzealandImages.innerHTML = "";

    for (let i = 0; i < newZealandPictures.length; i++) {
        newzealandImages.innerHTML += /*HTML*/ ` 
        <div>
            <img onclick="openNewZealandImage(${i})" class="Image" src="${newZealandPictures[i]}" alt="Neuseeland Foto ${i+1}">
        </div>`
    }
}

function openNewZealandImage(i) {
    let popUpImage = document.getElementById('popUpImage');
    popUpImage.classList.remove('d-none');
    document.body.classList.add('no-scroll');  
    popUpImage.innerHTML = /*HTML*/`
    <div class="popUpBackground" onclick="closeImage()">
        <div class="popUpContainer" onclick="event.stopPropagation()">
                <img class="popUpImage" id="img" src="${newZealandPictures[i]}" alt="Neuseeland Foto ${i+1}">
            <div class="iconSection">
                <div id="prev" onclick="prevNewZealandImage(${i})" class="icons"><img src="./assets/icons/pfeil_links.png"></div>
                <div id="close-icon" onclick="closeImage()" class="icons"><img src="./assets/icons/löschen.png"></div>
                <div id="next" onclick="nextNewZealandImage(${i})" class="icons"><img src="./assets/icons/pfeil_rechts.png"></div>
            </div>
        </div>
    </div>
    `;
}

function prevNewZealandImage(i) {
    i--;
    if (i === -1) {
        i = newZealandPictures.length - 1;
    }
    openNewZealandImage(i);
}
    
function nextNewZealandImage(i) {
    i++;
    if (i === newZealandPictures.length) {
        i = 0;
    }
    openNewZealandImage(i);
}

// South Africa Images // 

function renderSouthAfricaPictures() {
    let southAfricaImages = document.getElementById('southafricaGallery');
    southAfricaImages.innerHTML = "";

    for (let i = 0; i < southAfricaPictures.length; i++) {
        southAfricaImages.innerHTML += /*HTML*/ ` 
        <div>
            <img onclick="openSouthAfricaImage(${i})" class="Image" src="${southAfricaPictures[i]}" alt="Südafrika Foto ${i+1}">
        </div>`
    }
}

function openSouthAfricaImage(i) {
    let popUpImage = document.getElementById('popUpImage');
    popUpImage.classList.remove('d-none');
    document.body.classList.add('no-scroll');  
    popUpImage.innerHTML = /*HTML*/`
    <div class="popUpBackground" onclick="closeImage()">
        <div class="popUpContainer" onclick="event.stopPropagation()">
                <img class="popUpImage" id="img" src="${southAfricaPictures[i]}" alt="Südafrika Foto ${i+1}">
            <div class="iconSection">
                <div id="prev" onclick="prevSouthAfricaImage(${i})" class="icons"><img src="./assets/icons/pfeil_links.png"></div>
                <div id="close-icon" onclick="closeImage()" class="icons"><img src="./assets/icons/löschen.png"></div>
                <div id="next" onclick="nextSouthAfricaImage(${i})" class="icons"><img src="./assets/icons/pfeil_rechts.png"></div>
            </div>
        </div>
    </div>
    `;
}

function prevSouthAfricaImage(i) {
    i--;
    if (i === -1) {
        i = southAfricaPictures.length - 1;
    }
    openSouthAfricaImage(i);
}
    
function nextSouthAfricaImage(i) {
    i++;
    if (i === southAfricaPictures.length) {
        i = 0;
    }
    openSouthAfricaImage(i);
}

// Namibia Images // 

function renderNamibiaPictures() {
    let namibiaImages = document.getElementById('namibiaGallery');
    namibiaImages.innerHTML = "";

    for (let i = 0; i < namibiaPictures.length; i++) {
        namibiaImages.innerHTML += /*HTML*/ ` 
        <div>
            <img onclick="openNamibiaImage(${i})" class="Image" src="${namibiaPictures[i]}" alt="Namibia Foto ${i+1}">
        </div>`
    }
}

function openNamibiaImage(i) {
    let popUpImage = document.getElementById('popUpImage');
    popUpImage.classList.remove('d-none');
    document.body.classList.add('no-scroll');  
    popUpImage.innerHTML = /*HTML*/`
    <div class="popUpBackground" onclick="closeImage()">
        <div class="popUpContainer" onclick="event.stopPropagation()">
                <img class="popUpImage" id="img" src="${namibiaPictures[i]}" alt="Namibia Foto ${i+1}">
            <div class="iconSection">
                <div id="prev" onclick="prevNamibiaImage(${i})" class="icons"><img src="./assets/icons/pfeil_links.png"></div>
                <div id="close-icon" onclick="closeImage()" class="icons"><img src="./assets/icons/löschen.png"></div>
                <div id="next" onclick="nextNamibiaImage(${i})" class="icons"><img src="./assets/icons/pfeil_rechts.png"></div>
            </div>
        </div>
    </div>
    `;
}

function prevNamibiaImage(i) {
    i--;
    if (i === -1) {
        i = namibiaPictures.length - 1;
    }
    openNamibiaImage(i);
}
    
function nextNamibiaImage(i) {
    i++;
    if (i === namibiaPictures.length) {
        i = 0;
    }
    openNamibiaImage(i);
}

// Dubai Images // 

function renderDubaiPictures() {
    let dubaiImages = document.getElementById('dubaiGallery');
    dubaiImages.innerHTML = "";

    for (let i = 0; i < dubaiPictures.length; i++) {
        dubaiImages.innerHTML += /*HTML*/ ` 
        <div>
            <img onclick="openDubaiImage(${i})" class="Image" src="${dubaiPictures[i]}" alt="Dubai Foto ${i+1}">
        </div>`
    }
}

function openDubaiImage(i) {
    let popUpImage = document.getElementById('popUpImage');
    popUpImage.classList.remove('d-none');
    document.body.classList.add('no-scroll');  
    popUpImage.innerHTML = /*HTML*/`
    <div class="popUpBackground" onclick="closeImage()">
        <div class="popUpContainer" onclick="event.stopPropagation()">
                <img class="popUpImage" id="img" src="${dubaiPictures[i]}" alt="Dubai Foto ${i+1}">
            <div class="iconSection">
                <div id="prev" onclick="prevDubaiImage(${i})" class="icons"><img src="./assets/icons/pfeil_links.png"></div>
                <div id="close-icon" onclick="closeImage()" class="icons"><img src="./assets/icons/löschen.png"></div>
                <div id="next" onclick="nextDubaiImage(${i})" class="icons"><img src="./assets/icons/pfeil_rechts.png"></div>
            </div>
        </div>
    </div>
    `;
}

function prevDubaiImage(i) {
    i--;
    if (i === -1) {
        i = dubaiPictures.length - 1;
    }
    openDubaiImage(i);
}
    
function nextDubaiImage(i) {
    i++;
    if (i === dubaiPictures.length) {
        i = 0;
    }
    openDubaiImage(i);
}

// Close Icon //

function closeImage() {
    document.getElementById('popUpImage').classList.add('d-none');
    document.body.classList.remove('no-scroll');  // Restore scrolling
}

// Burger Menu //

function showMenu() {
    document.getElementById('menuSidebar').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('menuSidebar').classList.add('showSidebar');
    }, 10); // small delay to trigger the transition
}
  
function closeMenu(){
    document.getElementById('menuSidebar').classList.remove('showSidebar');
    setTimeout(() => {
        document.getElementById('menuSidebar').style.display = 'none';
    }, 225); // match the transition duration
}
