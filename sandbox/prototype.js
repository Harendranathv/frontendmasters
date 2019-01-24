/*
Quando usamos a palavra chave 'new' antes da chamada de uma função ou "class creator",
internamente no contexto de execução da função class creator, o javascript atribui um
objeto vazio para a palavra chave 'this', e no final do contexto de execução, a propriedade
__proto__ é atribuida ao objeto 'retornado' pela função class creator apontando para o
objeto prototype que contém os métodos da classe
*/

// function Player(name, level, gold) {
//   this.name = name;
//   this.level = level;
//   this.gold = gold;
// }

// Player.prototype.raiseGold = function(amount) {
//   this.gold += amount;
// };

// Player.prototype.getGold = function() {
//   console.log(this.gold);
// };

class Player {
  constructor(name, level, gold) {
    this.name = name;
    this.level = level;
    this.gold = gold;
  }

  raiseGold(amount) {
    this.gold += amount;
  }

  getGold() {
    console.log(this.gold);
  }
}

const player1 = new Player('Jeff', 99, 100);

player1.getGold();
player1.raiseGold(100);
player1.getGold();
console.log(player1.level);
