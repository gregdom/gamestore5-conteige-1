updateIconCart();
function addItensCart() {
  // Variáveis iniciais
  let game_id = document.querySelector('.gameid').innerHTML.trim();
  let game_name = document.querySelector('.gamename').innerHTML.trim();
  let game_price = document.querySelector('.gameprice').innerHTML.trim();

  let arr = [];

  const list = {
    id: game_id,
    name: game_name,
    price: game_price
  }

  // Cria o array no localStorage se não houver um array já criado
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
  }

  let novoItem = list;

  arr.push(novoItem);

  localStorage.meuArr = JSON.stringify(arr);
  updateIconCart();
}

function updateIconCart() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
    let numItens = arr.length;
    document.querySelector(".carticon .cartqt").innerHTML = numItens;
  }
}