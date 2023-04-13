import { rest } from 'msw'
import comics from "dh-marvel/test/mocks/comics";
import character from "dh-marvel/test/mocks/character";
import comic from "dh-marvel/test/mocks/comic";
import comicsWithOffsetAndLimit from "dh-marvel/test/mocks/comicsWithOffsetAndLimit";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";

interface CheckoutRequest {
    body: {
        customer?: {
            address?: {
                address2?: string;
            };
        };
        card?: {
            number?: string;
        };
    };
}
const handlers = [
    rest.get('/marvel/api/comics', async (req, res, ctx) => {
        const query = req.url.searchParams;
        if (query.get('offset') === '10' && query.get('limit') === '5') {
            return res(ctx.json(comicsWithOffsetAndLimit))
        }
        return res(ctx.json(comics))
    }),
    rest.get('/marvel/api/comics/:id', async (req, res, ctx) => {
        const id = req.params.id
        if (id === "1") return res(ctx.json({ data: { results: [comic] } }))
        if (id === "10") return res(ctx.json({ data: { results: [comicWithoutStock] } }))
        return res(ctx.json({ data: { results: [] } }))
    }),
    rest.get('/marvel/api/characters/:id', async (req, res, ctx) => {
        const id = req.params.id
        if (id === "1") return res(ctx.json({ data: { results: [character] } }))
        return res(ctx.json({ data: { results: [] } }))
    }),
    rest.post('/api/checkout', async (req : CheckoutRequest, res, ctx) => {
        const { body } = req;
        
        if (body.customer?.address?.address2 === 'invalid') {
            return res(ctx.status(400), ctx.json({ error: 'Incorrect address' }));
        }
        if (body.card?.number === '4111 4111 4111 4111') {
            return res(ctx.status(400), ctx.json({ error: 'Card without funds' }));
        }
        if (body.card?.number === '4000 4000 4000 4000') {
            return res(ctx.status(400), ctx.json({ error: 'Card without authorization' }));
        }
        if (body.card?.number === '4242 4242 4242 4242') {
            return res(ctx.status(200), ctx.json({ data: body }));
        }
        return res(ctx.status(400), ctx.json({ error: 'Incorrect card data' }));
    }),
    rest.get('/api/comics', async (req, res, ctx) => {
        const query = req.url.searchParams;
        if (query.get('offset') === '10' && query.get('limit') === '5') {
            return res(ctx.json(comicsWithOffsetAndLimit))
        }
        return res(ctx.json(comics))
    }),
]

export { handlers }