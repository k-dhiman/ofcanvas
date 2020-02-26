var hamburger = document.querySelector('.hamburger');
var ofcanvas = document.querySelector('.ofcanvas');
var close = document.querySelector('.close');
var position = document.querySelector('.position');

var positionValue;

function getPositionValue() {
	positionValue = position.value;
    setAttrOfCanvas(positionValue);
    return positionValue;
}

function setAttrOfCanvas(value) {

	if(value == 'top' || value == 'bottom') {
		ofcanvas.setAttribute('style', value + ': -100%; left: 0; right: 0; width: 100%; opacity:0; ');

	} else if (value == 'left' || value == 'right') {
		ofcanvas.setAttribute('style', value + ': -100%; top: 0; opacity:0; ');
	} else {
		ofcanvas.setAttribute('style', value + ': -100%; left: 0; opacity:0; ');
	}

}

position.addEventListener('change', getPositionValue);

window.onload = getPositionValue();

hamburger.addEventListener('click', function(){
    this.classList.toggle('open');
	if(positionValue == 'top' || positionValue == 'bottom') {
		ofcanvas.setAttribute('style', positionValue + ': 0; left: 0; right: 0; width: 100%; opacity: 1; ');

	} else if (positionValue == 'left' || positionValue == 'right') {
		ofcanvas.setAttribute('style', positionValue + ': 0; top: 0; opacity: 1; ');
	} else {
		ofcanvas.setAttribute('style', positionValue + ': 0; left: 0; opacity: 1; ');
	}
});

close.addEventListener('click', function(){
    setAttrOfCanvas(positionValue);
    hamburger.classList.remove('open');
});