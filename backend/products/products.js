const Products = async (req, res) => {
  console.log(req.user);
  return res.status(201).json([
    {
      name: "Victus Gaming",
      brand: "Hp",
      price: 120000,
      model: 2023,
      ssd: 512,
      ram: 8,
    },
    {
      name: "Msi Gaming",
      brand: "Msi",
      price: 260000,
      model: 2024,
      ssd: 512,
      ram: 16,
    },
  ]);
};
export { Products };
