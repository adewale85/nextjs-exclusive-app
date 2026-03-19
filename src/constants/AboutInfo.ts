
import SallerActive from '../assets/Sallers active.svg'
import ProduductSale from '../assets/Produduct Sale.svg'
import Customeractive from '../assets/Customer active.svg'
import AnnualSale from '../assets/AnnualSale.svg'

interface AboutInfoprops {
    id: number;
    image: string;
  title: string;
  subTitle: string
  active?: boolean;
}

export const AboutInfopropsData: AboutInfoprops [] = [
{
    id: 1,
    image:SallerActive,
    title: '10.5k',
    subTitle: 'Sallers active our site',
},
{
    id: 2,
    image:ProduductSale,
    title: '33k',
    subTitle: 'Mopnthly Produduct Sale',
},
{
    id: 3,
    image:Customeractive,
    title: '45.5k',
    subTitle: 'Customer active in our site',
},
{
    id: 4,
    image:AnnualSale,
    title: '25k',
    subTitle: 'Annual gross sale in our site',
},


]