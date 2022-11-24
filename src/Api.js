import axios from "axios";
const { BASE_URL } = process.env;

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        //Authorization: '563492ad6f917000010000017e448347ad8e4c17b592e6e191f8e5b5',
    }
});

export default class Api{
    static getAllCategories(){
        return api.get("/categories");
    }

    static getAllBranches(){
        return api.get("/map");
    }

    static getAllOffers(){
        return api.get("/offers")
    }
    static getSlides(){
        return api.get('/slides')
    }
}
