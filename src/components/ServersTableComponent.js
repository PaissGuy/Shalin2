import React , { Component } from 'react';
import { Table, Button } from 'reactstrap';
import Timer from './Timer'


/*function toggleFunction(server){
    server.IsRunning = server.IsRunning ? false : true
    console.log(server)
    console.log(server.IsRunning)
}*/

/*function RenderServerRow({ server, onClick, TogglerFunction }) {
    return (
        <tr>
            <th scope="row" colSpan = "1">{server.ip}</th>
            <td colSpan = "2">{server.servername}</td>
            <td colSpan = "2"><Timer server = {server}/></td>
            <td colSpan = "2"><Button color="primary" onClick={() => TogglerFunction(server.id)}>Toggle</Button></td>
            <td colSpan = "1">{server.Type}</td>
            <td colSpan = "2">0</td>
            <td colSpan = "2"> <Button color="primary" onClick={() => onClick(server.id)}>Delete</Button></td>
            {/*<td onClick={() => onClick(server.id)} colSpan = "2">0</td>}
        </tr>
    );
}

/*const ServersTable = (props) => {
    const table = props.servers.map((server) => {
        return (
            <div key={server.id}>
                <Table responsive>
                    <thead>
                        <tr>

                            <th colSpan = "1">IP</th>
                            <th colSpan = "2">Server Name</th>
                            <th colSpan = "2">Time Running</th>
                            <th colSpan = "2">Toggle</th>
                            <th colSpan = "1">Type</th>
                            <th colSpan = "2">Price</th>
                            <th colSpan = "2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderServerRow server={server} onClick={props.onClick} TogglerFunction = {props.togglerFunction}/>
                    </tbody>
                </Table>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row row-header">
                <div className="col-12">
                    {table}
                </div>
            </div>
        </div>
    );
}*/

class ServerTable extends Component{
    constructor (props) {
        super(props);
        this.state = {
            count : 0
        }

        this.RenderServerRow = this.RenderServerRow.bind(this);
    }

    RenderServerRow({ servers, onClick, TogglerFunction }) {
        
       

        return (
            servers.map((server) => 
            <tr key = {server.id}>
                <th scope="row" colSpan = "1">{server.ip}</th>
                <td colSpan = "2">{server.servername}</td>
                <td colSpan = "2"><Timer server = {server} TogglePrice = {this.props.TogglePrice}  key = {server.IsRunning}/></td>
                <td colSpan = "2"><Button color="primary" onClick={() => TogglerFunction(server.id)}>Toggle</Button></td>
                <td colSpan = "1">{server.Type}</td>
                <td colSpan = "2">{server.price}</td>
                <td colSpan = "2"> <Button color="primary" onClick={() => onClick(server.id)}>Delete</Button></td>
            </tr>)
        );
    }



    render() {
        return(
            <div className = "container">
                 
                    <Table responsive>
                        <thead>
                            <tr>
    
                                <th colSpan = "1">IP</th>
                                <th colSpan = "2">Server Name</th>
                                <th colSpan = "2">Time Running</th>
                                <th colSpan = "2">Toggle</th>
                                <th colSpan = "1">Type</th>
                                <th colSpan = "2">Price</th>
                                <th colSpan = "2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {<this.RenderServerRow servers={this.props.servers} onClick={this.props.onClick} TogglerFunction = {this.props.togglerFunction}/>}
                        </tbody>
                    </Table>
                
            </div>
        )
    }

}

export default ServerTable;

