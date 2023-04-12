import Checkout, { getServerSideProps } from "./checkout.page";
import PersonalDataDiv from "dh-marvel/components/checkout/personalDataDiv";
import { useForm } from "react-hook-form";
import { fireEvent, render, screen } from "@testing-library/react";
import DeliveryDataDiv from "dh-marvel/components/checkout/deliveryDataDiv";
import { GetServerSidePropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { IncomingMessage } from "http";

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
    describe("handleNext1", () => {
        it("should trigger the second step if valid data is entered", async () => {
            // Arrange
            const handlerMock = jest.fn();
            const DummyComponent = () => {
                const { control, formState: { errors } } = useForm()
                return <PersonalDataDiv control={control} errors={errors} handler={handlerMock} />
            }
            render(<DummyComponent />);
            const nameInput = screen.getByPlaceholderText(/Nombre/i);
            const lastNameInput = screen.getByPlaceholderText(/Apellido/i);
            const emailInput = screen.getByPlaceholderText(/E-mail/i);
            const submitButton = screen.getByText(/siguiente/i);
            // Act
            await fireEvent.input(nameInput, { target: { value: "John" } });
            await fireEvent.input(lastNameInput, { target: { value: "Doe" } });
            await fireEvent.input(emailInput, { target: { value: "johndoe@example.com" } });
            fireEvent.click(submitButton);
            // Assert
            expect(handlerMock).toHaveBeenCalledTimes(1);
        });
    });
    describe("handleNext2", () => {
        it("should trigger the third step if valid data is entered", async () => {
            // Arrange
            const handlerMock = jest.fn();
            const handlerMock2 = jest.fn();
            const DummyComponent = () => {
                const { control, formState: { errors } } = useForm()
                return <DeliveryDataDiv control={control} errors={errors} handler={handlerMock} handler2={handlerMock2} />
            }
            render(<DummyComponent />);
            const addressInput = screen.getByPlaceholderText(/Direccion/i);
            const cityInput = screen.getByPlaceholderText(/Ciudad/i);
            const stateInput = screen.getByPlaceholderText(/Provincia/i);
            const zipCodeInput = screen.getByPlaceholderText(/Codigo Postal/i);
            const submitButton = screen.getByText(/siguiente/i);
            // Act
            await fireEvent.input(addressInput, { target: { value: "123 Main St" } });
            await fireEvent.input(cityInput, { target: { value: "New York" } });
            await fireEvent.input(stateInput, { target: { value: "NY" } });
            await fireEvent.input(zipCodeInput, { target: { value: "10001" } });
            fireEvent.click(submitButton);
            // Assert
            expect(handlerMock).toHaveBeenCalledTimes(1);
        });
    });
    describe("handleBack", () => {
        it("should trigger the second step if is clicked", async () => {
            // Arrange
            const handlerMock = jest.fn();
            const handlerMock2 = jest.fn();
            const DummyComponent = () => {
                const { control, formState: { errors } } = useForm()
                return <DeliveryDataDiv control={control} errors={errors} handler={handlerMock} handler2={handlerMock2} />
            }
            render(<DummyComponent />);
            const backButton = screen.getByText(/atras/i);
            // Act
            fireEvent.click(backButton);
            // Assert
            expect(handlerMock2).toHaveBeenCalledTimes(1);
        });
    });
})