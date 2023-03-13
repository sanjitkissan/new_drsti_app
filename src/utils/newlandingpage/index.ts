import {  gmail, web3, web4, web5, img1, img2, web2, aboutusImg1, aboutusImg2, ourTeamImg1, ourTeamImg2, ourTeamImg3 } from "@/src/assets/newladingpage";
import { newArrCard, tesimonialsArrCard } from "@/src/types";

export const  newCardArr:newArrCard[]= [
    {
        id:1,
        img: web3,
        title:'Web Design',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',


    },
    {
        id:2,
        img: web4,
        title:'Web Development',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',

    },

    {
        id:3,
        img: web5,
        title:'Web Security',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',
    },

    {
        id:4,
        img: gmail,
        title:'Mail',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?',

    }


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
        title:"history ",
        list:{
            key:11,
            subTitle:"history",
            descriptionOne:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            descriptionTwo:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            img: web2
        }
    },
    {
        id:2,
        title:"Vision",
        list:{
            key:21,
            subTitle:"Vision",
            descriptionOne:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            descriptionTwo:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            img: aboutusImg1
        }
    },
    {
        id:3,
        title:"Mission",
        list:{
            key:31,
            subTitle:"Mission",
            descriptionOne:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            descriptionTwo:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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

