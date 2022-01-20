const request = require("supertest")

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");


describe("Authentication", () => {
    //afterAll executa uma vez depois de todos
   //afterEach executa antes depois de cada um
   //beforeEach executa antes de cada um dos testes
   //beforeAll executa automaticamente antes de todos testes
   beforeEach(async () => {
    await truncate();
  });
  
    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Adriel', 
            email: 'adrielmodollo@outlook.com', 
            password_hash: "123456"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
            email: user.email,
            password: '123456'
        });

        expect(response.status).toBe(200);
    });

    it('should not autenticate with invalid credentials', async() => {
        const user = await User.create({
            name: 'Adriel', 
            email: 'adrielmodollo@outlook.com', 
            password_hash: "42561"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
            email: user.email,
            password: '123456'
        });

        expect(response.status).toBe(401);
    });  

    it("should return jwt token when authenticated", async () => {
        const user = await User.create("User", {
          password: "123123"
        });
    
        const response = await request(app)
          .post("/sessions")
          .send({
            email: user.email,
            password: "123123"
          });
    
        expect(response.body).toHaveProperty("token");
      });
    
});


