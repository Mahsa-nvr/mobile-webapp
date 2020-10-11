import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SpendList extends React.Component {
    render() {
        return (
            <div>
                <ListGroup>
        <ListGroupItem>{this.props.mainTitle}</ListGroupItem>
                </ListGroup>

            </div>
        )
    }
}

export default SpendList;