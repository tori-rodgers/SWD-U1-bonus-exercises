window.addEventListener("load", () => {

    /* CREATE OBJECTS */
  
    // Generally a good idea to declare objects outside of listeners so they are in scope for everything
    // There are exceptions - like if the element isn't on the page yet because it gets added later
    
    const date = document.getElementById("date");
    const numButton = document.getElementById("num-button");
    const numBox = document.getElementById("num-box");
    const randomNum = document.getElementById("random-num");
  

    /* CODE TO RUN IMMEDIATELY */
  
    // Run any code needed to display things on page when it first loads
  
    date.innerHTML += ` ${new Date().toLocaleDateString()}`;
  
  
    /* EVENT LISTENERS */
  
    numButton.addEventListener("click", function() {
        console.log("I clicked the button!");
  
        numBox.style.visibility = "visible";
        let num = Math.ceil(Math.random() * 50);
        randomNum.innerHTML = num;
  
        if (num % 2 === 0) {
          randomNum.style.color = "yellowgreen";
          document.body.style.backgroundColor = "yellowgreen";
        } else {
          randomNum.style.color = "coral";
          document.body.style.backgroundColor = "coral";
        }
      
        if (num % 3 === 0) {
          numButton.classList.add("spinning");
        } else {
          numButton.classList.remove("spinning");
        }
      
        if (num % 5 === 0) {
          // Handle race condition with setTimeout()
          setTimeout(function() {
            alert(`The number ${num} is a multiple of 5!`);
          }, 50)
        }
  
    });
  
    // Note the difference between .log() and .dir() here - 
    // One gives you a literal representation of the elements
    // The other gives you a searchable tree to see all of the
    // hidden attributes for the element and its children
    
    console.log(numButton);
    console.dir(numButton);
  
    console.log(numBox);
    console.dir(numBox);
  
    console.log(randomNum);
    console.dir(randomNum);
    
});
