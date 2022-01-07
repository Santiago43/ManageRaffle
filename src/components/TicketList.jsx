import React from "react";
import { Modal, Button, Header, List } from "semantic-ui-react";
function TicketList(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color={"blue"}>Ver boletas</Button>}
      >
        <Modal.Header>Boletas de {props.person.name} </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Boletas</Header>
            <List>
                {props.person.tickets.map((ticket,index)=>(
                    <List.Item key={index}>{(ticket.id-1)<10?(
                        "00"+(ticket.id-1)
                        ):((ticket.id-1<100)?(
                            "0"+(ticket.id-1)
                        ):(
                            ticket.id-1
                        ))}</List.Item>
                ))}
            </List>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
export default TicketList;
