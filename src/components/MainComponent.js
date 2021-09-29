import React, { Component } from 'react';
import Header from './HeaderComponent';
import ServersTable from './ServersTableComponent';
import FormComponent from './FormComponent';
import Footer from './FooterComponent';
import { SERVERS } from '../shared/servers';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servers: SERVERS,
            currency: '$'
        }

        this.handleToggle = this.ToggleServer.bind(this);
        this.HandleAddServer = this.HandleAddServer.bind(this);
        this.ToggleType = this.ToggleType.bind(this);
        this.TogglePrice = this.TogglePrice.bind(this);
    }

    ToggleType(type){
        const serverslist = [...this.state.servers];
        if(type === 'USD'){
            this.setState({currency : '$'});
        }
        else if(type === 'EUR'){
            this.setState({currency : '€'});
        }
        else{
            this.setState({currency : '₪'});
        }
        serverslist.map((server) => {
            if(server.IsRunning === false){
                server.price = '0';
            }
        });
        this.forceUpdate()
    }

    TogglePrice(server,count){
        const serverslist = [...this.state.servers];
        const myfunction = (serv) => serv.id===server.id
        const serverIndex = serverslist.findIndex(myfunction);
        let x = count;
        if(this.state.currency ==='$'){
            serverslist[serverIndex].price = ((parseFloat((0.1*x/60)).toFixed(3)).toString() + this.state.currency)
        }
        else if(this.state.currency ==='€'){
            serverslist[serverIndex].price = ((parseFloat((0.08*x/60)).toFixed(3)).toString() + this.state.currency)
        }
        else{
            serverslist[serverIndex].price = ((parseFloat((0.2*x/60)).toFixed(3)).toString() + this.state.currency)
        }
        //serverslist[serverIndex].price = count;
        this.setState({ servers: serverslist });
    }

    HandleAddServer = (servername , serverip, servertype) => {
        const serverslist = [...this.state.servers];
        const newid = serverslist[serverslist.length -1].id +1;
        
       /* serverslist.push({
            
                ip: serverip,
                id: newid,
                servername: servername,
                Type: servertype,
                IsRunning: false

        });
         
        this.setState({ servers: serverslist });*/
        this.setState({
            servers: [
              ...this.state.servers,
              {
                ip: serverip,
                id: newid,
                servername: servername,
                Type: servertype===""? "t1.nano":servertype ,
                IsRunning: false,
                price: ('0')
              },
            ],
          });
          return false;
    }

    DeleteServer(serverId) {
        const serverslist = [...this.state.servers];
        const serverIndex = serverslist.findIndex(serv => serv.id === serverId);
        serverslist.splice(serverIndex, 1);
        this.setState({ servers: serverslist })
    }

    ToggleServer(serverId) {
        const serverslist = [...this.state.servers];
        let serverIndex = serverslist.findIndex(serv => serv.id === serverId);
        serverslist[serverIndex].IsRunning = (serverslist[serverIndex].IsRunning ? false : true);
        //server.IsRunning = server.IsRunning ? false : true
        this.setState({ servers: serverslist });
        this.forceUpdate();
    }

    componentWillUnmount(){
        console.log("Unmount");
    }

    render() {
        return (
            <div className="container">
                <Header />
                <ServersTable bordered={true} servers={this.state.servers} onClick={(serverId) => this.DeleteServer(serverId)} 
                togglerFunction={(server) => this.ToggleServer(server)} TogglePrice = {(server,count) => this.TogglePrice(server,count)} />
                <FormComponent handleAddServer = {this.HandleAddServer} ToggleType = {this.ToggleType}/>
                <Footer />

            </div>
        )
    }
}

export default Main;