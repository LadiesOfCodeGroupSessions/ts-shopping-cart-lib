import app from "../index"
import supertest from "supertest"
const request = supertest(app)

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
      const result = await request.get("/")
      expect(result.text).toEqual("hello")
      expect(result.status).toEqual(200)
    })
  })