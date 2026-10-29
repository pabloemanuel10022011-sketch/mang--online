//1.LISTAR PAGINAS 
const pages = [
    "./assets/dragon-ball-vol-1-s Capa (1).jpg",
    "./assets/1 (1).jpg",
    "./assets/2 (1).jpg",
    "./assets/3 (1).jpg",
    "./assets/4 (1).jpg",
    "./assets/5 (1).jpg",
    "./assets/6 (1).jpg",
    "./assets/7 (1).jpg",
    "./assets/8 (1).jpg",
    "./assets/9 (1).jpg",
    "./assets/10 (1).jpg",
    "./assets/11 (1).jpg",
    "./assets/12 (1).jpg",
    "./assets/13 (1).jpg",
    './assets/14 (1).jpg',
    "./assets/15 (1).jpg",
    "./assets/16 (1).jpg",
    "./assets/17 (1).jpg",
    "./assets/18 (1).jpg",
    "./assets/19 (1).jpg",
    "./assets/20 (1).jpg",
    "./assets/21 (1).jpg",
    "./assets/22 (1).jpg",
    "./assets/23 (1).jpg",
    "./assets/24 (1).jpg",
    "./assets/25 (1).jpg",
    "./assets/26 (1).jpg",
    "./assets/27 (1).jpg",
    "./assets/28 (1).jpg",
    "./assets/29 (1).jpg",
    "./assets/30 (1).jpg",
    "./assets/31 (1).jpg",    
];

//2. contagem de lista. 
let currentPageindex = 0;

//3.SELEÇÃO DOS ELEMENTOS DO DOM
const imgelement = document.getElementById("mangá page");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const pageCounter = document.getElementById("page-counter");

//4. FUNÇÃO PARA ATUALIZAR A TELA
function UpdateReader() {
    //atualizar a imagem
    imgelement.src = pages[currentPageindex];
    
    //atualizar texto do contador (exemplo: página 1 de 31)
    pageCounter.textContent =   `Página ${currentPageindex + 1} de ${pages.length}`;
    
    //controlar o estado dos botões
    previousBtn.disabled = currentPageindex === 0;
    nextBtn.disabled = currentPageindex === pages.length - 1;
    
}

//5. - evento de cliques do botões
    //botão anterior 
    previousBtn.addEventListener("click", () => {
        if (currentPageindex > 0) {
            currentPageindex--;
            UpdateReader();
        }
    });

    //botão próximo
    nextBtn.addEventListener("click", () => {
        if (currentPageindex < pages.length - 1) {
            currentPageindex++;
            UpdateReader();
        }
    });
 
//6. Controle de setas 
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") 
        if (currentPageindex > 0) 
            currentPageindex--;
            UpdateReader();});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") 
        if (currentPageindex < pages.length - 1) 
            currentPageindex++;
            UpdateReader();});  

UpdateReader(); 

