function getTarget(element) {
  return element.target || element.srcElement;
}

function makeActive(element) {
  var target, targetSib, targetClass, testArray;
  target = getTarget(element);
  targetSib = target.parentNode.childNodes;
  targetClass = target.classList[0];
  for (var i = 0; i < targetSib.length; i++) {
    if (targetSib[i].classList !== undefined) {
      if (targetSib[i].classList.contains(targetClass)) {
        targetSib[i].classList.add('active');
        targetSib[i].classList.remove('hidden');
      } else {
        targetSib[i].classList.remove('active');
        targetSib[i].classList.add('hidden');
      }
    }
  };
}

var el = document.getElementById('whileUntil'); // Get section
if (el.addEventListener) { // If event listeners work
  el.addEventListener('click', function(element) { // Add listener on click
    makeActive(element); // It calls turnRed()
  }, false); // Use bubbling phase for flow
} else { // Otherwise
  el.attachEvent('onclick', function(element) { // Use old IE model: onclick
    makeActive(element); // Call turnRed()
  });
}

var el2 = document.getElementById('loopMethods'); // Get section
if (el2.addEventListener) { // If event listeners work
  el2.addEventListener('click', function(element) { // Add listener on click
    makeActive(element); // It calls turnRed()
  }, false); // Use bubbling phase for flow
} else { // Otherwise
  el2.attachEvent('onclick', function(element) { // Use old IE model: onclick
    makeActive(element); // Call turnRed()
  });
}
