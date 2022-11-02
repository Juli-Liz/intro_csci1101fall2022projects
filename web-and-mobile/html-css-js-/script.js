window.addEventListener("load",function()
{
    // Get click element reference.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    // counter value
    let counter = 0;

    // click button function
    let clickButtonFunction = function ()
    {
        // increment counter
        counter++;

        //up date counter
        clickCounterElement.innerHTML = counter; 

    };

    //Attach button function 
    clickButtonElement.addEventListener("click", clickButtonFunction);

});

