from django.db import models
from django.utils import timezone

class Artigo(models.Model):

    # Estrutura do artigo na página que mostra vários artigos
    titulo = models.CharField(max_length=300)
    capa = models.ImageField(upload_to='capas/', blank=True, null=True)
    resumo = models.TextField(default="", null=False)
    # data automática, mas editável manualmente
    data_publicacao = models.DateTimeField(default=timezone.now)
    
    # Estrutura de conteúdo a ser mostrata na página exclusiva daquele artigo
    conteudo = models.TextField(default="", null=False)

    def __str__(self):
        return self.titulo
