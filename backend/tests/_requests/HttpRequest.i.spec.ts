import { rest } from 'msw';
import { setupServer} from "msw/node";
import {Handlers} from "../../src/_domain/mocks/Handlers";

const server = setupServer({Handlers});

test("Is jest working?", () => {
    expect(true).toBe(true)
})

test('Is MSW working?', () => {

})