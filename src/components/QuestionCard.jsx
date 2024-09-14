import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

function QuestionCard({ question }) {
  const [isOpen, setIsOpen] = useState(question.open);
  return (
    <Box className=" px-0 py-5 border-b border-secondary">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {question.question}
        </Typography>
        {isOpen ? (
          <KeyboardArrowUp
            sx={{ cursor: "pointer" }}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <KeyboardArrowDown
            sx={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
          />
        )}
      </Stack>
      {isOpen && (
        <Typography variant="p" className="text-primary" data-aos="fade-up">
          {question.answer}
        </Typography>
      )}
    </Box>
  );
}

export default QuestionCard;
