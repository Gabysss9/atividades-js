const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Loja Virtual - Produtos em Destaque';
document.body.appendChild(titulo);


const produto = document.createElement('div');


const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Camiseta Personalizada';


const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Camiseta 100% algodão com estampas exclusivas e tamanhos variados.';


const precoProduto = document.createElement('span');
precoProduto.textContent = 'Preço: R$ 49,90';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'img/pexels-julia-kuzenkov-442028-1188748.jpg';
imagemProduto.alt = 'Imagem da camiseta';
imagemProduto.style.width = '150px'; 
imagemProduto.style.height = 'auto'; 

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);


document.body.appendChild(produto);

