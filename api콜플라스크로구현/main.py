from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def start():
    return render_template('index.html')

@app.route('/getItems')
def getItems():
    return jsonify({'item':'alexstrazsa'})

@app.route('/hello', methods=['GET'])
def hello():
    # @after_this_request
    # def add_header(response):
    #     response.headers.add('Access-Control-Allow-Origin', '*')
    #     return response
    # jsonResp = requests.get('https://api.waifu.pics/sfw/waifu')
    # return jsonify(jsonResp.json())
    jsonResp = requests.get('https://picsum.photos/300')
    return jsonify({'url':jsonResp.url})

if __name__ == '__main__':
    app.run(host='localhost', port=8989, debug=True)