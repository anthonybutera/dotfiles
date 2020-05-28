"use strict";

//This is a register used to manage which alarms are actually sounding
//It is used to ensure that sounds are stopped and started correctly
var soundingAlarmsRegister = [];

//Scans through all stored alarms, deletes ones from the past
//and recreates repeating ones for the next cycle
//and updates storage
function tidyReminders() {
	chrome.storage.sync.get(["alarms", "offset"], function (items) {
		var aldate,
			aChange = false,
			d = new Date(Date.now() + (items.offset * 1000 * 60 * 60));
		items.alarms.forEach(function (alarm, id, alarms) {
			if (alarm[0] < d.getTime()) {
				//It happens in the past...
				if (alarm[3].indexOf(1) > -1) {
					//It's a repeater, so let's recreate it at the next repeat day (which might be today)
					//First, set the time to today, as this is the earliest possible next occurrence
					aldate = new Date(alarm[0]);
					aldate.setDate(d.getDate());
					aldate.setMonth(d.getMonth());
					aldate.setFullYear(d.getFullYear());
					alarm[0] = aldate.getTime();
					//while alarm is in the past or the repeat day is not in the list add one day
					while ((alarm[0] < d.getTime()) || (alarm[3][aldate.getDay()] === 0)) {
						aldate.setDate(aldate.getDate() + 1);
						alarm[0] = aldate.getTime();
					}
					//reset the alarm for the new time by creating a new one
					chrome.alarms.create("a_" + alarm[2] + alarm[0], { "when": alarm[0] });
					aChange = true;
				} else {
					//It's not a repeater, and it's in the past, so delete it
					alarms.splice(id, 1); //delete it and hop back in the iteration
					aChange = true;
				}
			}
		});
		if (aChange) {
			chrome.storage.sync.set({ "alarms": items.alarms });
		}
		//Now we scan through each reminder in items and if there is no alarm set for it, we set one
		//This is specifically for the scenario where a reminder has been set on one computer and the alarm needs to be set up on another
		var i = 0;
		for (i = 0; i < items.alarms.length; i++) {
			var alarmName = "a_" + items.alarms[i][2] + items.alarms[i][0];
			chrome.alarms.get(alarmName, function (a) {
				if (a) {
					//console.log("Reminder has alarm already: " + alarmName);
				} else {
					if (typeof items.alarms[i] === "undefined") {
						//this alarm has been deleted - clear it out
						tidyReminders();
					} else {
						chrome.alarms.create(alarmName, { when: items.alarms[i][0] });
					}
				}
			});
		}
	});
}

//Function that sets an alarm for each reminder in storage
function instantiateReminders() {
	chrome.storage.sync.get("alarms", function (items) {
		items.alarms.forEach(function (alarm, id, alarms) {
			chrome.alarms.create("a_" + alarm[2] + alarm[0], { "when": alarm[0] });
		});
	});
}

//Adds a new reminder to the store and sets an alarm for it
function addReminder(alarm) {
	chrome.storage.sync.get(["alarms", "offset"], function (items) {
		//Only add repeating reminders and ones in the future
		if (alarm[3].indexOf(1) > -1) {
			items.alarms.push(alarm);
			chrome.storage.sync.set({ "alarms": items.alarms });
			tidyReminders();
		} else {
			if (alarm[0] > (Date.now() + (items.offset * 60 * 60 * 1000))) {
				items.alarms.push(alarm);
				chrome.storage.sync.set({
					"alarms": items.alarms
				});
				chrome.alarms.create("a_" + alarm[2] + alarm[0], { "when": (alarm[0] - (items.offset * 60 * 60 * 1000)) });
			} else {
				console.log("Alarm not added because it is in the past");
			}
		}
	});
}

//Deletes a reminder and removes its alarm
function deleteReminder(alarmToDelete) {
	chrome.storage.sync.get("alarms", function (items) {
		chrome.alarms.clear("a_" + items.alarms[alarmToDelete][2] + items.alarms[alarmToDelete][0]);
		items.alarms.splice(alarmToDelete, 1);
		chrome.storage.sync.set({ "alarms": items.alarms });
	});
}

