// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var objFilter = {};

// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  let newElement = d3.select(this);
  // 4b. Save the value that was changed as a variable.
  let elementValue = newElement.property("value");
  console.log(elementValue);
  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = newElement.attr("id");
  console.log(filterId);

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    objFilter[filterId] = elementValue;
  }
  else {
    delete objFilter[filterId];
  }

console.log(objFilter);
  // 6. Call function to apply all filters and rebuild the table
  filterTable(objFilter);

}



// 7. Use this function to filter the table when data is entered.
function filterTable(objFilter) {
let date = d3.select("#datetime").property("value");
let City = d3.select("#city").property("value");
let Country = d3.select("#country").property("value");
let Shape = d3.select("#shape").property("value");

  // 8. Set the filtered data to the tableData.
  let objData = tableData

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  objData.forEach((dataRow) => {
    if (date) {
      objFilterdata = objData.filter(row => row.datetime === date)
    }
    if (City) {
      objFilterdata = objData.filter(row => row.city === City)
    }
    if (Country) {
      objFilterdata = objData.filter(row => row.city === Country)
    }
    if (Shape) {
      objFilterdata = objData.filter(row => row.city === Shape)
    }
    console.log(objFilterdata);
    // 10. Finally, rebuild the table using the filtered data
    buildTable(objFilterdata);
  })
};

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);


// Build the table when the page loads


buildTable(tableData);