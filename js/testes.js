import { Produto, Cliente, ItemPedido, Pedido } from "./classes.js";         

const produtos = [
    new Produto(1, "Pizza", 30),
    new Produto(2, "Refrigerante", 8),
    new Produto(3, "Batata", 15)
];



const pizza = new Produto(1, 'Pizza', 30)
const sp = new Produto(2, 'Sanduíche de Presunto', 8)

const cliente = new Cliente(1, 'Ferdinando')

const pedido = new Pedido(1, cliente.id_cliente)

pedido.adicionarProduto(produtos)
pedido.adicionarProduto(sp)

