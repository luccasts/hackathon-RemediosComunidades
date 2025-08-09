from models import session, Usuario
from flask import flask, request, jsonify

app = flask(__name__)

@app.route('/login', methods=['POST'])

def login(email:str,senha:str):

    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    usuario = session.query(Usuario).filter_by(email=email,senha=senha).first()
    if usuario:
        print(f"Login bem-sucedido")
        return jsonify({'message': 'Login bem-sucedido!'}), 200
    else:
        print(f"Email ou senha incorretos")
        return jsonify({'message': 'Credenciais inválidas.'}), 401

if __name__ == '__main__':
    app.run(debug=True) 