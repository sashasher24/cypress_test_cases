describe('Listing form', () => {
    it('should have 3 fields', () => {
        cy.get('.rec-slf-listing-name').should('be.visible')
        cy.get('.rec-slf-listing-attribute-category').should('be.visible')
        cy.get('.rec-slf-listing-price').should('be.visible')
        cy.get('.rec-slf-listing-attribute-size').should('not.be.visible')
    })

    it('3 main fields should be required', () => {
        cy.get('.rec-slf-listing-name').should('have.attr', 'required')
        cy.get('.rec-slf-listing-attribute-category').should('have.attr', 'required')
        cy.get('.rec-slf-listing-price').should('have.attr', 'required')
    })

    it('fields should have placeholders', () => {
        cy.get('.rec-slf-listing-name').invoke('attr', 'placeholder').should('eq', 'Item Name')
        cy.get('.rec-slf-listing-attribute-category').find('option:selected').should('have.text', 'Category')
        cy.get('.rec-slf-listing-price').invoke('attr', 'placeholder').should('eq', 'Price')
    })

    it('should have 3 category options', () => {
        cy.get('.rec-slf-listing-attribute-category').find('option[data-category]').should('have.length', 3)
    })

    it('should display a size select field after choosing a category', () => {
        cy.get('.rec-slf-listing-attribute-category').select('T-Shirts')
        cy.get('.rec-slf-listing-attribute-category').find('option:selected').should('have.text', 'T-Shirts')
        cy.get('#rec-slf-listing-attribute-size-tshirt-container').should('be.visible') //better to make its own function with the category as a parameter
    })

    it('should have all size options', () => {
        cy.get('.rec-slf-listing-attribute-category').select('T-Shirts')
        cy.get('#rec-slf-listing-attribute-size-tshirt-container').within(() => {
            cy.get('option[value]:not([value=""])').should('have.length', 7) //better to make its own function with the category as a parameter to check different number of sropdown options for each category
        })
    })

    it('should allow to choose each size', () => {
        cy.get('.rec-slf-listing-attribute-size').select('10')
        cy.get('.rec-slf-listing-attribute-size').find('option:selected').should('have.text', '10') //better make its own function that takes size (10) as a parameter
    })
})