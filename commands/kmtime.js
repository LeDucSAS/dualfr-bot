const common = require ("../dualfr_common.js");

module.exports = {
	name: 'kmtime',
	description: 'Gives the required time to travel a certain distance at a defined speed',
	execute(message, args) {
		console.log(`${common.logTime()} - kmtime - ${message.author.id} (${message.author.tag})`);
		let maxSpeed_kmh = 30000;
		let distance_km = args[0];
		let speed_kmh = args[1];

		if (isNaN(speed_kmh) || speed_kmh > maxSpeed_kmh) {
			speed_kmh = maxSpeed_kmh;
		}
		if (isNaN(distance_km)) {
			distance_km = 0;
		}
		if (distance_km > 1000000) {
			distance_km = 1000000;
		}

		let time = distance_km / speed_kmh;
		let total_minutes = time * 60;

		let days = Math.trunc(total_minutes / 3600);
		let hours = Math.trunc(total_minutes / 60) % 24;
		let minutes = Math.trunc(total_minutes % 60);

		if (minutes < 10) {
			minutes = '0'+minutes
		}

		let travelTime = {};
		if (total_minutes > 3600) {
			if (days > 1) {
				travelTime = `Temps de trajet : ${days} jours et ${hours}h${minutes}mn`;
			} else {
				travelTime = `Temps de trajet : ${days} jour et ${hours}h${minutes}mn`;
			}
		} else if (total_minutes => 60) {
			travelTime = `Temps de trajet : ${hours}h${minutes}mn`;
		} else {
			travelTime = `Temps de trajet : ${minutes}mn`;
		}

		let sutimeEmbed = common.getEmbedTemplate();
		sutimeEmbed.title = travelTime;
		let fields = [
			{
				name : "Distance retenue",
				value : `${common.formatNumber(distance_km)} km`
			},
			{
				name : "Vitesse retenue",
				value : `${common.formatNumber(speed_kmh)} km/h`
			}
		];
		
		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(sutimeEmbed, fields) });
	},
};