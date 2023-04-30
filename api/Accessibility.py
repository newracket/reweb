import base64
import json
import os

import requests
from dotenv import load_dotenv, find_dotenv
from flask_restful import Resource, reqparse

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
                            help="If it improve accessibility in code",
                            required=True)
        parser.add_argument("message", type=str,
                            help="Actual code", required=True)
        args = parser.parse_args()

        bugs = args["bugs"]
        comments = args["comments"]
        improve = args["improve"]
        code = args["message"]

        print(bugs, comments, improve, code, type(bugs))
        instruction = "Give me absolutely no description, I only want code. Fix what is broken and don't return anything but the fixed code. Please do the following three things:\n"
        if bugs:
            instruction += "Please fix any bugs in the code. \n"
        if comments:
            instruction += "Please add comments to the code. \n"
        if improve:
            instruction += "Please improve the accessibility of the HTML code. Add alt tags to image tags that don't have them. \n"
        #     instruction += "Please improve the accessibility of the HTML code by making it easier for people who are deaf, blind, or have other disabilities to use it. You can do this by adding alt text to images inferred from the name, allow users to enlarge font sizes, change colors to keep contrast sensitivity in mind, add keyboard navigation, change URLs to be more descriptive, change tags to use ARIA roles, adding a meta charset, and specifying the document to be English only. Also, change any variable names when possible to be more descriptive. Also, add alt tags to any images that don't have them.\n "

        # instruction += "This is the code: " + str(
        #     base64.b64decode(code))
        print(instruction)
        url = "https://api.edenai.run/v2/text/code_generation"
        payload = {
            "providers": "openai",
            "instruction": instruction,
            "temperature": 0.3,
            "max_tokens": 2000,
            "prompt": str(base64.b64decode(code))
        }
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        response = requests.post(url, json=payload, headers=headers)
        result = json.loads(response.text)
        data = (base64.b64encode(
            result['openai']['generated_text'].encode('ascii'))).decode('ascii')

        return data
