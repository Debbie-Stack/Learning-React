import { useState } from "react";

const Letter = () => {
    const [name, setName] = useState("");
    const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    alert("Submitted");
    console.log(name);
  };
  const [isMode, setIsMode] = useState(false);

  const style = {
    backgroundColor: isMode ? "white" : "black",
    color: isMode ? "black" : "white",
  };


  return (
    <div
      style={style} 
      className="flex flex-col justify-center items-end w-200 mx-auto p-5 h-screen"
    >
      

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleChange}/>
          <button
            type="submit"
            onClick={() => setIsClicked((prev) => !prev)}
            className="border-2 border-black bg-purple-800 font-bold text-white p-1 ml-5 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      {isClicked ? (
        <div>
            <button
        className="border-2 p-2"
        onClick={() => setIsMode((prev) => !prev)}
      >Click Me</button>
          <div className="text-justify">
            <h1 className="px-60 my-2 font-bold text-xl font-[Open-Sans]">
              I AM LEARNING REACT
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              animi culpa laboriosam ex quidem aspernatur laudantium expedita
              adipisci exercitationem! Quibusdam error blanditiis maiores illo
              dolor aspernatur ipsum iusto dolore rerum voluptate? Earum quos
              iure iste fuga ex, facilis perferendis consequatur expedita, ut
              dolores labore vitae neque aut quo maxime! Exercitationem placeat
              minus asperiores numquam esse aliquam dolorem nemo iure
              perferendis earum corporis vel, maxime ipsam magni illo quas
              obcaecati debitis laudantium sapiente soluta, repellendus porro
              odio. Qui repellat excepturi impedit a consequuntur saepe
              sapiente, voluptate laboriosam at vel recusandae. Doloribus iste
              laborum cupiditate quae in. Ipsam, molestias? Saepe quod
              praesentium consequuntur exercitationem veniam id quibusdam odit
              beatae culpa sed numquam dolores laudantium ea voluptatum,
              laboriosam maiores eos, tenetur ab doloribus eligendi provident.
              Ut cupiditate consectetur reprehenderit vitae ipsam non minus
              tempora quibusdam. Nisi deleniti quas, autem doloremque
              consectetur incidunt sunt impedit earum eaque mollitia at fugit
              quibusdam nihil error cupiditate. Perferendis aliquid totam ex
              praesentium distinctio, impedit nobis quis repellat reiciendis
              corporis ad similique optio aperiam beatae in est sapiente
              quibusdam! Non explicabo aspernatur voluptatibus perferendis
              incidunt eius itaque praesentium iste! Architecto rem tenetur
              reiciendis delectus optio ratione obcaecati minima ea totam,
              perspiciatis ipsum ut assumenda fuga non temporibus magnam eum
              similique porro at et! Aperiam sunt officiis temporibus laudantium
              consequatur vero explicabo, quidem eveniet optio, quae facilis
              nesciunt adipisci. In atque dicta soluta. Necessitatibus
              exercitationem velit atque pariatur ducimus ipsa sunt.
            </p>
          </div>
          <div className="py-2">
            <p>Yours sincerely</p>
          </div>

          <div className="pr-5">"{name}"</div>
        </div>
      ) : (
        "Nothing to show here"
      )}
    </div>
  );
};

export default Letter;
