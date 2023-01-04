import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "e0c5c128bdmsh0363df4b65443e6p1ef6f2jsn576e02af1f09",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

// Fetch Airtable API
const baseId = "app59CGrOcJrsLC4F";
const tableName = "tblAbzlXMszYJqd49";
const apiKey = "keyUu0ZDcuFQ5EK2a";

fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.records); // an array of records in the table
  });
