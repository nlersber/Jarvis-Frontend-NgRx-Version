Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4200/api/account/',
        body: {
            username: 'Testtest',
            password: 'Password'
        },
        response: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlc3QudGVzdCIsInVuaXF1ZV9uYW1lIjoiVGVzdHRlc3QiLCJleHAiOjE1NjU3MjE0MTh9.lxIF_smunsBYHJu7EwxovWmZHD2tTSsCKOG5Eh2_w54"
    })
        .then((resp) => {
            window.localStorage.setItem('currentUser', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlc3QudGVzdCIsInVuaXF1ZV9uYW1lIjoiVGVzdHRlc3QiLCJleHAiOjE1NjU3MjE0MTh9.lxIF_smunsBYHJu7EwxovWmZHD2tTSsCKOG5Eh2_w54")
        })

})

describe('Testing the shop', function () {
    beforeEach(() => {
        cy.login()
    })


    it('mock item searchbar', function () {
        cy.server()
        cy.route({
            method: 'GET',
            url: 'api/items',
            status: 200,
            response: 'fixture:items.json'
        })
        cy.visit('shop/store')

        cy.get('[data-cy="searchbar"').type('water')
        cy.get('showcase').should('have.length', 1)
    })

    it('mock item filter lower', function () {
        cy.server()
        cy.route({
            method: 'GET',
            url: 'api/items',
            status: 200,
            response: 'fixture:items.json'
        })
        cy.visit('shop/store')

        cy.get('[data-cy="filter"]').eq(2).check()
        cy.get('showcase').should('have.length', 1)
    })

    

})