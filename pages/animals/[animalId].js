// import { useRouter } from 'next/router';
import Image from "next/image";
import { css } from "@emotion/react";
import Cookies from "js-cookie";

import { animalsDatabase } from "../../util/database";
import { useEffect, useState } from "react";
import { getParsedCookie, setParsedCookie } from "../../util/cookies";

const articel = css`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;

  div {
    flex: 0 0 47%;
  }
  div:first-of-type {
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    padding: 40px;
  }
  div:last-child {
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }

  button {
    margin-left: 20px;
    padding: 15px 20px;
    background-color: #328938;
    border: none;
    border-radius: 10px;
  }
`;

export default function Animal(props) {
  const [isInDiet, setInDiet] = useState("eatCounter" in props.animal);
  const [eatCounter, setEatCounter] = useState(props.animal.eatCounter || 0);

  const [currentCoockie, setCurrentCoockie] = useState(
    Cookies.get("diet") ? getParsedCookie("diet") : []
  );

  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState({});

  useEffect(() => {
    setParsedCookie("diet", currentCoockie);
  }, [currentCoockie]);

  const addToCart = () => {
    let tempCart = {
      id: props.animal.id,
      eatCounter: quantity + 1,
    };
    setQuantity(quantity + 1);
    setCart(tempCart);

    setEatCounter(eatCounter + 1);

    const checkArticle = currentCoockie.filter(
      (el) => el.id === props.animal.id
    );

    if (checkArticle.length) {
      let copyCooki = currentCoockie.map((article) => {
        if (article.id === props.animal.id) {
          article.eatCounter++;
        }
        return article;
      });
      setCurrentCoockie(copyCooki);
    } else {
      setCurrentCoockie([...currentCoockie, tempCart]);
    }
  };

  // useEffect(() => {
  //   const currentDiet = Cookies.get('diet')
  //     ? JSON.parse(Cookies.get('diet'))
  //     : [];

  //   if (currentDiet.find((fruitInDiet) => props.animal.id === fruitInDiet.id)) {
  //     setInDiet(true);
  //   } else {
  //     setInDiet(false);
  //   }
  // }, [props.animal.id]);

  // useEffect(() => {
  //   const currentDiet = Cookies.get('diet')
  //     ? JSON.parse(Cookies.get('diet'))
  //     : [];

  //   const currentFruitInDiet = currentDiet.find(
  //     (fruitInDiet) => props.animal.id === fruitInDiet.id,
  //   );

  //   if (currentFruitInDiet) {
  //     setEatCounter(currentFruitInDiet.eatCounter);
  //   }
  // }, [props.animal.id]);

  return (
    <div>
      <div css={articel}>
        <div>
          <Image src={`/${props.animal.id}.jpg`} width="370" height="300" />
        </div>
        <div>
          <h1>{props.animal.name} </h1>
          <p>{props.animal.price}</p>
          <h3>{props.animal.decription}</h3>

          <button onClick={addToCart}>Add to cart</button>

          {/* <input type="number" min={1} max={10} placeholder="" /> */}
          <button
            onClick={() => {
              const currentDiet = Cookies.get("diet")
                ? getParsedCookie("diet")
                : [];

              let newDiet;

              if (
                currentDiet.find(
                  (fruitInDiet) => props.animal.id === fruitInDiet.id
                )
              ) {
                newDiet = currentDiet.filter(
                  (fruitInDiet) => fruitInDiet.id !== props.animal.id
                );
                setInDiet(false);
                setEatCounter(0);
              } else {
                newDiet = [
                  ...currentDiet,
                  { id: props.animal.id, eatCounter: 0 },
                ];
                setInDiet(true);
              }

              setParsedCookie("diet", newDiet);
            }}
          >
            {isInDiet ? "remove from diet" : "add to diet"}
          </button>
          <br />
          {isInDiet ? (
            <>
              {eatCounter}

              <button
                onClick={() => {
                  setEatCounter(eatCounter + 1);
                  const currentDiet = Cookies.get("diet")
                    ? getParsedCookie("diet")
                    : [];
                  const currentFruitInDiet = currentDiet.find(
                    (fruitInDiet) => props.animal.id === fruitInDiet.id
                  );

                  currentFruitInDiet.eatCounter += 1;

                  setParsedCookie("diet", currentDiet);
                }}
              >
                eat one
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const currentDiet = JSON.parse(context.req.cookies.diet || "[]");

  const animall = animalsDatabase.find((animal) => {
    return animal.id === context.query.animalId;
  });

  const currentFruitInDiet = currentDiet.find(
    (fruitInDiet) => animall.id === fruitInDiet.id
  );

  const superFruit = { ...animall, ...currentFruitInDiet };

  // console.log(superFruit);
  return {
    props: {
      // animalId: context.query.animalId,
      animal: superFruit,
    },
  };
}
