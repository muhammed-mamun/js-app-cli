#!/usr/bin/env node

const { execSync } = require("child_process");
const readline = require("readline");

// Boilerplates configuration
const boilerplates = {
  express: {
    url: "https://github.com/foyzulkarim/nodejs-boilerplate.git",
    description: "A robust Node.js boilerplate for Express applications.",
    author: "Foyzul Karim",
    github: "https://github.com/foyzulkarim"
  },
  next: {
    url: "https://github.com/ixartz/Next-js-Boilerplate.git",
    description: "A robust Next.js boilerplate for Next applications.",
    author: "Remi Wg",
    github: "https://github.com/ixartz"
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

// Display boilerplate list
console.log("\nAvailable boilerplates:");
Object.keys(boilerplates).forEach((key, index) => {
  console.log(`${key.toUpperCase()} - by ${boilerplates[key].author}`);
});
console.log(`\n`);

// Prompt the user for their choice
rl.question("Choose a boilerplate by name: ", (choice) => {
  const selected = boilerplates[choice.toLowerCase()];
  if (!selected) {
    console.error("Invalid choice! Exiting.");
    rl.close();
    process.exit(1);
  }

  console.log(`\nYou selected: ${choice.toUpperCase()}`);
  console.log(`Description: ${selected.description}`);
  console.log(`Author: ${selected.author}\n`);

  rl.question("Enter the project directory (use . for the current directory): ", (input) => {
    const projectDir = input === "." ? process.cwd() : input;

    console.log(`Cloning the ${choice} boilerplate...`);
    runCommand(`git clone ${selected.url} ${projectDir}`);

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
});
