import { render } from "@testing-library/react";
import { AuthContext } from "../../src/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PublicRoute/>', () => {

    test('debe de mostar el children si no esta autenticado', () => {
        // const contextValue = {
        //     logged: false
        // }

        // render(
        //     <MemoryRouter>
        //         <AuthContext.Provider value={contextValue}>
        //             <PublicRoute>
        //                 <h1>Ruta publica</h1>
        //             </PublicRoute>
        //         </AuthContext.Provider>
        //     </MemoryRouter>

        // );

        // expect(screen.getByText('ruta Publica')).toBeTruthy();
    });

    test('should first', () => {

    });

    test('should first', () => {

    });
});