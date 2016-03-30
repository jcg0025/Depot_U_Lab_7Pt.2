var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
            return val;
        },

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
             if (Array.isArray(list)){
                for (var i = 0; i < list.length; i++) {
                    iterator(list[i], i, list);
                }
             } else {
                for(var key in list){
                    iterator(list[key], key, list);
                } 
             }
                
            

                  
        },

		filter : function(list, test) {
            var array = [];
            for ( var i = 0; i < list.length; i++){
                if (test(list[i])) {
                    array.push(list[i]);
                }
                
            }
            return array;
        },

		reject : function(list, test) {
             var array = [];
            for ( var i = 0; i < list.length; i++){
                if (test(list[i]) == false) {
                    array.push(list[i]);
                }
                
            }
            return array;
        },

		map : function(list, iterator) {
            var newArray = [];
            for (var i = 0; i <list.length; i++){
                var div = list[i]/2;
                newArray.push(div);
            }
            return newArray;
        },

		pluck : function(list, key) {
            var nuArray = [];
            for (var i = 0; i < list.length; i++){
                nuArray.push(list[i].state);
            }
            return nuArray;
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
            var sum = 0;
            accumulator = accumulator !== undefined ? accumulator : list[0];
            this.each(list, function(item) {
                accumulator = iterator(accumulator, item);
            });
            return accumulator;
           
        },

		every : function(list, iterator) {
            if (iterator === undefined) {
                iterator = this.identity;
            }
            for (var i = 0; i < list.length; i++){
                if(!iterator(list[i])){
                    return false;
                }
            }
            return true;
        },

		some : function(list, iterator) {
            if (iterator === undefined) {
                iterator = this.identity;
            }
            
            for (var i = 0; i < list.length; i++) {
                if(iterator(list[i])) {
                    return true;
                }
            }
            return false;
        },

		// contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {
        },

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {},

		indexOf : function(array, target){
            console.log(target);
            console.log(array);
        },

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




