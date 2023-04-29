from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_restful import Api, Resource, reqparse
from api.Accessibility import Accessibility

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
#CORS(app)

api = Api(app)

@app.route("/", defaults={'path':''})
def index(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(Accessibility, '/check')