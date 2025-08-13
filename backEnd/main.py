import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from routes import registrar_rotas
from models import db, Remedio

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(app.root_path, 'banco.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

registrar_rotas(app)

if __name__ == '__main__':
    app.run(debug=True)