function getsearch() {
  const input=document.getElementById("searchBox");
  location.href=`https://www.google.co.kr/search?q=${input.value}`;
}
