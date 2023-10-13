import { main } from "../src/main";

describe("Main", () => {
    it("should pass the test", () => {
        expect(main()).toBe(true);
    });
});
