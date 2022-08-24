import React from 'react';

export default function PrestigeRoulette() {
    return (
        <div className="App">
            <Deck />
        </div>
    );
}

const image = 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661356780/Tarot%20Cards/strength_v8lvhw.png';

class Deck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deck: null,
            cardsDrawn: []
        };

        this.dealCard = this.dealCard.bind(this);
    }

    dealCard() {


        // set state with new card info
        this.setState(previous => ({
            cardsDrawn: [
                ...previous.cardsDrawn,
                {
                    id: 1,
                    image: image,
                    name: `Doctor`
                }
            ]
        }));
    } catch(err) {
        alert(err);
    }

    render() {
        const cards = this.state.cardsDrawn.map(card => (
            <Card key={card.id} name={card.name} image={card.image} />
        ));

        return (
            <div className="Deck">
                <h3>
                    <span role="img">♢</span>Prestige Shuffle<span role="img">♢</span>
                </h3>
                <h4>
                    A <span>Randomized</span> Prestige Picker
                </h4>
                <button className="deal-button" onClick={this.dealCard}>
                    Deal
                </button>
                <div className="Cards">{cards}</div>
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);

        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    // transform: translate(10px, 20px) rotate(90deg);
    render() {
        const { image, name } = this.props;
        return (
            <img
                className="Card"
                src={image}
                alt={name}
                style={{ transform: this._transform }}
            />
        );
    }
}