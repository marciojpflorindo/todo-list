$(document).ready(function () {
  differentColors();
  addElement();
  removeElement();
  enterPressed();
});

function differentColors() {
  $('ul li:even').addClass("list-group-item-dark");
}

function addElement() {
  $(".add-button").click(function () {
    var newToDo = $(".input-new-item").val();
    $("ul").append("<li class='list-group-item d-flex justify-content-between align-items-center'> " + newToDo + " <span type='button' class='btn btn-dark ml-2 remove-button'>Remove</span></li>");
    differentColors();
  });
}

function removeElement() {
  $(".items-row").on("click", ".remove-button", (function () {
    $(this).parent().remove();
  }));
}

function enterPressed() {
  $(".input-new-item").on("keydown", function (e) {
    if (e.which === 13) {
      var newToDo = $(".input-new-item").val();
      $("ul").append("<li class='list-group-item d-flex justify-content-between align-items-center'> " + newToDo + " <span type='button' class='btn btn-dark ml-2 remove-button'>Remove</span></li>");
      differentColors();
    }
  });
}
