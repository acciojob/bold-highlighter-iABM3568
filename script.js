function highlight() {
    //Write your code here

	 // Step 1: Get all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Step 2: Loop through each element and change color to green
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 128, 0)';
    });


}


function return_normal() {
    //Write your code here
// Step 1: Get all <strong> elements
    const strongElements = document.querySelectorAll('strong');
    
    // Step 2: Loop through each element and change color back to black
    strongElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)';
    });
    
}
