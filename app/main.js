(function (window) {
  "use strict";
  
  var DOM = window.document;
  
  var skillsList = [{
    color: "#c79c49",
    img: "https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png",
    title: "Javascript",
    description: "A popular, single-threaded programming language with 2 famous use-cases - server-side with NodeJS and as a browser front-end."
  }, {
    color: "#636F9B",
    img: "https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.php.png",
    title: "PHP",
    description: "A high-level general utility programming language that excels for server-side OOP-based software development."
  }, {
    color: "#3773A5",
    img: "https://i.stack.imgur.com/jBli3.png",
    title: "Python",
    description: "A high-level general utility programming language that excels for data-based and scientific applications/projects"
  }, {
    color: "#9B3E90",
    img: "https://ih0.redbubble.net/image.267525517.4452/flat,800x800,070,f.jpg",
    title: "Haskell",
    description: "A strictly functional programming language that excels for a lot of math-based applications."
  }, {
    color: "#B85800",
    img: "http://www.careertechz.com/wp-content/uploads/2014/04/1398381591_Java.png",
    title: "Java",
    description: "A VM bytecode-compiled programming language for mid-level systems and support tasks and services."
  }, {
    color: "#224156", 
    img: "https://thenewboston.com/images/forum/logos/8.png",
    title: "C",
    description: "A low-level programming language that gets as close to the machine as possible without sacrificing much platform interop."
  }];
  
  function _main() {
    var skillsBoxNode = Array.prototype.slice.call(
      DOM.getElementById("talentBox").getElementsByTagName("div")
    )[1];
    
    var skillsDivs = skillsList
      .map(function (skillObj) {
        var boxObject = DOM.createElement("div");
        boxObject.style.backgroundColor = skillObj.color;
        
        var imageObject = new Image();
        imageObject.src = skillObj.img;
        
        var paragraphObject = DOM.createElement("p");
        var strongObject = DOM.createElement("strong");
        strongObject.textContent = skillObj.title;
        var textObject1 = DOM.createTextNode(" - "), 
            textObject2 = DOM.createTextNode(skillObj.description);
        
        paragraphObject.appendChild(strongObject);
        paragraphObject.appendChild(textObject1);
        paragraphObject.appendChild(textObject2);
        boxObject.appendChild(imageObject);
        boxObject.appendChild(paragraphObject);
        
        return boxObject;
      });
      
      function domChanger() {
        var currentIndex = 0,
            currentNode = skillsBoxNode,
            currentNodeParent = currentNode.parentNode;
        
        function stateMachine() {
          var newNode = skillsDivs[currentIndex];
          currentNodeParent.replaceChild(newNode, currentNode);
          currentNode = newNode;
          currentIndex++;
          
          if (currentIndex >= skillsDivs.length) {
            currentIndex = 0;
          }
        }
        
        stateMachine();
        return stateMachine;
      }
      
      setInterval(domChanger(), 8000);
  }
  
  // Execute main boostrapper
  DOM.addEventListener("DOMContentLoaded", _main);
  
}(window));
