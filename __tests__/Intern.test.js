const Intern = require('../lib/Intern');

describe('Test Intern Class', () => {
    it('should create a new intern object', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.name).toEqual('peaches');
    })

    it('can set a name via constructor', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.id).toEqual(4);
    })

    it('can set a name via constructor', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.email).toEqual('peaches@gmail.com');
    })

    it('can get email via getEmail() method', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.getEmail()).toEqual('peaches@gmail.com');
    })

    it('can get name via getName() method', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.getName()).toEqual('peaches');
    })

    it('can get id via getId() method', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.getId()).toEqual(4);
    })

    it('can get role via getRole() method', () => {
        const me = new Intern(4, 'peaches@gmail.com', 'peaches', 'schoolName');

        expect(me.getRole()).toEqual('Intern');
    })
})