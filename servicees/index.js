import { createClient } from "contentful";

const client = createClient({
  space: "bv8s22fow9gd",
  accessToken: "vQVEAwb4ziceJf4VNTG5uBp7dXi7roTbidpHfCZ3N60",
});

export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "about",
    field: "pics",
  });

  return response.items;
};
export const getSteps = async () => {
  const response = await client.getEntries({
    content_type: "steps",
  });

  return response.items;
};
export const getGallery = async () => {
  const response = await client.getEntries({
    content_type: "gallery",
  });

  return response.items;
};
export const getLinks = async () => {
  const response = await client.getEntries({
    content_type: "links",
  });

  return response.items;
};
