//Vars
const budgetUser = prompt('¿Cúal es tu presupuesto semanal?')
const form = document.getElementById('agregar-gasto')
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

class Interface {
    constructor() {}

    setBudget(quantity) {
        const budgetSpan = document.querySelector('span#total')
        const leftoverSpan = document.querySelector('span#restante')

        budgetSpan.innerHTML = `${quantity}`
        leftoverSpan.innerHTML = `${}`
    }

    handlerMessage(m, t) {
        const divMessage = document.createElement('div')
        divMessage.classList.add('text-center', 'alert')

        if (t === 'error') {
            divMessage.classList.add('alert-danger')
        } else {
            divMessage.classList.add('alert-success')
        }

        divMessage.appendChild(document.createTextNode(m))

        document.querySelector('.primario').insertBefore(divMessage, form)

        setTimeout(() => {
            document.querySelector('.primario .alert').remove()
        }, 3000)
    }

    addExpenseList(name, expQua) {
        const expenseList = document.getElementById('#gastos ul')

        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'

        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${expQua} </span>
        `

        expenseList.appendChild(li)
    }

    budgetLeftover(expQua) {
        const leftover = document.querySelector('spam#restante')
        const budgetLeftoverUser = quantityBudget.budgetLeftover(expQua)

        leftover.innerHTML = `${budgetLeftoverUse}`

        this.checkBudget()
    }

    checkBudget() {
        const totalBudget = quantityBudget.budget
        const restBudget = quantityBudget.leftover

        if ((totalBudget / 4) > restBudget) {
            const rest = document.querySelector('.restante')
            rest.classList.remove('alert-success', 'alert-warning')
            rest.classList.add('alert-danger')

        } else if ((totalBudget / 2) > restBudget){
            const rest = document.querySelector('.restante')
            rest.classList.remove('alert-success')
            rest.classList.add('alert-warning')
        }
    }
}


//Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (budgetUser === null || budgetUser === '') {
        window.location.reload()
    } else {
        quantityBudget = new Budget(budgetUser)
        const ui = new Interface()
        ui.setBudget(quantityBudget.budget)
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const expenseName = document.querySelector('#gasto').value 
    const expreseQuantity = document.querySelector('#cantidad').value 

    const ui = new Interface()

    if (expenseName === '' || expenseQuantity === '') {
        ui.handlerMessage('Hubo un error', 'error')
    } else {
        ui.handlerMessage('Correcto', 'correcto')
        ui.addExpenseList(expenseName, expreseQuantity)
        ui.budgetLeftover(expreseQuantity)
    }
})