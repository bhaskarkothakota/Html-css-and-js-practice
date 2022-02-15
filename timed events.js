
// console.log("starting script")
// setTimeout(function()
// {
//     console.log("waited 3 seconds")
// },3000)


let count = 0;

const my_interval = setInterval(() => {
    console.log("checking something else");
    count++;
    if (count === 3)
    {
        
        console.log("that was the last one");
        clearInterval(my_interval);
    }
}, 2000);