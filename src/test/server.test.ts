/* tslint:disable */
import app from '../index'
import app2 from '../index'
import supertest from 'supertest'

//let request = supertest(app)
let server = supertest.agent(app);

describe('all server tests', () =>{
    // let server;
    // beforeEach(function() {
    //     delete require.cache[require.resolve('../server')];
    //     server = require('../server');
    // });
    //
    // afterEach(function(done) {
    //     server.close(done);
    // });

    describe('GET / - a simple api endpoint', () => {
        it('Hello API Request', async () => {
            const result = await server.get('/')
            expect(result.text).toEqual('hello')
            expect(result.status).toEqual(200)
        })
    })

    describe('GET /non-exisent', () => {
        it('Returns a 404', async () => {
            const result = await server.get('/non-existent')
            expect(result.status).toEqual(404)
        })
    })

    describe('GET /items', () => {
        it('returns items', async () => {
            const result = await server.get('/items')
            expect(result.status).toEqual(200)
            expect(result.body.items[0].name).toEqual('apples')
        })
    })

    // test('add numbers async', done => {
    //     addAsync(10, 5, result => {
    //         expect(result).toBe(15);
    //         done();
    //     })
    // })

    // describe('PUT /cart', () => {
    //     it('returns cart',  done => {
    //         const result =
    //             server.put('/cart')
    //                 .send({'id': "123",
    //                     'name': 'apple',
    //                     'quantity': 1
    //                 })
    //                 .set('Accept', 'application/json')
    //                 .then((res) =>{
    //                     // HTTP status should be 200
    //                     expect(res.status).toEqual(200);
    //                     expect(res.body.cart.items[0].quantity).toEqual(1);
    //                     expect(res.body.cart.id).toEqual("123");
    //                     done()
    //                 });
    //
    //         // request
    //         //     .get("/")
    //         //     .expect("Content-Type", /json/)
    //         //     .expect(200)
    //         //     .then((response) => {                          // must be then, not a callback
    //         //         assert(response.body.data !== undefined);
    //         //     })
    //         //     .catch((err) => {
    //         //         assert(err === undefined);
    //         //     });
    //
    //
    //         //
    //         // expect(result.status).toEqual(200)
    //         // expect(result.body.cart.items[0].quantity).toEqual(1)
    //         // expect(result.body.cart.id).toEqual("123")
    //     })
    // })

    describe('PUT /cart updates', () => {
        let server2 = supertest.agent(app2);
        it('updates existing cart', done => {
            server2.put('/cart')
                .send({'id': "123",
                    'name': 'apple',
                    'quantity': 1
                })
                .set('Accept', 'application/json')
                .then((res) =>{
                    // HTTP status should be 200
                    expect(res.status).toEqual(200);
                    // expect(res.body.cart.items[0].quantity).toEqual(1);
                    // expect(res.body.cart.id).toEqual("123");
                });


            server2.put('/cart')
                    .send({'id': "123",
                        'name': 'apple',
                        'quantity': 1
                    })
                    .set('Accept', 'application/json')
                    .then((res) =>{
                        // HTTP status should be 200
                        expect(res.status).toEqual(200);
                        expect(res.body.cart.items.length).toEqual(1)
                        expect(res.body.cart.items[0].quantity).toEqual(2)
                        expect(res.body.cart.id).toEqual("123")
                        done()
                    });

            // expect(result.status).toEqual(200)
            // expect(result.body.cart.items.length).toEqual(1)
            // expect(result.body.cart.items[0].quantity).toEqual(2)
            // expect(result.body.cart.id).toEqual("123")
        })
    })

})