// Function which shows the notification for an alarm
function soundAlarm(alarmName) {
	//updateTime();
	chrome.storage.sync.get(["alarms", "offset", "handsColour", "hoverFormat"], function (items) {
		//Create a picture of a clock with the time on it
		var notification, thisReminder;
		items.alarms.forEach(function (item, id, items) {
			if ("a_" + item[2] + item[0] === alarmName) {
				thisReminder = item;
			}
		});
		//Maybe add a handler here to ensure thisReminder is populated

		//Here is the container for the clock image that is updated and the
		//image then shown in the notification pop up
		var notificationCanvas = document.createElement('canvas');
		notificationCanvas.id = "notificationCanvas";
		notificationCanvas.height = "128";
		notificationCanvas.width = "128";
		document.body.appendChild(notificationCanvas);

		paintClock(document.querySelector("#notificationCanvas"), ({
			colour: items.handsColour,
			ticks: 12,
			secondHand: false,
			border: true,
			numbers: true
		}),
			items.offset);

		//Create the notification itself
		chrome.notifications.create(
			"", //Let the NotificationId be automatically generated
			{
				type: "basic",
				title: thisReminder[2],
				message: timeString(items.hoverFormat, new Date(thisReminder[0])),
				iconUrl: document.querySelector("#notificationCanvas").toDataURL(),
				buttons: [
					{
						title: "Snooze",
						iconUrl: "/assets/icon16.png"
					},
					{
						title: "Close",
						iconUrl: "/assets/delete.png"
					}
				]
			},
			function (id) {
				//link the notification with the alarm for snooze and silence purposes
				soundingAlarmsRegister.push({
					identifier: id,
					alarm: thisReminder
				});
				//Play the sound in a loop
				if (thisReminder[1] != "nothing") {
					var sound = document.createElement('audio');
					sound.src = "../assets/" + thisReminder[1] + ".ogg";
					sound.id = thisReminder[1];
					sound.loop = true;
					document.body.appendChild(sound);
					if (typeof thisReminder[4] != "undefined") {
						sound.volume = parseFloat(thisReminder[4]);
					}
					sound.play();
				}
			}
		);
	});
}

//Takes a string, and returns an array of integers contained within the string
function intArray(s) {
	var intArr, ln, i;
	intArr = s.split(",");
	ln = intArr.length;
	for (i = 0; i < ln; i++) {
		intArr[i] = parseInt(intArr[i], 10);
	}
	return intArr;
}

