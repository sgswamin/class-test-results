const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 75;
const jessiePoints = 99;
let didAlexPass = !false;
let samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);
let alexPointsDisplay = "Alex earned " + alexPoints + " points out of " + maxPoints;
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
let samPercentage = (samPoints/maxPoints)*100;
let samPercentDisplay = "Sam scored " + samPercentage +"%";
console.log(samPercentDisplay);
let alexPercentage = (alexPoints/maxPoints)*100;
let alexPercentDisplay = "Alex scored " + alexPercentage + "%";
console.log(alexPercentDisplay);
let jessiePercentage = (jessiePoints/maxPoints)*100;
let jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%";
console.log(jessiePercentDisplay);
let samMissedPoints = maxPoints-samPoints;
let alexMissedPoints = maxPoints-alexPoints;
let jessieMissedPoints = maxPoints-jessiePoints;
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s)";
console.log(samMissedPointsDisplay);
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s)";
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s)";
console.log(alexMissedPointsDisplay);
console.log(jessieMissedPointsDisplay);
let classAveragePoints = (samPoints + alexPoints + jessiePoints)/3;
let classAveragePercent = (classAveragePoints/maxPoints)*100;
let classAvgDisplay = classAveragePoints + classAveragePercent.toFixed(2);
console.log(classAvgDisplay);
let alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);

scores = [samPoints, alexPointsUpdated, jessiePoints];
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
let displayIndex = 0;
for (let i = 0; i < scores.length; i++) {
  // Update raw points
  listItemArray[displayIndex + 1].innerHTML = scores[i] + " points";
  // Update percentages
  listItemArray[displayIndex + 5].innerHTML = ((scores[i] / maxPoints) * 100).toFixed(2) + "%";
  // Update missed points
  listItemArray[displayIndex + 9].innerHTML = (maxPoints - scores[i]) + " point(s)";
  displayIndex += 1; // Move to the next set of items for each student
}