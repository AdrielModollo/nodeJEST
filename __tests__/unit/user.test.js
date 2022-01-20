const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.crete({
            name: 'Adriel',
            email: 'adrielmodollo@outlook.com',
            password: "123456"
        });

            const hash = await bcrypt.hash('123456', 8);

            expect(user.password.hash).toBe(hash);
    });
});