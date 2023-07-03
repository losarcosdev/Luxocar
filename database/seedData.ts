import bcrypt from "bcryptjs";

interface SeedCar {
  slug        : string;
  acceleration: number;
  brand       : string;
  doors       : number;
  dropOffDate : Date;
  hp          : number;
  model       : string;
  name        : string;
  pickupDate  : Date;
  power       : number;
  pricePerDay : number;
  topSpeed    : number;
  weight      : number;
  images: {
    red?  : string[];
    black?: string[];
    gray? : string[];
  };
  carType     : string;
  coverImage  : string;
  description : string;
  title       : string;
}

interface SeedUser {
  email     : string;
  password? : string;
  name      : string;
  createdAt?: string;
  updatedAt?: string;
  role      : "client" | "admin";
  image?    : string;
}

interface SeedData {
  users: SeedUser[];
  cars : SeedCar[];
}

export const seedData: SeedData = {
  users: [
    {
      name: "Lucas",
      email: "lucas.losarcos@gmail.com",
      password: bcrypt.hashSync("Hola123!"),
      role: "admin",
      image: "",
    },
    {
      name: "Alan",
      email: "alan.daguer@gmail.com",
      password: bcrypt.hashSync("Hola123!"),
      role: "client",
      image: "",
    },
  ],

  cars: [
    {
      title: "Pure energy and progressive performance",
      carType: "sport",
      name: "Audi e-tron GT",
      brand: "audi",
      model: "e-tron GT",
      pricePerDay: 200,
      pickupDate: new Date("2023-06-23"),
      dropOffDate: new Date("2023-06-30"),
      power: 350,
      topSpeed: 240,
      acceleration: 4.1,
      doors: 4,
      weight: 2150,
      hp: 476,
      images: {
        black: [
          "/cars/audi-etron-gt/black/01.png",
          "/cars/audi-etron-gt/black/02.png",
          "/cars/audi-etron-gt/black/03.png",
          "/cars/audi-etron-gt/black/04.png",
          "/cars/audi-etron-gt/black/05.png",
          "/cars/audi-etron-gt/black/06.png",
          "/cars/audi-etron-gt/black/07.png",
        ],
        gray: [
          "/cars/audi-etron-gt/gray/01.png",
          "/cars/audi-etron-gt/gray/02.png",
          "/cars/audi-etron-gt/gray/03.png",
          "/cars/audi-etron-gt/gray/04.png",
          "/cars/audi-etron-gt/gray/05.png",
          "/cars/audi-etron-gt/gray/06.png",
          "/cars/audi-etron-gt/gray/07.png",
        ],
        red: [
          "/cars/audi-etron-gt/red/01.png",
          "/cars/audi-etron-gt/red/02.png",
          "/cars/audi-etron-gt/red/03.png",
          "/cars/audi-etron-gt/red/04.png",
          "/cars/audi-etron-gt/red/05.png",
          "/cars/audi-etron-gt/red/06.png",
          "/cars/audi-etron-gt/red/07.png",
        ],
      },
      slug: "audi-etron-gt",
      description:
        "Experience the exhilaration of driving the Audi e-tron GT. This sporty electric vehicle combines breathtaking design with impressive performance. With its sleek lines and four-door practicality, the e-tron GT is the perfect blend of style and functionality. Its powerful electric motor delivers 350 kW of power and accelerates from 0 to 60 mph in just 4.1 seconds, offering an electrifying driving experience. Equipped with cutting-edge technology and a luxurious interior, the Audi e-tron GT is the embodiment of modern electric luxury.",
      coverImage: "/cars/audi-etron-gt/cover-image.avif",
    },
    {
      title: "The Perfect Blend of Style and Sustainability",
      carType: "suv",
      name: "Audi e-tron Sportback",
      brand: "audi",
      model: "e-tron Sportback",
      pricePerDay: 250,
      pickupDate: new Date("2023-07-01"),
      dropOffDate: new Date("2023-07-07"),
      power: 320,
      topSpeed: 200,
      acceleration: 5.7,
      doors: 5,
      weight: 2300,
      hp: 408,
      images: {
        black: [
          "/cars/etron-sportback/black/01.png",
          "/cars/etron-sportback/black/02.png",
          "/cars/etron-sportback/black/03.png",
          "/cars/etron-sportback/black/04.png",
          "/cars/etron-sportback/black/05.png",
          "/cars/etron-sportback/black/06.png",
          "/cars/etron-sportback/black/07.png",
        ],
        gray: [
          "/cars/etron-sportback/gray/01.png",
          "/cars/etron-sportback/gray/02.png",
          "/cars/etron-sportback/gray/03.png",
          "/cars/etron-sportback/gray/04.png",
          "/cars/etron-sportback/gray/05.png",
          "/cars/etron-sportback/gray/06.png",
          "/cars/etron-sportback/gray/07.png",
        ],
      },
      slug: "audi-etron-sportback",
      description:
        "Introducing the Audi e-tron Sportback, where versatility meets electric performance. This SUV combines the spaciousness of an SUV with the aerodynamic design of a coupe. With its powerful 320 kW electric motor, it effortlessly glides on the road, providing a thrilling driving experience. The e-tron Sportback offers advanced technology, luxurious comfort, and a range of up to 200 miles, making it an ideal choice for those seeking both style and sustainability.",
      coverImage: "/cars/etron-sportback/cover-image.avif",
    },
    {
      title: "The Epitome of Luxury and Performance",
      carType: "suv",
      name: "Audi Q8",
      brand: "audi",
      model: "Q8",
      pricePerDay: 300,
      pickupDate: new Date("2023-07-10"),
      dropOffDate: new Date("2023-07-17"),
      power: 340,
      topSpeed: 250,
      acceleration: 5.9,
      doors: 5,
      weight: 2150,
      hp: 450,
      images: {
        black: [
          "/cars/q8/black/01.png",
          "/cars/q8/black/02.png",
          "/cars/q8/black/03.png",
          "/cars/q8/black/04.png",
          "/cars/q8/black/05.png",
          "/cars/q8/black/06.png",
          "/cars/q8/black/07.png",
        ],
        red: [
          "/cars/q8/red/01.png",
          "/cars/q8/red/02.png",
          "/cars/q8/red/03.png",
          "/cars/q8/red/04.png",
          "/cars/q8/red/05.png",
          "/cars/q8/red/06.png",
          "/cars/q8/red/07.png",
        ],
      },
      slug: "audi-q8",
      description:
        "Unleash your sense of adventure with the Audi Q8. This luxurious SUV boasts a striking design and uncompromising performance. Powered by a formidable 340 hp engine, the Q8 effortlessly combines power and elegance. Its spacious interior offers comfort for every passenger, while advanced safety features provide peace of mind on every journey. With its impressive top speed of 250 mph and innovative technology, the Audi Q8 is the perfect companion for those who crave both luxury and excitement.",
      coverImage: "/cars/q8/cover-image.avif",
    },
    {
      title: "Unleash Your Inner Performance Enthusiast",
      carType: "suv",
      name: "Mercedes Benz AMG GLC 43",
      brand: "mercedes-benz",
      model: "AMG GLC 43",
      pricePerDay: 350,
      pickupDate: new Date("2023-07-20"),
      dropOffDate: new Date("2023-07-27"),
      power: 287,
      topSpeed: 250,
      acceleration: 4.9,
      doors: 5,
      weight: 1900,
      hp: 385,
      images: {
        black: [
          "/cars/amg-glc-43/black/01.png",
          "/cars/amg-glc-43/black/02.png",
          "/cars/amg-glc-43/black/03.png",
          "/cars/amg-glc-43/black/04.png",
          "/cars/amg-glc-43/black/05.png",
          "/cars/amg-glc-43/black/06.png",
        ],
        red: [
          "/cars/amg-glc-43/red/01.png",
          "/cars/amg-glc-43/red/02.png",
          "/cars/amg-glc-43/red/03.png",
          "/cars/amg-glc-43/red/04.png",
          "/cars/amg-glc-43/red/05.png",
          "/cars/amg-glc-43/red/06.png",
          "/cars/amg-glc-43/red/07.png",
        ],
      },
      slug: "mercedes-benz-amg-glc-43",
      description:
        "Experience the thrill of driving the Mercedes Benz AMG GLC 43. This SUV combines the versatility of an SUV with the sporty performance of an AMG. With its powerful 385 hp engine and sport-tuned suspension, it delivers exhilarating acceleration and dynamic handling. The AMG GLC 43 features a luxurious interior, cutting-edge technology, and a sleek design that exudes confidence on the road. Discover a new level of driving pleasure and luxury with the Mercedes Benz AMG GLC 43.",
      coverImage: "/cars/amg-glc-43/cover-image.avif",
    },
    {
      title: "Experience the Perfect Fusion of Elegance and Power",
      carType: "sedan",
      name: "Mercedes Benz Clase A AMG",
      brand: "mercedes-benz",
      model: "Clase A AMG",
      pricePerDay: 300,
      pickupDate: new Date("2023-08-01"),
      dropOffDate: new Date("2023-08-08"),
      power: 225,
      topSpeed: 250,
      acceleration: 4.7,
      doors: 5,
      weight: 1550,
      hp: 306,
      images: {
        black: [
          "/cars/clase-a-amg/black/01.png",
          "/cars/clase-a-amg/black/02.png",
          "/cars/clase-a-amg/black/03.png",
          "/cars/clase-a-amg/black/04.png",
          "/cars/clase-a-amg/black/05.png",
          "/cars/clase-a-amg/black/06.png",
        ],
        gray: [
          "/cars/clase-a-amg/gray/01.png",
          "/cars/clase-a-amg/gray/02.png",
          "/cars/clase-a-amg/gray/03.png",
          "/cars/clase-a-amg/gray/04.png",
          "/cars/clase-a-amg/gray/05.png",
          "/cars/clase-a-amg/gray/06.png",
          "/cars/clase-a-amg/gray/07.png",
        ],
      },
      slug: "mercedes-benz-clase-a-amg",
      description:
        "Introducing the Mercedes Benz Clase A AMG, where elegance meets performance. This luxury sedan combines refined styling with exhilarating power. With its 306 hp engine and sporty suspension, it delivers a dynamic and engaging driving experience. The Clase A AMG features a spacious and luxurious interior, equipped with the latest technology and premium materials. With its sleek design, impressive performance, and sophisticated features, the Mercedes Benz Clase A AMG is the epitome of luxury and performance.",
      coverImage: "/cars/clase-a-amg/cover-image.avif",
    },
  ],
};
