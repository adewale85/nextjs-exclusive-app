import TomCruise from "../assets/Tom Cruise.svg"
import EmmaWatson from "../assets/Emma Watson.svg"
import WillSmith from "../assets/Will Smith.svg"
import twitter from "../assets/Twitter.svg"
import intagram from "../assets/instagram.svg"
import linkdin from "../assets/Linkedin.svg"


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
    image:TomCruise ,
    title: 'Tom Cruise',
    subTitle: 'Founder & Chairman',
    twitterImg: twitter,
    instagramImg: intagram,
    linkdinImg: linkdin,
    },

    {
        id: 2,
    image:EmmaWatson,
    title: 'Emma Watson',
    subTitle: 'Managing Director',
    twitterImg: twitter,
    instagramImg: intagram,
    linkdinImg: linkdin,
    },

    {
        id: 3,
    image:WillSmith,
    title: 'Will Smith',
    subTitle: 'Product Designer',
  twitterImg: twitter,
    instagramImg: intagram,
    linkdinImg: linkdin,
    }

]