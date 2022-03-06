window.onload = function() {
        		var now = new Date();
        		var monthNames = [
        			'January',
        			'February',
        			'March',
        			'April',
        			'May',
        			'June',
        			'July',
        			'August',
        			'September',
        			'October',
        			'November',
        			'December'
        		];

        		var today = monthNames[now.getMonth()]+' '+now.getDate() + ', ' + now.getFullYear();
        		document.getElementById('date').innerHTML = today;
        		// Completed
        	}