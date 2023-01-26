class Calculo:
    def __init__(self, **kwargs) -> None:
        """
        Inicializa os atributos hipotenusa, cateto1 e cateto2 com os valores passados como argumentos.
        Os valores são obtidos a partir dos argumentos passados como keyword (kwargs)
        """
        self.hipotenusa = kwargs.get('hipotenusa')
        self.cateto1 = kwargs.get('cateto1')
        self.cateto2 = kwargs.get('cateto2')

    def pegar_retorno(self):
        """
        Verifica qual dos atributos não foi passado como argumento e calcula o valor
        correspondente. Retorna um dicionário com a chave 'side' indicando qual lado foi calculado e 
        a chave 'result' com o valor calculado arredondado para 4 casas decimais.
        """
        if not self.hipotenusa:
            return {'side':'hipotenusa', 'result': round((self.cateto1 ** 2 + self.cateto2 ** 2) ** (1/2), 4)}
        
        if not self.cateto1:
            return {'side':'cateto1', 'result': round((self.hipotenusa ** 2 - self.cateto2 ** 2), 4)}
        
        if not self.cateto2:
            return {'side':'cateto2', 'result': round((self.hipotenusa ** 2 - self.cateto1 ** 2), 4)}
