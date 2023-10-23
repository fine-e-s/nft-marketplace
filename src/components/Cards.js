import { firestore } from "@/firebase/firebaseApp";
import { collection, getDocs, query, where, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { SearchContext } from "@/pages/marketplace";
import { useRouter } from "next/router";

export default function Cards() {
  const router = useRouter();
  const { categoryQuery } = router.query;
  const [data, setData] = useState(null);
  const [cardsLoading, setCardsLoading] = useState(true);

  const { prompt, setPrompt, setSearchLoading } = useContext(SearchContext);

  function handleData(data) {
    setData(data);
  }

  useEffect(() => {
    setSearchLoading(true);
    async function fetchCards() {
      const marketplaceRef = collection(firestore, "marketplace");
      let q = query(marketplaceRef);

      if (categoryQuery) {
        q = query(q, where("category", "==", categoryQuery));
      }

      if (prompt) {
        q = query(
          q,
          where("name", ">=", prompt),
          where("name", "<=", prompt + "\uf8ff")
        );
      }

      const docs = await getDocs(q);
      const cards = new Array();
      for (let [key, value] of Object.entries(docs.docs)) {
        const docData = value.data();
        docData.user = (await getDoc(docData.user)).data();
        cards.push(docData);
      }

      handleData(cards);

      setCardsLoading(false);
      setSearchLoading(false);
    }

    const timer = setTimeout(() => {
      fetchCards();
    }, 700);

    return () => clearTimeout(timer);
  }, [categoryQuery, prompt]);

  return (
    <>
      <div className="flex w-full justify-center bg-lighter">
        {cardsLoading ? (
          <Loading />
        ) : data && data.length > 0 ? (
          <div className="grid w-max gap-[30px] bg-inherit pb-[80px] pt-[60px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((dataElement, i) => (
              <div
                className="flex h-[470px] w-[330px] flex-col overflow-hidden rounded-[20px] border-2 border-transparent bg-[#2b2b2b] bg-clip-content transition duration-300 ease-in-out will-change-transform hover:scale-105 hover:border-[#2b2b2b] hover:bg-[#3b3b3b]"
                key={dataElement.name + i}
              >
                <div
                  className="h-[295px] w-[330px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${dataElement.url})` }}
                ></div>
                <div className="mx-0 my-auto flex flex-col gap-[25px] bg-inherit">
                  <div className="flex flex-col gap-[6px] bg-inherit px-[30px]">
                    <div className="bg-inherit text-[22px] font-semibold leading-[1.4]">
                      {dataElement.name}
                    </div>
                    <div className="flex gap-[12px] bg-inherit">
                      <div
                        className="h-[24px] w-[24px] rounded-full bg-inherit bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${dataElement.user.avatar})`,
                        }}
                      ></div>
                      <div className="bg-inherit font-mono text-[16px] font-extralight leading-[1.4]">
                        {dataElement.user.username}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center bg-inherit">
                    <div className="flex w-[135px] flex-col items-start gap-[8px] bg-inherit">
                      <div className="bg-inherit font-mono text-[12px] leading-[1.1] text-[#858584]">
                        Price
                      </div>
                      <div className="bg-inherit font-mono text-[16px] leading-[1.4]">
                        {dataElement.price} ETH
                      </div>
                    </div>
                    <div className="flex w-[135px] flex-col items-end gap-[8px] bg-inherit">
                      <div className="flex w-[135px] flex-col items-end gap-[8px] bg-inherit font-mono text-[12px] leading-[1.1] text-[#858584]">
                        Highest Bid
                      </div>
                      <div className="bg-inherit font-mono text-[16px] leading-[1.4]">
                        {dataElement.highestBid} wETH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-80 items-center bg-inherit">
            Nothing found.
          </div>
        )}
      </div>
    </>
  );
}
