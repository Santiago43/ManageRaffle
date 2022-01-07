import http from "./http-config";
const getAll = () => {
  return http.get(`Ticket/all`);
};

const updateTicket = (ticket) => {
  return http.put(`Ticket/update`, ticket, {
    headers: {
      token: "123456ABC"
    }
  });
}
const getById= (id) => {
  return http.get(`Ticket/${id}`, {
    headers: {
      token: "123456ABC"
    }
  });
}
const getByPersonId= (personId) => {
  return http.get(`Ticket/Person/${personId}`, {
    headers: {
      token: "123456ABC"
    }
  });
}
const exportedObject = {
  getAll,
  updateTicket,
  getByPersonId,
  getById
};
export default exportedObject;