//Function used by popup.js and the background page which draws a clock on canvas cvs
function paintClock(cvs, options, offset) {

	//Set up the square to draw on, empty it and save this as a setting
	var d, i, size, c, ticklength, fontheight, borderwidth, tickgap, fontcent39,
		fontsize, fontcent126, seclength, sechang, minlength, minhang, hourlength,
		hourhang, secwidth, hourwidth, minwidth;
	d = new Date(Date.now() + (offset * 1000 * 60 * 60));
	size = cvs.height / 2;
	c = cvs.getContext("2d");
	c.clearRect(0, 0, 2 * size, 2 * size);
	c.save();

	//Set the origin of the drawing area to the middle
	c.translate(size, size);

	//Select the right pen colour
	c.fillStyle = options.colour;
	c.strokeStyle = options.colour;
	c.lineCap = "round"; //and a beautiful round end to the line

	//Setting up the dimensions for the clock components
	ticklength = size / 15;
	fontheight = size / 5;
	borderwidth = size / 30;
	tickgap = size / 200;
	fontcent39 = size - borderwidth - borderwidth - tickgap - ticklength - tickgap - c.measureText("9").width / 2;
	fontsize = size / 20;
	fontcent126 = size - borderwidth - borderwidth - borderwidth - tickgap - ticklength - tickgap - fontsize;
	seclength = 1.05 * (size - borderwidth - borderwidth - tickgap - ticklength);
	sechang = 0.05 * (size - borderwidth - tickgap - ticklength);
	minlength = 1.05 * (size - borderwidth - borderwidth - tickgap - ticklength);
	minhang = 0.2 * (size - borderwidth - tickgap - ticklength);
	hourlength = 0.7 * (size - borderwidth - borderwidth - tickgap - ticklength);
	hourhang = 0.15 * (size - borderwidth - tickgap - ticklength);
	secwidth = size / 100;
	minwidth = size / 25;
	if (minwidth < 2) {
		minwidth = 2;
	}
	hourwidth = size / 20;
	if (hourwidth < 2) {
		hourwidth = 2;
	}
	//If selected, draw twelve little tick marks around the edge
	if (options.numbers) {
		c.font = fontheight + "px sans-serif"; //font size should be 10% of width
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.fillText("12", 0, -fontcent126);
		c.fillText("6", 0, fontcent126);
		c.fillText("9", -fontcent39, 0); //size/20 is half the height of the text
		c.fillText("3", fontcent39, 0);
	}
	if (options.ticks) {
		for (i = 0; i < options.ticks; i++) {
			c.beginPath();
			c.moveTo(0, size - borderwidth - borderwidth - tickgap);
			c.lineTo(0, size - borderwidth - borderwidth - tickgap - ticklength);
			c.stroke();
			c.rotate((2 * Math.PI) / options.ticks);
		}
	}
	if (options.secondHand) {
		//draw the second hand
		c.lineWidth = secwidth;
		c.beginPath();
		c.rotate((d.getSeconds() / 60) * 2 * Math.PI); //rotate
		c.moveTo(0, sechang);
		c.lineTo(0, -seclength);
		c.stroke();
		c.rotate((d.getSeconds() / 60) * -2 * Math.PI); //and back
	}
	//draw the minute hand
	c.lineWidth = minwidth;
	c.beginPath();
	c.rotate(((d.getMinutes() / 60 + d.getSeconds() / 3600)) * 2 * Math.PI); //rotate
	c.moveTo(0, minhang); //
	c.lineTo(0, -minlength);
	c.stroke();
	c.rotate(((d.getMinutes() / 60 + d.getSeconds() / 3600)) * -2 * Math.PI); //and back

	//draw the hour hand
	c.lineWidth = hourwidth;
	c.beginPath();
	c.rotate(((d.getHours() / 12) + (d.getMinutes() / 720)) * 2 * Math.PI);
	c.moveTo(0, hourhang);
	c.lineTo(0, -hourlength);
	c.stroke();

	if (options.border) {
		//circle around the edge
		c.beginPath();
		c.lineWidth = borderwidth;
		c.arc(0, 0, size - borderwidth, 0, 2 * Math.PI);
		c.stroke();
	}
	c.restore();
}

