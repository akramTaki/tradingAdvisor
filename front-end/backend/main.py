from fastapi import FastAPI
from fastapi import Response

from ipynb.fs.full.calculator import investment_calc

app = FastAPI()

@app.get("/hello")
def hello():
  return Response(content="hello  there", media_type="application/json")

@app.get("/investment")
def hello(ticker, period, amount):
  return Response(content=investment_calc(ticker, period, amount), media_type="application/json")