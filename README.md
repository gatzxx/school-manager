# School Manager

School Manager is a modern web application designed to manage school-related data, such as students, teachers, grades, and groups. Built with **React**, **TypeScript**, and **Vite**, it provides a fast and efficient user experience. The project also includes **Storybook** for component development and **Jest** for unit testing.

---

## Features

- **User Management**: Manage students, teachers, and parents.
- **Grade Tracking**: Record and view student grades.
- **Group Management**: Organize students into groups.
- **Multi-language Support**: Supports English and Russian with **i18next**.
- **Responsive Design**: Built with **Material-UI (MUI)** for a clean and responsive UI.
- **Testing**: Unit tests with **Jest** and **React Testing Library**.
- **Component Development**: Isolated component development with **Storybook**.

---

## Technologies Used

### Frontend

- **React**
- **TypeScript**
- **Vite** (for fast development and builds)
- **Material-UI (MUI)** for UI components
- **i18next** for internationalization
- **React Router** for navigation

### Testing

- **Jest**
- **React Testing Library**

### Tooling

- **ESLint** and **Prettier** for code quality
- **Husky** for pre-commit hooks
- **GitHub Actions** for CI/CD

### Component Development

- **Storybook**

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
    pnpm run dev
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

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## Acknowledgments

- **Vite** for the blazing-fast development experience.
- **Material-UI (MUI)** for the beautiful and responsive UI components.
- **i18next** for seamless internationalization.
- **Jest** and **React Testing Library** for robust testing.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [gatzxx](https://github.com/gatzxx)
- **Email**: murwoofmur@gmail.com

Enjoy using **School Manager**! 🚀
