from flask import Flask, after_this_request, jsonify
import requests

app = Flask(__name__)


@app.route('/hello', methods=['GET'])
def hello():
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    jsonResp = requests.get('https://api.waifu.pics/sfw/waifu')
    print(jsonResp)
    return jsonify(jsonResp)

if __name__ == '__main__':
    app.run(host='localhost', port=8989, debug=True)