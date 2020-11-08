"use strict";

/* Fetch the data(no json)
let _data = [{
  year: "year1",
  numberOfCows: 51
}, {
  year: "year2",
  numberOfCows: 50
}, {
  year: "year3",
  numberOfCows: 49
}, {
  year: "year4",
  numberOfCows: 51
}, {
  year: "year5",
  numberOfCows: 50
}];
*/

// 1: data
// Array of objects
let _data = [];

async function getData() {
  let response = await fetch("json/alldata.json");
  _data = await response.json();
  appendChart();
};

getData();


/* Prepare data in arrays (no json)
function prepareData(data) {
  let cows = [];
  let years = [];

  for (let object of data) {
    cows.push(object.numberOfCows);
    years.push(object.year);
  }
  console.log(cows);
  console.log(years);

  return {
    cows,
    years
  }
}
*/


// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
function prepareData(data) {
  // declaring two array to store the data 
  let year1 = [];
  let year2 = [];
  let year3 = [];
  let year4 = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    year1.push(object.year1);
    year2.push(object.year2);
    year3.push(object.year3);
    year4.push(object.year4);
    year5.push(object.year5);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    year1,
    year2,
    year3,
    year4,
    year5
  };
}


// Appending the chart to the HTML
function appendChart(data) {
  let chartData = prepareData(data);
  console.log(chartData)

  // generate chart
  let chartContainer = document.getElementById('cows');
  let chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [{
        data: chartData.cows,
        label: 'Number of Cows',
        fill: false,
        borderColor: "#e755ba",
        borderDash: [5, 5],
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: chartData.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 45,
            max: 55
          }
        }]
      }
    }
  });
}

appendChart(_data);