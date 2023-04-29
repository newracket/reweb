from flask_restful import Api, Resource, reqparse

class Accessibility(Resource):
    def get(self):
        return {
            'status': 'SUCCESS',
            'message': 'GET: Accessibility API Data'
        }
    
    def post(self):
        return {
            'status': "SUCCESS",
            'message': 'POST: Accessibility API Data'
        }