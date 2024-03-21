// describe('Swiper Gallery Test', function () {
//   it('Checks if second slide contains "United Kingdom"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if third slide contains "Paris"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000)
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').should('contain', 'Paris');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if gallery is correctly displayed', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper').visible;
//     cy.get('.swiper-wrapper').find('.swiper-slide').should('have.length', 3);
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if user can swipe with buttons', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//     cy.get('.swiper-button-prev').click();
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').should('contain', 'Rome');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if description is correct', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').find("h1").should('contain', 'London');
//     cy.get('.swiper-slide-active').find("p").should('contain', 'United Kingdom');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').find("h1").should('contain', 'Paris');
//     cy.get('.swiper-slide-active').find("p").should('contain', 'France');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000)
//     cy.get('.swiper-slide-active').find("h1").should('contain', 'Rome');
//     cy.get('.swiper-slide-active').find("p").should('contain', 'Italy');
//   });
// });

describe('Swiper Gallery Test', function () {
  it('Checks respo', function () {
    cy.viewport(1920,1080);
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.viewport(1280,800);
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.viewport(575,911);
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});