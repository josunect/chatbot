# app.py
from fastapi import FastAPI
from llama_cpp import Llama

app = FastAPI()
llm = Llama(model_path="./openchat.gguf")

@app.post("/chat")
def chat(prompt: str):
    output = llm(prompt=prompt, max_tokens=256)
    return {"response": output["choices"][0]["text"]}

