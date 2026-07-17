function generateTable(){

    let number = Number(document.getElementById("number").value);
    let tbody = document.querySelector("#table tbody");

    tbody.innerHTML = "";

    if(isNaN(number)){
        return;
    }

    for(let i = 1; i <= 9; i++){

        let row = `
        <tr>
            <td>${number} × ${i}</td>
            <td>${number * i}</td>
        </tr>
        `;

        tbody.innerHTML += row;
    }
}