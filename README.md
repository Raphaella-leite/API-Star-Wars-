# API-Star-Wars-
• Desenvolvida em Nodejs;

• npm run start:dev  => Inicia a aplicação;

•	Ao iniciar a aplicação, é carregado em memória a lista de filmes; 

ENDPOINTS:

•	PATCH /:episode_id  => endpoint onde é possível alterar a descrição de um filme em memória;

•	GET / => endpoint onde é possível listar os filmes da saga; 
	
• GET /:id	=> endpoint onde é possível exibir detalhes de um filme; 

• GET /:id => endpoint onde é possível detalhar um filme especifico;

•	Criado um mecanismo de controle de alteração onde toda vez que uma descrição é alterada, o campo versão do filme deve ser alterado de forma incremental;

•	A versão do filme retorna junto com a lista do filme;

