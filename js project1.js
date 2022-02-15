const name1 = document.getElementById("name");

const age = document.getElementById("age");

const dog_years = document.getElementById("dogYears");

// setting the values

name1.innerText = "Bhaskar kothakota";

age.innerText = 25;




function showDogYears(age)
{
    dog_years.innerText = Number(age) * 7;
    return Number(age) * 7
}

dog_years.innerText = showDogYears(age.innerText)


// adding classes to the inner inputs

let elements = document.querySelectorAll(".fake-input");

elements.forEach(node =>
    {
        node.classList.add("real-input");
        node.classList.remove("fake-input");
    })