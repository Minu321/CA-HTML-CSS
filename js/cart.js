console.log(8);
var removeCartItemButtons = document.getElementsByClassName("cartremove");
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    var buttonCllicked = event.target;
    buttonCllicked.parentElement.parentElement.remove();
    updateCartTotal;
  });
}

function updateCartTotal() {}
