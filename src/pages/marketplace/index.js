import { CategoriesMarketplace } from "@/components/Categories";
import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useCategory } from "@/hooks/useCategory";

export default function Marketplace() {
  const router = useRouter();
  const { category, newCategory } = useCategory();
  const { categoryQuery } = router.query;
  newCategory(categoryQuery);

  return (
    <>
      <CategoriesMarketplace />
      <Cards />
    </>
  );
}
