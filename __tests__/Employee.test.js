const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, 'lexi@gmail.com', 'lexi');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, 'lexi@gmail.com', 'lexi');

        expect(me.name).toEqual('lexi');
    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, 'lexi@gmail.com', 'lexi');

        expect(me.id).toEqual(1);
    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, 'lexi@gmail.com', 'lexi');

        expect(me.email).toEqual('lexi@gmail.com');
    })
})