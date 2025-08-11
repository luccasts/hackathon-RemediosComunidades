from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class Remedio(db.Model):
    __tablename__ = "remedios"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100), nullable=False)
    validade = db.Column(db.String(100), nullable=False)
    qntd = db.Column("quantidade", db.Integer, nullable=False)
    
    def __repr__(self):
        return f"<Remedio(id={self.id}, nome='{self.nome}', validade='{self.validade}', qntd={self.qntd})>"
    
# class Usuario(Base):
#     __tablename__ = "usuarios"

#     id = Column("id", Integer, primary_key=True, autoincrement=True) 
#     nome =  Column("nome", String)
#     email = Column("email", String)
#     senha = Column("senha", String)

#     def __repr__(self):
#         return f"<Usuario(id={self.id}, nome='{self.nome}', email='{self.email}', senha={self.senha})>"



