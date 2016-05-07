;(function(window, undefined) {

	'use strict';

// initializing default properties

	CustomAlert.prototype.options = {
		wrapper : document.body,
		type : "alert",
		heading : undefined,
		ok_text : "Ok",
		cancel_text : "Cancel",
		message : "Default message.",
		autoHide : false
	};

// Override given properties and using default values for rest

	function extend(a, b) {
		for (var key in b ) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		console.log(a);
		return a;
	}

	function CustomAlert(options) {
		var that = this;
		that.options = extend({}, that.options);
		extend(that.options, options);
		that._init();
	}


	CustomAlert.prototype._init = function() {
		var ok = this.options.ok_text;
		var cancel = this.options.cancel_text;
		this.blkr = document.createElement('div');
		this.blkr.className = 'custom-alert-container';
		this.sa = document.createElement('div');
		this.sa.className = 'custom-alert';
		var strinner = '';
		if (this.options.heading !== undefined) {
			strinner += '<div class="ca_heading">' + this.options.heading + '</div>';
		}
		strinner += '<span class="custom-alert__content">';
		strinner += this.options.message;
		strinner += '</span>';
		if (this.options.type.toLowerCase() == "confirm") {
			strinner += '<span class="alert-bottom-bar"><div class="custom-alert__Confirm">' + ok + '</div>';
			strinner += '<div class="custom-alert__Dismiss">' + cancel + '</div>';
		} else if (this.options.type.toLowerCase() == "alert") {
			strinner += '<span class="alert-bottom-bar"><div class="custom-alert__Confirm">' + ok + '</div>';
		} else{
			this.options.autoHide = true;
		}
		strinner += '</span>';
		this.sa.innerHTML = strinner;
		this.blkr.appendChild(this.sa);
		this._events();
	};

	CustomAlert.prototype._events = function() {
		var btn_dismiss = this.sa.querySelector('.custom-alert__Dismiss'), btn_confirm = this.sa.querySelector('.custom-alert__Confirm'), self = this;
		if (btn_dismiss) {
			btn_dismiss.addEventListener("click", function(e) {
				e.preventDefault();
				self.hide();
				self.dismiss();
			});
		}
		if (btn_confirm) {
			btn_confirm.addEventListener("click", function(e) {
				e.preventDefault();
				self.hide();
				self.confirm();
			});
		}
	};

	CustomAlert.prototype.show = function() {
		this.options.wrapper.appendChild(this.blkr);
		var that = this;
		if (this.options.autoHide === true) {
			setTimeout(function() {
				that.hide();
			}, 2000);
		}
	};

	CustomAlert.prototype.hide = function() {
		this.options.wrapper.removeChild(this.blkr);
	};

	CustomAlert.prototype.confirm = function() {
	};

	CustomAlert.prototype.dismiss = function() {
	};

	window.CustomAlert = CustomAlert;

})(window);
