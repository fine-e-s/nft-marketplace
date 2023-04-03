import { AnimatePresence, motion } from "framer-motion";
import { firestore } from "@/firebase/firebaseApp";
import { useCategory } from "@/hooks/useCategory";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { SearchContext } from "@/pages/marketplace";

export default function Cards() {
  const { category, newCategory } = useCategory();
  const [data, setData] = useState(null);
  const [cardsLoading, setLoading] = useState(false);

  const { prompt, setPrompt } = useContext(SearchContext);

  function handleData(data) {
    setData(data);
  }

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      const marketplaceRef = collection(firestore, "marketplace");
      const q = query(
        marketplaceRef,
        category && where("category", "==", category),
        where("name", ">=", prompt),
        where("name", "<=", prompt + "\uf8ff")
      );
      const docs = await getDocs(q);
      const cards = new Array();
      docs.forEach((doc) => {
        cards.push(doc.data());
      });
      handleData(cards);
      setLoading(false);
    }
    fetchCards();
  }, [category, prompt]);

  return (
    <>
      <div className="flex w-full justify-center bg-lighter">
        <AnimatePresence mode="wait">
          {cardsLoading ? (
            <Loading />
          ) : data && data.length > 0 ? (
            <div className="grid w-max gap-[30px] bg-inherit pt-[60px] pb-[80px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.map((dataElement, i) => (
                <motion.div
                  className="flex h-[470px] w-[330px] flex-col overflow-hidden rounded-[20px] border-2 border-transparent bg-[#2b2b2b] bg-clip-content transition duration-300 ease-in-out hover:scale-105 hover:border-[#2b2b2b] hover:bg-[#3b3b3b]"
                  key={dataElement.name + i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 2 }}
                  transition={{ duration: 0.2 }}
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
                            backgroundImage: `url(images/avatar-1.png)`,
                          }}
                        ></div>
                        <div className="bg-inherit font-mono text-[16px] font-extralight leading-[1.4]">
                          {dataElement.creator}
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
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex h-80 items-center bg-inherit">
              Nothing found.
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
