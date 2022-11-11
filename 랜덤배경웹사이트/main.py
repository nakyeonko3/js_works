from flask import Flask, jsonify
import requests
from flask import render_template
# from flask import redirect
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

# @app.route("/waifu")
# def waifu():
#     response = requests.get('https://api.waifu.pics/sfw/waifu');
#     return response.json()

@app.route("/waifu")
def waifu():
    response = requests.get('https://api.waifu.pics/sfw/waifu')
    url = response.json()['url']
    return render_template('index.html', img = url)

geocode = {"id":"dsdsd"}

@app.route("/api/geocode", methods=['GET'])
def geo_code():
    return jsonify(geocode)



app.run(debug=True)

#https://api.waifu.pics/sfw/waifu
#https://waifu.now.sh/sfw/
