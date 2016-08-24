/**
 * Created by hxsd on 2016/7/28.
 */
    /***管理过滤器*/
var myfilter=angular.module("customFilter",[]);
myfilter.filter("range",function(){
    return function(product,present,diffluence){
        if(angular.isArray(product)&&angular.isNumber(present)&&angular.isNumber(diffluence)){
            var startIndex=(present - 1)*diffluence;
            if(startIndex>=product.length){
                return [];
            }else{
                return product.splice(startIndex,diffluence)
            }
        }else {
            return product
        }

    }
});
myfilter.filter("nacCount",function(){
    return function(product,diffluence){
        if(angular.isArray(product)&&angular.isNumber(diffluence)){
            var navArr=[];
            var navTotal=Math.ceil(product.length/diffluence);
            for(var i=0;i<navTotal;i++){
                navArr.push(i+1);
            }
            return navArr
        }else{
            return product
        }
    }
});