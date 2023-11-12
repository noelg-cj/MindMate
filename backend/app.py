from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
from helper import *

app = Flask(__name__)
CORS(app)

@app.route('/voice')
def voice():
    st = AudioToText()
    TextToAudio(st)
    return jsonify({'st':st})

@app.route('/predict',methods=['GET', 'POST'])
@cross_origin()
def predict():
    try:
        chat = request.get_json()
        #result = bot(chat.get('data'))
        #return jsonify({"data":result.get('answer')})
        code = {"data": "Hello, the code is working", "type": "bot"}
        return chat
    except Exception as e:
        return jsonify({"error":e})

if __name__=="__main__":
    app.run(debug=True, port=8080)