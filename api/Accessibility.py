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
            
        parser = reqparse.RequestParser()
        parser.add_argument("bugs", type=str, help="If to fix bugs",
                            required=True)
        parser.add_argument("comments", type=str,
                            help="If to add comments", required=True)
        parser.add_argument("improve", type=str,
                            help="If it improve accessibility in code", required=True)
        parser.add_argument("message", type=str,
                            help="Actual code", required=True)
        args = parser.parse_args()

        bugs = args["bugs"]
        comments = args["comments"]
        improve = args["improve"]
        code = args["message"]

        print(bugs, comments, improve, code, type(bugs))
        instruction = "Give me absolutely no description, I only want code. Fix what is broken and don't return anything but the fixed code. For the following HTML code, "
        if bugs == "true":
            instruction += "fix any bugs in the code, "
        if comments == "true":
            instruction += "add comments wherever possible to make it easier to understand, "
        if improve == "true":
            instruction += "improve the accessibility of the HTML code by making it easier for people who are deaf, blind, or have other disabilities to use it. You can do this by adding alt text to images inferred from the name, allow users to enlarge font sizes, change colors to keep contrast sensitivity in mind, add keyboard navigation, change URLs to be more descriptive, change tags to use ARIA roles, adding a meta charset, and specifying the document to be English only. Also, change any variable names when possible to be more descriptive, "

        instruction += "for the following HTML code: " + str(base64.b64decode(code))
        url = "https://api.edenai.run/v2/text/code_generation"
        payload = {
            "providers": "openai",
            "instruction": instruction,
            "temperature": 0.3,
            "max_tokens": 2000,
            "prompt": "HTML"
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        response = requests.post(url, json=payload, headers=headers)
        result = json.loads(response.text)
        data = (base64.b64encode(result['openai']['generated_text'].encode('ascii'))).decode('ascii')

        return data 