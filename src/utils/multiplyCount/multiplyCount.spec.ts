import {describe, expect, it} from "vitest"
import {multiplyCount} from "./multiplyCout.ts";

describe('multiplyCount', () => {
    it('should multiple counters by user params', () => {
        const userParams = 8
        const counter = 10

        const result = multiplyCount(counter, userParams)

        expect(result).toBe(100)
    });
});