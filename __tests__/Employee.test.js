const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.name).toEqual('lexi');
    })

    it('can set a name via constructor', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.id).toEqual(3);
    })

    it('can set a name via constructor', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.email).toEqual('lexi@gmail.com');
    })

    it('can get email via getEmail() method', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.getEmail()).toEqual('lexi@gmail.com');
    })

    it('can get name via getName() method', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.getName()).toEqual('lexi');
    })

    it('can get id via getId() method', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.getId()).toEqual(3);
    })

    it('can get role via getRole() method', () => {
        const me = new Employee(3, 'lexi@gmail.com', 'lexi');

        expect(me.getRole()).toEqual('Employee');
    })
})