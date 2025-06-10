from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from filter_logic import filter_leads

app = Flask(__name__)
CORS(app)  # To allow frontend requests

# Load mock leads once
with open('../data/mock_leads.json', 'r') as f:
    leads = json.load(f)

@app.route('/api/leads', methods=['GET'])
def get_leads():
    return jsonify(leads)

@app.route('/api/filter', methods=['POST'])
def filter_route():
    filters = request.json
    filtered = filter_leads(leads, filters)
    return jsonify(filtered)

if __name__ == '__main__':
    app.run(debug=True)
