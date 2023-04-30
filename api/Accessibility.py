from flask_restful import Api, Resource, reqparse
import requests
import json
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
EDEN = os.environ.get("EDEN")

class Accessibility(Resource):
    def get(self):
        return {
            'status': 'SUCCESS',
            'message': 'GET: Accessibility API Data'
        }
    
    def post(self):
        url = "https://api.edenai.run/v2/text/code_generation"
        payload = {
            "providers": "openai",
            "instruction": "Write a function in python that calculates fibonacci",
            "temperature": 0.3,
            "max_tokens": 2000,
            "prompt": ""
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + EDEN
        }
        response = requests.post(url, json=payload, headers=headers)

        return response.json()