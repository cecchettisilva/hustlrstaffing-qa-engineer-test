// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('AccessProductPage', () => { 
    cy.get("a[href='/product']").click();
    cy.get('h2.text-center').should('have.text', 'Latest Products');
})

Cypress.Commands.add('AddProductToCard', (productName, productValue) => { 
    cy.contains('h5.card-title', productName)
      .closest('div.card') 
      .within(() => {
        cy.contains('ul li', productValue); 
        cy.get('button.btn-dark').click(); 
    });
    cy.get('#_rht_toaster').should('have.text', 'Added to cart')
})

Cypress.Commands.add('ValidateCartItens', (productsItemList, productAmounts, productAmountAndValues, 
    productsAmountOrderSummary, productsTotalValue, productsShippingValue, productsTotalAmount) => { 
    cy.get("a[href='/cart']").click();
    cy.get('h1.text-center').should('have.text', 'Cart')
    cy.get('h5.mb-0').eq(0).should('have.text', 'Item List')

    productsItemList.forEach((product, index) => {
        cy.get('img').eq(index).should('have.attr', 'alt', product)
        cy.get('p.mx-5').eq(index).should('have.text', productAmounts[index])
        cy.get('p.text-start.text-md-center strong').eq(index).should('contain.text', productAmountAndValues[index]);
    });

    cy.get('h5.mb-0').eq(1).should('have.text', 'Order Summary')
    cy.get('ul li.list-group-item').eq(0).invoke('text').then((fullText) => {
    cy.get('ul li.list-group-item span').eq(0).invoke('text').then((spanText) => {
        const textWithoutSpan = fullText.replace(spanText, '').trim()
        expect(textWithoutSpan).to.equal(productsAmountOrderSummary)
        })
    })
    cy.get('ul li.list-group-item span').eq(0).should('have.text', productsTotalValue);

    cy.get('ul li.list-group-item').eq(1).invoke('text').then((fullText) => {
    cy.get('ul li.list-group-item span').eq(1).invoke('text').then((spanText) => {
        const textWithoutSpan = fullText.replace(spanText, '').trim()
        expect(textWithoutSpan).to.equal('Shipping')
        })
    })
    cy.get('ul li.list-group-item span').eq(1).should('have.text', productsShippingValue);
    
    cy.get('ul li.list-group-item').eq(2).invoke('text').then((fullText) => {
    cy.get('ul li.list-group-item span').eq(2).invoke('text').then((spanText) => {
        const textWithoutSpan = fullText.replace(spanText, '').trim()
        expect(textWithoutSpan).to.equal('Total amount')
        })
    })
    cy.get('ul li.list-group-item span').eq(2).should('have.text', productsTotalAmount);

    cy.get('a.btn-dark').should('have.text', 'Go to checkout')
})