class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get getSaldo() {
        return this.saldo();
    }

    set setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if(saldo > valor) {
            this.saldo = this.saldo - valor;
        } else {
            console.log("Saldo insuficiente");
        }
        
        return this.saldo;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
     constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "corrente";
        this.cartaoCredito = cartaoCredito;
     }

     get getCartaoCredito(){
        return this.cartaoCredito;
     }

     set setCartaoCredito(cartaoCredito){
        this.cartaoCredito = cartaoCredito;
     }
}

class ContaPoupanca extends ContaBancaria {
    construtor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    construtor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupança";
    }
    sacar(valor) {
        if(valor >= 500) {
            return "Valor acima do permitido!";
        } else if(valor > this.saldo) {
            return "Saldo insuficiente!";
        } else {
            this.saldo = this.saldo - valor;
            return this.saldo;
        }
    }
}