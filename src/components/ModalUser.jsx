import React from "react";
import { Button, Modal,Form } from "semantic-ui-react";
import PersonService from "../services/PersonService";
function handleClick(e,user) {
    e.preventDefault();
    PersonService.createPerson(user).then(response=>{
        console.log(response)
        if(response.status===201){
            alert("Usuario creado con éxito");
        }
    }).catch((error)=>{
        console.log(error)
    })
}
function handleChange(e,user,setUser){
    let field = e.target.id;
    let value = e.target.value;
    let newUser = user;
    newUser[field] = value;
    setUser(newUser); 
}
function ModalUser() {
  const [open, setOpen] = React.useState(false);
  const [user,setUser]= React.useState({name:"",phone:"",tickets:[]});
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color={"green"}>Agregar usuario</Button>}
    >
      <Modal.Header>Registrar persona</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Nombre</label>
              <input type="text" id="name" placeholder="Nombre" onChange={(e)=>{handleChange(e,user,setUser)}}/>
            </Form.Field>
            <Form.Field>
              <label>Teléfono</label>
              <input type="number" id="phone" placeholder="Teléfono" onChange={(e)=>{handleChange(e,user,setUser)}}/>
            </Form.Field>
            
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button color="green" onClick={(e)=>handleClick(e,user)}>Crear usuario</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalUser;
