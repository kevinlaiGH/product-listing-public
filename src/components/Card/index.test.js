import React from 'react';
import { render, screen } from '@testing-library/react';
import {Card} from "./index";

describe('ProductCard', () => {
    const product = {
        productName: 'Product name',
        productImage: 'image.jpg',
        price: '$9.99',
    };

    test('renders product name', () => {
        render(<Card product={product} />);
        const productName = screen.getByText('Product name');
        expect(productName).toBeInTheDocument();
    });

    test('renders product image', () => {
        render(<Card product={product} />);
        const productImage = screen.getByAltText('Product name');
        expect(productImage).toBeInTheDocument();
        expect(productImage).toHaveAttribute('src', 'https://loremflickr.com/320/240/image.jpg');
    });

    test('renders product price', () => {
        render(<Card product={product} />);
        const productPrice = screen.getByText('$9.99');
        expect(productPrice).toBeInTheDocument();
    });
});