from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api

from api.Accessibility import Accessibility
from api.Improver import Improver

app = Flask(__name__, static_url_path='', static_folder='frontend')
CORS(app, resources={r"/*": {"origins": "*"}})

api = Api(app)

api.add_resource(Accessibility, '/improve')

app.run(debug=True)