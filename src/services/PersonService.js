import http from "./http-config";
const getAll = () => {
  return http.get(`Person`,{
      headers:{
            token: "123456ABC"
      }
  });
};

const createPerson= (person) => {
    return http.post(`Person/create`, person,{
        headers: {
            token: "123456ABC"
        }
    });
}


const exportedObject = {
  getAll,
  createPerson
};
export default exportedObject;