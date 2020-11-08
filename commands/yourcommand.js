const common = require ("../dualfr_common.js");

module.exports = {
	name: 'yourcommand',
	description: 'just a random description',
	execute(message, args) {
		console.log(`${common.logTime()} - yourcommand - ${message.author.id} (${message.author.tag})`);

		let yourcommandEmbed = common.getEmbedTemplate();

		if (args.length == 0) {
			yourcommandEmbed.title = `You must add an argument to the command`;
		} else if (isNaN(args[0])) {
			yourcommandEmbed.title = `Numbers are expected :eyes:`;
		} else {
			let distance_km = args[0];
			yourcommandEmbed.title = `${common.formatNumber(distance_km)} Km is equal to ${common.formatNumber(distance_km / 200)} SU`;
		}

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(yourcommandEmbed) });
	},
};