"use strict";

/* Graph on Arla Farm Page */

// Fetch the data(no json)
let _data = [{
  year: "year1",
  carbonEmission: 51
}, {
  year: "year2",
  carbonEmission: 50
}, {
  year: "year3",
  carbonEmission: 49
}, {
  year: "year4",
  carbonEmission: 51
}, {
  year: "year5",
  carbonEmission: 48
}, {
  year: "year6",
  carbonEmission: 47
}];

//Prepare data in arrays (no json)
function prepareData(data) {
  let carbon = [];
  let years = [];

  for (let object of data) {
    carbon.push(object.carbonEmission);
    years.push(object.year);
  }
  console.log(carbon);
  console.log(years);

  return {
    cows: carbon,
    years
  }
}


// Appending the chart to the HTML
function appendChart(data) {
  let chartData = prepareData(data);
  console.log(chartData)

  // generate chart
  let chartContainer = document.getElementById('carbon');
  let chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [{
        data: chartData.cows,
        label: 'Co2 Emission Tons',
        fill: false,
        borderColor: "#e755ba",
        borderDash: [6, 6],
        backgroundColor: "#006A38",
        pointBackgroundColor: "#006A38",
        pointBorderColor: "#006A38",
        pointHoverBackgroundColor: "#006A38",
        pointHoverBorderColor: "#006A38",
      }],
      labels: chartData.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 43,
            max: 55
          }
        }]
      }
    }
  });
}

appendChart(_data);





/* Graph on My Farm Page */

// Fetch the data(no json)
let _cowdata = [{
  year: "year1",
  numberOfCows: 23
}, {
  year: "year2",
  numberOfCows: 25
}, {
  year: "year3",
  numberOfCows: 24
}, {
  year: "year4",
  numberOfCows: 26
}, {
  year: "year5",
  numberOfCows: 27
}, {
  year: "year6",
  numberOfCows: 26
}];

//Prepare data in arrays (no json)
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
    cows: cows,
    years
  }
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
        borderDash: [6, 6],
        backgroundColor: "#006A38",
        pointBackgroundColor: "#006A38",
        pointBorderColor: "#006A38",
        pointHoverBackgroundColor: "#006A38",
        pointHoverBorderColor: "#006A38",
      }],
      labels: chartData.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 20,
            max: 30
          }
        }]
      }
    }
  });
}

appendChart(_cowdata);