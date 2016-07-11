var _x_debugging = true;

/**
 * @FunctionName: _XShowBlockUI
 */
function _XShowBlockUI(msg) {
	var msgTemplate = '<table width="100%" border="0">' + '<tr>'
			+ ' <td align="center" valign="center" width="40%" height="80">'
			+ '  <img src="/design/image/ajax-loader2.gif">' + ' </td>'
			+ ' <td align="left" class="blockUI">' + ' {msg}' + ' </td>'
			+ '</tr>' + '</table>';

	msgTemplate = msgTemplate.replace('{msg}', msg);

	$.blockUI({
		message : msgTemplate,
		baseZ : 10010
	});
}// end _XShowBlockUI

function _XShowBlockUI_SP(msg) {
	var msgTemplate = '<table width="100%" border="0">' + '<tr>'
			+ ' <td align="center" valign="center" width="20%" height="80">'
			+ '  <img src="/design/image/ajax-loader2.gif">' + ' </td>'
			+ ' <td align="left" class="blockUI">' + ' {msg}' + ' </td>'
			+ '</tr>' + '</table>';

	msgTemplate = msgTemplate.replace('{msg}', msg);

	$.blockUI({
		message : msgTemplate,
		baseZ : 10010,
    css: {
    padding: 0,
    margin: 0,
    width: '90%',
    top: '40%',
    left: '5%',
    textAlign: 'center'
}
	});
}// end _XShowBlockUI

function _XValidateNum2(event) {

	if (event.which > 31) {
		if (event.which
				&& (event.which > 47 && event.which < 58 || event.which == 8)) {

			if (event.which > 47 && event.which < 58
					&& !(event.which > 47 && event.which < 51)) {
				event.preventDefault();
			}

		} else {

			event.preventDefault();
		}
	}

}// end _XValidateNum

/**
 * @FunctionName: _XValidateNum Number validation check when key input on input
 *                field
 */
function _XValidateNum(event) {

	if (event.which > 31) {
		if (event.which
				&& (event.which > 47 && event.which < 58 || event.which == 8)) {

		} else {

			event.preventDefault();
		}
	}

	/*
	 * var theEvent = evt || window.event; var key = theEvent.keyCode ||
	 * theEvent.which;
	 *
	 * key = String.fromCharCode( key );
	 *
	 * var regex = /[0-9]|\./;
	 *
	 * alert(key);
	 *
	 * if( !regex.test(key) ) {
	 *
	 * theEvent.returnValue = false; if(theEvent.preventDefault)
	 * theEvent.preventDefault(); }
	 */

}// end _XValidateNum

/**
 * @FunctionName: _XTrim String Trim function
 */
function _XTrim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}// end _XTrim

/**
 * @FunctionName : _XConsoleLog For console debugging created by
 *               swsong@gtechk.co.kr
 */
function _XConsoleLog(msg) {
	if (_x_debugging == true)
		if (typeof console == "undefined" || typeof console.log == "undefined") {
			// alert('no console');
		} else {
			console.log(msg);
		}

}// end _XConsoleLog

/**
 * @FunctionName : _XAlert created by swsong@gtechk.co.kr
 */
function _XAlert(msg) {
	if (_x_debugging == true)
		alert(msg);
}

/**
 * @FunctionName : _ForceResetFormValuesWithID
 * @Parameters tagID : object tag id which want to reset child objects
 */
function _ForceResetFormValuesWithID(tagID) {
	// (force reset)강제리셋
	$(':input', '#' + tagID).each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase(); // normalize case
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = "";
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = 0;
	});

}// end _ForceResetFormValuesWithID

/**
 * @FunctionName: _DisableInputObjsWithID
 * @Parameters tagID : object tag id which want to disable child objects
 */
