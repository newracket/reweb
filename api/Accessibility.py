from flask_restful import Api, Resource, reqparse
import requests
import json
import os
from dotenv import load_dotenv, find_dotenv
import base64


load_dotenv(find_dotenv())

class Accessibility(Resource):
    
    def post(self):
        token = os.getenv("EDEN")
        if token is None:
            return "API_KEY not found"
        bugs = arequest.form.get('bugs')
        comments = request.form.get('comments')
        improve = request.form.get('improve')
        code = request.form.get('message')
        print(bugs, comments, improve, code, type(bugs))

        url = "https://api.edenai.run/v2/text/code_generation"
        payload = {
            "providers": "openai",
            "instruction": "Give me absolutely no description, I only want code. Fix what is broken and don't return anything but the fixed code. For the following HTML code, I want you to add comments wherever possible to make it easier to understand: "+base64.b64decode(code),
            "temperature": 0.3,
            "max_tokens": 2000,
            "prompt": ""
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        response = requests.post(url, json=payload, headers=headers)
        result = json.loads(response.text)

        return result['openai']['generated_text']