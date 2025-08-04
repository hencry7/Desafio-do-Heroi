class Heroi {
    nome;
    xp;

    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;
    }

    classificadorHeroi() {
        if (this.xp < 1000) {
            return 'Ferro'
        } else if (this.xp >= 1000 && this.xp < 2000) {
            return 'Bronze'
        } else if (this.xp >= 2000 && this.xp < 5000) {
            return 'Prata'
        } else if (this.xp >= 5000 && this.xp < 7000) {
            return 'Ouro'
        } else if (this.xp >= 7000 && this.xp < 8000) {
            return 'Platina'
        } else if (this.xp >= 8000 && this.xp < 9000) {
            return 'Ascendente'
        } else if (this.xp >= 9000 && this.xp < 10000) {
            return 'Imortal'
        } else {
            return 'Radiante'
        }
    }
}

(function () {
    const nome = 'Leon';
    const xp = 4287;

    const heroi = new Heroi(nome, xp)

    console.log(`O herói de nome ${heroi.nome} está no nível de ${heroi.classificadorHeroi()}`)
})();