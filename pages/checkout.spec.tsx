import Checkout, { getServerSideProps } from "./checkout.page";
import PersonalDataDiv from "dh-marvel/components/checkout/personalDataDiv";
import { useForm } from "react-hook-form";
import { act, fireEvent, render, screen, renderHook } from "@testing-library/react";
import DeliveryDataDiv from "dh-marvel/components/checkout/deliveryDataDiv";
import { GetServerSidePropsContext } from "next";
import PaymentDataDiv from "dh-marvel/components/checkout/paymentDataDiv";
import { ParsedUrlQuery } from "node:querystring";
import { useRouter } from "next/router";

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
    describe("should render payment form", () => {
        it("should trigger click event", async () => {
            const handlerMock = jest.fn();
            // Arrange
            const DummyComponent = () => {
                const { control, formState: { errors }, watch } = useForm()
                return <PaymentDataDiv control={control} errors={errors} handler={handlerMock} watch={watch} />
            }
            render(<DummyComponent />);
            const number = screen.getByPlaceholderText(/Numero de la tarjeta/i);
            const nameOncard = screen.getByPlaceholderText(/Nombre como aparece en la tarjeta/i);
            const expDate = screen.getByPlaceholderText(/MM-AA/i);
            const cvc = screen.getByPlaceholderText(/Código de Seguridad/i);
            const backButton = screen.getByRole("back2")
            //act
            await fireEvent.input(number, { target: { value: "42424242 4242 4242" } });
            await fireEvent.input(nameOncard, { target: { value: "Jhon Doe" } });
            await fireEvent.input(expDate, { target: { value: "03/23" } });
            await fireEvent.input(cvc, { target: { value: "123" } });
            fireEvent.click(backButton)
            // Assert
            expect(handlerMock).toBeCalledTimes(1)
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
    describe("handleNext2", () => {
        it("should trigger the third step if valid data is entered", async () => {
            act(() => {
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
                }} />);
            });
            const { result } = renderHook(() => useRouter())

            await (async function wizardStep1() {
                const nameInput = screen.getByPlaceholderText(/Nombre/i);
                const lastNameInput = screen.getByPlaceholderText(/Apellido/i);
                const emailInput = screen.getByPlaceholderText(/E-mail/i);
                const nextButton1 = screen.getByRole("next1");
                await fireEvent.input(nameInput, { target: { value: "John" } });
                await fireEvent.input(lastNameInput, { target: { value: "Doe" } });
                await fireEvent.input(emailInput, { target: { value: "johndoe@example.com" } });
                act(() => {
                    nextButton1.dispatchEvent(new MouseEvent("click"));
                });
            })();
            await (async function wizardStep2() {
                setTimeout(async () => {
                    const addressInput = screen.getByPlaceholderText(/Direccion/i);
                    const cityInput = screen.getByPlaceholderText(/Ciudad/i);
                    const stateInput = screen.getByPlaceholderText(/Provincia/i);
                    const zipCodeInput = screen.getByPlaceholderText(/Codigo Postal/i);
                    const nextButton2 = screen.getByRole("next2");
                    await fireEvent.input(addressInput, { target: { value: "123 Main St" } });
                    await fireEvent.input(cityInput, { target: { value: "New York" } });
                    await fireEvent.input(stateInput, { target: { value: "NY" } });
                    await fireEvent.input(zipCodeInput, { target: { value: "10001" } });
                    act(() => {
                        nextButton2.dispatchEvent(new MouseEvent("click"));
                    });
                }, 2000)
            })();
            await (async function wizardStep3() {
                setTimeout(async () => {
                    const number = screen.getByPlaceholderText(/Numero de la tarjeta/i);
                    const nameOncard = screen.getByPlaceholderText(/Nombre como aparece en la tarjeta/i);
                    const expDate = screen.getByPlaceholderText(/MM-AA/i);
                    const cvc = screen.getByPlaceholderText(/Código de Seguridad/i);
                    const submitButton = screen.getByRole("submit")
                    await fireEvent.input(number, { target: { value: "42424242 4242 4242" } });
                    await fireEvent.input(nameOncard, { target: { value: "Jhon Doe" } });
                    await fireEvent.input(expDate, { target: { value: "03/23" } });
                    await fireEvent.input(cvc, { target: { value: "123" } });
                    act(() => {
                        submitButton.dispatchEvent(new MouseEvent("click"));
                    })
                }, 2000)
            })();
            // Assert
            console.log(result);
        });
    });
    it("should redirect to homepage", async () => {
        const context = {
            req: {
                headers: {
                    referer: '',
                },
            },
        };
        const value = await getServerSideProps(context as GetServerSidePropsContext);
        expect(value).toEqual({
            redirect: {
                destination: '/',
                permanent: false,
            },
        });
    });

    it("should render data from API", async () => {
        const context = {
            req: {
                headers: {
                    referer: '/',
                },
            },
            query: { id: "1" } as ParsedUrlQuery,
        };
        const value = await getServerSideProps(context as GetServerSidePropsContext);
        expect(value).toEqual({
            "props": {
                "data": {
                    "id": 1,
                    "oldPrice": 87,
                    "price": 72,
                    "stock": 2,
                },
            },
        });
    });

})