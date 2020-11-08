const common = require ("../dualfr_common.js");

module.exports = {
	name: 'timesu',
	description: 'Gives the required speed in order to achieve distance in time',
	execute(message, args) {
		console.log(`${common.logTime()} - timesu - ${message.author.id} (${message.author.tag})`);
		let distance_su = args[0];
		let desiredTime_minutes = args[1];

		if (isNaN(distance_su)) {
			distance_su = 0;
		}
		if (distance_su > 1000000) {
			distance_su = 1000000;
		}
		if (desiredTime_minutes > 52560000) {
			desiredTime_minutes = 52560000;
		}

		let desiredTime_seconds = desiredTime_minutes * 60;
		let distance_km = distance_su * 200;
		let requiredSpeed_kmh = ( distance_km ) / ( desiredTime_seconds/3600 );
		requiredSpeed_kmh = Math.trunc(requiredSpeed_kmh);

		let embedDatas = {};
		embedDatas.requiredSpeed = `${requiredSpeed_kmh} km/h`;

		if (requiredSpeed_kmh > 30000) {
			let time = distance_km / 30000;
			embedDatas.requiredSpeed += ` (plus proche : ${time*60}mn à 30.000km/h)`;
		}

		let sutimeEmbed = common.getEmbedTemplate();
		sutimeEmbed.title = embedDatas.requiredSpeed;
		let fields = [
			{
				name : "Distance retenue",
				value : `${common.formatNumber(distance_su)} SU (équivalent ${common.formatNumber(distance_km)}km)`
			},
			{
				name : "Temps retenu",
				value : `${desiredTime_minutes} minutes`
			}
		];
		
		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(sutimeEmbed, fields) });
	},
};