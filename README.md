# AptecWeb API
Esta é a API da plataforma AptecWeb. A seguinte URL deve ser utilizada para consultar a API.
> https://<endereco_loja>/ws

Para cada consulta, deve-se inserir a extensão .json no final da URL. Veja abaixo alguns exemplos:

Consulta todos os produtos:
> https://<endereco_loja>/ws/wsprodutos.json

Consulta produto específico:
> https://<endereco_loja>/ws/wsprodutos/<id_produto>.json

Todas as requisições devem possuir o parametro appKey no cabeçalho da requisição. O appKey pode ser obtido no próprio painel da loja, clicando no nome do usuário no canto superior direito.
