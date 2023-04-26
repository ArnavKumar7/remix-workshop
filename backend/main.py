from fastapi import FastAPI
import database
from pydantic import BaseModel

class Input(BaseModel):
    name: str
    about_remix: str


app = FastAPI()

@app.get('/')
def get_data():
    l = []
    responses = database.db.responses.find()
    for response in responses:
        response['_id'] = str(response['_id'])
        l.append(response)
    return l

@app.post('/submit')
def add_response(response: Input):
    database.db.responses.insert_one(dict(response))
    return dict(response)