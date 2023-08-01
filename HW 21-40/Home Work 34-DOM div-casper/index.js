const text = document.querySelector('.text');
const wrapperDiv = document.querySelector('#wrapper');
const casperDiv = document.createElement('div');

casperDiv.classList.add('casper-div');
casperDiv.innerText = '<CASPER-DIV>';
casperDiv.style.display = 'none';  
wrapperDiv.append(casperDiv);

text.addEventListener('mouseover', () => {
    casperDiv.style.display = 'block';  
});

text.addEventListener('mouseout', () => {
    casperDiv.style.display = 'none'; 
});
