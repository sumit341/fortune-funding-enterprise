import { useFaq } from "../../hooks/faq/useFaq";

import FaqSkeleton from "./components/FaqSkeleton";
import FaqSearch from "./components/FaqSearch";
import FaqAccordion from "./components/FaqAccordion";
import PopularQuestions from "./components/PopularQuestions";

export default function FAQ() {
  const {
    data,
    isLoading,
  } = useFaq();

  if (isLoading || !data) {
    return <FaqSkeleton />;
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">

      <FaqSearch />

      <PopularQuestions />

      <div className="space-y-4">

        {data.map((item) => (
          <FaqAccordion
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </main>
  );
}