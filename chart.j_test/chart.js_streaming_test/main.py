from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route('/getSensorData')
def getSensorData():
    return jsonify({'sensor_data':random.randint(0, 10)})

app.run(debug=True, port=18080)