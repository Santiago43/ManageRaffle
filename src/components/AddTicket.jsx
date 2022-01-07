import { Button, Modal, Header, Form } from "semantic-ui-react";
import React from "react";
import TicketService from "../services/TicketService";
function handleChange(e, setTicket) {
  if (e.target.value !== "") {
    let value = parseInt(e.target.value) + 1;
    const findTicketByNumber = (number) => {
      TicketService.getById(number)
        .then((response) => {
          if (response.data === null) {
            console.log("La boleta no existe");
          } else if (response.data.choosen) {
            console.log("La boleta ya fue utilizada");
          } else {
              console.log("Boleta disponible");
            setTicket(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    findTicketByNumber(value);
  }
}
function handleClick(e, person, ticket) {
  e.preventDefault();
  if (ticket.choosen) {
    alert("La boleta ya fue utilizada");
  } else {
    let newPerson = person;
    ticket.person = newPerson;
    ticket.choosen = true;
    function updateTicket(ticket) {
      TicketService.updateTicket(ticket)
        .then((response) => {
          if (response.status === 201) {
            alert("Boleta agregada con éxito");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    updateTicket(ticket);
  }
}
function AddTicket(props) {
  const [open, setOpen] = React.useState(false);
  const [ticket, setTicket] = React.useState({});
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color={"green"}>Agregar boleta</Button>}
      >
        <Modal.Header>Agregar boletas </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Boletas</Header>
            <Form>
              <Form.Field>
                <label htmlFor="">Boleta</label>
                <input
                  type="text"
                  id="ticket"
                  placeholder="Ingrese la boleta"
                  onChange={(e) => {
                    handleChange(e, setTicket);
                  }}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            color="green"
            onClick={(e) => {
              handleClick(e, props.person, ticket);
            }}
          >
            Agregar boleta
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default AddTicket;
