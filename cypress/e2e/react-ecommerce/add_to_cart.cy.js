describe('E-commerce - Add to Cart Feature', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC001 - Add to cart a product', () => {

    cy.AccessProductPage()
    cy.AddProductToCard('Mens Casual', '22.3')
    cy.ValidateCartItens(
        ['Mens Casual Premium Slim Fit T-Shirts '],
        [1],
        ['1 x $22.3'],
        'Products (1)',
        '$22',
        '$30',
        '$52'
    )
  });

  it('TC002 - Add to cart two products', () => {

    cy.AccessProductPage()
    cy.AddProductToCard('Mens Casual', '22.3')
    cy.AddProductToCard('Samsung 49-I', '999.99')
    cy.ValidateCartItens(
        ['Mens Casual Premium Slim Fit T-Shirts ', 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED '],
        [1, 1],
        ['1 x $22.3', '1 x $999.99'],
        'Products (2)',
        '$1022',
        '$30',
        '$1052'
    )
  });

});
