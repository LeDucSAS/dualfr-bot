const common = require ("../dualfr_common.js");

module.exports = {
	name: 'guides',
	aliases: ['guide'],
	description: 'ddd',
	execute(message, args) {
		console.log(`${common.logTime()} - guides - ${message.author.id} (${message.author.tag})`);

		let guidesEmbed = common.getEmbedTemplate();
		guidesEmbed.title = `Guides`;
		let fields;

		if (args.length == 0) {
			args.push(null);
		}
		
		switch (args[0]) {
			case "officiels":
				guidesEmbed.title = `> Guides officiels`;
				fields = getOfficialGuides();
				break;
			case "pdf":
				guidesEmbed.title = `> Guide PDF`;
				fields = getOfficialBeginnerGuide();
				break;
			case "communauté":
				guidesEmbed.title = `> Guides communauté`;
				fields = getCommunityGuides();
				break;
			default:
				guidesEmbed.title = `> Guides - Commandes`;
				fields = getTutorialsLists();
		}

		/* Render
		*/
		message.channel.send({ embed: common.makeEmbed(guidesEmbed, fields) });
	},
};

function getTutorialsLists() {
	return [
		{
			name : "Guides officiels",
			value : "`.guides officiels`"
		},
		{
			name : "Guide officiel PDF",
			value : "`.guides pdf`"
		},
		{
			name : "Guides de la communauté",
			value : "`.guides communauté`"
		}
	];
}

function getOfficialGuides() {
	return [
		{
			name : "Dual Universe Pre-Alpha Tutorial: Tool & UI Basics | October 2017 ",
			value : "<https://www.youtube.com/watch?v=wCpzLs4vlis>"
		},
		{
			name : "Dual Universe Pre-Alpha Tutorial: Atmospheric Ship Building | October 2017",
			value : "<https://www.youtube.com/watch?v=V3puZXotLIw>"
		},
		{
			name : "Dual Universe Pre-Alpha Tutorial: Interactive Elements & Linking | October 2017",
			value : "<https://www.youtube.com/watch?v=jPRx6WQlVQc>"
		},
		{
			name : "Dual Universe Pre-Alpha Tutorial: Rights Management, Outposts & Territories | October 2017",
			value : "<https://www.youtube.com/watch?v=rdJQjiQXO8w>"
		},
		{
			name : "Dual Universe Pre-Alpha Tutorial: Lua Scripting | November 2017",
			value : "<https://www.youtube.com/watch?v=sbvJPuo9npE>"
		},
		{
			name : "Dual Universe Pre-Alpha Tutorial: Blueprint 101 (Preview) | February 2018",
			value : "<https://www.youtube.com/watch?v=mEh3TzRPCyA>"
		},
		{
			name : "Dual Universe Gameplay Preview: Scanning/Mining | Pre-Alpha",
			value : "<https://www.youtube.com/watch?v=zQvy4as7n7E>"
		},
		{
			name : "Dual Universe Gameplay Preview: Markets | Pre-Alpha",
			value : "<https://www.youtube.com/watch?v=_-RUsxRic4Q>"
		},
		{
			name : "Dual Universe | Alpha 2 | Puzzle Building Tutorial",
			value : "<https://www.youtube.com/watch?v=RUM3Z7p7ZPo>"
		},
		{
			name : "Dual Universe | Alpha 2.1 | Space Core Unit Alignment Tutorial",
			value : "<https://www.youtube.com/watch?v=lezVVVR86QI>"
		},
		{
			name : "Dual Universe | Alpha 3 | Construct Trading",
			value : "<https://www.youtube.com/watch?v=j1bwkDtLh0g>"
		},
		{
			name : "Dual Universe Tips and Tricks - Nanocrafting: Ingredients",
			value : "<https://www.youtube.com/watch?v=cBuSfShc-Mc>"
		},
		{
			name : "Guide du débutant (en anglais)",
			value : "<https://s3-eu-west-1.amazonaws.com/static.www.novaquark.com/communication/DU_BG+v1.0.pdf>"
		}
	];
}

function getOfficialBeginnerGuide() {
	return [
		{
			name : "Guide du débutant (en anglais)",
			value : "<https://s3-eu-west-1.amazonaws.com/static.www.novaquark.com/communication/DU_BG+v1.0.pdf>"
		}
	];
}

function getCommunityGuides() {
	return [
		{
			name : "Basic Voxel Behaviors and Techniques",
			value : "<https://board.dualthegame.com/index.php?/topic/15309-basic-voxel-behaviors-and-techniques/>"
		},
		{
			name : "2D Voxel Designer by NRD",
			value : "<https://board.dualthegame.com/index.php?/topic/17404-2d-voxel-designer-by-nrd/>"
		},
		{
			name : "Microvoxel Truss Structure Tutorial",
			value : "<https://board.dualthegame.com/index.php?/topic/18231-microvoxel-truss-structure-tutorial/>"
		},
		{
			name : "Minerais Alpha 3",
			value : "<https://docs.google.com/spreadsheets/d/14iHVub5lhpK4_IeshhHALnRyKDbob14npwo7OPCFvwM>"
		}
	];
}