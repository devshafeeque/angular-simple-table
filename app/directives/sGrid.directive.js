app.directive('sGrid', ['$window', sGrid]);
app.filter('offset', function () {
	return function (input, start) {
		start = parseInt(start, 10);
		return input.slice(start);
	};
});

/* @ngInject */ 
function sGrid($window) {
    var directive = {
    	bindToController: false,
    	controller: sGridCtrl,
    	controllerAs: 'vm',
    	link: link,
    	templateUrl : "views/templates/sGrid.template.html",
    	restrict: 'E',
    	scope: {
    		columns : "=",
    		rows: "=",
    		itemsPerPage : '@'
    	}
    };
    return directive;
    
    function link(scope, element, attrs) {

    	scope.width = $window.innerWidth;
    	
		jQuery('.data-table').each(function() {
    		var thetable=jQuery(this);
    		jQuery(this).find('tbody td').each(function() {
    			jQuery(this).attr('data-heading',thetable.find('thead th:nth-child('+(jQuery(this).index()+1)+')').text());
    		});
    	});

    	scope.sortType = '';
    	scope.sortReverse = false;

    	scope.sortColumn = function(column) {
    		scope.sortType = column;
    		scope.sortReverse = !scope.sortReverse;
    	}

    	scope.currentPage = 0;

    	scope.prevPage = function() {
    		if (scope.currentPage > 0) {
    			scope.currentPage--;
    		}
    	};

    	scope.prevPageDisabled = function() {
    		return scope.currentPage === 0 ? "disabled" : "";
    	};

    	scope.pageCount = function() {
    		return Math.ceil(scope.rows.length/scope.itemsPerPage)-1;
    	};

    	scope.nextPage = function() {
    		if (scope.currentPage < scope.pageCount()) {
    			scope.currentPage++;
    		}
    	};

    	scope.nextPageDisabled = function() {
    		return scope.currentPage === scope.pageCount() ? "disabled" : "";
    	};

    	scope.setPage = function(n) {
    		scope.currentPage = n;
    	};

    	scope.range = function() {
    		var pages = [];
    		// Default page limits
    		var rotate = true;
    		var totalPages = scope.pageCount();
    		var maxSize = 5; 
    		var startPage = 0, endPage = totalPages;
    		var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

		    // recompute if maxSize
		    if (isMaxSized) {
		    	if (rotate) {
        			// Current page is displayed in the middle of the visible ones
        			startPage = Math.max(scope.currentPage - Math.floor(maxSize / 2), 1) - 1;
        			endPage = startPage + maxSize - 1;

        			// Adjust if limit is exceeded
        			if (endPage > totalPages) {
        				endPage = totalPages;
        				startPage = endPage - maxSize + 1;
        			}
        		} else {
        			// Visible pages are paginated with maxSize
        			startPage = (Math.ceil(scope.currentPage / maxSize) - 1) * maxSize + 1;

        			// Adjust last page if limit is exceeded
        			endPage = Math.min(startPage + maxSize - 1, totalPages);
        		}
        	}

    		// Add page number links
    		for (var number = startPage; number <= endPage; number++) {
    			var page = number;
    			pages.push(page);
    		}

    		// Add links to move between page sets
    		if (isMaxSized && maxSize > 0 && (!rotate)) {
    			if (startPage > 1) {
        			if (startPage > 3) { 
        				var previousPageSet = startPage - 1;
        				pages.unshift(previousPageSet);
        			}
        		}

        		if (endPage < totalPages) {
        			if (endPage < totalPages - 2) { 
        				var nextPageSet = endPage + 1;
        				pages.push(nextPageSet);
        			}
        		}
        	}
        	return pages;
        }
    }
}
/* @ngInject */
function sGridCtrl () {
	var vm = {};	
}