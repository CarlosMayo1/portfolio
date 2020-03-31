import React, { Component } from 'react';

import Card from './Card/Card';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    card: 
      [
        {
          id: 1, 
          img: 'https://live.staticflickr.com/6041/6333227168_1e05e5b8b7_b.jpg',
          title: 'Doomhammer',
          content: 'This is the story about the powerful hammer',
          link: '#',
          author: 'By Carlos Mayo'
        },
        {  
          id: 2, 
          img: 'https://cdna.artstation.com/p/assets/images/images/010/395/260/large/val-leonhart-grommash-hellscream.jpg?1524180314',
          title: 'Grommash',
          content: 'This is a brief story about one of the most poweful Orc leaders',
          link: '#',
          author: 'By Eddy Mogollon'
        },
        {
          id: 3, 
          img: 'data:image/jpeg;base64,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',
          title: 'Warsong Clan',
          content: 'History related to the incredible warsong clan',
          link: '#',
          author: 'By Maira Perez'
        }
      ]
    }
  }

  clickHandler(cardIndex){
    console.log('Clicked ' + cardIndex);
  }

  render() {

    let cards = this.state.card.map((card, index) => {
      return <Card
              clicked={() =>this.clickHandler(index)} 
              img={card.img}
              title={card.title}
              content={card.content}
              link={card.link}
              author={card.author}/>
    })

    return(
      <div className="card-deck" style={{marginTop: '10px'}}>
          {cards}
      </div>
    );
  }
}

export default Cards;