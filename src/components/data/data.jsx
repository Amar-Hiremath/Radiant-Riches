const cardsData = [
  {
    tag: {
      present: true,
      title: "Best Choice",
    },
    img: "src/components/images/img.png",
    name: "Builder 1",
    productName: "WixPro 72-Inch Responsive Website Builder-",
    productDescription:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights: {
      heading: "Main highlights",
      description:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      answers: null,
    },
    rating: {
      num: 9.8,
      quality: "Exceptional",
      icon: true,
    },
    viewLink: "/",
    moreData: true,
  },
  {
    tag: {
      present: true,
      title: "Best Value",
    },
    img: "src/components/images/img.png",
    name: "Biulder",
    productName: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
    productDescription:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlights: {
      heading: "Main highlights",
      description:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    },
    rating: {
      num: 9.5,
      quality: "Excellent",
      icon: true,
    },
    viewLink: "/",
    moreData: true,
  },
  {
    tag: {
      present: false,
      title: "null",
    },
    img: "src/components/images/img.png",
    name: "Builder 1",
    productName: "WixPro 72-Inch Responsive Website Builder- ",
    productDescription:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights: {
      heading: "Main highlights",
      description:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
    rating: {
      num: 9.3,
      quality: "Exceptional",
      icon: false,
    },
    viewLink: "/",
    moreData: true,
  },
  // Add more card data objects as needed
  {
    tag: {
      present: false,
      title: null,
    },
    img: "src/components/images/img.png",
    name: "CDK",
    productName: "CDK Resposive Builder:",
    productDescription:
      " An extensive library of widgets and apps, and detailed step-by-step guides",
    offer: "26% off",
    highlights: { heading: "Main highlights" },
    feedback: [
      { rating: 9.9, comment: "Building Responsive" },
      { rating: 8.9, comment: "Cool" },
      { rating: 8.9, comment: "Docs" },
    ],
    question: "Why we love it",
    checkSrc: "src/components/images/check.png",
    answers: ["Documentation", "Easy Use", "Out Of Box"],
    rating: {
      num: 9.8,
      quality: "Exceptional",
      icon: true,
    },
    viewLink: "/productB",
    moreData: true,
  },
];

const biscuitCard = [
  {
    img: "src/components/images/img.png",
    off: "(20% off)",
    limitedTime: true,
    productName: "Webbuilder 1",
    productDescription: "Computer Modern clasic with wix support",
    offerPrice: `$39.96`,
    price: `$49.96`,
    offerPercentage: "20% off",
  },
  {
    img: "src/components/images/img.png",
    off: "(20% off)",
    limitedTime: true,
    productName: "Webbuilder 1",
    productDescription: "Computer Modern clasic with wix support",
    offerPrice: `$39.96`,
    price: `$49.96`,
    offerPercentage: "20% off",
  },
  {
    img: "src/components/images/img.png",
    off: "(20% off)",
    limitedTime: true,
    productName: "Webbuilder 1",
    productDescription: "Computer Modern clasic with wix support",
    offerPrice: `$39.96`,
    price: `$49.96`,
    offerPercentage: "20% off",
  },
];

export { biscuitCard, cardsData };
