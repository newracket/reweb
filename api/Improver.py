import json
import os

import requests
from dotenv import load_dotenv
from flask_restful import Resource, reqparse

load_dotenv()


def make_request(code, improvement):
    token = os.getenv("API_KEY")
    if token is None:
        return "API_KEY not found"

    headers = {"Authorization": f"Bearer {token}"}
    url = "https://api.edenai.run/v2/text/code_generation"

    payload = {
        "providers": "openai",
        "prompt": "",
        "instruction": "Write a function in python that calculates fibonacci",
        "temperature": 0.1,
        "max_tokens": 500
    }

    response = requests.post(url, json=payload, headers=headers)

    result = json.loads(response.text)
    status = response.status_code

    if status == 200:
        return result['openai']['generated_text']


class Improver(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("code", type=str, help="Code to improve",
                            required=True)
        parser.add_argument("improvement", type=str,
                            help="Improvements to code", required=True)
        args = parser.parse_args()
        code = args["code"]
        improvement = args["improvement"]

        improved_code = make_request(code, improvement)

        return {
            'status': "SUCCESS",
            'message': improved_code,
        }
