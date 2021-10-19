const express = require('express');
const cors = require('cors');

const {sequelize, Sequelize} = require('./models');

const models = require('./models');
const { json } = require('sequelize/types');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;
let compra = models.Compra;
let itemcompra = models.Itemcompra;
let produto = models.Produto;

app.get('/', function (req, res){
    res.send('Olá, Bem vindo a nossa empresa')
});

app.post('/compras', async(req,res)=>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'compra feita com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'problema no código fonte'
        });
    });
});

app.post('/produto', async(req,res)=>{
    await produto.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'produto inserido com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'problema no código fonte'
        })
    });
});

app.post('/itenscompra', async(req,res)=>{
    await itemcompra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'item criado com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Problema no código fonte'
        });
    });
});

app.post('/servicos', async(req,res)=>{
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Servico criado sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "problema no código fonte."
        });
    });
});

app.post('/clientes', async(req,res)=>{
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente inserido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "problema no código fonte"
        });
    });
});

app.post('/pedidos', async(req,res)=>{
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido feito com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "problema no código fonte."
        });
    });
});

app.post('/itenspedido', async(req,res)=>{
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "item criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message:"problema no código fonte"
        });
    });
});

app.get('/listaprodutos', async(req,res)=>{
    await produto.findAll({
        raw: true
    }).then(function(produtos){
        res.json({produtos})
    });
});

app.get('/listacompras', async(req,res)=>{
    await compra.findAll({
        raw: true
    }).then(function(compras){
        res.json({compras})
    });
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order: [['nome','ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});

app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

app.get('/ofertaservicos', async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possivel conectar"
        });
    });
});

app.put('/atualizacompra', async(req,res)=>{
    await compra.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'alteração bem sucedida'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'erro no código fonte'
        });
    });
});

app.put('/atualizaproduto', async(req,res)=>{
    await produto.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'alteração bem sucedida'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'erro no código fonte'
        });
    });
});

app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "alteração bem sucedida"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "erro no código fonte"
        });
    });
});

app.put('/atualizacliente', async(req,res)=>{
    await cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'alteração bem sucedida'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'erro no código fonte'
        });
    });
});

app.put('/atualizapedido', async(req,res)=>{
    await pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'alteração bem sucedida'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'erro no código fonte'
        });
    });
});

app.get('/pedidos/:id', async(req,res)=>{
    await pedido.findByPk(req.params.id,{include:[{all: true}]})
    .then(ped=>{
        return res.json({ped});
    })
})

app.get('/compras/:id', async(req,res)=>{
    await compra.findByPk(req.params.id,{include:[{all: true}]})
    .then(comp=>{
        return res.json({comp})
    })
})

app.put('/pedidos/:id/editaritem', async(req,res)=>{
    const item={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };
    if (!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'pedido não foi encontrado.'
        });
    };

    if (!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            message: 'serviço não foi encontrado.'
        });
    };

    await itempedido.update(item, {
        where: sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: 'pedido foi alterado com sucesso',
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message:'Erro: não foi possivel alterar'
        });
    });
});

app.put('/compras/:id/editaritem', async(req,res)=>{
    const item={
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };
    if (!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'compra não encontrada'
        });
    };
    if (!await produto.findByPk(req.body.ProdutoId)){
        return res.status(400).json({
            error: true,
            message: 'Serviço não foi encontrado'
        });
    };
    await itemcompra.update(item, {
        where: Sequelize.and({CompraId: req.body.CompraId}, {ProdutosId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            message: 'compra alterada com sucesso',
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'erro: não foi possivel alterar'
        });
    });
});

app.get('/excluircliente/:id', async(req,res)=>{
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluido com sucesso!"
        });
    }).cath(function(erro){
        return res.status(400).json({
            error: true,
            message: "erro ao excluir cliente,"
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})