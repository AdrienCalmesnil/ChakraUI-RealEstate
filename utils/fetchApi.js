import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

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
const baseId = process.env.API_BASE_ID;
const tableName = process.env.API_TABLE_NAME;
const apiKey = process.env.API_KEY;

fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.records[0].fields.Images); // an array of records in the table
  });
