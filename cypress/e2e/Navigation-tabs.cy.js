describe('tabs-opens', () => {
    const website='https://www.booking.com/';
    it('Stay-tab',()=>{
      cy.visit(website);
      cy.get('#accommodations').click();
    })
    it('Flight-tab', () => {
      cy.visit(website);
      cy.get('#flights').click();
    });
    it('Flight-hotel-tab',()=>{
      cy.visit(website);
      cy.get('#packages').click();
    });
    it('car-rental-tab',()=>{
      cy.visit(website);
      cy.get('#cars').click();
    });
    it('Attraction-tab',()=>{
      cy.visit(website);
      cy.get('#attractions').click();
    });
    it('Airport-taxis-tab',()=>{
      cy.visit(website);
      cy.get('#airport_taxis').click();
    });
  });
  