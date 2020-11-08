module.exports = {
	logTime: function (){
		let d = new Date();
		return `${d.getFullYear()}/${((d.getMonth()+1)<10?"0"+(d.getMonth()+1):d.getMonth()+1)}/${(d.getDate()<10)?("0"+d.getDate()):d.getDate()}-${(d.getHours()<10)?("0"+d.getHours()):d.getHours()}:${(d.getMinutes()<10)?("0"+d.getMinutes()):d.getMinutes()}:${(d.getSeconds()<10)?("0"+d.getSeconds()):d.getSeconds()}:${(d.getMilliseconds()<10)?("0"+d.getMilliseconds()):((d.getMilliseconds()<100)?("0"+d.getMilliseconds()):d.getMilliseconds())}`;
	}, 
	cleanWebpage: function(htmlDocument) {
		const htmlMinifier = require('@node-minify/html-minifier');
		const minify = require('@node-minify/core');
		let cleanedHtmlDocument;
		minify({
			compressor: htmlMinifier, // https://github.com/kangax/html-minifier
			content: htmlDocument,
			sync: true,
			options: {
				collapseWhitespace : true
			},
			callback: function(err, min) {
				cleanedHtmlDocument = min;
			}
		});
		return cleanedHtmlDocument;
	},
	getEmbedTemplate: function() {
		return {
			color: "#0A4F76",
			title: null,
			url: null,
			author: {
				name: "DualFR CFDU - dualfr.org",
				icon_url: "https://cdn.discordapp.com/icons/513646202424655873/47fed8c5c43dea066167dce80dd5bc40.png?size=64",
				url: 'https://dualfr.org',
			},
			description: null,
			thumbnail: {},
			fields: null,
			image: {
				url: null,
			},
			timestamp: null,
			footer: {
				text: "Bonne journée et bon jeu !",
				icon_url: 'https://cdn.discordapp.com/avatars/465616899871342592/3f4839159c7092452c892a6b5dc03a00.png?size=64',
			},
		};
	},
	makeEmbed: function(embedDatas, tableContent){
		let readiedEmbed = {
			color: embedDatas.color,
			title: embedDatas.title,
			url: embedDatas.url,
			author: {
				name: embedDatas.author.name,
				icon_url: embedDatas.author.icon_url,
				url: embedDatas.author.url,
			},
			description: embedDatas.description,
			fields: tableContent,
			timestamp: embedDatas.timestamp ? embedDatas.timestamp : new Date(),
			footer: {
				text: embedDatas.footer.text,
				icon_url: embedDatas.footer.icon_url,
			},
		};
		if (embedDatas.thumbnail) {
			readiedEmbed.thumbnail = {
				url: embedDatas.thumbnail.url
			};
		}
		if (embedDatas.image) {
			readiedEmbed.image = {
				url: embedDatas.image.url
			};
		}
		return readiedEmbed;
	},
	formatNumber: function(rawNumber){
		return rawNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
	}
};