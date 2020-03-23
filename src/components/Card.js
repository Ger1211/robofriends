import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        const { id, name, email, phone } = this.props;
        return (
            <div className="dib">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" cardZIndex={id} >
                    <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc" onClick={this.handleClick} >
                        <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
                        <h2>{name}</h2>
                        <p>Email: {email}</p>
                    </div>

                    <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc" onClick={this.handleClick} >
                        <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
                        <h2>{name}</h2>
                        <p>Phone: {phone}</p>
                    </div>
                </ReactCardFlip>
            </div>

        );
    }
}

export default Card;