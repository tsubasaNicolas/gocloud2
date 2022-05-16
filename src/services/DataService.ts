import axios from "axios";
export const getData = async () => {
    return await axios.get("https://go-cloud-nicolas.herokuapp.com/data");
};
