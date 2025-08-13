import os
from flask import Flask
from flask_cors import CORS
from routes import registrar_rotas
from models import db, get_database_url

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = get_database_url()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

registrar_rotas(app)

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=int(os.getenv("PORT", 5000)))