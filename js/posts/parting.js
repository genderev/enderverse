// let worker = new Worker('../js/posts/part.js')


let evaluate = async () => {
let afinn = await import('https://cdn.skypack.dev/afinn-111');

let input = document.getElementById('feel').value;

let first = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let all = first.split(" ");
let num = 0;
for (let i in all){
  let current = all[i]
  let res = afinn.afinn111[current];
  if(res){
    num = num + res;
  }
}


console.log(num)


if (num > 3 || input.includes('love')){
    document.getElementById('result').innerText = 'I like you in a romantic way. I hope you travel safely. ♥️';
  } else {
    document.getElementById('result').innerText = 'Travel safely my friend! We all enjoyed having you here :-)';

  }
}


document.getElementById('done').onclick = evaluate;
