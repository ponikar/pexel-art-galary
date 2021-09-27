import React, { useEffect, useState } from "react";

const App = () => {
  const [cols, setCols] = useState<any[][]>([[], [], []]);
  useEffect(() => {
    (async () => {
      let res = await (
        await fetch("https://api.pexels.com/v1/search?query=boys&per_page=10", {
          headers: {
            Authorization: import.meta.env.VITE_PEXEL_API_KEY,
          },
        })
      ).json();

      const data = res.photos;

      const newArr = cols;
      let counter = 0;
      while (data.length) {
        newArr[counter].push(...data.splice(0, 3));
        counter = counter == 2 ? 0 : counter + 1;
      }
      setCols([...newArr]);
    })();
  }, []);

  console.log(import.meta.env.VITE_PEXEL_API_KEY);
  return (
    <section className="grid w-10/12 mx-auto gap-5 sm:grid-cols-3 grid-cols-2 border">
      {cols.map((col, index) => (
        <div className="flex flex-col" key={index}>
          {col.map((c, index) => (
            <img src={c.src.medium} className="w-full mb-5 object-cover" />
          ))}
        </div>
      ))}
    </section>
  );
};

export default App;
