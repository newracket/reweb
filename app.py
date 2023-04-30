from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api

from api.Accessibility import Accessibility
from api.Improver import Improver

app = Flask(__name__, static_url_path='', static_folder='frontend')
CORS(app, resources={r"/*": {"origins": "*"}})

api = Api(app)


@app.route("/", defaults={'path': ''})
def index(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(Accessibility, '/check')
api.add_resource(Improver, '/improve')
app.run(debug=True)