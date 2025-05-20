const request = require('supertest');
const app = require('../server'); 
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');

describe('Update User Profile', () => {
  let token;
  let userId;
  jest.setTimeout(20000); // 20 seconds

  beforeAll(async () => {
    
    
    const testUser = await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'Test1234!',
    });

    userId = testUser._id;

   
    
    token = jwt.sign({ id: testUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it('should update the user profile', async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ username: 'updateduser' });

    expect(res.statusCode).toBe(200);
    expect(res.body.user.username).toBe('updateduser');
  });
});
