import React from 'react'

export default class Body extends React.Component {
    render() {
        var rows = [];

        for (let index = 0; index < this.props.products.length; index++) {
            var columns = [];
            columns.push(<td>{this.props.products[index].name}</td>)
            columns.push(<td>{this.props.products[index].description}</td>)
            columns.push(<td>{this.props.products[index].price}</td>)

            rows.push(<tr><th scope="row"> {index + 1} </th>{columns}</tr>)
        }

        return(
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{this.props.header.first}</th>
                        <th scope="col">{this.props.header.second}</th>
                        <th scope="col">{this.props.header.third}</th>
                    </tr>
                </thead>
                <tbody> {rows} </tbody>
            </table>
        );
    };
}