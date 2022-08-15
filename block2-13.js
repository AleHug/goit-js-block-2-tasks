function slugify(title) {
  // Change code below this line
 const slug = title.toLowerCase().split(" ").join("-");

  return slug

  // Change code above this line
}

const result = slugify("Arrays for begginers");
console.log(result);
