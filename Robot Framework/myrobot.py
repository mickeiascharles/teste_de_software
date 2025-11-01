class myrobot(object):
    def faz_algo(self):
        print("Executando uma tarefa simples...")
        return 'ok'

    def verifica_resultado(self, status, expected):
        if status != expected:
            raise AssertionError(f"Esperado: {expected}. Obtido: {self._status}")
        