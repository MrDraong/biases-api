const request = require("supertest");
import app from "../src/config/app";

describe("Get company phone", () => {
  it("should send the phonenumber of the given company", async () => {
    const res = await request(app).get("/company/EXPERDECO");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("phone");
  });
});
