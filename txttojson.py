import json
u = input("File to convert: ")
f = open(u, "r")

dat = (f.read())
datg = '["' + dat.replace ('http://', "").replace ('"', "") + '"]'
final = datg.replace ("\n%\n", '", "').replace("\n"," ").replace("	"," ")

f = open(u + ".json", "w")
f.write(final)
f.close()
