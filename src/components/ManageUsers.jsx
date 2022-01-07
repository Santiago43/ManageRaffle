import ModalUser from "./ModalUser"
import React from 'react'
import PersonService from '../services/PersonService'
import AddTicket from "./AddTicket"
import TicketList from "./TicketList"
class ManageUsers extends React.Component{
    state={
        persons:[]
    }
    
    componentDidMount(){
        const getPersons =()=>{
            PersonService.getAll().then(persons=>{
                if(persons.data!=="")
                this.setState({persons:persons.data})
            }).catch(error=>{   
                console.log(error)
            })
        }
        getPersons();
    }
    render(){
        return <div className="ui grid">
            <div className="ui row">
                <div className="ui two wide column">

                </div>
                <div className="ui ten wide column">
                    <h1>Usuarios registrados</h1>
                </div>
                <div className="ui three wide column">
                    <ModalUser></ModalUser>
                </div>
            </div>
            <div className="ui row">
                <div className="ui sixteen wide column">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.persons.map((person,index)=>(
                                <tr key={index}>
                                    <td>{person.name}</td>
                                    <td>{person.phone}</td>
                                    <td>
                                        <AddTicket person={person}></AddTicket>
                                        <TicketList person={person}></TicketList>
                                        </td>
                                </tr>
                            ))}        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default ManageUsers;