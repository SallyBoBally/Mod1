let book = {
    title: "The Very Hungry Caterpillar",
    description: "Caterpillar eats everything and doesn't get full",
    author: "Eric Carle",
    pages: "24",
  };
  
  console.log("Title:", book.title);
  console.log("Description:", book.description);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
  
  book.description = "Starving caterpillar eats everything and is still hungry";
  console.log("Updated Description:", book.description);