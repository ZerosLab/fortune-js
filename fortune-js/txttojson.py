import json

u = input("File to convert:")


f = open(u, "r")
dat = (f.read()) 



datg = "[" + dat + "]"
datd = datg.replace ('"', "")
datp = datd.replace ("\n%\n", '", "')


final = datp

f = open(u + ".json", "w")
f.write(final)
f.close()
