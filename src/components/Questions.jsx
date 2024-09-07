import { Box } from "@mui/material";
import TitleSection from "./TitleSection";
import QuestionCard from "./QuestionCard";
import faqs from "../data/QuestionsData";

function Questions() {
  const questions = faqs;
  return (
    <Box className="mt-40 " data-aos="fade-up">
      <TitleSection firstTitle={"Your question's,"} secondTitle={"answered!"} />
      <Box className=" mt-20 mx-auto px-8 py-16 border border-secondary rounded-3xl md:max-w-[60%]">
        {questions.map((question, i) => (
          <QuestionCard key={i} question={question} />
        ))}
      </Box>
    </Box>
  );
}

export default Questions;
