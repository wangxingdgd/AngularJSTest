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
	    			return $scope.add();
	    		}
	    		if($scope.biz == "2"){
	    			return $scope.subtract();
	    		}
	    		if($scope.biz == "3"){
	    			return $scope.multiplication();
	    		}
	    		if($scope.biz == "4"){
	    			if($scope.num2 == "0"){
	    				$scope.errorMsg = "不能被0除";
	    			}else{
	    				return $scope.division();
	    			}
	    		}
	    	}else{
	    		$scope.errorMsg = "请选择运算";
	    	}
    	}else{
    		$scope.errorMsg = "请填写数字";
    	}
    };
    $scope.add = function(){
    	return Number($scope.num1) + Number($scope.num2);
    }
    $scope.subtract = function(){
    	return Number($scope.num1) - Number($scope.num2);
    }
    $scope.multiplication = function(){
    	return Number($scope.num1) * Number($scope.num2);
    }
    $scope.division = function(){
    	return Number($scope.num1) / Number($scope.num2);
    }
});