import { types } from "../../../src/types/types"


describe('Pruebas en "types.js"', () => {
    test('debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})