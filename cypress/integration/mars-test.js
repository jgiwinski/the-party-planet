describe('The Party Planet', () => {

    it('should have a header ', () => {
        cy.fixture('marsPhoto.js').then(() => {
            cy.intercept('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-4-20&api_key=53v8Y7IFlUi4zxNuImN5cZ8W8kghwuo0kqF7hOta')
        })
        cy.visit('http://localhost:3000')
        cy.contains('h1', 'The Party Planet')
        cy.contains('h3', 'A celebration out of this world')
        .get('div').should('be.visible').and('have.class', 'nav-btn-container')
        .get('.nav-btn').should('be.visible').contains('HOME')
        .get('.nav-btn').should('be.visible').contains('FAVORITES')
    })

    it('should  click FAVORITES button and change URL path', () => {
        cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
            .url().should('include', '/favorites')
    });

    it('should  click HOME button and change URL path', () => {
        cy.get('header').get('div').get('.nav-btn').contains('HOME').click()
            .url().should('include', '/')
    });

    it('should display new photo after selecting date', () => {
        cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
            .get('input[type=date]').type('2020-04-20')
            .should('have.value', '2020-04-20')
            .get('.launch-btn').click()
            .get('.main-container').get('.photo-container')
            .get('img').should('have.class', 'main-image')
    });

    it('should show photo details on right side of screen', () => {
        cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
        .get('label').first()
        .contains('BIRTHDAY').click()
        .get('input[type=date]').type('2015-06-03')
        .should('have.value', '2015-06-03')
        .get('.launch-btn').click()
        .get('.main-container').get('.details-container')
        .get('h1').contains('Happy Birthday')
        .get('h2').contains('Photo Taken By: Curiosity')
        .get('h1').contains('June 3')
    })

    it('should favorite a photo', () => {
        cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
        .get('label').first()
        .contains('BIRTHDAY').click()
        .get('input[type=date]').type('2015-06-03')
        .should('have.value', '2015-06-03')
        .get('.launch-btn').click()
        .get('.main-container').get('.details-container')
        .get('button').contains('ADD TO FAVORITES').click() 
    })

    it('should view favorited photos', () => {
        cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
        .get('section').get('article').should('have.class', 'fav-photo-container')
    })

    it('should show a 404 error page if the user navigates to an undefined page', () => {
        cy.visit('http://localhost:3000/mars')
        cy.contains('return to the home page')
        cy.get('.lost-error').click()
        cy.url('eq', 'http://localhost:3000/')
    })
})
