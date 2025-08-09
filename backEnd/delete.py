from models import session, Remedio
from sqlalchemy import delete

id_para_deletar = 0

deletar = delete(Remedio).where(Remedio.id == id_para_deletar)
session.execute(deletar)
session.commit()

print(f"Remédio com ID {id_para_deletar} foi deletado.")
