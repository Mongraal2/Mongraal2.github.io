import React from "react";
import Cards from './Cards';
import '../Css/App.css';
// import img from '../../../Web dev/Project1/img/'
const webSeries=[
    {
        key:1,
        imgLink:'https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg',
        name:'Jujutsu Kaisen',
        description:'The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.',
        imdb:'https://www.imdb.com/title/tt12343534/'
    },
    
    {
        key:2,
        imgLink:'https://www.cheatsheet.com/wp-content/uploads/2021/09/Demon-Slayer-Season-2.jpeg',
        name:'Demon Slayer',
        description:'Tanjiro Kamado,who lives happily with his family until one day he arrives home just to find his family slaughtered by a demon attack, except for his younger sister, Nezuko who has been turned into a demon',
        imdb:'https://www.imdb.com/title/tt9335498/'
    },
    
    {
        key:3,
        imgLink:'https://i0.wp.com/attackongeek.com/wp-content/uploads/2017/10/erased.jpg?fit=952%2C536&ssl=1&resize=1280%2C720',
        name:'Erased',
        description:'The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.',
        imdb:'https://www.imdb.com/title/tt5249462/'
    },
    
    {
        key:4,
        imgLink:'https://thecurrent-online.com/wp-content/uploads/2021/12/One-Punch-Man-Season-3-release-date-delayed-or-preponed-latest-updates-here-1280x720.jpg',
        name:'One Punch Man',
        description:'Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.',
        imdb:'https://www.imdb.com/title/tt4508902/'
    },
    
    {
        key:5,
        imgLink:'https://dw9to29mmj727.cloudfront.net/social/80-DN_600x314.jpg',
        name:'Death Note',
        description:`Light Yagami comes across the 'Death Note': If someone's name is written in it, the person will die.Light kills those he deems unworthy of life. But a detective becomes determined to put a stop to his reign.`,
        imdb:'https://www.imdb.com/title/tt4508902/'
    },
    
]

export default function App() {
    return (
        <>
        <header>
        <h1>The Best Anime to watch</h1>
        </header>
        <Cards webSeries={webSeries}/>
        </>
    )
};