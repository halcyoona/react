import requests

response = requests.get("https://api.covid19api.com/summary")
res = response.json()
glob = res['Global']
country = res["Countries"]
for i in country:
    if i["Slug"] == 'pakistan': 
        print(i)