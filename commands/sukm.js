const common = require ("../dualfr_common.js");

module.exports = {
	name: 'sukm',
	description: 'ddd',
	execute(message, args) {
		console.log(`${common.logTime()} - sukm - ${message.author.id} (${message.author.tag})`);

		let sukmEmbed = common.getEmbedTemplate();

		if (args.length == 0) {
			sukmEmbed.title = `Vous devez rajouter un paramètre à la commande (distance en SU)`;
		} else if (isNaN(args[0])) {
			sukmEmbed.title = `Nous attendons des chiffres, pas des lettres ... :eyes:`;
		} else {
			let distance_su = args[0];
			sukmEmbed.title = `${common.formatNumber(distance_su)} SU équivaut à ${common.formatNumber(parseFloat(distance_su) * 200)} Km`;
		}

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(sukmEmbed) });
	},
};