import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AddProductsForm, { AddProductsFormInputs } from "./AddProductsForm";
import { faker } from '@faker-js/faker';

const mockAddProducts = jest.fn((data: AddProductsFormInputs) => {
    return Promise.resolve(data);
});

describe("AddProductsForm", () => {
    beforeEach(() => {
        render(<AddProductsForm addProduct={mockAddProducts} />);
    });
    const user = userEvent.setup()

    it("should display required error when value is invalid", async () => {
        await user.click(screen.getByRole('button', {
            name: /Dodaj/i
        }))
        expect(await screen.findAllByRole("alert")).toHaveLength(2)
        expect(mockAddProducts).not.toBeCalled();
    });

    it("should not display error when value is valid", async () => {
        const mockData: AddProductsFormInputs = {
            title: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            duration: faker.datatype.number(100).toString(),
            price: faker.datatype.number(200).toString(),
            priority: 'MEDIUM'
        }
        user.type(screen.getByRole('textbox', {
            name: /nazwa usługi/i
        }), 'mockData.title')
        user.type(screen.getByRole('textbox', {
            name: /opis usługi/i
        }), 'mockData.description')
        user.type(screen.getByRole('spinbutton', {
            name: /czas usługi/i
        }), '1')
        user.type(screen.getByRole('spinbutton', {
            name: /cena/i
        }), '2')
        user.click(screen.getByTestId('pawiBtn'))
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0))
        expect(mockAddProducts).toBeCalledWith(mockData)
    });
});