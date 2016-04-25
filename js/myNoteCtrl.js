app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
    
    $scope.returnNum = function(){
    	$scope.errorMsg = "";
    	if($scope.num1 && $scope.num2){
	    	if($scope.biz){
	    		if($scope.biz == "1"){
	    			$scope.add();
	    		}
	    		if($scope.biz == "2"){
	    			$scope.subtract();
	    		}
	    		if($scope.biz == "3"){
	    			$scope.multiplication();
	    		}
	    		if($scope.biz == "4"){
	    			if($scope.num2 == "0"){
	    				$scope.errorMsg = "不能被0除";
	    			}else{
	    				$scope.division();
	    			}
	    		}
	    	}else{
	    		$scope.errorMsg = "请选择运算";
	    	}
    	}
    };
    $scope.add = function(){
    	$scope.num3 = Number($scope.num1) + Number($scope.num2);
    }
    $scope.subtract = function(){
    	$scope.num3 = Number($scope.num1) - Number($scope.num2);
    }
    $scope.multiplication = function(){
    	$scope.num3 = Number($scope.num1) * Number($scope.num2);
    }
    $scope.division = function(){
    	$scope.num3 = Number($scope.num1) / Number($scope.num2);
    }
});