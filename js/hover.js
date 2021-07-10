

let handleMouseover = (event) => {
  if (event.target.tagName == "A")  {
    createLinkPreview(event);
  }
}

document.addEventListener("mouseover", handleMouseover);


const createLinkPreview = (e) => {
  let saved = e.target;
  let href = e.target.href;

 saved.nextSibling.innerHTML = `<embed src='${href}' height='500em'>`;


  }
