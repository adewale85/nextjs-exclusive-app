import DeliveryIcon from '../assets/Delivery_icon.svg'
import CustomerIcon from '../assets/CustomerService_icon.svg'
import Guarantee from '../assets/Guarantee_icon.svg'

export interface Arrivalprops{
id: number;
image: string;
title: string;
subTitle: string;

}

export const NewArrivalData: Arrivalprops [] = [
    {
        id: 1,
        image: DeliveryIcon,
        title: 'FREE AND FAST DELIVERY',
        subTitle: 'Free delivery for all orders over $140'
    },

    {
        id: 2,
        image: CustomerIcon,
        title: '24/7 CUSTOMER SERVICE',
        subTitle: 'Friendly 24/7 customer support'
    },

    {
        id: 3,
        image: Guarantee,
        title: 'MONEY BACK GUARANTEE',
        subTitle: 'We reurn money within 30 days'
    }
]