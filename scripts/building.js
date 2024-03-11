class Building {
    constructor(autoClickerPrice, cpf) {
        this.autoOwned = 0;
        this.autoClickerPrice = autoClickerPrice;
        this.baseCpf = 1 / 450;
        this.cpf = cpf;
    }

    purchase() {
        if (score >= this.autoClickerPrice) {
            score -= this.autoClickerPrice;
            this.autoOwned++;
            this.autoClickerPrice *= 1.15;
            this.autoClickerPrice = Math.round(this.autoClickerPrice);
            this.cpf += this.baseCpf * this.autoOwned;
            updateButton();
        }
    }
}
