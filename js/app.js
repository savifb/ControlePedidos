import { Produto, Pedido, ItemPedido, Cliente } from "./classes"

//CATÁLOGO DE PRODUTOS =========================== //
const produtos = [
    new Produto(1,"Pizza", 30),
    new Produto(2,"Sanduíche de Presunto", 5),
    new Produto(3,"Feijoada", 45),
    new Produto(4,"Macarronada", 10)
];




const total = document.getElementById("valorTotal")
const cliente = document.getElementById("cliente")
const listaProdutos = document.getElementById("listaProdutos")
const listaItensPedidos = document.getElementById("itensPedidos")
const adicionarProduto = document.getElementById("btnAdicionarProduto")
const enviarPedito = document.getElementById("btnEnviarPedido")

