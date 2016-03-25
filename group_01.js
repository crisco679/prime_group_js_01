function Person(name,empNum,salary,rating){
  this.name=name;
  this.empNum=empNum;
  this.salary=salary;
  this.rating=rating
}

var atticus = new Person('Atticus','2405','47000',3)
var jem = new Person('Jem','62347','63500',4)
var boo = new Person('Boo', '11435','54000',3)
var scout = new Person('Scout','6243','74750',5)

// var atticus = ["Atticus", "2405", "47000", 3];
// var jem = ["Jem", "62347", "63500", 4];
// var boo = ["Boo", "11435", "54000", 3];
// var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calcSti(employee) {
  var result = {};


    // Setting employee name

    result.name = employee.name;

     // Checking employee rating

    switch (employee.rating) {
      case 3:
        result.percSti=.04;
        break;
      case 4:
        result.percSti=.06;
        break;
      case 5:
        result.percSti= .1;
        break;
      default:
        result.percSti= 0;
      }

      // Additional bonus % based on length at company
      if (employee.empNum.length <= 4) {
        result.percSti += .05;
      }

      // Remove 1% if income is over $65,000
      if (employee.salary > 65000) {
        result.percSti -= .01;
      }

      // If bonus is over 13% lower set it to 13%
      if (result.percSti > .13) {
        result.percSti = .13;
      }

      // Annual Income + STI
      var sti = parseInt(employee.salary)*result.percSti;  //calculates STI
      result.annComp= sti + parseInt(employee.salary); // adds income and STI
      //console.log("Income + STI = " + result[2]);

      //Total bonus
      // Math.round()
      result.bonus = Math.round(employee.salary * result.percSti);


      // Convert decimal to percentage string with %
      result.percSti = result.percSti * 100 + "%";

      // Final result
      console.log(result);
  }

for(var it=0;it<employees.length;it++){
calcSti(employees[it]);

}
