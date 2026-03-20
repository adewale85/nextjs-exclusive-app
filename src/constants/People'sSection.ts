


interface PeopleSectionProps
 {
    id: number;
    image: string;
  title: string;
  subTitle: string;
  twitterImg: string;
  instagramImg: string; 
  linkdinImg: string;

}

export const PeopleSectionData : PeopleSectionProps [] = [
    {
        id: 1,
    image: "/images/Tom Cruise.svg",
    title: 'Tom Cruise',
    subTitle: 'Founder & Chairman',
    twitterImg: "/images/Twitter.svg",
    instagramImg: "/images/instagram.svg",
    linkdinImg: "/images/Linkedin.svg",
    },

    {
        id: 2,
    image: "/images/Emma Watson.svg",
    title: 'Emma Watson',
    subTitle: 'Managing Director',
    twitterImg: "/images/Twitter.svg",
    instagramImg: "/images/instagram.svg",
    linkdinImg: "/images/Linkedin.svg",
    },

    {
        id: 3,
    image: "/images/Will Smith.svg",
    title: 'Will Smith',
    subTitle: 'Product Designer',
  twitterImg: "/images/Twitter.svg",
    instagramImg: "/images/instagram.svg",
    linkdinImg: "/images/Linkedin.svg",
    }

]