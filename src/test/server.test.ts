import app from '../index'
const request = supertest(app)
import supertest from 'supertest'

describe('GET / - a simple api endpoint', () => {
    it('Hello API Request', async () => {
      const result = await request.get('/')
      expect(result.text).toEqual('hello')
      expect(result.status).toEqual(200)
    })
  })

describe('GET /non-exisent', () => {
    it('Returns a 404', async () => {
        const result = await request.get('/non-existent')
        expect(result.status).toEqual(404)
    })
})

// describe('GET /items', () => {
//     it('returns items', async () => {
//         const result = await request.get('/items')
//         expect(result.status).toEqual(200)
//         expect((res) => {
//           res.body.should.contain('apple')
//     })
//   })
// })
