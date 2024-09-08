const request = require("supertest");
const app = require("../src/app");

describe("Method POST", () => {
  describe("test successfull cases post", () => {
    const user = {
      username: "testUser",
      email: "testUser@test.com",
      password: "test123",
    };
    it("should create a new user", async () => {
      const response = await request(app).post("/users/create").send(user);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("username", user.username);
      expect(response.body).toHaveProperty("email", user.email);
      expect(response.body).toHaveProperty("password", user.password);
    });
  });
  describe("test fail cases post", () => {
    const users = [
      {
        username: "",
        email: "testUser@test.com",
        password: "123prueba",
      },
      {
        username: "testUser",
        email: "",
        password: "123prueba",
      },
      {
        username: "testUser",
        email: "testUser@test.com",
        password: "",
      },
    ];
    it("should return error 400", async () => {
      users.forEach(async (user) => {
        const response = await request(app).post("/users/create").send(user);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty(
          "message",
          "All fields are required"
        );
      });
    });
  });
});

describe("Method GET", () => {
  describe('test successfull cases get', () => {
    const id = '66de1c1b31fc003315e7fa90';
    it('should return user by id', async () => {
        const response = await request(app).get(`/users/find/${id}`).send();
        expect(response.status).toBe(200);
    });
    it('should return users', async () => {
        const response = await request(app).get('/users/find').send();
        expect(response.status).toBe(200);
    });
  });
  describe("test fail cases get", () => {
    const id = '66de1c1b31fc003315e7fa91';
    it('should return status 404 users by id', async () => {
        const response = await request(app).get(`/users/find/${id}`).send();
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'User not found');
    });
  });
});

describe("Method PUT", () => {
    describe("should return status 200", () => {
        const userUpdate = {
            username: "Juan",
            email: "testUser@test.com",
            password: "123prueba",
        }
        const id = "66de1c1b31fc003315e7fa90";
        it('should update user', async () => {
            const response = await request(app).put(`/users/update/${id}`).send();
            expect(response.status).toBe(200);
        });
    })
})
describe('Method DELETE', () => {
    describe('Response exit', () => {
        it('should delete user', async () => {
            const response = await request(app).delete('/api/v1/user/66da5e18b26e7b7e9c84f061');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'User deleted');
        });
    });
    describe('Response fail', () => {
        it('should return 404 if user not found', async () => {
            const response = await request(app).delete('/api/v1/user/66d8fa6fd1058d33b4e79741');
            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('message', 'User not found');
        });
    });
})