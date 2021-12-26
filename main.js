function remove_colour() {
	try {
		d = document.getElementsByClassName('rated-user');
		while (true) {
			for (let i = 0; i < d.length; i++) {
				d[i].title = "";
				d[i].classList = "";							
			}
			d = document.getElementsByClassName('rated-user');
			if (d.length == 0)
				break;
		}
	} catch {
		console.log(err);
	}
}

function remove_underlines() {
	try {
		var iter=100;
		d = document.getElementsByTagName('a');
		while (iter-->0) {
			for (let i = 0; i < d.length; i++) {
				HREF = d[i].href+"";
				if(HREF.search("profile/")!=-1)
					d[i].style['text-decoration'] = "None";
			}
			d = document.getElementsByTagName('a');
			if (d.length == 0)
				break;
		}
	} catch {
		console.log(err);
	}
}




function remove_cols() {
	try {
		d = document.getElementsByClassName('user-cyan')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-legendary')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-green')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-blue')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-red')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-violet')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-orange')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
			d[i].style['text-decoration'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementsByClassName('user-gray')
		for (let i = 0; i < d.length; i++) {
			d[i].style['display'] = "None";
		}
	} catch (err) {
		console.log(err);
	}

	try {
		d = document.getElementById('placeholder')
		d.style['display'] = "None";
	} catch (err) {
		console.log(err);
	}

}

function remove_contest_table() {
	d = document.getElementsByClassName('user-contests-table')
	for (let i = 0; i < d.length; i++) {
		d[i].style['display'] = "None";
	}
}

function remove_rating_graph(){
	d = document.getElementById('usersRatingGraphPlaceholder');
	d.style = "display:none;"
}

try {
	remove_colour();
} catch (err) {
	console.log(err);
}

try {
	remove_cols();
} catch (err) {
	console.log(err);
}

try {
	remove_contest_table();
} catch (err) {
	console.log(err);
}

try {
	remove_rating_graph();
} catch (err) {
	console.log(err);
}

try {
	remove_underlines();
} catch (err) {
	console.log(err);
}

try {
	dd = document.getElementsByTagName('body')
	dd[0].style['display'] = "block";
} catch (err) {
	console.log(err);
}


