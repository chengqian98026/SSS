/**
 * Created by hxsd on 2016/7/29.
 */
angular.module("myapp").controller("checkoutController",function($scope,shopCart){
    $scope.cartData=shopCart.findAll();
    $scope.totalMon=function(){
        var total=0;
        for(var i=0;i< $scope.cartData.length;i++){
            total+=$scope.cartData[i].product.price*$scope.cartData[i].number;
        }
        return total
    }
    $scope.removeFromCart=function(items){
        shopCart.remove(items.product.name)
    }
});
