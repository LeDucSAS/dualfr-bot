const common = require ("../dualfr_common.js");

module.exports = {
	name: 'aide',
	description: 'ddd',
	execute(message, args) {
		console.log(`${common.logTime()} - aide - ${message.author.id} (${message.author.tag})`);
		let distance_su = args[0];

		let aideEmbed = common.getEmbedTemplate();
		aideEmbed.title = `> Listes des commandes`;
		
		let fields = [
			{
				name : `.status`,
				value : `Affiche le calendrier des sessions (disponible à https://www.dualthegame.com/en/server-status/ )`
			},
			{
				name : `.sutime <distance en SU> (<vitesse en km/h>)`,
				value : `Donne le temps de trajet pour une distance donnée à vitesse donnée (pas de vitesse donnée est considéré comme 30.000 km/h)`
			},
			{
				name : `.kmtime <distance en km> (<vitesse en km/h>)`,
				value : `Donne le temps de trajet pour une distance donnée à vitesse donnée (pas de vitesse donnée est considéré comme 30.000 km/h)`
			},
			{
				name : `.timesu <distance en SU> <temps en minutes>`,
				value : `Permet d'avoir la vitesse à avoir pour faire le trajet en un temps donné`
			},
			{
				name : `.kmsu <distance en km>`,
				value : `Converti une distance de kilomètre vers SU`
			},
			{
				name : `.sukm <distance en SU>`,
				value : `Converti une distance de SU vers kilomètre`
			},
			{
				name : `.warp <distance en SU> <poids en tonne du construct>`,
				value : `Estime la consommation en warp cells du warp drive`
			},
			{
				name : `.guides (<nom du guide>)`,
				value : `Donne une liste de guides ou tutoriels. Exécutez la commande pour avoir la liste des guides disponibles.`
			},
			{
				name : `.docs (<nom de l'entrée>)`,
				value : `Documentation principalement technique sur le jeu`
			},
			{
				name : `*`,
				value : `(1 SU = 200km)`
			}
		];

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(aideEmbed, fields) });
	},
};