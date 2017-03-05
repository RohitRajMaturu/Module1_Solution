(function (){

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', function($scope){

var txtVal=""
$scope.LunchCheckCalculator=function(txtVal){
if(txtVal==null || !txtVal){
  $scope.message='Please enter data first';
}
else {
  var lmenulist=txtVal.split(',');
  var count=lmenulist.length;
  if(count>3)
  {
    $scope.message="Too much!";
  }
  else {
    $scope.message="Enjoy!";
  }
}
}
})
})();
