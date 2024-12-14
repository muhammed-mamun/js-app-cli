# js-app-cli 🚀

**js-app-cli** is a powerful Command-Line Interface (CLI) tool designed to simplify the process of initializing JavaScript boilerplate projects. It supports popular frameworks like Express and Next.js and allows users to use their own repositories for more flexibility.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Step-by-Step Guide](#step-by-step-guide)
- [Boilerplates](#boilerplates)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Future Plans](#future-plans)
- [Feedback](#feedback)

---

## Features

- ⚡ **Quick Project Setup**: Initialize your project with predefined or custom boilerplates in seconds.
- 🔧 **Built-in Dependencies Installation**: Automatically installs dependencies for the selected boilerplate.
- 🏢 **Custom Project Directory Support**: Choose where your project will be initialized.
- 🎨 **Clean Git Repository**: Removes boilerplate Git history and initializes a fresh repository for your project.
- 🌐 **Custom Repository Support**: Use your own Git repository to initialize projects.
- 📈 **Expandable Framework Support**: Currently supports Express and Next.js with plans for more in the future.

---

## Installation

Install the CLI tool globally using npm:

```bash
npm install -g js-app-cli
```

---

## Usage

Using `js-app-cli` is straightforward and interactive.

### Step-by-Step Guide

1. **Launch the CLI**:
   ```bash
   js-app-cli
   ```

2. **View Available Boilerplates**:
   The CLI will display a list of available boilerplates (e.g., Express, Next.js) and an option to use your own repository.

3. **Choose a Boilerplate or Enter Your Repository**:
   - Select a predefined boilerplate (e.g., `express` or `next`).
   - Or, enter your custom Git repository URL.

4. **Specify the Project Directory**:
   Provide the directory where your project should be created:
   - Use `.` for the current directory.
   - Provide a relative or absolute path for a new directory.

5. **Follow the Prompts**:
   - The CLI will clone the selected boilerplate or custom repository.
   - Remove the existing Git history.
   - Install dependencies.
   - Initialize a new Git repository.
   - Prompt you to add a commit message.

6. **Done!**:
   Navigate to your project directory and start coding:
   ```bash
   cd <your-project-directory>
   ```

---

## Boilerplates

### Available Boilerplates

#### 1. Express
- **Repository**: [nodejs-boilerplate](https://github.com/foyzulkarim/nodejs-boilerplate)
- **Description**: A robust Node.js boilerplate for Express applications.
- **Author**: Foyzul Karim

#### 2. Next.js
- **Repository**: [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)
- **Description**: A comprehensive boilerplate for Next.js applications.
- **Author**: Remi Wg

---

## Examples

### Example 1: Creating an Express Project

```bash
js-app-cli
```

```plaintext
Available boilerplates:
1. EXPRESS - A robust Node.js boilerplate for Express applications.
2. NEXT - A comprehensive boilerplate for Next.js applications.
3. Use your own repository

Choose an option by entering the corresponding number: 1
You selected: EXPRESS
Description: A robust Node.js boilerplate for Express applications.
Author: Foyzul Karim

Enter the project directory (use . for the current directory): my-express-app
Cloning the express boilerplate...
Removing existing Git history...
Installing dependencies...
Initializing a new Git repository...
Staging files...

Enter a commit message: Initial commit for my Express app

All set! 🚀
Navigate to your project directory:
  cd my-express-app
```

### Example 2: Using a Custom Repository

```bash
js-app-cli
```

```plaintext
Available boilerplates:
1. EXPRESS - A robust Node.js boilerplate for Express applications.
2. NEXT - A comprehensive boilerplate for Next.js applications.
3. Use your own repository

Choose an option by entering the corresponding number: 3
Enter your Git repository URL: https://github.com/your-username/your-repo.git

Enter the project directory (use . for the current directory): custom-project
Cloning the repository...
Removing existing Git history...
Installing dependencies...
Initializing a new Git repository...
Staging files...

Enter a commit message: Initial commit for my custom project

All set! 🚀
Navigate to your project directory:
  cd custom-project
```

---

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request on GitHub.

For feature requests or bug reports, feel free to open an issue on the [GitHub repository](https://github.com/muhammed-mamun/js-app-cli).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Author

Developed with ❤️ by **Md. Mamun Hossain**.
- **GitHub**: [Muhammed-Mamun](https://github.com/muhammed-mamun)
- **Email**: muhammed.mamun.131@gmail.com

---

## Future Plans

- Add support for more frameworks like React, Angular, and Vue.js.
- Provide options for advanced configurations during project setup.
- Allow users to define and add custom boilerplates to the CLI.

---

## Feedback

If you encounter any issues or have suggestions, please feel free to open an issue or submit feedback on the [GitHub repository](https://github.com/muhammed-mamun/js-app-cli).

---
