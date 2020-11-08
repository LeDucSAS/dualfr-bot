const common = require ("../dualfr_common.js");

module.exports = {
	name: 'warp',
	description: '',
	execute(message, args) {
		console.log(`${common.logTime()} - warp - ${message.author.id} (${message.author.tag})`);

		let warpEmbed = common.getEmbedTemplate();
		let finalizedEmbed;

		if (args.length != 2) {
			warpEmbed.title = "Entrées incorrectes";
			let fields = [
				{
					name : "La commande attend deux paramètres",
					value : "Format : `.warp <distance en SU inférieure ou égale à 500> <poids en tonne du construct>`"
				}
			];
			finalizedEmbed = common.makeEmbed(warpEmbed, fields);
		} else if (isNaN(args[0]) || isNaN(args[1])) {
			warpEmbed.title = "Nous attendons des chiffres, pas des lettres ... :eyes:";
			finalizedEmbed = common.makeEmbed(warpEmbed);
		}  else if (args[0] > 500) {
			warpEmbed.title = "La distance en SU doit être inférieure ou égale à 500";
			finalizedEmbed = common.makeEmbed(warpEmbed);
		} else {
			let distance_su = args[0];
			let construct_weight_tons = args[1];
			let consumption = distance_su * construct_weight_tons * 0.00025;

			consumption = Math.trunc(consumption);

			if (consumption < 2) {
				consumption = 1;
			}

			warpEmbed.title = `Le trajet consommera ${consumption} warp cell${(consumption > 1)? "s":""}`;

			let fields = [
				{
					name : "Distance retenue",
					value : `${common.formatNumber(distance_su)} SU`
				},
				{
					name : "Poids retenu",
					value : `${common.formatNumber(construct_weight_tons)} tonnes`
				}
			];
			finalizedEmbed = common.makeEmbed(warpEmbed, fields);
		}
		
		/* Render
		*/
		message.channel.send({ embed: finalizedEmbed });
	},
};