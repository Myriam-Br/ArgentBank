import React from "react";
import MainContainer from "../Components/MainContainerHome";
import iconChat from "../designs/img/icon-chat.png"
import iconMoney from "../designs/img/icon-money.png"
import iconSecurity from "../designs/img/icon-security.png"
import ContainerHome from "../Components/ContainerHome";

function Home() {

  //create object with every container content
  const paragraph = [
    {
      "image" : iconChat,
      "title" : "You are our #1 priority",
      "paragraph" : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      "image" : iconMoney, 
      "title" : "More savings means higher rates",
      "paragraph" : "The more you save with us, the higher your interest rate will be!"
    },
    {
      "image" : iconSecurity,
      "title" : "Security you can trust",
      "paragraph" : " We use top of the line encryption to make sure your data and money is always safe."
    }

  ]

  return (
    <div className="Home">
       <main>
        <MainContainer/>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {paragraph.map((elt, index) => {
            return <ContainerHome key={index} image={elt.image} title={elt.title} paragraph={elt.paragraph} />
          })}
        </section>
    </main>
    </div>
  );
}

export default Home;
