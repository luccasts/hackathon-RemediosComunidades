# 💊 Sistema de Controle de Remédios em Comunidades

## 📌 Objetivo

Este protótipo foi desenvolvido para auxiliar **UBSs, ONGs e comunidades** no gerenciamento de medicamentos.  
O sistema permite:

- Cadastrar medicamentos recebidos.
- Controlar entrada e saída.
- Monitorar a validade.
- Emitir alertas automáticos quando o estoque está baixo.

---

## 🛠 Tecnologias Utilizadas

**Backend**:

- Python 3
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- SQLite (local) / PostgreSQL (produção)
- SQLAlchemy ORM
- Python-Dotenv
- Gunicorn (produção)

**Frontend**:

- React + TypeScript
- Vite
- React Router
- CSS Modules
- Hospedado no **Netlify**
- Consome a API Flask via HTTP

---

## 📂 Estrutura do Projeto

```
hackathon-RemediosComunidades/
│
├── backEnd/
│   ├── main.py             # Ponto de entrada da API Flask
│   ├── models.py           # Definição das tabelas e eventos
│   ├── routes.py           # Endpoints da API
│   ├── services.py         # Lógica de CRUD
│   ├── login.py            # Rotas e lógica de autenticação
│   ├── banco.db            # Banco SQLite (somente local)
│   ├── requirements.txt
│   ├── Procfile
│   └── .env (ignorado no Git)
│
└── frontEnd/
    ├── public/             # Arquivos estáticos
    ├── src/
    │   ├── api/            # Integração com a API (remediosService.ts, remediosInstance.ts)
    │   ├── assets/         # Imagens e outros assets
    │   ├── components/     # Componentes reutilizáveis
    │   ├── pages/          # Páginas do sistema
    │   │   ├── Home/       # Página inicial
    │   │   ├── Cadastrar/  # Página para cadastrar medicamentos
    │   │   ├── Login/      # Página de login
    │   │   └── Admin/      # Painel administrativo
    │   ├── types/          # Tipagem TypeScript
    │   ├── App.css
    │   ├── index.css
    │   ├── main.tsx        # Ponto de entrada do React
    │   └── routes.tsx      # Configuração das rotas
    ├── index.html
    ├── package.json
    └── tsconfig.json
```

---

## 🚀 Como Rodar Localmente

### **Backend**

1. **Clonar o repositório**

```bash
git clone https://github.com/luccasts/hackathon-RemediosComunidades.git
cd hackathon-RemediosComunidades/backEnd
```

2. **Criar ambiente virtual (opcional)**

```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac
```

3. **Instalar dependências**

```bash
pip install -r requirements.txt
```

4. **Configurar variáveis de ambiente**
   Crie um arquivo `.env` na pasta `backEnd`:

```
FLASK_ENV=development
DATABASE_URL=sqlite:///banco.db
SECRET_KEY=chave_secreta_aqui
```

5. **Rodar o servidor**

```bash
python main.py
```

A API estará disponível em:

```
http://localhost:5000
```

---

### **Frontend**

1. **Acessar a pasta do front-end**

```bash
cd ../frontEnd
```

2. **Instalar dependências**

```bash
npm install
```

3. **Configurar variáveis de ambiente**
   Crie um arquivo `.env` na pasta `frontEnd` com:

```
VITE_API_URL=http://localhost:5000
```

4. **Rodar a aplicação**

```bash
npm run dev
```

O front-end estará disponível em:

```
http://localhost:5173
```

---

## 🌐 Endpoints da API

### **GET** `/api/remedios`

Lista todos os medicamentos.

**Resposta:**

```json
[
  {
    "id": 1,
    "nome": "Paracetamol",
    "quantidade": 3,
    "validade": "2026-03-15"
  }
]
```

### **POST** `/api/remedios`

Cadastra um novo medicamento.

**Corpo:**

```json
{
  "nome": "Dipirona",
  "quantidade": 10,
  "validade": "2027-01-30"
}
```

### **PUT** `/api/remedios/<id>`

Atualiza informações de um medicamento.

**Corpo:**

```json
{
  "quantidade": 2
}
```

### **DELETE** `/api/remedios/<id>`

Remove um medicamento pelo ID.

---

## 🔄 Fluxo do Sistema

1. **Cadastro** de medicamentos via POST.
2. A cada **inserção** ou **atualização**, o sistema verifica a quantidade.
3. Se a quantidade for ≤ 5, é gerado um alerta no campo `aviso`.
4. **Consulta** dos medicamentos e alertas via GET.
5. **Atualização** e **remoção** de medicamentos via PUT e DELETE.
6. **Frontend** consome esses endpoints e exibe as informações para o usuário.

---

## 🌍 Deploy

- **Backend**: Render ou Railway (PostgreSQL recomendado para produção)
- **Frontend**: Netlify
- Configurar `CORS` no Flask para permitir o domínio do Netlify.

---

## 📜 Licença

Projeto desenvolvido para fins acadêmicos/protótipo.  
Uso livre para estudos e melhorias.
