export const highlightLetter = (word, letter) => {
  const vietnameseMap = {
    "A": "[AÁÀẢÃẠ]",
    "Ă": "[ĂẮẰẲẴẶ]",
    "Â": "[ÂẤẦẨẪẬ]",
    "E": "[EÉÈẺẼẸ]",
    "Ê": "[ÊẾỀỂỄỆ]",
    "I": "[IÍÌỈĨỊ]",
    "O": "[OÓÒỎÕỌ]",
    "Ô": "[ÔỐỒỔỖỘ]",
    "Ơ": "[ƠỚỜỞỠỢ]",
    "U": "[UÚÙỦŨỤ]",
    "Ư": "[ƯỨỪỬỮỰ]",
    "Y": "[YÝỲỶỸỴ]"
  };

  const pattern = vietnameseMap[letter.toUpperCase()] || letter;
  const regex = new RegExp(`(${pattern})`, "gi");

  return word.replace(regex, `<span class='text-green-500'>$1</span>`);
};