//Converts a date object into a string based on a string mask
function timeString(fmt, d) {
	var curr_day, curr_date, curr_month, curr_year, hours, minutes, seconds, meri,
		d_names, m_names, sDate, ln, i;

	curr_day = d.getDay();
	curr_date = d.getDate();
	curr_month = d.getMonth();
	curr_year = d.getFullYear();
	hours = d.getHours();

	if (hours >= 12) {
		hours -= 12;
		meri = "pm";
	} else {
		meri = "am";
	}
	if (hours === 0) {
		hours = 12;
	}

	minutes = d.getMinutes();
	if (String(minutes).length === 1) {
		minutes = "0" + String(minutes);
	}

	seconds = d.getSeconds();
	if (String(seconds).length === 1) {
		seconds = "0" + String(seconds);
	}

	d_names = [chrome.i18n.getMessage("Sunday"), chrome.i18n.getMessage("Monday"), chrome.i18n.getMessage("Tuesday"), chrome.i18n.getMessage("Wednesday"), chrome.i18n.getMessage("Thursday"), chrome.i18n.getMessage("Friday"), chrome.i18n.getMessage("Saturday")];
	m_names = [chrome.i18n.getMessage("January"), chrome.i18n.getMessage("February"), chrome.i18n.getMessage("March"), chrome.i18n.getMessage("April"), chrome.i18n.getMessage("May"), chrome.i18n.getMessage("June"), chrome.i18n.getMessage("July"), chrome.i18n.getMessage("August"), chrome.i18n.getMessage("September"), chrome.i18n.getMessage("October"), chrome.i18n.getMessage("November"), chrome.i18n.getMessage("December")];

	//Loop through each item in the format to build the string
	sDate = "";
	ln = fmt.length;
	for (i = 0; i < ln; i++) {
		//Original characters
		//t=12 T=24 a=am D=wordDay d=noDay e=2digitDay s=/ M=wordMonth m=noMonth y=yy Y=yyyy
		//Additional characters now permitted
		//j (same as d), l (same as D), S (st, nd, rd or th)
		//J (first three characters of day)
		//N (first three characters of month)
		//n (same as m)
		//A (AM/PM)
		//g (12h hour, no leading zero), G (24h hour, no leading zero),
		//h (12h hour, leading zero), H (24h hour, leading zero), i (minute, leading zero)
		//x (seconds, leading zero)
		//\ (ignore next character)
		//Anything else, show as is
		switch (fmt.charAt(i)) {
			case "\\":
				i++;
				sDate += fmt.charAt(i);
				break;
			case "S":
				switch (parseInt(curr_date, 10) % 10) {
					case 1:
						if (curr_date === 11) {
							sDate += "th";
						} else {
							sDate += "st";
						}
						break;
					case 2:
						if (curr_date === 12) {
							sDate += "th";
						} else {
							sDate += "nd";
						}
						break;
					case 3:
						if (curr_date === 13) {
							sDate += "th";
						} else {
							sDate += "rd";
						}
						break;
					default:
						sDate += "th";
				}
				break;
			case "t":
				sDate += hours + ":" + minutes;
				break;
			case "g":
				sDate += hours;
				break;
			case "h":
				if (String(hours).length < 2) {
					sDate += "0";
				}
				sDate += hours;
				break;
			case "i":
				sDate += minutes;
				break;
			case "x":
				sDate += seconds;
				break;
			case "H":
				if (String(d.getHours()).length < 2) {
					sDate += "0";
				}
				sDate += d.getHours();
				break;
			case "G":
				sDate += d.getHours();
				break;
			case "T":
				if (String(d.getHours()).length < 2) {
					sDate += "0";
				}
				sDate += d.getHours() + ":" + minutes;
				break;
			case "a":
				sDate += meri;
				break;
			case "A":
				sDate += meri.toUpperCase();
				break;
			case "s":
				sDate += "/";
				break;
			case "l":
			case "D":
				sDate += d_names[curr_day];
				break;
			case "J":
				sDate += d_names[curr_day].substring(0, 3);
				break;
			case "j":
			case "d":
				sDate += curr_date;
				break;
			case "e":
				if (String(curr_date).length < 2) {
					sDate += "0";
				}
				sDate += curr_date;
				break;
			case "M":
				sDate += m_names[curr_month];
				break;
			case "N":
				sDate += m_names[curr_month].substring(0, 3);
				break;
			case "n":
			case "m":
				if (String(curr_month + 1).length < 2) {
					sDate += "0";
				}
				sDate += (curr_month + 1);
				break;
			case "Y":
				sDate += curr_year;
				break;
			case "y":
				sDate += String(curr_year).substr(2);
				break;
			default:
				sDate += fmt.charAt(i);
				break;
		}
	}
	return sDate;
}

