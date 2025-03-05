import axios from "axios";

const params = {
  headers: {

    Authorization:
        "Bearer " + 
        import.meta.env.VITE_API_KEY
}
};


export const FetchDataFromAPI = async (url) => {
    try {
        const {data} = await axios.get('http://localhost:1337/' + url, params);
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }

}


