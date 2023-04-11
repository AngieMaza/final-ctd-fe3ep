import Checkout from "./checkout.page";
import PersonalDataDiv from "dh-marvel/components/checkout/personalDataDiv";
import { useForm } from "react-hook-form";
import { fireEvent, render, screen } from "@testing-library/react";

describe('CheckoutPage', () => {

    describe('when rendering default', () => {
        it('displays the correct title', () => {
            render(<Checkout data={{
                id: 0,
                title: "StoryExample",
                thumbnail: {
                    path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
                    extension: "jpg"
                },
                price: 75,
                description: "StoryBookExample description",
                pageCount: 1,
                oldPrice: 72,
                stock: 5,
                creators: {
                    available: 1,
                    collectionURI: "exampleURL",
                    items: [{
                        resourceURI: "exampleURL",
                        name: "Autor Name",
                        role: "example Role",
                    }],
                    returned: 1
                }
            }} />)
            const title = screen.getByText('Checkout')
            expect(title).toBeInTheDocument()
        })
    })

    /* describe("handleNext1", () => {
        it("should trigger the second step if valid data is entered", async () => {
            // Arrange
            const { control } = useForm();
            const handlerMock = jest.fn();
            render(<PersonalDataDiv control={control} handler={handlerMock} />);
            const nameInput = screen.getByPlaceholderText(/Nombre/i);
            const lastNameInput = screen.getByPlaceholderText(/Apellido/i);
            const emailInput = screen.getByPlaceholderText(/E-mail/i);
            const submitButton = screen.getByRole(/siguiente/i);
            // Act
            await fireEvent.input(nameInput, { target: { value: "John" } });
            await fireEvent.input(lastNameInput, { target: { value: "Doe" } });
            await fireEvent.input(emailInput, { target: { value: "johndoe@example.com" } });
            fireEvent.click(submitButton);
            // Assert
            expect(handlerMock).toHaveBeenCalledTimes(1);
        });

        it("should not trigger the second step if invalid data is entered", async () => {
            // Arrange
            const { control } = useForm();
            const handlerMock = jest.fn();
            render(<PersonalDataDiv control={control} handler={handlerMock} />);
            const submitButton = screen.getByText(/siguiente/i);
            // Act
            fireEvent.click(submitButton);
            // Assert
            expect(handlerMock).not.toHaveBeenCalled();
        }); 
    });*/
})