const progressDiv = document.querySelector(".progress-div"),
  progressBars = document.querySelectorAll(".progress-bar"),
  counterDiv = document.querySelector(".counter-div"),
  counterTag = document.querySelectorAll(".counter-div h3");

ScrollOut({
  targets: ".progress-div, .counter-div",
});

//
window.addEventListener("scroll", function () {
  if (progressDiv.dataset.scroll == "in") {
    progressBars.forEach((el) => {
      let valueNow = el.getAttribute("aria-valuenow");
      el.style.width = valueNow + "%";
      let counterSpan = el.parentElement.parentElement.querySelector(
        ".progress-value span"
      );
      let count = setInterval(() => {
        if (Number(counterSpan.textContent) < valueNow) {
          counterSpan.textContent = Number(counterSpan.textContent) + 1;
        } else {
          clearInterval(count);
        }
      }, 500);
    });
  } else {
    progressBars.forEach((el) => {
      el.style.width = 0 + "%";
      let counterSpan = (el.parentElement.parentElement.querySelector(
        ".progress-value span"
      ).textContent = 0);
    });
  }
  // Counter
  if (counterDiv.dataset.scroll == "in") {
    counterTag.forEach((ele) => {
      let counter = setInterval(() => {
        if (Number(ele.innerText) < ele.dataset.counter) {
          ele.innerText = Number(ele.innerText) + 1;
        } else {
          clearInterval(counter);
        }
      }, 500);
    });
  } else {
    counterTag.forEach((e) => {
      e.innerText = 0;
    });
  }
});

// Filter Items

const filterListItems = document.querySelectorAll(".list-group li"),
  filterItems = document.querySelectorAll(".filter-items a");

filterListItems.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let filteredValue = list.dataset.filter;
    filterItems.forEach((item) => {
      if (item.classList.contains(filteredValue)) {
        item.classList.add("active");
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
        item.classList.remove("active");
      }
    });
  });
});

// Light Gallery
lightGallery(document.getElementById("gallery"), {});
// Aos Init
AOS.init();
