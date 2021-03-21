import {rest, setupWorker} from 'msw';
import { setupServer} from "msw/node";
import {Handlers} from "../../src/_domain/mocks/Handlers";
import axios from "axios";

const server = setupServer(
    rest.get('https://store.steampowered.com/api/appdetails', ((req, res, context) =>{
        return res(
            context.status(200)
        )
    }))
)
beforeAll(() => {server.listen()});
afterAll(()=>{server.close()});

test("Is jest working?", () => {
    expect(true).toBe(true)
})

test('Is MSW working?', async () => {
    const response = await axios.get("https://store.steampowered.com/api/appdetails");
    expect(response.status).toBe(200);
})