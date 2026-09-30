export class Produto{
    constructor(id_produto, nome, preco){
        this.id_produto = id_produto
        this.nome = nome;
        this.preco = preco;
    }

}  

export class Cliente{
    constructor(id_cliente, nome_cliente){
        this.id_cliente = id_cliente;
        this.nome_cliente = nome_cliente;
        
    }
}

export class ItemPedido{
    constructor(id_pedido, id_produto, qtd_produto){
        this.id_pedido = id_pedido;
        this.id_produto = id_produto;
        this.qtd_produto = qtd_produto;
    }
}

export class Pedido{
    #itens_pedido = [];
    constructor(num_pedido, id_cliente){
        this.num_pedido = num_pedido;
        this.id_cliente = id_cliente;
    }
    

    adicionarProduto(produto){
        const item = new ItemPedido(
            this.num_pedido,
            produto.id_produto,
            1
        );
        this.#itens_pedido.push(item)

    }
    deleteProduto(){

    }
    atualizarQuantidade(){

    }
    calcularTotal(produtos){
        return this.#itens_pedido.reduce((acumulador, item) => {
            const produto = produtos.find((produto)=>{
                return produto.id_produto === item.id_produto;
            })
            return acumulador + (produto.preco*item.qtd_produto);
        }, 0)
       }

    buscarProdutos(){

    }

}
const pizza = new Produto(1, "Pizza", 30);
const refrigerante = new Produto(2, "Refrigerante", 8);

const cliente = new Cliente(1, "João");

const pedido = new Pedido(1, cliente.id_cliente);