//A key function, it updates the clock. It's called once a minute and on any change from the options page
function updateTime() {
	chrome.storage.sync.get(null, function (items) {
		var d, hours, minutes, fill, time, ctx, x, y, width, height, radius;
		d = new Date(Date.now() + (items.offset * 1000 * 60 * 60) + 1000); //that last 1000 is to make sure there are no on the minute edge cases
		//First build the 4 character string to put in
		minutes = d.getMinutes();
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		fill = "";
		hours = d.getHours();
		if ((hours > 12) && (items.hoverFormat.indexOf("t") > -1)) {
			hours -= 12;
		}
		if ((hours + "").length < 2) {
			fill = ":";
		}
		time = hours + fill + minutes;
		if (items.showDigital && items.showAnalogue) {
			//The analogue and digital clocks are required, so show the badge
			//(NB The Linux fix is no longer (2.3.0.0) included below)
			//Set the badge colour
			chrome.browserAction.setBadgeBackgroundColor({
				color: intArray(items.badgeColour)
			});
			//and show the badge
			chrome.browserAction.setBadgeText({ text: hours + fill + minutes });
		} else {
			//We don't want the badge, so set it nothing
			chrome.browserAction.setBadgeText({ text: "" });
		}

		//For each canvas resize it according to its location in the array
		//Take the position, add one and multiply by 19
		//Then draw a clock in it!

		//Create a canvas for each scale
		//As of Chrome 23, only scales 1 and 2 are supported
		var canvases = [document.createElement('canvas'), document.createElement('canvas')];

		canvases.forEach(function (canvas, id, canvases) {
			ctx = canvas.getContext("2d");
			canvas.width = (id + 1) * 19;
			canvas.height = (id + 1) * 19;

			if (items.showAnalogue === true) {
				//Draw a new clock
				paintClock(canvas, ({
					colour: items.handsColour,
					ticks: items.dots,
					secondHand: false,
					border: false,
					numbers: false
				}),
					items.offset);
			} else {
				if (items.showDigital) {
					//No analogue, only digital, so let's fill the space
					x = 0;
					y = 0;
					width = canvas.width;
					height = canvas.height;
					radius = canvas.width * 0.15;

					ctx.beginPath();
					ctx.moveTo(x + radius, y);
					ctx.lineTo(x + width - radius, y);
					ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
					ctx.lineTo(x + width, y + height - radius);
					ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
					ctx.lineTo(x + radius, y + height);
					ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
					ctx.lineTo(x, y + radius);
					ctx.quadraticCurveTo(x, y, x + radius, y);
					ctx.closePath();

					ctx.fillStyle = "rgba(" + items.badgeColour.split(",")[0]
						+ ", " + items.badgeColour.split(",")[1]
						+ ", " + items.badgeColour.split(",")[2]
						+ ", " + parseInt(items.badgeColour.split(",")[3], 10) / 255
						+ ")";
					ctx.fill();
					//Then write the time within this rectangle
					ctx.font = "bold " + (height / 2) + "px sans-serif"; //font size should be half as high as the box
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillStyle = "rgba(" + items.digitalForeColour.split(",")[0]
						+ ", " + items.digitalForeColour.split(",")[1]
						+ ", " + items.digitalForeColour.split(",")[2]
						+ ", " + parseInt(items.digitalForeColour.split(",")[3], 10) / 255
						+ ")";
					ctx.fillText(hours, x + canvas.width / 2, height / 4);
					ctx.fillText(minutes, x + canvas.width / 2, y + height / 1.33);
				} else {
					//No analogue and no Linux digital so no image on the canvas
					ctx.clearRect(0, 0, canvas.height, canvas.width);
				}
			}
		});
		//Write the clock to the toolbar
		chrome.browserAction.setIcon(
			{
				imageData:
				{
					"19": canvases[0].getContext("2d").getImageData(0, 0, canvases[0].height, canvases[0].width),
					"38": canvases[1].getContext("2d").getImageData(0, 0, canvases[1].height, canvases[1].width)
				}
			}
		);

		//Update the hover text
		chrome.browserAction.setTitle({ title: timeString(items.hoverFormat, d) });
	});
}

function soundChime() {
	chrome.storage.sync.get(["hourVolume"], function (items) {
		var chime = document.createElement("audio");
		chime.src = "../assets/diing.ogg";
		chime.id = "chime";
		document.body.appendChild(chime);
		if (typeof items.hourVolume != "undefined") {
			chime.volume = items.hourVolume;
		}
		document.querySelector("#chime").play();
	});
}

function setUpdateAlarm() {
	var d, msDelay;
	d = new Date();
	msDelay = 120001 - ((d.getSeconds() * 1000) + (d.getMilliseconds())); //the delay needs to be >60s to fire at the right time
	chrome.alarms.create("___minute", { "when": Date.now() + msDelay, "periodInMinutes": 1 });
}

function regularTime() {
	var d;
	updateTime();
	d = new Date();
	if (d.getSeconds() > 5) {
		setUpdateAlarm(); //update has drifted so let's reset the timer
	}
	chrome.storage.sync.get(["hourChime"], function (items) {
		if (items.hourChime > 0) {
			switch (d.getMinutes()) {
				case 0:
					soundChime();
					break;
				case 15:
				case 45:
					if (items.hourChime === 4) {
						soundChime();
					}
					break;
				case 30:
					if (items.hourChime > 1) {
						soundChime();
					}
					break;
			}
		}
	});
}

