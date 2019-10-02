import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='.')

token = ""

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def test(ctx):
    await ctx.send('Hello!')


@bot.group()
async def faq(ctx):
    if ctx.invoked_subcommand is None:
        faqIndex = '''FAQ INDEX
* specs : affiche les specifications PC
* roadmap : donne le lien vers la roadmap
* avx : précisions sur AVX'''
        await ctx.send(faqIndex)

@faq.command()
async def specs(ctx):
    """Lien vers spécifications du jeu"""
    await ctx.send('''Lien vers les spécifications
<https://support.dualthegame.com/hc/en-us/articles/115002021534-Dual-Universe-system-requirements>''')

@faq.command()
async def roadmap(ctx):
    """Lien vers la feuille de route"""
    await ctx.send('''Lien vers la feuille de route
<https://dualfr.org/news/12/41/Feuille-de-route>''')

@faq.command()
async def avx(ctx):
    """Lien vers article concernant AVX"""
    await ctx.send('''Lien vers article à propos de DU et AVX
<https://support.dualthegame.com/hc/en-us/articles/115002472234-AVX-INSTRUCTIONS-REQUIRED-TO-RUN-DUAL-UNIVERSE>''')

@bot.command(name="server-status")
async def serverStatus(ctx):
    """Calendrier serveur"""
    await ctx.send('''Lien vers le calendrier des sessions
<https://www.dualthegame.com/fr/server-status/>''')

@bot.command
async def nda(ctx):
    """Procédure accès NDA DualFR"""
    await ctx.send('''Explication accès NDA''')

@bot.command(name="validation-nda")
async def validationNda(ctx):
    """Validation par le bot du status NDA des joueurs"""
    await ctx.send('''Validation par le bot du status NDA des joueurs''')

@bot.command
async def nqarticles(ctx):
    """Listes des articles publiés par NQ"""
    await ctx.send('''Liste des articles en ligne
<https://www.dualthegame.com/en/news/>''')

bot.run(token)
