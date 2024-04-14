import { it, describe, expect } from "vitest";
import supertest from "supertest";
import { app } from "../src/app";

const request = supertest(app);

describe("Hello World", () => {
  it("response with Hello World", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Hello World!");
  });
});
