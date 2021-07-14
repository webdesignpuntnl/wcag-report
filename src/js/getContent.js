const removeClasses = Array.from(document.querySelector('main').getElementsByTagName('*'));
const lis = document.querySelectorAll('ol li');
const printButton = document.querySelector('.printButton');


function printRapport() {
  window.print();
}

removeClasses.forEach(item => {
  item.hasAttribute('class') ? item.removeAttribute('class') : null;
});

document.querySelectorAll('ul')[0].setAttribute('class', 'list');

lis.forEach(li => {
  let firstSpan = li.children[0].innerHTML;
  let secondSpan = li.children[1].innerHTML;
  const html = `<span>${firstSpan}</span> - <a href="${secondSpan}">${secondSpan}</a>`;
  li.innerHTML = '';
  li.innerHTML = html;
});

printButton.addEventListener('click', printRapport);