function main() {
  //1
  const growMe = document.getElementById("grow-me");
  growMe.classList.add("big");
  //2
  const shrinkMe = document.getElementById("shrink-me");
  shrinkMe.classList.remove("big");
  //3
  const lis = document.querySelectorAll("li");
  for (i = 0; i < lis.length; i++) {
    console.log(lis[i].innerText);
  }
  //4
  const brokenLink = document.querySelector(".link");
  brokenLink.setAttribute("href", "https://www.example.com");
  brokenLink.innerText = "somewhere";
  //5
  const hideMe = document.getElementById("hide-me");
  hideMe.style.display = "none";
  //6
  const showMe = document.getElementById("show-me");
  showMe.style.display = "block";
  //7
  const inputName = document.getElementById("name").value;
  const h1 = document.querySelector("h1");
  h1.innerText = `Welcome ${inputName}!`;
}
