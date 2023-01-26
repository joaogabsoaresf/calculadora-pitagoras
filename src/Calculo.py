class Calculo:
    def __init__(self, **kwargs) -> None:
        self.hipotenusa = float(kwargs.get('hipotenusa'))
        self.cateto1 = float(kwargs.get('cateto1'))
        self.cateto2 = float(kwargs.get('cateto2'))

    def pegar_retorno(self):
        if not self.hipotenusa:
            return {'side':'hipotenusa', 'result': round((self.cateto1 ** 2 + self.cateto2 ** 2) ** (1/2), 4)}
        
        if not self.cateto1:
            return {'side':'cateto1', 'result': round((self.hipotenusa ** 2 - self.cateto2 ** 2), 4)}
        
        if not self.cateto2:
            return {'side':'cateto2', 'result': round((self.hipotenusa ** 2 - self.cateto1 ** 2), 4)}
