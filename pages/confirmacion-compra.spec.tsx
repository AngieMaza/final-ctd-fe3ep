/* import { render, screen } from "@testing-library/react";
import ConfirmedPurchase from "./confirmacion-compra.page";

describe("ConfirmedPurchase", () => {
    it("renders the page title", () => {
        render(<ConfirmedPurchase />);

        expect(screen.getByText(/que disfrutes tu compra/i)).toBeInTheDocument();
    });

    it("renders the customer data", () => {
        const checkoutData = {
            name: "John",
            lastname: "Doe",
            email: "john.doe@example.com",
            address: {
                address1: "123 Main St",
                address2: "",
                state: "NY",
                city: "New York",
                zipCode: "10001"
            },
            comicImage: "http://example.com/comic.jpg",
            comicName: "Super Comic",
            comicPrice: 9.99
        };

        localStorage.setItem("CheckoutData", JSON.stringify(checkoutData));
        render(<ConfirmedPurchase />);

        expect(screen.getByText(/nombre del comic: super comic/i)).toBeInTheDocument();
        expect(screen.getByText(/precio: \$(\d+\.\d+)/i)).toHaveTextContent("$9.99");
        expect(screen.getByText(/nombre y apellido: john doe/i)).toBeInTheDocument();
        expect(screen.getByText(/email: john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/direccion: 123 Main St/i)).toBeInTheDocument();
        expect(screen.getByText(/provincia: ny/i)).toBeInTheDocument();
        expect(screen.getByText(/ciudad: new york - cp: 10001/i)).toBeInTheDocument();
    });
});
 */





