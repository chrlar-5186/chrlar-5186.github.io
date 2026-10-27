document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    return false;
});

async function Main(JsonFile) {
    const JsonProm = await fetch(JsonFile);
    const Elements = await JsonProm.json();

    const ExternalLinks = document.getElementById("external-help")

    function CreateTemplates(Name, Description, Link) {
    
        let newTemplate = document.createElement("a");
        newTemplate.href = Link;
        newTemplate.setAttribute("class", "Links");
        newTemplate.target = "_blank";
        ExternalLinks.appendChild(newTemplate);

        let newH3 = document.createElement("h3");
        newH3.setAttribute("class", "btn-title");
        newH3.innerHTML = Name;
        newTemplate.appendChild(newH3)

        let newP = document.createElement("p");
        newP.setAttribute("class", "btn-paragraph");
        newP.innerHTML = Description;
        newTemplate.appendChild(newP)

        console.log("created", newTemplate.parentElement)

    }

    for (var i in Elements) {
        const Name = Elements[i].Name;
        const Description = Elements[i].Description;
        const Link = Elements[i].Link;

        CreateTemplates(Name, Description, Link)
    }

}

Main("../Json/Links.json")
