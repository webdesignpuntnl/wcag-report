const wcag = require('../wcag/WCAG.json');

console.log(wcag)

ol = document.createElement('ol');
const list = document.querySelector('.wcargRules').append(ol);


// evalData.auditSample.forEach(item => {
//   const criteria = item.test.id;
//   const result = item.result.outcome.title;

//   let li = document.createElement('li');
//   ol.appendChild(li);

//   li.innerHTML += criteria;
// });