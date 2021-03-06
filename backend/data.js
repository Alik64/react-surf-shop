import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Albert",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "BTZ 6'4 ",
      category: "Shortboard",
      image: "/images/board.png",
      price: "699",
      countInStock: 15,
      brand: "BTZ",
      rating: 4.5,
      numReviews: 15,
      description: "Pour les rideurs avancés ",
    },
    {
      name: "BTZ 8'0 ",
      category: "Longboard",
      image: "/images/board2.png",
      price: "799",
      countInStock: 12,
      brand: "BTZ",
      rating: 4.0,
      numReviews: 10,
      description: "Idéal pour les gros gabarits",
    },
    {
      name: "BTZ 6'3 ",
      category: "Shortboard",
      image: "/images/board.png",
      price: "599",
      countInStock: 6,
      brand: "BTZ",
      rating: 4,
      numReviews: 8,
      description: "Pour les rideurs avancés",
    },
    {
      name: "BTZ 9'0 ",
      category: "Longboard",
      image: "/images/board2.png",
      price: "899",
      countInStock: 3,
      brand: "BTZ",
      rating: 4.9,
      numReviews: 11,
      description: "Idéal pour les gros gabarits",
    },
    {
      name: "BTZ 6'5 ",
      category: "Shortboard",
      image: "/images/board.png",
      price: "599",
      countInStock: 15,
      brand: "BTZ",
      rating: 5,
      numReviews: 1,
      description: "Pour les rideurs avancés ",
    },
    {
      name: "BTZ 7'6 ",
      category: "Longboard",
      image: "/images/board2.png",
      price: "699",
      countInStock: 0,
      brand: "BTZ",
      rating: 4.5,
      numReviews: 20,
      description: "Pour les rideurs intermédiaires",
    },
  ],
};
export default data;
