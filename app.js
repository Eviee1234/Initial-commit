// log a message to the console
console.log("Hello from Eve!");
let viz;

//to do list:
//1. find URL of dashboard
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
//2. find the vizContainer on the page
const vizContainer = document.getElementById("vizContainer");
//3. Create viz options
const options = {
  device: "desktop",
  Region: "North",
  Category: ["Furniture", "Technology"],

  onFirstInteractive: function () {
    console.log("The viz has loaded!");
    document.getElementById("showViz").disabled = false;
    document.getElementById("hideViz").disabled = false;
  },
};

function initviz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

// On click of the 'hide viz' button - hide the dashboard
const hideVizButton = document.getElementById("hideViz");
hideVizButton.addEventListener("click", function () {
  viz.hide();
  //show the show button
  document.getElementById("hideViz").style.display = "none";
  //show the hide button
  document.getElementById("showViz").style.display = "inline";
});

//On click of the 'show viz' button - show the dashboard
const showVizButton = document.getElementById("showViz");
showVizButton.addEventListener("click", function () {
  viz.show();
  //show the hide button
  document.getElementById("showViz").style.display = "none";
  //show the show button
  document.getElementById("hideViz").style.display = "inline";
});

const exportToPDF = document.getElementById("exportToPDF");
exportToPDF.addEventListener("click", function () {
  viz.showExportPDFDialog();
});

const exportToCrossTab = document.getElementById("exportToCrossTab");
exportToCrossTab.addEventListener("click", function () {
  viz.showExportCrossTabDialog();
});

const exportToPowerPoint = document.getElementById("exportToPowerPoint");
exportToPowerPoint.addEventListener("click", function () {
  viz.showExportPowerPointDialog();
});

document.addEventListener("DOMContentLoaded", initviz);
