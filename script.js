function populateTable(jsonFilePath, tableSelector, columnOrder) {
    fetch(jsonFilePath)
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector(tableSelector);

            data.forEach((item) => {
                const row = document.createElement("tr");

                row.innerHTML = columnOrder.map(key => `<td>${item[key] !== null && item[key] !== undefined ? item[key] : "null"}</td>`).join("");

                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error(`Error loading JSON data from ${jsonFilePath}:`, error));
}

const nationalityColumns = ["modifiedBy", "modifiedAt", "createdBy", "recordActivity", "logTime", "enName", "arName", "code", "id"];
const countryColumns = ["modifiedBy", "modifiedAt", "createdBy", "recordActivity", "logTime", "enName", "arName", "id"];
const authorizationColumns = ["modifiedBy", "modifiedAt", "createdBy", "recordActivity", "logTime", "enName", "arName", "code", "id"];
const paymentcol = ["modifiedBy", "modifiedAt", "createdBy", "recordActivity", "logTime", "enName", "arName", "code", "id"];
const ContractStatue = ['enName' , 'arName', 'code' , 'id' ]
// Populate each table with the appropriate data

populateTable("files/payment-method.json", "#Payment-method", paymentcol);
populateTable("files/id-type.json", "#id-Type", paymentcol);
populateTable("files/contract-status.json", "#Contract-statue", ContractStatue);
populateTable("files/yakeen-nationality.json", "#Nationality-Table", nationalityColumns);
populateTable("files/country.json", "#country-details", countryColumns);
populateTable("files/external-authorization-countries.json", "#Authorization", authorizationColumns);
