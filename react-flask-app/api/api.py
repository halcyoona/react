import time
import requests
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    response = requests.get("https://api.covid19api.com/summary")
    res = response.json()
    glob = res['Global']
    country = res["Countries"]
    final = 400
    for i in country:
        if i["Slug"] == 'pakistan': 
            final = i["TotalDeaths"]
    return {'time': final}