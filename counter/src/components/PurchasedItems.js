import React from "react";
import { Table } from "semantic-ui-react";
import { Button, Icon, Container, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import data from "./data"

function PurchasedItems() {
    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <Header size='large'>Products
                <Button floated='right' inverted color='olive'>
                    <Button.Content visible>
                        <Icon name='shop' />
                    </Button.Content>
                </Button>
                </Header>
            </div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Cart</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((item) => (
                        <Table.Row>
                            <Table.Cell>{item.product}</Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                            <Table.Cell><Button>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
}

export default PurchasedItems;