let body = document.body;
const classes = document.getElementsByTagName("button");

const Div1 = document.getElementById("div1");

const Div2 = document.getElementById("div2");

const Div3 = document.getElementById("div3");

const Remove1 = document.getElementById("remove1");

const Remove2 = document.getElementById("remove2");

const Remove3 = document.getElementById("remove3");

Remove1.addEventListener("click", function () {
  Div1.remove();
});

Remove2.addEventListener("click", function () {
  Div2.remove();
});
Remove3.addEventListener("click", function () {
  Div3.remove();
});
