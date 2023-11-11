from flask import Flask,jsonify,request
from helper import *
app = Flask(__name__)

@app.route('/voice')
def voice():
    st = AudioToText()
    TextToAudio(st)
    return jsonify({'st':st})

@app.route('/predict',methods=['POST'])
def predict():
    try:
        chat = request.get_json()
        result = bot(chat.get('data'))
        return jsonify({"data":result.get('answer'),"type":"bot"})
        # return chat
    except Exception as e:
        return jsonify({"error":e})

if __name__=="__main__":
    app.run(debug=True)