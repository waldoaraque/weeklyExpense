//Vars
const budgetUser = prompt('¿Cúal es tu presupuesto semanal?')
let quantityBudget

console.log(budgetUser)

//Class
class Budget {
    constructor(budget) {
        this.budget = Number(budget)
        this.leftover = Number(budget)
    }

    budgetLeftover(quantity = 0) {
        return this.leftover -= Number(quantity)
    }
}


//Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (budgetUser === null || budgetUser === '') {
        window.location.reload()
    } else {
        quantityBudget = new Budget(budgetUser)
    }
})