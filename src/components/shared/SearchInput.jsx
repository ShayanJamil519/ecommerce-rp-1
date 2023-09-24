"use client";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useAllProducts } from "../../hooks/product-hook";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const { data: productsData } = useAllProducts();

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle the selection and redirection
  const handleOptionClick = (option) => {
    if (option) {
      // Extract the product name and _id from the selected option
      const { _id, name } = option;
      setSelectedProduct(option);

      // Redirect to the product page using the _id
      router.push(`/product-details/${_id}`);
    }
  };

  // Prepare options with both product name and _id
  const options = productsData.map((item) => ({
    name: item.name,
    _id: item._id, // Assuming _id is the field in your MongoDB documents
  }));

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={options}
        getOptionLabel={(option) => option.name} // Display product name
        onInputChange={(event, newValue) => {
          setSelectedProduct(null); // Clear the selected product when input changes
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Set border color to white
                },
                "&:hover fieldset": {
                  borderColor: "white", // Set border color to white on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Set border color to white on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "white", // Set label text color to white
              },
              "& .MuiOutlinedInput-input": {
                "&::placeholder": {
                  color: "white", // Set placeholder text color to white
                },
              },
              "& .MuiInputBase-input": {
                color: "white", // Set input text color to white
              },
            }}
            {...params}
            label="Search products"
            InputProps={{
              ...params.InputProps,
              type: "search",
              className: "focus:ring-white focus:border-white text-white",
            }}
          />
        )}
        onChange={(event, newValue) => {
          handleOptionClick(newValue); // Handle option click
        }}
      />
    </Stack>
  );
}
