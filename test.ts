const root  = document.getElementById('root');


console.log(root);

const testDiv = document.createElement('div');
testDiv.innerText = "안녕하세요"
root?.appendChild(testDiv);