import BasePage from"./base.page";

class FormPage extends BasePage {
    static get url(){
        return '/automation-practice-form';
    }

    static inputFirstName(firstName) {
        cy.get('#firstName').type(firstName);
    }
    
    static inputLastName(lastName) {
        cy.get('#lastName').type(lastName);
    }
    
    static inputEmail(email) {
        cy.get('#userEmail').type(email);
    }
    
    static selectGender(gender) {
        cy.get('#genterWrapper input[type="radio"]').check(gender, { force: true });
    }
    
    static inputMobileNumber(mobileNumber) {
        cy.get('#userNumber').type(mobileNumber);
    }

    static selectDateOfBirth(date) {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1930'); 
        cy.get('.react-datepicker__month-select').select('February');
        cy.contains('.react-datepicker__day:not(.react-datepicker__day--outside-month)', date).click(); 
    }

    static setSubjects(subject) {
        cy.get('#subjectsInput').type(subject);
        cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
    }
    
    static setHobbies(hobby) {
        cy.contains('.custom-control-label', hobby).click();
    }

    static get uploadPicture() {
        return cy.get('#uploadPicture'); 
    }

    static clickSubmitButton() {
        cy.get('#submit').click();
    }

    // Validācijas metodes
    
    static getFirstNameValue() {
        return cy.get('#firstName');
      }
    
      static getLastNameValue() {
        return cy.get('#lastName');
      }
    
      static getEmailValue() {
        return cy.get('#userEmail');
      }
    
      static getGenderValue() {
        return cy.get('#genterWrapper input[type="radio"]:checked');
      }
    
      static getMobileNumberValue() {
        return cy.get('#userNumber');
      }
    
      static getDateOfBirthValue() {
        return cy.get('#dateOfBirthInput');
      }
    
      static getSubjectsValue() {
        return cy.get('#subjectsInput');
      }
    
      static getHobbiesValue() {
        return cy.get('.custom-control-input:checked');
      }
   

}

export default FormPage;