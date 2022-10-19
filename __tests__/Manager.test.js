const Manager = require('../lib/Manager');

describe('Test Manager Class', () => {
    it('should create a new manager object', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.name).toEqual('candy');
    })

    it('can set a name via constructor', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.id).toEqual(1);
    })

    it('can set a name via constructor', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.email).toEqual('candy@gmail.com');
    })

    it('can get email via getEmail() method', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.getEmail()).toEqual('candy@gmail.com');
    })

    it('can get name via getName() method', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.getName()).toEqual('candy');
    })

    it('can get id via getId() method', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.getId()).toEqual(1);
    })

    it('can get role via getRole() method', () => {
        const me = new Manager(1, 'candy@gmail.com', 'candy', 'officeNumber');

        expect(me.getRole()).toEqual('Manager');
    })
})