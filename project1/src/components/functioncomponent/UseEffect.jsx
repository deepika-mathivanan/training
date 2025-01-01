/*import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [text, setText] = useState("kongu"); 


  return (
    <div>
      <h1>useEffect with Text Example</h1>
      <input
        type="text"
        placeholder="enter text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "20px",
        }}
      />
      result:{text}

    </div>
  );
};

export default UseEffect;*/
import React, { useState, useEffect } from "react";
    import axios from "axios";
    
    const UseEffect = () => {
     
      const [post, setPost] = useState([]);
    
      
      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/")
          .then((res) => {
            setPost(res.data); 
            console.log(res); 
          })
          .catch((error) => {
            console.error("Error fetching data:", error); 
          });
      }, []); 
    
      return (
        <section>
                      <h1>this is useeffect</h1>

          <h1>Fetching Data from Placeholder API</h1>
          <h2>Posts:</h2>
          <ol> 
            {
              post.map((item) => (
                <li key={item.id}>{item.title}</li> 
              ))
            }
          </ol>
        </section>
      );
    };
    
    export default UseEffect;
