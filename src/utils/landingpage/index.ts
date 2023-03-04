
import { carousel1, carousel2, carousel3, carousel4, carousel5, gallery1, gallery15, gallery2, gallery25, gallery3 } from "@/src/assets/landinPage";
import { dynamicContentImg1, dynamicContentImg10, dynamicContentImg11, dynamicContentImg12, dynamicContentImg13, dynamicContentImg14, dynamicContentImg15, dynamicContentImg2, dynamicContentImg3, dynamicContentImg4, dynamicContentImg5, dynamicContentImg6, dynamicContentImg7, dynamicContentImg8, dynamicContentImg9 } from "@/src/assets/landinPage/dynamicContent";
import { homeGallery1, homeGallery10, homeGallery11, homeGallery2, homeGallery3, homeGallery4, homeGallery5, homeGallery6, homeGallery7, homeGallery8, homeGallery9 } from "@/src/assets/landinPage/gallery";
import { cardArrHome,  homeGalleryArrType,  sliderArr } from "@/src/types";

export const breadCeumbArr:sliderArr[]= [

    {
        id:1,
        img: carousel4,
        title:'life lives here',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        video: 'https://youtu.be/ANzPM5-lwXc'

    },

    {
        id:2,
        img: carousel1,
        title:'life lives here',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        video: 'https://youtu.be/ANzPM5-lwXc'

    },

    {
        id:3,
        img: carousel2,
        title:'life lives here',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        video: 'https://youtu.be/ANzPM5-lwXc'

    },


    {
        id:4,
        img: carousel3,
        title:'life lives here',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        video: 'https://youtu.be/ANzPM5-lwXc'


    },

    {
        id:5,
        img: carousel5,
        title:'life lives here',
        content:'leading digital out of home office media publisher, connecting property & brand partners with audiences in premium offices.',
        video: 'https://youtu.be/ANzPM5-lwXc'

    }

]

    export const  homeCardArr:cardArrHome[]= [
        {
            id:1,
            img: [
                {
                    id:11,
                    img1: dynamicContentImg1,
                },
                {
                    id:12,
                    img1: dynamicContentImg2,
                },
                {
                    id:13,
                    img1:dynamicContentImg3
                }
            ],
            mt:"0"

    
        },
        {
            id:2,
            img: [
                {
                    id:21,
                    img1: dynamicContentImg4,
                },
                {
                    id:22,
                    img1: dynamicContentImg5,
                },
                {
                    id:23,
                    img1:dynamicContentImg6
                }
            ],
            mt:"10"
    
        },
    
        {
            id:3,
            img: [
                {
                    id:31,
                    img1: dynamicContentImg7,
                },
                {
                    id:32,
                    img1: dynamicContentImg8,
                },
                {
                    id:33,
                    img1:dynamicContentImg9
                }
            ],
           mt:"6"
    
        },
    
        {
            id:4,
            img:[
                {
                    id:41,
                    img1: dynamicContentImg10,
                },
                {
                    id:42,
                    img1: dynamicContentImg11,
                },
                {
                    id:43,
                    img1:dynamicContentImg12
                }
            ],
           mt:"10"
    
        },

        {
            id:5,
                img: [
                    {
                        id:51,
                        img1: dynamicContentImg13,
                    },
                    {
                        id:52,
                        img1: dynamicContentImg14,
                    },
                    {
                        id:53,
                        img1:dynamicContentImg15
                    }
                ],
           mt:"0"
    
        }
    
    
    ]

 export const homeGalleryArr:homeGalleryArrType[]=[
    {
        id:1,
        img: homeGallery1
    },
    {
        id:2,
        img: homeGallery2
    },
    {
        id:3,
        img: homeGallery3
    },
    {
        id:4,
        img: homeGallery4
    },
    {
        id:5,
        img: homeGallery5
    },
    {
        id:6,
        img: homeGallery6
    },
    {
        id:7,
        img: homeGallery7
    },
    {
        id:8,
        img: homeGallery8
    },
    {
        id:9,
        img: homeGallery9
    },
    {
        id:10,
        img: homeGallery10
    },
    {
        id:11,
        img: homeGallery11
    },
 ]