# ChatGPT Electron app

This is an Electron-based application built using Node.js and Electron. The app provides a desktop ChatGPT interface for Linux.

## Prerequisites

Before you can install and run the application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - Installed automatically with Node.js
- **Git** (for cloning the repository and managing source code) - [Install Git](https://git-scm.com/)

## Installation

Follow the steps below to install and run the application on a Linux-based system (Debian-based).

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone git@github.com:euphroshub/chatgpt-electron-app.git
```

### 2. Install Dependencies

Navigate into the project directory:

```bash
cd chatgpt-electron-app
```

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Build the App

To create a distributable `.deb` package for your app, run:

```bash
npm run dist
```

This will generate the `.deb` package in the `dist` folder.

### 4. Install the App (Debian-based Linux)

After the `.deb` package is generated, you can install it using the following command:

```bash
sudo dpkg -i dist/chatgpt-electron-app.deb
```

If you encounter any issues with missing dependencies, run the following command to resolve them:

```bash
sudo apt-get install -f
```

### 5. Running the App

Once installed, you can launch the app by searching for its name in your applications menu or by running the following command in your terminal:

```bash
chatgpt-electron-app
```

## Uninstallation

To uninstall the app, you can remove the `.deb` package using the following command:

```bash
sudo dpkg -r chatgpt-electron-app
```

## Contributing

If you'd like to contribute to the project, feel free to fork the repository, create a new branch, and submit a pull request. For any issues or feature requests, please open an issue on the [GitHub issues page](https://github.com/euphroshub/chatgpt-electron-app/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---