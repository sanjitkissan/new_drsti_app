import {  gmail, web3, web4, web5, img1, img2, web2, aboutusImg1, aboutusImg2, ourTeamImg1, ourTeamImg2, ourTeamImg3 } from "@/src/assets/newladingpage";
import { newArrCard, tesimonialsArrCard } from "@/src/types";

export const  newCardArr:newArrCard[]= [
    {
        id:1,
        img: web3,
        title:'Static Media',
        content:'Placed at high footfall locations within IT parks the corporate elites actively engage and notice our brand activations.',


    },
    {
        id:2,
        img: web4,
        title:'Digital Media',
        content:'Engage high-value professionals all day long at hybrid workplaces lobbies, elevator banks, and common areas',

    },

    {
        id:3,
        img: web5,
        title:'On-Ground Activation',
        content:'Understanding the brand objectives, we conceptualize and execute customized engagements within business hubs.',
    },

    // {
    //     id:4,
    //     img: gmail,
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',

    // }


]

export const  tesimonialsCardArr:tesimonialsArrCard[]= [
    {
        id:1,
        subtitle:'Praesent tincidunt suscipit lacus vel dictum.Praesent nisl viverra sit amet sem sed porta. Quisque ac purus ipsum. Sed facilisis sed egestas dolor.',
        title:'Elizabeth Hobbs',
        content:'Web Designer',
        img: img1,
    },

    {
        id:2,
        subtitle:'Praesent tincidunt suscipit lacus vel dictum.Praesent nisl viverra sit amet sem sed porta. Quisque ac purus ipsum. Sed facilisis sed egestas dolor.',
        title:'Elizabeth Hobbs',
        content:'Web Designer',
        img: img2,
    }

    // {
    //     id:3,
    //     subtitle:'',
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',
    //     img: gmail,
    // },

    // {
    //     id:4,
    //     subtitle:'',
    //     title:'Mail',
    //     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',
    //     img: gmail,
    // }
]

export const aboutusArr=[
    {
        id:1,
        title:"Captive audience ",
        list:{
            key:11,
            subTitle:"Captive audience",
            descriptionOne:"Employees working in a flexible workspace are a captive audience. They spend 10+ hours of their active day at workplaces, which means they are more likely to engage with brand activation activities. This makes corporate offices an excellent location to promote brand awareness and engagement.",
            descriptionTwo:" High-frequency captive environments can increase brand awareness. When people repeatedly see the same brand or message, they are more likely to remember it and associate it with the product or service being advertised.",
            img: web2
        }
    },
    {
        id:2,
        title:"Brand Loyalty",
        list:{
            key:21,
            subTitle:"Brand Loyalty",
            descriptionOne:"By engaging with employees in a hybrid workspace, brands have an opportunity to build brand loyalty. When office professionals have positive experiences with a brand, they are more likely to become loyal customers and advocates.",
            descriptionTwo:"When clients are loyal to your brand, they are more likely to recommend your services to others. This can lead to positive word-of-mouth marketing, which can help to attract new clients and grow your business.",
            img: aboutusImg1
        }
    },
    {
        id:3,
        title:"Personalized Touch",
        list:{
            key:31,
            subTitle:"Personalized Touch",
            descriptionOne:"IT hubs offer an opportunity for brands to showcase their products and services to promising audiences. Brands can use creative activations and product demos to showcase their offerings and generate interest among elite audiences.",
            descriptionTwo:" Create an opportunity for customers to engage with your brand on a deeper level by providing a memorable experience, build an emotional connection and increase their likelihood of making a purchase.",
            img: aboutusImg2
        }
    },
]
export const ourTeamArr=[
    {
        id:1,
        img:ourTeamImg1,
        name:"martin smit",
        position:"founder & ceo",
        title:"Hi There !",
        description:"I love to introduce myself as a hardcore Web Designer."
    },
    {
        id:2,
        img:ourTeamImg2,
        name:"franklin harbet",
        position:"hr maneger",
        title:"Hello World",
        description:"I love to introduce myself as a hardcore Web Designer."
    },
    {
        id:3,
        img:ourTeamImg3,
        name:"linda anderson",
        position:"sales maneger",
        title:"I love to design",
        description:"I love to introduce myself as a hardcore Web Designer."
    },
]

