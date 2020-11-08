const common = require ("../dualfr_common.js");

module.exports = {
	name: 'docs',
	aliases: ["doc"],
	description: 'Documentation',
	execute(message, args) {
		console.log(`${common.logTime()} - docs - ${message.author.id} (${message.author.tag})`);

		let guidesEmbed = common.getEmbedTemplate();
		guidesEmbed.title = `Docs`;
		let fields;

		if (args.length == 0) {
			args.push(null);
		}
		
		switch (args[0]) {
			case "specs":
				guidesEmbed.title = `> System requirements`;
				fields = getSystemRequirements();
				break;
			case "avx":
				guidesEmbed.title = `> AVX instructions`;
				fields = getAvxInstructions();
				break;
			default:
				guidesEmbed.title = `> Docs - Commandes`;
				fields = getDocCommands();
		}

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(guidesEmbed, fields) });
	},
};

function getDocCommands() {
	return [
		{
			name : "System requirements",
			value : "`.docs specs`"
		},
		{
			name : "AVX instructions",
			value : "`.docs avx`"
		}
	];
}

function getSystemRequirements() {
	return [
		{
			name : "Minimum",
			value : `* AMD A8-7600 / Intel core i3-7100 / intel core i5-4440    
* 8GB RAM
* Nvidia Geforce GTX 960 / Radeon RX 550     
* 2GB VRAM
* Windows 10`
		},
		{
			name : "Recommandé",
			value : `* AMD Ryzen 7 1700 / Intel Core i7-6700K
* 16GB RAM
* Nvidia Geforce GTX 970 / Radeon RX 580
* 4GB VRAM
* Windows 10`
		},
		{
			name : ":warning: Informations importantes :warning:",
			value : `__Pour lancer Dual universe, votre processeur doit avoir les instructions AVX.__
Plus d'informations ici : 
<https://support.dualthegame.com/hc/en-us/articles/115002472234-AVX-instructions-required-to-run-Dual-Universe>`
		},
		{
			name : "Sources",
			value : `<https://support.dualthegame.com/hc/en-us/articles/115002021534-Dual-Universe-system-requirements>
Consulté le 19 Juillet 2020`
		}
	];
}

function getAvxInstructions() {
	return [
		{
			name : "Explications",
			value : `Un processeur éxécute des instructions, et il peut être équipé de différents jeux d'instructions. AVX est un de ces jeux d'instructions, et dans le contexte de Dual Universe il permet de faire de la génération procédurale à une vitesse décente.

Il n'est pas prévu de se passer des instructions AVX, car est trop élevé le coût et le temps de développement pour trouver une alternative qui de surcroît risque d'être moins performante.

La liste des familles de processeurs équipés d'instructions AVX est la suivante ;`
		},
		{
			name : "Intel",
			value : `* Sandy Bridge processor, Q1 2011
* Sandy Bridge E processor, Q4 2011
* Ivy Bridge processor, Q1 2012
* Ivy Bridge E processor, Q3 2013
* Haswell processor, Q2 2013
* Haswell E processor, Q3 2014
* Broadwell processor, Q4 2014
* Broadwell E processor, Q2 2016
* Skylake processor, Q3 2015
* Kaby Lake processor, Q3 2016(ULV mobile)/Q1 2017(desktop/mobile)
* Coffee Lake processor, Q3 2017
* Cannonlake processor, expected in 2017
* Cascade Lake processor, expected in 2018`
		},
		{
			name : "AMD",
			value : `* Bulldozer-based processor, Q4 2011
* Piledriver-based processor, Q4 2012
* Steamroller-based processor, Q1 2014
* Excavator-based processor, 2015
* Zen-based processor, Q1 2017
* Jaguar-based processor
* Puma-based processor`
		},
		{
			name : "Sources",
			value : `<https://support.dualthegame.com/hc/en-us/articles/115002472234-AVX-instructions-required-to-run-Dual-Universe>
Consulté le 19 Juillet 2020`
		}
	];
}