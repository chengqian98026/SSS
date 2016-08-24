/**
 * Created by hxsd on 2016/7/28.
 */
angular.module("myapp")
    .constant("dyestuff","btn-primary")
    .controller("productListcontroller",function($scope,dyestuff,shopCart){
    $scope.suibian=null;

    $scope.selectCategory=function(category){
        $scope.suibian=category
    };
    $scope.showBycategory=function(product){
        return $scope.suibian==null || $scope.suibian==product.category;
    };
    $scope.CategoryClass=function(Class){
        return Class==$scope.suibian?dyestuff:""
    };

    $scope.present=1;
    $scope.diffluence =3;
    $scope.appr=function(page){
        return $scope.present=page
    };
    $scope.apprClass=function(Class){
        return Class==$scope.present?dyestuff:""
    };
    $scope.addTocat=function(product){
        shopCart.add(product)
    }

});
