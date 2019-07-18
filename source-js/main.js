var $filterBtn = document.getElementsByClassName('filter-btn');
var $mainNavigation = document.getElementById('main-navigation');

// Toggles the "active" class for the buttons.

for (var i = 0; i < $filterBtn.length; i++) {

  $filterBtn[i].addEventListener("click", function (event) {
    document.querySelectorAll(".filter-btn").forEach(function (elem) {
      if (elem.classList.contains('active')) {
        elem.classList.remove("active");
      }
    });

    event.classList.add("active");
  });
}

function filterSelection(type) {

  if (type === 'all') {
    document.querySelectorAll(".filter-item").forEach(function (elem) {
      elem.classList.remove('d-none');
    });
  }
  else {
    document.querySelectorAll(".filter-item").forEach(function (elem) {
      elem.classList.add('d-none');

      if ((elem.classList.contains(type)) && (elem.classList.contains('d-none'))) {
        elem.classList.remove('d-none');
      }
    });
  }
}

function smoothScroll(Element) {

  Element = document.getElementById(Element);
  var selectedPosX = 0;
  var selectedPosY = 0;
  while (Element != null) {
    selectedPosX += Element.offsetLeft;
    selectedPosY += Element.offsetTop;
    Element = Element.offsetParent;
  }
  window.scrollTo(selectedPosX, selectedPosY);
}

document.getElementById('menuToggleInput').addEventListener("click", function (event) {
  $mainNavigation.classList.toggle('open');
});

window.onresize = function(event) {
  console.log(window.innerWidth);
  if (window.innerWidth > 768) {
    document.getElementById('menuToggleInput').checked = false;
    $mainNavigation.classList.remove('open');
  }
};
