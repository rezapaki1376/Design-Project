# Hypermedia Applications - Web and Multimedia: Summer 2022

## Introduction

Welcome to the Repository for the mandatory assignment of Hypermedia Applications. The repository is divided into two sections, **codebase** as well as **documentation**.

## Choices of Implementation and choices of Architecture

The implenetation of the prototype has been written in using the Framework NuxtJs, Sequelize as well as Express.js.
To support engineers in the development phase as well as ensure typesafetly, we introduced Typescript in most of backend related files.

We have decided to enable server side rendering for the application with the target **server**.
The decision was made based on the following requirement/assumptions:

- Search Engine optimization plays a cruital role for high ranking scores of the website thus to support server side rendered files were seen as neccessary to fulfill the requirements.
- The website contains data (such as events) that is of short longevity. A admin is required to regularly upload new data items to keep the webpage relevant and up-to-date. Taking this into consideration, we decided that the website needs a lightweight content management systemt (that requires login) through which the webmaster can easily edit, create and delete content published on the website. To realize that, a applicaiton server that processes the data is required.

## Team Members contribution (in hour): This mentioned time is an approximate time

Amin Gerard Hofmann: person code: 10853020 email: amingerard.hofmann@mail.polimi.it<br />
<br />
Document design:<br />
Backend design:<br />
Data base design and filling the information: <br />
Front design:<br />
Final evaluation:<br />
SEO optimization:<br />
Accessibility and usability test:<br />

Mohammad Mahdi Safari: person code: 10772564 email: mohammadmahdi.safari@mail.polimi.it<br />
<br />
Document design: 4h<br />
Backend design:---<br />
Data base design and filling the information: 3:30h<br />
Front design: 15h<br />
Final evaluation: 2h<br />
SEO optimization: 2h<br />
Accessibility and usability test: 1h<br />
<br /><br />

Reza Paki: person code: 10832693 emal:Reza.paki@mail.polimi.it<br />
<br />
Document design: 2h<br />
Backend design:-----<br />
Data base design and filling the information: 1h<br />
Front design: 25h<br />
Final evaluation: 1h<br />
SEO optimization: 1h<br />
Accessibility and usability test: 1h<br />
<br /><br />

Sajad Hamzenejadi: person code: 10818436 email: Sajad.hamzenejadi@mail.polimi.it<br />
<br />
Document design: 4h <br />
Backend design: -----<br />
Data base design and filling the information: 2h <br />
Front design: 15h<br />
Final evaluation: 2h<br />
SEO optimization: 2h<br />
Accessibility and usability test: 2h<br />
<br /><br />

#### **A1: Content Design - C-IDM Diagram**

Create C-IDM schema in the large and content in the small dables

#### **A2: Navigation Design - Create Abstract pages**

Remember to mention where each page comes from (name of topic, etc.) and use the Terminology (structured links, transition links, etc. )correctly.

#### **A3: Presentation Design (will be replaces with Screenshots of the actual implementation in a later stage)**

For each abstract page, create commented high fidelity wireframes. Screenshots of the implemented pages/components

#### **A4: DB Design**

Create the ERD diagram and the corresponding relational schema for the context and relationships of your web site

### Step C: Prepare the material for your Design Report

#### **Interaction Scenarios aka. Story Boards**

An interaction scenario is a story of use, it describes a flow of a user interaction across your website for users to a fiven profle having a speficic goal

### Deliverable: Code - Implementation

The following criterias as the bassis for grading:

- **Technical correctness of pages implementation**
- **Components Structure and reusability:** an application in Vue/Nuxt can be seen as a set of components. We will assess the number and organization of components used.
- **SEO optimization:** We will evaluate the choices made by the teams and how they contribute to SEO optimization.
- **Adherence to Vue/Nuxt best practices:** as frameworks with high scalability often you can achieve the same results with different codes. We will reward those who will use in the most appropriate way the features of the given framework.
- **Responsivity:** when changing the mobile device the interface adapts to the new view.
- **Accessibility:** respect of the accessibility requirements.
- **CONSISTENCY WITH IDM SPECIFICATIONS**.