function _DisableInputObjsWithID(tagID, bDisable) {
	$(':input', '#' + tagID).each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase(); // normalize case
		if (type == 'text' || type == 'password' || tag == 'textarea') {
			if (bDisable)
				this.value = "";

			this.disabled = bDisable;
		} else if (type == 'checkbox' || type == 'radio') {
			if (bDisable)
				this.checked = false;

			this.disabled = bDisable;
		} else if (tag == 'select') {
			if (bDisable)
				this.selectedIndex = 0;

			this.disabled = bDisable;
		}

	});
}// end _DisableInputObjsWithID

/*
 * modify by k.s.c 2007-11-15
 */
function FlashObject(swf, width, height, bgcolor, id, flashvars) {
	var strFlashTag = new String();

	if (navigator.appName.indexOf("Microsoft") != -1) {
		strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
		strFlashTag += 'id="' + id + '" width="' + width + '" height="'
				+ height + '">';
		strFlashTag += '<param name="movie" value="' + swf + '"/>';

		if (flashvars != null) {
			strFlashTag += '<param name="flashvars" value="' + flashvars
					+ '"/>';
		}

		strFlashTag += '<param name="quality" value="best"/>';
		strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>';
		strFlashTag += '<param name="menu" value="false"/>';
		strFlashTag += '<param name="salign" value="LT"/>';
		strFlashTag += '<param name="scale" value="scale"/>';
		// strFlashTag += '<param name="wmode" value="transparent"/>';
		strFlashTag += '<param name="allowScriptAccess" value="sameDomain"/>';
		strFlashTag += '</object>';
	} else {
		strFlashTag += '<embed src="' + swf + '" ';
		strFlashTag += 'quality="best" ';
		strFlashTag += 'bgcolor="' + bgcolor + '" ';
		strFlashTag += 'width="' + width + '" ';
		strFlashTag += 'height="' + height + '" ';
		strFlashTag += 'menu="false" ';
		strFlashTag += 'scale="noscale" ';
		strFlashTag += 'id="' + id + '" ';
		strFlashTag += 'salign="LT" ';
		// strFlashTag += 'wmode="transparent" ';
		strFlashTag += 'allowScriptAccess="sameDomain" ';
		if (flashvars != null) {
			strFlashTag += 'flashvars="' + flashvars + '" ';
		}

		strFlashTag += 'type="application/x-shockwave-flash" ';
		strFlashTag += 'pluginspage="http://www.macromedia.com/go/getflashplayer">';
		strFlashTag += '</embed>';
	}

	document.write(strFlashTag);
}

onload = function() {
	var theframes = document.getElementsByTagName('iframe');
	for (var i = 0; i < theframes.length; i++) {
		theframes[i].setAttribute("allowTransparency", "true");
	}
};

function smartRollover() {
	if (document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for (var i = 0; i < images.length; i++) {
			if (images[i].getAttribute("src").match("_off.")) {
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				};
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				};
			}
		}
	}
}

if (window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

function change_background(that) {
	that.style.backgroundImage = "url('/design/image/menu2_on.gif')";
}
function change2_background(that) {
	that.style.backgroundImage = "url('/design/image/menu2.gif')";
}
function change_btn(that) {
	that.style.backgroundImage = "url('/design/image/btn_2_on.gif')";
}
function change2_btn(that) {
	that.style.backgroundImage = "url('/design/image/btn_2.gif')";
}
function change_big_btn(that) {
	that.style.backgroundImage = "url('/design/image/btn2_2_on.gif')";
}
function change2_big_btn(that) {
	that.style.backgroundImage = "url('/design/image/btn2_2.gif')";
}
function change_background2(that) {
	that.style.backgroundImage = "url('/design/image/menu_m_on.gif')";
}
function change2_background2(that) {
	that.style.backgroundImage = "url('/design/image/menu_m.gif')";
}
function change_background_report(that) {
	that.style.backgroundImage = "url('/design/image/menu_report_over.gif')";
}
function change2_background_report(that) {
	that.style.backgroundImage = "url('/design/image/menu_report.gif')";
}
