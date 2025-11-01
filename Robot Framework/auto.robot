*** Settings ***
Library           myrobot.py

*** Test Cases ***
Executa metodo faz_algo definido em myrobot
  ${status}=   Faz Algo

Executa metodo faz_algo e verifica_resultado
  Faz Algo e Confirma Que Deu Certo

*** Keywords ***
Faz Algo e Confirma Que Deu Certo
  ${status}=    Faz Algo
  Verifica Resultado   ${status}    ok