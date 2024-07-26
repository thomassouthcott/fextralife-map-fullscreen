{
  let idsToExclude = ["mapA","mapB","mapC"];
  let height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
  let width = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;
  //  height = height - getElementHeight("#wiki-content-block > div:nth-child(6) > p");
  height = height - 6;

  //Remove the sidebar
  retryDisplayNone("#sidebar-wrapper");
  retryPaddingZero("#wrapper");
  //Remove Masthead
  retryDisplayNone("#form-header");
  //Remove Navbar
  retryDisplayNone("#fextra-navbar-collapse-1");
  retryDisplayNone("#wrapper > nav");
  retryPaddingZero("#wrapper > nav");
  retryMarginZero("#wrapper > nav");
  //Remove Header 
  retryDisplayNone("#page-content-header-container");
  retryDisplayNone("#palerts");
  //Remove padding from main content
  retryPaddingZero("body > div.ios-fix > div.container-fluid.fex-bg-image");
  retryPaddingZero("#page-content-wrapper > div > div");
  retryMarginZero("#page-content-wrapper");
  //Remove all useless text from main content
  var nodes = document.getElementById('wiki-content-block').childNodes;
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeType === Node.ELEMENT_NODE && !idsToExclude.includes(nodes[i].id)) {
      retryDisplayNone(generateSelector(nodes[i]));
    }
  }
  nodes = document.getElementsByTagName('br');;
  for(var i=0; i<nodes.length; i++) {
      nodes[i].remove();
  }
  //Remove Checklist
  retryDisplayNone("#wiki-content-block > div:nth-child(3)");
  //Remove comments section
  retryDisplayNone("#discussions-section");
  //Remove footer
  retryDisplayNone("body > div.ios-fix > div.hidden-xs");
  retryDisplayNone("body > div.ios-fix > div.footer-sticky");
  retryDisplayNone("body > div.ios-fix > div.container-fluid.fex-bg-image > footer");
  retryPaddingZero("body > div.ios-fix > div.container-fluid.fex-bg-image > div");
  retryMinHeightZero("body > div.ios-fix > div.container-fluid.fex-bg-image > div");
  retryMarginZero("body > div.ios-fix > div.container-fluid.fex-bg-image > div");
  retryRemove("body > div.ios-fix > div.container-fluid.fex-bg-image > div > div.glow-corners.bottom-corners");
  retryMarginZero("#mapA > p");
  retryMarginZero("#mapB > p");
  retryMarginZero("#mapC > p");
  retryMarginZero("#mapD > p");
  //Slow loading elements
  retryRemove("body > div.addthis-smartlayers.addthis-smartlayers-desktop");
  retrySetDimensionsOfMap("#ximap0", width, height);
  retrySetDimensionsOfMap("#ximap1", width, height);
  retrySetDimensionsOfMap("#ximap2", width, height);
  retrySetDimensionsOfMap("#ximap3", width, height);
  retrySetDimensionsOfMap("#page-content-wrapper", width, height);
  //.fex-main min-width:100%;
  retryRemove("#main-content > div > br");
  retryRemove("#sub-main > br:nth-child(2)");
  retryRemove("#sub-main > br");
  //Remove ads
  //remove banner at top for VIP feature, ewww
  retryRemove("#wiki-content-block > div:nth-child(6) > p");
  retryRemove("#pw-oop-bottom_rail");
  retryRemove("#pw-corner-ad-video");
  retryRemove(".pw-oop-bottom_rail");
  retryRemove(".pw-corner-ad-video");
  window.scrollTo(0, 0);
}

function retryRemove(selector, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
  if(webElement) {
    webElement.remove()
	console.log("Removed: "+selector);
  }
  else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;
	  var millisecondsToWait = 200;
	  setTimeout(function() {retryRemove(selector, retriesLeft)}, millisecondsToWait);
  }
	else {
		console.log("Not Found: "+selector);
	}
}

function retryMinHeightZero(selector, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
  if(webElement) {
    webElement.style.cssText += "min-height: 0 !important;";
	console.log("Removed: "+selector);
  }
  else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;
	  var millisecondsToWait = 200;
	  setTimeout(function() {retryMarginZero(selector, retriesLeft)}, millisecondsToWait);
  }
	else {
		console.log("Not Found: "+selector);
	}
}

function retryMarginZero(selector, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
  if(webElement) {
    webElement.style.cssText += "margin: 0 !important;";
	console.log("Removed: "+selector);
  }
  else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;
	  var millisecondsToWait = 200;
	  setTimeout(function() {retryMarginZero(selector, retriesLeft)}, millisecondsToWait);
  }
	else {
		console.log("Not Found: "+selector);
	}
}

function retryPaddingZero(selector, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
  if(webElement) {
    webElement.style.cssText += "padding: 0 !important;";
	console.log("Removed: "+selector);
  }
  else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;
	  var millisecondsToWait = 200;
	  setTimeout(function() {retryPaddingZero(selector, retriesLeft)}, millisecondsToWait);
  }
	else {
		console.log("Not Found: "+selector);
	}
}

function retryDisplayNone(selector, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
	if(webElement){
		webElement.style.cssText += "display:none !important;"
	console.log("Removed: "+selector);
	}
	else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;	
	  var millisecondsToWait = 200;  
	  setTimeout(function() {retryDisplayNone(selector, retriesLeft)}, millisecondsToWait);
	}
	else {
		console.log("Not Found: "+selector);
	}
}

function retrySetDimensionsOfMap(selector, width, height, retriesLeft = 1000) {
  var webElement = document.querySelector(selector);
	if(webElement){
		webElement.style.cssText += "min-width:" + width + "px; min-height:" + height + "px;"
	console.log("Removed: "+selector);
	}
	else if(retriesLeft > 0) {
	  //Slow loading elements
	  retriesLeft--;	  
	  var millisecondsToWait = 200;
	  setTimeout(function() {retryDisplayNone(selector, retriesLeft)}, millisecondsToWait);
	}
	else {
		console.log("Not Found: "+selector);
	}
}

function getElementHeight(selector) {
  var element = document.querySelector(selector);
  if(element) {
    return element.offsetHeight;
  }
  return 0;
}

function generateSelector(context) {
  let index, pathSelector, localName;

  if (context == "null") return;
  // call getIndex function
  index = getIndex(context);

  while (context.tagName) {
    // selector path
    pathSelector = context.localName + (pathSelector ? ">" + pathSelector : "");
    context = context.parentNode;
  }
  // selector path for nth of type
  pathSelector = pathSelector + `:nth-of-type(${index})`;
  return pathSelector;
}

// get index for nth of type element
function getIndex(node) {
  let i = 1;
  let tagName = node.tagName;

  while (node.previousSibling) {
    node = node.previousSibling;
    if (
      node.nodeType === 1 &&
      tagName.toLowerCase() == node.tagName.toLowerCase()
    ) {
      i++;
    }
  }
  return i;
}