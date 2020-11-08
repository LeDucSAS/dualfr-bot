const common = require ("../dualfr_common.js");

module.exports = {
	name: 'kmsu',
	description: 'ddd',
	execute(message, args) {
		console.log(`${common.logTime()} - kmsu - ${message.author.id} (${message.author.tag})`);

		let kmsuEmbed = common.getEmbedTemplate();

		if (args.length == 0) {
			kmsuEmbed.title = `Vous devez rajouter un paramètre à la commande (distance en km)`;
		} else if (isNaN(args[0])) {
			kmsuEmbed.title = `Nous attendons des chiffres, pas des lettres ... :eyes:`;
		} else {
			let distance_km = args[0];
			kmsuEmbed.title = `${common.formatNumber(distance_km)} Km équivaut à ${common.formatNumber(distance_km / 200)} SU`;
		}

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(kmsuEmbed) });
	},
};