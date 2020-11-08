# DualFR - bot

Sourcecode of the bot for the french community of Dual Universe (DualFR - CFDU : Communauté Francophone Dual Universe). It is a rather simple and basic utilitary bot, where a user ask for something and the bot provide an answer.

While it can be used on any system provided you have nodejs installed, the npm alias `npm start` and `npm stop` are made for a linux context.

The bot has always been thought as a straightforward way of giving users some help. A good cleanup and improvements should be done (priorities are better starting and stopping, better logging).

# Requirements

Basically, the bot is simple enough so you can customize it however you want for the npm commands. 
* OS 
  * Linux, or any system if you adapt `npm start` and `npm stop`
* Software
  * NodeJS
  * NodeJS dependencies
    * discord.js 
    * node-minify
    * cheerio
    * request

# Installation
* Install NodeJS
* Unzip sourcecode
* Inside the dualfr-bot folder, do `npm install`
* Edit `config.json` to change your token
* (optional) Edit `config.json` to change the bot call character (by default « . », example « .sutime »)

# Server commands
* `npm start` which is basically `node index.js >> cfdubot2020.log &` so it start a process and write some output in a logfile
* `npm stop` which is basically `pkill -f cfdubot2020`

# User commands

Here are the commands actually available by the bot.

* aide - help, list commands
* docs - technical documentation (game's hardware specs, what's AVX, etc.)
* guides - as documentation list, can be filtered with sub categories (community guides, forums links, etc.)
* kmsu - convert kilometers to SU
* sukm - convert SU to kilometers
* kmtime - Gives the required time to travel a certain distance in kilometers at a defined speed
* sutime - Gives the required time to travel a certain distance in SU at a defined speed
* timesu - Gives the required speed in order to achieve distance in time (ex: how much speed do I need in order to do 15 SU in 600mn)
* warp - Gives an estimation of the number of warp cell consumed

# How to develop with it

## How to add a command
* Go into ./Commands/ folder 
* Copy paste `yourcommand.js` to `whateveryouwant.js`
* Edit `whateveryouwant.js` and change `name: 'yourcommand'` to  `name: 'whateveryouwant'`. You **HAVE** to keep the same "name" and "filename". Otherwise you might copy paste, don't change it, and you'll start typing `.whateveryouwant` and have headaches because it keep executing the sourcecode of `.yourcommand`  
* Do whatever you want with it

## How to customize Embed
* Find, at root of folder, the file `./dualfr_common.js` and open it
* You can edit whatever you want

## Updating help command is manual
* Go into ./Commands/ folder 
* Edit `aide.js` to add or remove whatever you want

# Feedback
I'm making this bot so it helps everyone, and try to keep it simple enough any beginner can add it's own commands. 

Feel free to share your commands, or contact me if you want something added.

Sincerely yours,

LeDucSAS

https://dualfr.org
