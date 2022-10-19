const Engineer = require('../lib/Engineer');

describe('Test Engineer Class', () => {
    it('should create a new engineer object', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.name).toEqual('chad');
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.id).toEqual(2);
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.email).toEqual('chad@gmail.com');
    })

    it('can get email via getEmail() method', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.getEmail()).toEqual('chad@gmail.com');
    })

    it('can get name via getName() method', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.getName()).toEqual('chad');
    })

    it('can get id via getId() method', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.getId()).toEqual(2);
    })

    it('can get role via getRole() method', () => {
        const me = new Engineer(2, 'chad@gmail.com', 'chad', 'gitHubName');

        expect(me.getRole()).toEqual('Engineer');
    })
})