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

    def __init__(self, nome, validade, qntd):
        self.nome = nome 
        self.validade = validade
        self.qntd = qntd

        session.add(self)
        session.commit()

Base.metadata.create_all(db)
