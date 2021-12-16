// In order to complete this challenge you will need to write and run the following tests. They do not need to pass, so long as the reasons they are failing is legitimate.

// Set up tests that will...

//  Get the Name input and type a name in it.
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//  Get the Email input and type an email address in it
//  Get the password input and type a password in it
//  Set up a test that will check to see if a user can check the terms of service box
//  Check to see if a user can submit the form data
//  Check for form validation if an input is left empty
describe('User Onboarding App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })

    it('sanity check to make sure tests work', () => {
        // 'it' is a test
        // expect is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}
        expect({}).to.eql({}); // not strict ==
    })

    //Helper to grab elements
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheckbox = () => cy.get('input[name=termsOfService]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
        tosCheckbox().should('exist');
      })
    
    describe('Filling out inputs and then cancelling them', ()=>{
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can enter in the inputs', ()=>{
            nameInput()
                .should('have.value', '')
                .type('Daniel Salazar')
                .should('have.value', 'Daniel Salazar')

            emailInput()
                .should('have.value', '')
                .type('danielsal@gmail.com')
                .should('have.value', 'danielsal@gmail.com')

            passwordInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123')

        })

        it('can check the TOS box', ()=>{
            tosCheckbox()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        it('the submit button enables when all inputs are filled out', () => {
            nameInput().type('Daniel Salazar');
            emailInput().type('danielsal@gmail.com');
            passwordInput().type('newPassword1234');
            tosCheckbox().check();
            submitBtn().should('not.be.disabled');
        })
    })




})