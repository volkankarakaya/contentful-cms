import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "e73xhv7jvw5g",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { image, url, title } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;
        return { img, id, url, title };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
