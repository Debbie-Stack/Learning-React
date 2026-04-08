import React, { useState } from 'react'
// HOW TO ADD TEXT TO WEB AND REDUCE OR INCREASE THE QUANTITY
const Read = () => {
    const [read, setRead] = useState(false)
    const word = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta possimus, praesentium eveniet suscipit mollitia esse ipsam. Saepe cumque deleniti error fugiat, facilis dolor animi eligendi modi praesentium est exercitationem similique. Non odit distinctio velit nobis aut dolores voluptas perferendis iusto corrupti, a voluptates! Architecto nemo odio a? Assumenda dolore repellat, fuga aut fugit officia! Modi nostrum provident ex, atque alias obcaecati illum, sed voluptatibus ut veniam animi saepe? Minima cumque, sapiente animi reprehenderit, corrupti ab rem id cum rerum earum doloribus soluta omnis. Praesentium, possimus at exercitationem veritatis nostrum labore facilis sint quos animi saepe fugit, fugiat, ex dolorum molestias minus dicta! Dicta nobis voluptatum corrupti, nesciunt necessitatibus molestias debitis tenetur, nemo eius culpa consequuntur minus, dolore eum ratione iure? Quis iste consequuntur placeat iure ut numquam autem, modi eos voluptatibus officiis delectus id voluptatum repellat laborum laudantium molestiae itaque, sequi alias aut! Consequuntur, reprehenderit sapiente, voluptatibus vitae laboriosam illo facere, optio dolorum ab vel deleniti asperiores dignissimos ut. Aliquam, iure. Officia, voluptate dolorum aperiam ipsam odio perferendis nihil? Odit, cupiditate? Obcaecati maiores unde hic eum dolores inventore soluta. Quia animi atque facere obcaecati maxime illo praesentium rerum natus et nesciunt quas commodi repellendus veniam odit adipisci nihil debitis, non optio quam totam velit. Ex odio a nobis, ea ipsa, atque vero unde sunt iste excepturi, aliquid corrupti obcaecati sequi voluptatem rerum laborum! Consequuntur, rerum exercitationem perspiciatis nobis molestias voluptates voluptatibus suscipit rem! Error molestiae minima quisquam ipsa temporibus tenetur ex vero odio totam? Odio magni ullam eum consequuntur qui nemo quam quibusdam delectus omnis rerum natus consequatur quasi ipsam nam recusandae explicabo vel tenetur iure et voluptates, enim porro! Ipsam, eos repellat. A perspiciatis perferendis pariatur quae at repudiandae fugit eaque aperiam cupiditate dolore autem optio iste quos adipisci nemo ipsum, tempore deleniti sed, vitae blanditiis laborum rerum."
  return (
    <div>
      <div>{read ? word.slice(0, 500) : word}</div>
        <button onClick={()=>setRead(prev=>!prev)}>{read? "Read More" : "Show Less"}</button>
    </div>
  )
}

export default Read
