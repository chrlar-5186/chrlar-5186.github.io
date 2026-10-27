import { returnDatabase} from "./Database.js"

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    return false;
});

const Options = document.getElementById("options");
const Informationen = document.getElementById("Informationen");

console.log(returnDatabase());

async function a() {

    const json =  await fetch("../Json/Testterminen.json");
    const b = await json.json();

    console.log(b)

    for (var i in b) {
        const x = document.createElement("button");
        x.innerHTML = i;
        x.type = 'button';
        x.id = i;
        Options.appendChild(x);

        const divisors = document.createElement("div");
        divisors.id = i;
        divisors.className = "Informations";
        Informationen.appendChild(divisors);
        divisors.style = 'display: none;';

        const headerName = document.createElement("h1");
        headerName.id = i;
        headerName.className = 'SubjectTitle';
        headerName.innerHTML = b[i].Fach
        divisors.appendChild(headerName);

        const Schul_header = document.createElement("h2");
        Schul_header.className = "Schularbeiten_Sep";
        Schul_header.innerHTML = "Schularbeiten";
        divisors.appendChild(Schul_header);

        const Schularbeiten = document.createElement('div');
        Schularbeiten.className = "Schularbeiten";
        divisors.appendChild(Schularbeiten);

        if (b[i]["Schularbeiten"] != null && Object.keys(b[i]["Schularbeiten"]).length > 1) {
            let selected = b[i].Schularbeiten
            for (var xm in selected) {
                const SchularbTerm = document.createElement("h3");
                SchularbTerm.innerHTML = xm;
                Schularbeiten.appendChild(SchularbTerm);

                const paragraph = document.createElement('p');
                paragraph.innerHTML = selected[xm].Stoff
                Schularbeiten.appendChild(paragraph);

                const paragraphDat = document.createElement('p');
                paragraphDat.innerHTML = selected[xm].Datum;
                Schularbeiten.appendChild(paragraphDat);

                const abtrenner = document.createElement('br');
                Schularbeiten.appendChild(abtrenner);
            }
        } else {
            const None_repl = document.createElement("h3");
            None_repl.innerHTML = "Derzeit keine :D";
            Schularbeiten.appendChild(None_repl);
        }

        const Pruefung_header = document.createElement("h2");
        Pruefung_header.innerHTML = "Prüfungen";
        Pruefung_header.className = "Pruefungen_Sep";
        divisors.appendChild(Pruefung_header);

        const Pruefungen = document.createElement("div");
        Pruefungen.className = "Pruefungen";
        divisors.appendChild(Pruefungen);

        if (b[i]["Pruefungen"] != null && Object.keys(b[i]["Pruefungen"]).length > 1) {
            let selected = b[i].Pruefungen;
            for (var pm in selected) {
                const Pruf = document.createElement("h3");
                Pruf.innerHTML = pm;
                Pruefungen.appendChild(Pruf);

                const paragraph = document.createElement('p');
                paragraph.innerHTML = selected[pm].Stoff;
                Pruefungen.appendChild(paragraph);

                const paragraphDat = document.createElement('p');
                paragraphDat.innerHTML = selected[pm].Datum;
                Pruefungen.appendChild(paragraphDat);

                const breaker = document.createElement('br');
                Pruefungen.appendChild(breaker);                    
            }
        } else {
            const none = document.createElement('h3');
            none.innerHTML = "Derzeit keine :D";
            Pruefungen.append(none);
        }
        x.onclick = function() {
            const d = document.getElementsByClassName("Informations");
            for (var i in d) {
                if ( x.id == d[i].id ) {
                    d[x.id].style.display = "block";
                } else {
                    try {
                        d[i].style.display = "none";
                    } catch {}
                }
            }
        }
        
    };
}

a()