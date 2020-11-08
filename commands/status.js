const common = require ("../dualfr_common.js");

module.exports = {
	name: 'status',
	description: 'Ping!',
	execute(message, args) {
		console.log(`${common.logTime()} - status - ${message.author.id} (${message.author.tag})`);
		const Discord = require('discord.js');
		const request = require('request');
		const cheerio = require('cheerio');

		request({
			method: 'GET',
			url: 'https://www.dualthegame.com/en/server-status/'
		}, (err, res, body) => {
			if (err) return console.error(err);
			/* Minifying in order to remove useless CR/NL and blank spaces
			*/

			/* Feeding the calendar
			*/
			let calendar = [];
			let $ = cheerio.load(common.cleanWebpage(body));
			let table = $('table');

			table.find("tbody").find("tr").each(function (i, e) {
				let tableRow = [];
				$(this).find("td").each(function (i, e) {
					tableRow[i] = $(this);
				});

				let calendarData = {};
				calendarData.status = tableRow[0].text();
				calendarData.testType = tableRow[1].text();
				calendarData.access = tableRow[2].text();
				calendarData.startDate = tableRow[3].text();
				calendarData.endDate = tableRow[4].text();
				calendarData.hoursDuration = tableRow[5].text();
				calendar.push(calendarData);
			});

			/* Setting Embed datas
			*/
			let embedDatas = common.getEmbedTemplate();
			embedDatas.url = 'https://www.dualthegame.com/en/server-status/';
			if (calendar[0].status == "Live") {
				calendar[0].testType += " (live)"
				embedDatas.title = "Serveur ouvert"
				embedDatas.description = 'Sessions programmées (heure UTC) :';
				embedDatas.color = "#00FF00";
				embedDatas.image.url = "http://dualfr.org/discord/server_open-notext.png";
				embedDatas.thumbnail.url = "http://dualfr.org/discord/status_light_green_v4.png";
			} else {
				embedDatas.title = "Serveur fermé"
				embedDatas.description = 'Sessions programmées (heure UTC) :';
				embedDatas.color = "#FF0000";
				embedDatas.image.url = "http://dualfr.org/discord/server_closed-notext.png";
				embedDatas.thumbnail.url = "http://dualfr.org/discord/status_light_red_v4.png";
			}

			var today = new Date();
			var eventDate = null;
			let tableContent = [];
			if (calendar.length > 0) {
				for (var i = 0; i < calendar.length; i++) {
					let days = calendar[i].hoursDuration.split(":")[0] / 24;

					tableContent.push({
						name: calendar[i].testType,
						value: `Début : ${makeDate(formatRawDate(calendar[i].startDate))}\nFin : ${makeDate(formatRawDate(calendar[i].endDate))}\n\nDurée ${calendar[i].hoursDuration.replace(":","h")} (~ ${days} jours).`,
					});
					if (i == 0) {
						eventDate = formatRawDate(calendar[i].startDate);
					}
				}
			} else {
				tableContent.push({
					name: "Calendrier vide",
					value: "Aucun test n'est prévu actuellement.",
				});
			}

			if (eventDate > today) {
				embedDatas.footer.text = `Prochaine session dans ${timeDiffCalc(eventDate, today)}`;
			} else {
				embedDatas.footer.text = `Temps restant ${timeDiffCalc(formatRawDate(calendar[0].endDate), today)}`;
			}
			/* Render
			*/
			message.channel.send({ embed: common.makeEmbed(embedDatas, tableContent) });
		});
	},
};

function makeDate(pDate){
	const d = pDate;
	const months = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre'
	];
	const day = d.getDate();
	const month = months[d.getMonth()];
	const year = d.getFullYear();
	const hours = d.getHours();
	const minutes = (d.getMinutes()<10?'0':'') + d.getMinutes();
	return `${day} ${month} ${year} à ${hours}h${minutes}.`;
}

function formatRawDate(rawDate){
	return new Date(rawDate.replace(" - ", " "));
}

function remainingTime(rawDate){
	const d = rawDate;
	const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
	const day = d.getDate();
	const month = months[d.getMonth()];
	const year = d.getFullYear();
	const hours = d.getHours();
	const minutes = (d.getMinutes()<10?'0':'') + d.getMinutes();


	return `Temps restant : ${day} et ${hours}h${minutes}.`;
}

function timeDiffCalc(dateFuture, dateNow) {
	let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

	// calculate days
	const days = Math.floor(diffInMilliSeconds / 86400);
	diffInMilliSeconds -= days * 86400;

	// calculate hours
	const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
	diffInMilliSeconds -= hours * 3600;

	// calculate minutes
	const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
	diffInMilliSeconds -= minutes * 60;

	let difference = '';
	if (days > 0) {
	  difference += (days === 1) ? `${days} jour, ` : `${days} jours, `;
	}

	if (days > 0 || hours > 0) {
		difference += (hours === 0 || hours === 1) ? `${hours} heure, ` : `${hours} heures, `;
	}

	difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

	return difference;
}