import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

// 1. Define the accounts globally so ALL tests can use them
const accounts = simnet.getAccounts();
const wallet1 = accounts.get("wallet_1")!;

describe("simple-counter", () => {
  it("ensures counter starts at 0", () => {
    const { result } = simnet.callReadOnlyFn(
      "simple-counter",
      "get-counter",
      [],
      wallet1
    );
    expect(result).toBeOk(Cl.uint(0));
  });

  it("increments the counter", () => {
    // 1. Increment the counter (wallet1 is safely accessible here now)
    const { result } = simnet.callPublicFn(
      "simple-counter",
      "increment",
      [],
      wallet1
    );
    expect(result).toBeOk(Cl.uint(1));

    // 2. Read the new state
    const readResult = simnet.callReadOnlyFn(
      "simple-counter",
      "get-counter",
      [],
      wallet1
    );
    expect(readResult.result).toBeOk(Cl.uint(1));
  });
});
