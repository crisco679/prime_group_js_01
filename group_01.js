var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calcSti(employee) {
  var result = [];
  for(var i = 0; i < employee.length;i++){
    // Setting employee name

    result[0] = employee[i][0];

     // Checking employee rating

    switch (employee[i][3]) {
      case 3:
        result[1]=.04;
        break;
      case 4:
        result[1]=.06;
        break;
      case 5:
        result[1]= .1;
        break;
      default:
        result[1]= 0;
      }

      // Additional bonus % based on length at company
      if (employee[i][1].length <= 4) {
        result[1] += .05;
      }

      // Remove 1% if income is over $65,000
      if (employee[i][2] > 65000) {
        result[1] -= .01;
      }

      // If bonus is over 13% lower set it to 13%
      if (result[1] > .13) {
        result[1] = .13;
      }

      // Annual Income + STI
      var sti = parseInt(employee[i][2])*result[1];  //calculates STI
      result[2]= sti + parseInt(employee[i][2]); // adds income and STI
      //console.log("Income + STI = " + result[2]);

      //Total bonus
      // Math.round()
      result[3] = Math.round(employee[i][2] * result[1]);


      // Convert decimal to percentage string with %
      result[1] = result[1] * 100 + "%";

      // Final result
      console.log(result);
  }
}
calcSti(employees);
