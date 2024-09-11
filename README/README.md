# SSL Certificate Checker

This project is a full-stack web application that allows users to check and validate SSL certificates for given domain names. The application provides essential details about the SSL certificate, such as validity status, expiration date, issuer details, and more.

## Table of Contents
- [Overview](#overview)
- [Setup and Run Instructions](#setup-and-run-instructions)
- [Technology Choices](#technology-choices)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [Known Limitations and Areas for Improvement](#known-limitations-and-areas-for-improvement)


## Overview

This project checks and validates SSL certificates for domain names entered by users. The application comprises a React frontend and an Express backend. It displays information about the SSL certificate, including:
- Validity status
- Expiration date
- Issuer details
- Subject details
- Whether the certificate is valid for the input domain
- Whether the CA is valid
- Whether the certificate is self-signed
- CRL/OCSP status

## Setup and Run Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Backend Setup

1. **Clone the repository**:

- git clone <repository-url>
- cd ssl-checker/backend

2. **Install dependencies**:

- npm install

3. **Start the backend server**:

- node server.js
The backend server will run on http://localhost:5000.

4. **Frontend Setup**:
Navigate to the frontend directory:

cd ../frontend
Install dependencies:


npm install
Start the React application:

npm start
The React app will run on http://localhost:3000.

5. **Running the Application**:

Open your browser and navigate to http://localhost:3000.
Enter a domain name in the input field and click "Check SSL" to check the SSL certificate details.


### Functional Requirements

#### Frontend
- A single-page application using React.
- A user interface with:
  - An input field for users to enter a domain name.
  - A submit button to initiate the SSL certificate check.
  - A results section to display the certificate information and validation results.

#### Backend
- A RESTful API using Express.
- An endpoint that accepts a domain name and performs the following operations:
  - Fetch the SSL certificate for the given domain.
  - Extract metadata from the certificate.
  - Validate the certificate's expiry date.
  - Check if the certificate chain is valid.
  - Verify that the certificate is valid for the input domain.
  - Check if the certificate has been revoked.

### Display the Following SSL Certificate Information:
- Validity status
- Expiration date
- Issuer details
- Subject details
- Whether the certificate is valid for the input domain
- Whether the CA is valid
- Whether the certificate is self-signed
- CRL/OCSP status

### Implement Error Handling
- Display user-friendly messages for various error scenarios (e.g., invalid domain, network errors).

## Technology Choices

### Frontend
- **React**: Chosen for its component-based architecture, which facilitates the development of reusable and maintainable UI components.
- **CSS**: Used to style the application and ensure a clean, responsive, and user-friendly design.
- **Axios**: For making HTTP requests to the backend API. Axios is preferred for its simplicity and ease of use.

### Backend
- **Express**: Chosen for its simplicity and ease of integration. It serves as the backend server that handles API requests and SSL certificate validation.
- **HTTPS Module**: Utilized to fetch and validate SSL certificates from specified domains.
- **Node.js**: Provides an efficient server environment for handling asynchronous operations required to fetch SSL certificates.

## Assumptions and Design Decisions

- **Single-Page Application**: The frontend is designed as a single-page application (SPA) to provide a smooth and responsive user experience without page reloads.
- **Domain Input**: Assumes that users will input valid domain names. Basic validation is done, but no complex parsing of domains.
- **Error Handling**: Includes basic error handling for common issues such as invalid domain entries or network problems. However, more advanced error handling could be implemented.
- **SSL Validation**: The SSL certificate validation is done using Node.js’s native HTTPS module. Assumes that the domain has a publicly accessible SSL certificate.
- **CRL/OCSP Checks**: Basic checks are implemented, but for a production environment, more robust solutions like integrating with third-party APIs for checking revocation status could be considered.

## Known Limitations and Areas for Improvement

- **Advanced CRL/OCSP Checks**: While basic checks are implemented, integrating a more robust solution could improve accuracy.
- **UI Enhancements**: The current UI is functional but minimalistic. Future improvements could include better visual appeal and more detailed error messages.
- **Performance Optimization**: The application works well for single domain checks. For checking multiple domains simultaneously, performance optimizations might be necessary.
- **Deployment**: The application currently runs locally. Deploying it to a cloud service such as Heroku or Vercel would make it accessible to a broader audience.
#
