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

bot.run(token)