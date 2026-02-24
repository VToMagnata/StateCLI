import type { User } from "./store/vars";
import { useData } from "./store/vars";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ input: stdin, output: stdout });

type LoopState = {
  iterationCount: number;
  shouldContinue: boolean;
};

async function main() {
  const loopState: LoopState = {
    iterationCount: 0,
    shouldContinue: true,
  };

  const userName = await rl.question("User name: ");
  const password = await rl.question("Password: ");
  const age = Number(await rl.question("Age: "));

  const store = useData.getState();

  store.changeName(userName);
  store.changePassword(password);
  store.changeAge(age);

  while (loopState.shouldContinue === true) {
    type UserKey = keyof User["user"];

    const promptMessage =
      loopState.iterationCount !== 0
        ? "Do you want to change anything else? (Y/N): "
        : "Do you want to change any information? (Y/N): ";

    const userChoice = (await rl.question(promptMessage)).toLowerCase();

    if (userChoice === "n") {
      console.log("\nFinal state:");
      console.log(useData.getState().user);

      loopState.shouldContinue = false;
      break;
    }

    if (userChoice === "y" || loopState.iterationCount < 1) {
      loopState.iterationCount++;
    }

    const fieldToChange = (await rl.question(
      "Which field do you want to change (userName/password/age)? ",
    )) as UserKey;

    const newValueInput = await rl.question("New value: ");

    const parsedValue =
      fieldToChange === "age" ? Number(newValueInput) : newValueInput;

    store.changeValue(fieldToChange, parsedValue);
  }

  rl.close();
}

main();
