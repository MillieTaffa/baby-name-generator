function displayNames(response) {
    let names = response.data.answer;
    let namesList = '';

    if (typeof names === 'string') {
        names = names.split("\n");
    }

    names.forEach(name => {
        namesList += `<p>${name}</p>`;
    });

    document.querySelector('#names').innerHTML = namesList;
}

function generateNames(event) {
    event.preventDefault();

    let userInput = document.querySelector('.search').value;
    let apiKey = "a1f90bc0bf23da8c35fe325tob5f8845";
    let prompt = `Generate a list of baby names ${userInput}.`;
    let context = "You're an expert in every languages, with each prompt, you're going to give a list of baby names with their meaning and what language the names are in the following formate Name(pronunciantion,language):meaning.Give 30 names in alphabetical order."

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayNames);
}

let nameFormElement = document.querySelector("#name-generator-form");
nameFormElement.addEventListener("submit", generateNames);
