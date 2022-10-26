counterCart();

let btnFinalBuy = document.querySelector(".btnCartStartLogin");
if (btnFinalBuy) {
  btnFinalBuy.addEventListener("click", () => {
    window.location.href = "http://localhost:3000/cart/login";
  });
}

if (localStorage.meuArr) {
  arr = JSON.parse(localStorage.getItem("meuArr"));
  console.log(arr);
}

let cartShowList = document.querySelector(".cartShowList");
let ul = document.createElement("ul");
cartShowList.appendChild(ul);

function showItens() {
  for (let i in arr) {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let li = document.createElement("li");
    let x = document.createElement("span");
    let input = document.createElement("input");

    h2.innerHTML = arr[i].name;
    p.innerHTML = !arr[i].price ? 0 : parseFloat(arr[i].price).toFixed(2);
    x.innerHTML = "x";

    li.setAttribute("data-id", arr[i].id);
    x.setAttribute("class", arr[i].id);
    input.setAttribute("name", "productgame");
    input.value = arr[i].id;

    ul.append(li);
    li.append(h2, p, x, input);
  }
}
showItens();

let lip = document.querySelector(".cartShowList ul li p").innerHTML;
parseFloat(lip).toFixed(2);

addEventListener("click", function (event) {
  let targetEl = event.target.getAttribute("class");
  let parElement = event.ParentElement;
  console.log(targetEl);
  console.log(parElement);

  arr1 = JSON.parse(localStorage.getItem("meuArr"));

  removerPorId(arr1, targetEl);
  console.log(arr1);

  function removerPorId(array, id) {
    var result = array.filter(function (el) {
      return el.id == id;
    });

    for (var elemento of result) {
      var index = array.indexOf(elemento);
      array.splice(index, 1);
    }

    let arr1 = array;
  }

  localStorage.meuArr = JSON.stringify(arr1);
  let liDeleted = document.querySelector(`[data-id="${targetEl}" ]`);
  if (liDeleted) {
    liDeleted.remove();
  }
  sumPrice();
  counterCart()
});

function sumPrice() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));

    let soma = 0;

    arr.forEach(element => {
      let resultado = parseFloat(element.price);
      soma = soma + resultado;
    });
    let total = document.querySelector(".tot").innerHTML = soma.toFixed(2);
  }
}
sumPrice();

function counterCart() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
    let numItens = arr.length;
    let carticon = document.querySelector(".carticon span").innerHTML = numItens;
    console.log("SPAN", carticon);
  }
}

function btnCartOrder() {
  localStorage.clear();
  console.log("CLEAR STORAGE");
  let btnsub = document.querySelector(`[type="submit" ]`).click();
}