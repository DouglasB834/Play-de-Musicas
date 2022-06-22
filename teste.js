

function soma(valor1, valor2) { return valor1 + valor2 }

function comissao(vendas) {
    if (vendas > 5000) {
      return vendas * 1.2
    } else  if (vendas > 1000) {
        console.log(comissao)
      return vendas * 1.1
   }
}
   
let calculacomissao = () =>{
    vendasProdutos = 1200
    vendasServicos = 500
    vendasAssessorios = 300
    totalVendas =  (vendasProdutos + vendasServicos) + vendasAssessorios
   
    return comissao(totalVendas)
   
}
comissao()
calculacomissao()