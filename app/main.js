(function (window) {
  "use strict";
  
  var DOM = window.document;
  
  var skillsList = [{
    color: "#c79c49",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    title: "Javascript",
    description: "A popular, single-threaded programming language with 2 famous use-cases - server-side with NodeJS and as a browser front-end."
  }, {
    color: "#636F9B",
    img: "https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg",
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
    img: "https://orig00.deviantart.net/7385/f/2016/269/f/9/java_icon_flat_by_dertokur-d82sy8p.png",
    title: "Java",
    description: "A VM bytecode-compiled programming language for mid-level systems and support tasks and services."
  }, {
    color: "#B85800",
    img: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/102/formation-scala.png",
    title: "Scala",
    description: "A mixed OOP and functional paradigm language with full interopability with the Java ecosystem."
  }, {
    color: "#224156", 
    img: "https://wikiprogramming.org/wp-content/uploads/2015/05/c-logo.png",
    title: "C",
    description: "A low-level programming language that gets as close to the machine as possible without sacrificing much architecture interop."
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
