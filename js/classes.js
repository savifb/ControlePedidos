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
    


}