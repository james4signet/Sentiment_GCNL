// Main javascript file for gcnl used with the gcnlForm

const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const url = document.querySelector('input[name="url"]').value;
    fetch("/extract-classify", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: url})
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(data => {
        // Handle the successful response here
        // update the UI
        let table = document.getElementById("outputTable");
        let tbody = table.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";
        // data[0] = sorted_keywords
        // data[1] = sorted_keyphrases
        // data[2] = classifications
        // data[3] = sentiment
        //Update the Keywords section
        for (let i = 0; i < data[0].length; i++) {
            let row = tbody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = data[0][i][0];
            cell2.innerHTML = data[0][i][1];
        }
        //Update the Keyphrases section
        for (let i = 0; i < data[1].length; i++) {
            let row = tbody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = data[1][i][0];
            cell2.innerHTML = data[1][i][1];
        }
        //Update the classifications section
        for (let key in data[2]) {
            let row = tbody.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = key;
            cell2.innerHTML = data[2][key];
        }
        //Update the sentiment section
        let row = tbody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "Sentiment Score";
        cell2.innerHTML = data[3];
    }).catch(error => {
        // Handle the error here
        console.error(error);
    });
});

/* handling the form submission and getting the value of the url input field. Then I am making a POST request to the server-side script passing the url as a JSON object in the request body.Then, I am handling the response from the server, If the request was successful, I'm parsing the response and updating the HTML table with the data. I am iterating over the data array and updating the table for each section */



