# School Manager

School Manager is a modern web application designed to manage school-related data, such as students, teachers, parents, grades, and groups. Built with **React**, **TypeScript**, **Redux Toolkit**, **RTK Query**, and **Vite**, it provides a fast and efficient user experience. The project also includes **Storybook** for component development, **React Testing Library** for component testing and **Jest** for unit testing.

---

## Features

- **User Management**: Manage students, teachers, and parents.
- **Grade Tracking**: Record and view student grades with powerful tables built using **React Table**.
- **Group Management**: Organize students into groups.
- **Multi-language Support**: Supports English and Russian with **i18next**.
- **Responsive Design**: Built with **Material-UI (MUI)** for a clean and responsive UI.
- **Testing**: Unit and component tests with **Jest** and **React Testing Library**.
- **Component Development**: Isolated component development with **Storybook**.
- **Mock API**: Simulate backend **APIs** with **JSON Server**.
- **State Management**: Manage global state with **Redux Toolkit**.
- **Data Fetching**: Fetch and cache API data with **RTK Query**.
- **Forms**: Handle forms with **React Hook Form**, validate with **Yup**, and display notifications with **React Toastify**.

---

## Technologies Used

### Frontend

- **React**
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **React Hook Form**
- **Yup**
- **React Toastify**
- **React Table**
- **Material-UI (MUI)**
- **i18next**
- **React Router**
- **Vite**

### Backend (Mock API)

- **JSON Server** a simple mock REST API for development and testing purposes

### Testing

- **Jest** for unit testing
- **React Testing Library** for component testing

### Tooling

- **ESLint**, **Stylelint** and **Prettier** for code quality
- **Husky** for pre-commit hooks
- **GitHub Actions** for CI/CD

### Component Development

- **Storybook** for isolated component development and testing

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or **npm/yarn**

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/gatzxx/school-manager.git
    cd school-manager
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Start the development server:

    ```bash
    pnpm run app
    ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## Running Tests

### Unit Tests

To run unit tests:

```bash
pnpm run unit
```

### Test Coverage

To check test coverage:

```bash
pnpm run test:coverage
```

---

## Storybook

To develop and view components in isolation, run **Storybook**:

```bash
pnpm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

---

## Building the Project

To build the project for production:

```bash
pnpm run build
```

The production-ready files will be generated in the `dist` folder.

---

## CI/CD

This project uses **GitHub Actions** for continuous integration and deployment. The workflow includes:

- **Linting**: ESLint, Stylelint
- **Formatting**: Prettier
- **Unit Testing**: Jest
- **Component Testing**: React Testing Library
- **Building the Project**: Vite
- **Building Storybook**

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```bash
    git commit -m "Add your feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Open a pull request.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [gatzxx](https://github.com/gatzxx)

Enjoy using **School Manager**! 🚀
