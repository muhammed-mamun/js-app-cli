#!/usr/bin/env node

const { execSync } = require("child_process");
const readline = require("readline");

// Predefined boilerplates
const boilerplates = {
  express: {
    url: "https://github.com/foyzulkarim/nodejs-boilerplate.git",
    description: "A robust Node.js boilerplate for Express applications.",
    author: "Foyzul Karim",
  },
  next: {
    url: "https://github.com/ixartz/Next-js-Boilerplate.git",
    description: "A robust Next.js boilerplate for Next applications.",
    author: "Remi Wg",
  },
};

// Helper function to execute shell commands
const runCommand = (command, cwd = process.cwd()) => {
  try {
    execSync(command, { stdio: "inherit", cwd });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    process.exit(1);
  }
};

// CLI to prompt for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display options
console.log("\nAvailable boilerplates:");
Object.keys(boilerplates).forEach((key, index) => {
  console.log(`${index + 1}. ${key.toUpperCase()} - ${boilerplates[key].description}`);
});
console.log(`\n${Object.keys(boilerplates).length + 1}. Use your own repository\n`);

// Prompt the user for their choice
rl.question("Choose an option by entering the corresponding number: ", (choice) => {
  const selectedIndex = parseInt(choice, 10);
  if (selectedIndex === Object.keys(boilerplates).length + 1) {
    // Custom repository option
    rl.question("Enter your Git repository URL: ", (repoUrl) => {
      if (!repoUrl.startsWith("https://") && !repoUrl.startsWith("git@")) {
        console.error("Invalid Git repository URL. Exiting.");
        rl.close();
        process.exit(1);
      }

      proceedWithRepository(repoUrl);
    });
  } else if (selectedIndex > 0 && selectedIndex <= Object.keys(boilerplates).length) {
    // Predefined boilerplate
    const selected = Object.values(boilerplates)[selectedIndex - 1];
    console.log(`You selected: ${selected.description}`);
    proceedWithRepository(selected.url);
  } else {
    console.error("Invalid choice! Exiting.");
    rl.close();
    process.exit(1);
  }
});

const proceedWithRepository = (repoUrl) => {
  rl.question("Enter the project directory (use . for the current directory): ", (input) => {
    const projectDir = input === "." ? process.cwd() : input;

    console.log(`Cloning the repository...`);
    runCommand(`git clone ${repoUrl} ${projectDir}`);

    console.log("Removing existing Git history...");
    runCommand("rm -rf .git", projectDir);

    console.log("Installing dependencies...");
    runCommand("npm install", projectDir);

    console.log("Initializing a new Git repository...");
    runCommand("git init", projectDir);

    console.log("Staging files...");
    runCommand("git add .", projectDir);

    rl.question("Enter a commit message: ", (commitMessage) => {
      console.log("Committing files...");
      runCommand(`git commit -m "${commitMessage}"`, projectDir);

      console.log("All set! 🚀");
      console.log(`Navigate to your project directory:\n  cd ${projectDir}`);
      rl.close();
    });
  });
};