//Run on first run, this resets all the preferences to defaults and is a
//function to migrate settings from localStorage to chrome.storage.sync
function setupPreferences() {
	//the settings variable is set up with defaults
	var localAlarms, settings = {
		"handsColour": "rgba(0,0,0,0.4)",
		"showDigital": false,
		"badgeColour": "0,0,0,50",
		"hoverFormat": "ta D d M Y",
		"firstDay": 0,
		"showAnalogue": true,
		"dots": 0,
		"offset": 0.0,
		"hourChime": false,
		"hourVolume": 1.0,
		"alarms": []
	};

	//Take any alarms in localStorage and append them to those in the cloud
	if (typeof localStorage.alarmsList != "undefined") {
		localAlarms = JSON.parse(localStorage.alarmsList);
		if (localAlarms.length > 0) {
			//There are local reminders set
			localAlarms.forEach(function (alarm, id, alarms) {
				var td = new Date(alarm[0]);
				alarm[0] = td.getTime();
			});
			chrome.storage.sync.get("alarms", function (items) {
				//append them to those already in the cloud
				if (typeof items.alarms != "undefined") {
					chrome.storage.sync.set({ "alarms": items.alarms.concat(localAlarms) });
				} else {
					chrome.storage.sync.set({ "alarms": localAlarms });
				}
			});
		}
	}

	//Now, for each of the others check if there is a local option set, and if there is, set the  setting  to the one from localStorage
	if (typeof localStorage.badgeColour != "undefined") {
		settings.badgeColour = localStorage.badgeColour;
	}
	if (typeof localStorage.dots != "undefined") {
		settings.dots = parseInt(localStorage.dots, 10);
	}
	if (typeof localStorage.firstDay != "undefined") {
		settings.firstDay = parseInt(localStorage.firstDay, 10);
	}
	if (typeof localStorage.handsColour != "undefined") {
		settings.handsColour = localStorage.handsColour;
	}
	if (typeof localStorage.hoverFormat != "undefined") {
		settings.hoverFormat = localStorage.hoverFormat;
	}
	if (typeof localStorage.showAnalogue != "undefined") {
		settings.showAnalogue = (localStorage.showAnalogue === "true");
	}
	if (typeof localStorage.showDigital != "undefined") {
		settings.showDigital = (localStorage.showDigital === "true");
	}
	if (typeof localStorage.offset != "undefined") {
		settings.offset = parseFloat(localStorage.offset);
	}
	if (typeof localStorage.hourChime != "undefined") {
		settings.hourChime = parseInt(localStorage.hourChime, 10);
	}
	//Now we have the settings, write them and update the clock
	chrome.storage.sync.set(settings, function (items) {
		startup();
	});

	//Finally, we delete everything from localStorage
	localStorage.clear();
}

//This sets everything up and is run at start up
function startup() {

	//Start the clock
	regularTime();

	//Schedule minute(ly) updates
	setUpdateAlarm();

	//Scan alarms on start up and then every fifteen minutes
	tidyReminders();
	chrome.alarms.create("___tidyReminders", { "delayInMinutes": 15, "periodInMinutes": 15 });

	//Set up the alarms for each reminder - Done by TidyReminders already
	//instantiateReminders();
}

chrome.runtime.onStartup.addListener(startup);

//Run on first install and upgrades
chrome.runtime.onInstalled.addListener(function () {
	/*
	Clock for Google Chrome 2.1.0.0 was the last to use HTML5 localStorage
	As of 2.1.1.0, settings are stored in the cloud using chrome.storage.sync
	The first thing this extension does is to verify whether there are any localStorage
	settings and migrate them to the cloud before continuing
	*/

	//if there's something stored locally, attempt to import from localStorage
	if (localStorage.length === 0) {
		chrome.storage.sync.getBytesInUse(null, function (len) {
			if (len > 0) {
				//Settings are OK, draw the first clock
				startup();
			} else {
				setupPreferences();
			}
		});
	} else {
		setupPreferences();
	}

	//hourChime was updated in 2.3.0.0 to be an integer representing the number of chimes per hour
	//It was a boolean before, so we need to convert it if required
	chrome.storage.sync.get(["hourChime", "digitalForeColour"], function (items) {
		switch (items.hourChime) {
			case true:
				chrome.storage.sync.set({ "hourChime": 1 });
				break;
			case false:
				chrome.storage.sync.set({ "hourChime": 0 });
				break;
		}
		//New variable digitalForeColour added in 2.3.0.0 so let's set it up if necessary
		if (typeof items.digitalForeColour == "undefined") {
			chrome.storage.sync.set({ "digitalForeColour": "255,255,255,255" });
		}
	});
});

