# E-Commerce POC with Module Federation (MFE)

This project demonstrates an e-commerce architecture utilizing Module Federation (MFE) to create a modular and scalable front-end. The application is composed of a host application and several micro-frontends that are dynamically loaded into the shell. The current setup includes the following components:

`shell` (Host application): The main application that integrates all micro-frontends.
`marketing`: A standalone module showcasing marketing content.
`products`: Displays the list of products for the e-commerce site.
`auth`: Manages authentication (e.g., login, registration).

## Getting Started
To get started with this project, follow the steps below:

#### Prerequisites
Ensure you have the following installed on your machine:

- Node.js (version 18 or above recommended)
- Yarn (use npm install -g yarn to install globally)

### Installing Dependencies
To install all dependencies for the project, run:

```bash
$ yarn
```
This will install all necessary dependencies for the host shell and all micro-frontends.

### Running the Applications in Development Mode

To run the entire project in development mode (with the host and all micro-frontends), use the following command:

```bash
$ yarn dev
```

This will start all applications and their respective micro-frontends simultaneously, and they will be automatically integrated via Module Federation.

### Running Applications Individually
If you wish to run a specific application individually, you can do so by using the following command:

```bash
$ yarn <app_name>
```

Replace <app_name> with one of the following:

> - host - Runs the host shell application.
> - marketing - Runs the marketing component.
> - products - Runs the product list component.
> - auth - Runs the authentication component.

Each micro-frontend can be run in isolation for development or debugging purposes.

### Architecture

This project follows a Module Federation approach, allowing different parts of the application to be developed, deployed, and updated independently.

#### Module Federation Overview

Module Federation is a feature of Webpack that allows JavaScript applications to share code dynamically. In this project:

Each micro-frontend is a separate Webpack build that exposes certain parts of its functionality.
The host application loads the exposed modules from these micro-frontends at runtime. This allows for independent deployments and updates of each micro-frontend without affecting the others.

#### Folder Structure
```plaintext
├── shell
│   └── ... (Host shell application)
├── marketing
│   └── ... (Marketing component)
├── products
│   └── ... (Product list component)
├── auth
│   └── ... (Authentication component)
└── package.json
└── yarn.lock
```

Each folder represents a separate micro-frontend (MFE) or the host shell.

### Notes

This is a Proof of Concept (POC) project to demonstrate how Module Federation can be used in a modular e-commerce application. You may need to adjust the URLs or endpoints used for fetching products or user authentication based on your environment.

### Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request. Make sure to run tests and verify the integration before submitting.

### License
This project is licensed under the MIT License - see the LICENSE file for details.