const filterProduct = (value) => {
  //select all shop__container
  let elements = document.querySelectorAll(".shop__container");
  //loop through all shop__container
  elements.forEach((element) => {
    //display all shop__container on 'all' button click
    let womenElements = element.querySelectorAll(".women");
    let menElements = element.querySelectorAll(".men");

    if (value === "all") {
      womenElements.forEach((el) => {
        el.style.display = "grid";
      });
      menElements.forEach((el) => {
        el.style.display = "grid";
      })
    } else {
      //Check if element contains category class
      if (value === "Men") {
        //display element based on category
        womenElements.forEach((el) => {
          el.style.display = "none";
        });
        menElements.forEach((el) => {
          el.style.display = "grid";
        });
      } else if (value === "Women") {
        //display element based on category
        womenElements.forEach((el) => {
          el.style.display = "grid";
        });
        menElements.forEach((el) => {
          el.style.display = "none";
        });
      }
    }
  });
};