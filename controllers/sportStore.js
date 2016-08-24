/**
 * Created by hxsd on 2016/7/28.
 */
angular.module("myapp")
    .constant("orderUrl","JSON/orderUrl.json")
    .constant("categorigsUrl","JSON/categorigs.json")
    .constant("productsUrl","JSON/products.json")
    .controller("indexRegulator",function($scope,$http,categorigsUrl,productsUrl,shopCart,orderUrl,$location){
    $scope.date={};

    $http.get(categorigsUrl).success(function(data){
        $scope.date.categories=data
    });
    $http.get(productsUrl).success(function(data){
        $scope.date.products=data
    });

    $scope.date.shipping={};

    $scope.sendOrder=function(){
        var order=angular.copy($scope.date.shipping);
        order.products=shopCart.findAll();
        $http.post(orderUrl,order)
            .success(function(data,status){
                $scope.date.shipping.orderID=data.orderID;
                shopCart.clear();
            })
            .error(function(data,status){
                $scope.date.shipping.errorStatus=status
            })
            .finally(function(){
                $location.path("complete")
            })

    };


});