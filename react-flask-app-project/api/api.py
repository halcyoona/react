import time
import requests
from flask import Flask

app = Flask(__name__)

@app.route('/all')
def get_all_countries():
    response = requests.get("https://api.covid19api.com/summary")
    res = response.json()
    glob = res['Global']
    country = res["Countries"]
    final = 400
    for i in country:
        if i["Slug"] == 'pakistan': 
            final = i["TotalDeaths"]
    return {'all': country}



@app.route('/searchCountry')
def search_country():
    response = requests.get("https://api.covid19api.com/summary")
    res = response.json()
    glob = res['Global']
    country = res["Countries"]
    final = 404
    for i in country:
        if i["Slug"] == 'pakistan': 
            final = i["TotalDeaths"]
    return {'all': final}