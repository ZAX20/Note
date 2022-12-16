const root = document.getElementById("root");
const box = document.querySelector(".box");
const dropdown = document.getElementById("dropdown");
const children = Array.from(dropdown.children);
let active = -1;

box.addEventListener("keydown", (e) => {
  if (e.key === "/" || "ArrowDown" || "ArrowUp") {
    dropdown.classList.remove("hide");
  } else if (e.key === "Backspace") {
    dropdown.classList.add("hide");
  } else {
    dropdown.classList.add("hide");
  }
});

const switchFun = (key) => {
  switch (key) {
    case "Heading 1":
      console.log("Heading 1 selected");
      const h1 = document.createElement("h1");
      h1.classList.add("box");
      h1.contentEditable = "true";
      root.appendChild(h1);
      break;

    case "Heading 2":
      console.log("Heading 2 selected");
      const h2 = document.createElement("h2");
      h2.classList.add("box");
      h2.contentEditable = "true";
      root.appendChild(h2);
      break;

    case "Heading 3":
      console.log("Heading 3 selected");
      const h3 = document.createElement("h3");
      h3.classList.add("box");
      h3.contentEditable = "true";
      root.appendChild(h3);
      break;

    case "Heading 4":
      console.log("Heading 4 selected");
      const h4 = document.createElement("h4");
      h4.classList.add("box");
      h4.contentEditable = "true";
      root.appendChild(h4);
      break;

    case "Heading 5":
      console.log("Heading 5 selected");
      const h5 = document.createElement("h5");
      h5.classList.add("box");
      h5.contentEditable = "true";
      root.appendChild(h5);
      break;

    case "Heading 6":
      console.log("Heading 6 selected");
      const h6 = document.createElement("h6");
      h6.classList.add("box");
      h6.contentEditable = "true";
      root.appendChild(h6);
      break;

    default:
      break;
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (active < children.length - 1) {
      active++;
      const option = children[active];
      option.focus();
      console.log(option.innerHTML);
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (active > 0) {
      active--;
      const option = children[active];
      option.focus();
      console.log(option.innerHTML);
    }
  }
});

children.forEach((option) => {
  option.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      switchFun(option.innerHTML);
      dropdown.classList.add("hide");
    }
  });
});

// const p = document.getElementsByTagName('p')[0];
// const textArea = document.getElementsByTagName('textarea')[0];

// textArea.addEventListener("keypress", (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     const words = textArea.value.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       let keywords = words[i].substring(0, 2);
//       switch (keywords) {
//         case '/1':
//           words[i] = `<h1>${words[i].substring(2)}</h1>`
//           break;

//         case '/2':
//           words[i] = `<h2>${words[i].substring(2)}</h2>`
//           break;

//         case '/3':
//           words[i] = `<h3>${words[i].substring(2)}</h3>`
//           break;

//         case '/4':
//           words[i] = `<h4>${words[i].substring(2)}</h4>`
//           break;

//         case '/5':
//           words[i] = `<h5>${words[i].substring(2)}</h5>`
//           break;

//         case '/6':
//           words[i] = `<h6>${words[i].substring(2)}</h6>`
//           break;

//         default:
//           break;
//       }
//     }
//     const result = words.join(' ');
//     console.log(result);
//     p.innerHTML = result;
//   }
// });
