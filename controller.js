document.addEventListener("DOMContentLoaded", function (e) {
    Controller.init();
    console.log(_data_from_backend)
});

var Controller = {
    init: function () {
        var data = _data_from_backend;

        var dataDisplay = document.getElementById("dataDisplay");

        var dataTable = document.createElement("table");
        dataTable.className = "dataTable";

        var dataTableThread = document.createElement("thead");
        dataTableThread.className = "dataTableThread";

        var dataTableHeadRow = document.createElement("tr");
        dataTableHeadRow.className = "dataTableHeadRow";

        dataTableThread.appendChild(dataTableHeadRow)

        var tableHeaderTitle = ["Nom", "Problèmes", "Propriétaire", "Nombre d'url"]
        tableHeaderTitle.forEach(function (item) {
            var th = document.createElement("th");
            th.className = "headerTitle"
            th.textContent = item;
            dataTableHeadRow.appendChild(th);
        });

        dataTable.appendChild(dataTableThread)

        var dataTableBody = document.createElement("tbody");
        dataTableBody.className = "dataTableBody";

        for (var i = 0; i < data.length; i++) {
            var item = data[i];

            var contentRow = document.createElement("tr");
            var nameContent = document.createElement("td");
            nameContent.className = "nameContent"
            nameContent.innerText = item.name

            var problemText = Number(item.problem) <= 1 ? "problème" : "problèmes";
            var problemNumber = Number(item.problem);

            var problemContent = document.createElement("td")
            problemContent.className = "problemContent"
            if (item.problem !== "") {
                problemContent.innerText = `${problemNumber} ${problemText}`
            }

            var ownerContent = document.createElement("td")
            ownerContent.className = "ownerContent"
            ownerContent.innerText = item.owner

            var urlsContent = document.createElement("td")
            urlsContent.className = "urlsContent"
            urlsContent.innerText = item.urls

            contentRow.append(nameContent, problemContent, ownerContent, urlsContent)

            dataTableBody.appendChild(contentRow)
        }

        dataTable.appendChild(dataTableBody)

        dataDisplay.appendChild(dataTable)
    }
};