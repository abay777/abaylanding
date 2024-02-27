import rentz from '../assets/rental project img.png'
import { FaReact } from 'react-icons/fa'
import cripzy from '../assets/cripzy project pic.png'
import { TbFileTypeCss ,TbApi} from 'react-icons/tb'
import { SiReactrouter, SiJavascript ,SiFramer , SiTypescript , SiRedux} from 'react-icons/si'

import React from 'react'



 interface projectDetails{
    name:string,
    img:string,
    subhead:string,
    discription:string,
    icons:React.ElementType[],
    Tech:string[],
    link:string
} 





export const projects:projectDetails[] = [
    {
        name:'Rentz'
        ,img:rentz
        ,subhead:'Rentz: Elevating Rental Car Services with React.js'
        ,discription:'Rentz is a cutting-edge website designed for rental car agencies and car owners, developed using the powerful React.js library. With a focus on optimized performance and seamless user experience , Rentz boasts a responsive design and visually appealing CSS styling. This user-centric platform ensures swift load times and intuitive navigation, setting a new standard for rental car websites.'
        ,icons:[FaReact,TbFileTypeCss,SiReactrouter,SiJavascript]
        ,Tech:['reactjs','javascript','css','vanilla-react']
        ,link:'https://rentingcar.netlify.app/'

    },
    {
        name:'Cripzy'
        ,img:cripzy
        ,subhead:'Cripzy: Real-Time Crypto Coin Tracker'
        ,discription:'Cripzy is a visually stunning project that provides real-time data of various cryptocurrency coins, offering an immersive experience for tracking and monitoring the dynamic crypto market. With captivating animations and visually appealing design, Cripzy delivers an engaging platform for staying updated on the latest cryptocurrency trends and prices.'
        ,icons:[TbApi, FaReact ,TbFileTypeCss, SiFramer, SiReactrouter, SiRedux, SiTypescript]
        ,Tech:['react-js','Typescript', 'css', 'redux-toolKit', 'Framer-motion','vanilla-react']
        ,link:'https://cryptocurrency-track.netlify.app/'

    },
  

]