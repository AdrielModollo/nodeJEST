const { User } = require("../../src/app/models");

describe('Authentication', () => {
    it('should register user', async () => {
        const user = await User.create({
            name: 'Adriel', 
            email: 'adrielmodollo@outlook.com', 
            password_hash: "123123"
        });

        console.log(user);

        expect(user.email).toBe('adrielmodollo@outlook.com');
    
    });
});

