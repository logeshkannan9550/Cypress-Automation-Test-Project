describe('stay-tabs-testing', () => {
    const website = 'https://www.booking.com';
    //get the elements of content of first in stay tab
    it('content-1', () => {
        cy.visit(website);
        cy.get('[data-testid="searchbox-layout-wide"]').find(':nth-child(n)').each(($nthchild, index)=>{
            cy.wrap($nthchild);
        });
    });
    //get the elements of content of second in stay tab
    it('content-2', () => {
        cy.visit(website);
        cy.get('[data-capla-component-boundary="b-index-lp-web-mfe/MerchCarousel/DomesticDestinationsWww"] > :nth-child(1) > [data-testid="merch-carousel"] > .b22f788b4e').find(':nth-child(n)').each(($nthChild, index) => {
          cy.wrap($nthChild);
        });
      });      
});
