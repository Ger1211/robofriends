import React, { Component} from 'react';
import Card from '../components/Card';

class CardList extends Component {

    render() {
        const { robots } = this.props;
        return (
            <div>
                {
                    robots.map((robot,i) => {
                        return (
                            <Card
                                key={i}
                                id={robot.id}
                                name={robot.name}
                                email={robot.email}
                                phone={robot.phone}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;