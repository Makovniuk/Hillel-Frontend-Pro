const btnSaveLink = document.querySelector(".btnInput");
const btnGolLink = document.querySelector(".btnGoLink"); 
const linkInput = document.querySelector("#linkInput");

let link = null;

btnSaveLink.addEventListener('click', () => { 
    link = linkInput.value;

    if (!/^https?:/.test(link)) { 
        link = 'https://' + link;
    } 
    else if (/^http?:/.test(link)) {
        link = 'https://' + link.split('').slice(7).join('');
    }
});

btnGolLink.addEventListener("click", () => {
    if (!link) {
        alert('Link not input or not save!');
    } else {
        location.href = link;
    }
});