//Function used by popup.js to find out if there are any sounds active at the moment
function noAudioElements() {
	if (document.querySelectorAll("audio").length > 0) {
		return false;
	} else {
		return true;
	}
}

//Called from the silence button in popup.html
//Finds, stops and deletes all audio elements
//Then clears the sounding register and calls tidyreminders
function silenceAlarms() {
	var au = document.querySelectorAll("audio");
	for (var i = 0; i < au.length; i++) {
		au[i].pause();
	}
	soundingAlarmsRegister = [];
	tidyReminders();
	while (document.querySelector("audio") !== null) {
		var el = document.querySelector("audio");
		el.parentNode.removeChild(el);
	}
}

//the page has been woken up, so update the clock
//and register listeners

//When an alarm sounds, use the alarm handler
chrome.alarms.onAlarm.addListener(function (alarm) {
	switch (alarm.name) {
		case "___minute":
			regularTime();
			break;
		case "___tidyReminders":
			tidyReminders();
			break;
		default:
			soundAlarm(alarm.name);
			break;
	}
});

//Set up handlers for notification closes
chrome.notifications.onClosed.addListener(function (notificationId, byUser) {
	soundingAlarmsRegister.forEach(function (item, id, items) {
		if (item.identifier === notificationId) {
			if (item.alarm[1] != "nothing") {
				//stop the sound if there is one and remove it from the DOM
				document.querySelector("#" + item.alarm[1]).pause();
				document.querySelector("#" + item.alarm[1]).parentNode.removeChild(document.querySelector("#" + item.alarm[1])); //good practice
			}
			items.splice(id, 1); //Removes this item from the sounding register
		}
	});
	tidyReminders();
});

//Set up handlers for notification button clicks
chrome.notifications.onButtonClicked.addListener(function (notificationId, buttonIndex) {
	if (buttonIndex === 0) {
		soundingAlarmsRegister.forEach(function (item, id, items) {
			//SNOOZE!!
			if (item.identifier === notificationId) {
				while (item.alarm[0] < Date.now()) {
					item.alarm[0] += 300000; //adds five minutes to the sounder until we're ahead of now
				}
				item.alarm[3] = [0, 0, 0, 0, 0, 0, 0]; //snoozed alarms should not be repeaters, only one-offs
				item.alarm[2] = "[Zzz] " + item.alarm[2];
				addReminder(item.alarm);
			}
		});
		//CLOSE
		chrome.notifications.clear(notificationId, function (wasCleared) {
		});
	}

	if (buttonIndex === 1) {
		//CLOSE
		chrome.notifications.clear(notificationId, function (wasCleared) {
		});
	}
});
//});

/*DEBUG CODE FOLLOWS
These functions are here solely for testing purposes
They are never called from code, only at run time
from console
*/

//Fills localStorage with one of a number of prepopulated settings groups
function populateLocalStorage(option) {
	switch (option) {
		case 1:
			localStorage.optionsArePopulated = "1";
			localStorage.handsColour = "rgba(150,0,0,0.4)";
			localStorage.showDigital = "false";
			localStorage.badgeColour = "0,0,0,50";
			localStorage.hoverFormat = "ta D d M Y"; //t=12 T=24 a=am D=wordDay d=noDay s=/ M=wordMonth m=noMonth y=yy Y=yyyy
			localStorage.alarmsList = "[]";
			localStorage.firstDay = "0"; //Sunday by default
			localStorage.showAnalogue = "true";
			localStorage.dots = "4";
			break;
		default:
			localStorage.optionsArePopulated = "1";
			localStorage.handsColour = "rgba(150,0,0,0.4)";
			localStorage.showDigital = "true";
			localStorage.badgeColour = "0,0,0,50";
			localStorage.hoverFormat = "ta D d M Y"; //t=12 T=24 a=am D=wordDay d=noDay s=/ M=wordMonth m=noMonth y=yy Y=yyyy
			localStorage.alarmsList = JSON.stringify([["2013-01-03T22:26:00.000Z", "nothing", "Alarm for tomorrow", [0, 0, 0, 0, 0, 0, 0]]]);
			localStorage.firstDay = "2"; //Tuesday by default
			localStorage.showAnalogue = "true";
			localStorage.dots = "12";
			localStorage.offset = "-2.5";
	}
}
