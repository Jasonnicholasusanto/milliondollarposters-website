import axios from "axios";

export const postSignup = async (firstName, lastName, username, email, hashedPassword, updates) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/users", 
        {
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            updates: updates==="yes" ? true : false,
            blocked: false,
            confirmed: false,
            // role: process.env.REACT_APP_DEFAULT_ROLE,
        },
        {
          baseURL: process.env.REACT_APP_API_URL,
          headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };