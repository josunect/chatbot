FROM python:3.10

WORKDIR /app

COPY . /app

RUN pip install fastapi uvicorn llama-cpp-python

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

