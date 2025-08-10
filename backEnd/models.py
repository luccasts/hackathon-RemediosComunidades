from sqlalchemy import create_engine, Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base

db = create_engine('sqlite:///backEnd/banco.db',echo=True)
Session = sessionmaker(bind=db)
session = Session()

Base = declarative_base()

class Remedio(Base):
    __tablename__ = "remedios"

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    nome = Column("nome", String)
    validade = Column("validade", String)
    qntd = Column("quantidade", Integer)
    
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

Base.metadata.create_all(db)

