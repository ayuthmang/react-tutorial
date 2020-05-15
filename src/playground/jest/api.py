import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

users = [
	{
		'id': 1,
		'name': 'John'
	},
	{
		'id': 2,
		'name': 'Jane'
	}
]

@app.route('/users', methods=['GET'])
def api_all():
    return jsonify(users)

app.run()
