import { HStack, IconButton, Input } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddTextForm = ({
  handleAddingText,
}: {
  handleAddingText: (val: string) => void;
}) => {
  let [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    handleAddingText(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <HStack marginBottom={5}>
        <Input
          value={value}
          onChange={handleInputChange}
          placeholder="type somthing..."
          size="sm"
        />

        <IconButton
          type="submit"
          aria-label="Search database"
          icon={<IoMdAdd />}
        />
      </HStack>
    </form>
  );
};
export default AddTextForm;
