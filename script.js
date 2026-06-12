const openBtn = document.getElementById("openForm");
const introContent = document.getElementById("introContent");
const formContent = document.getElementById("formContent");

if (openBtn && introContent && formContent) {

  openBtn.addEventListener("click", () => {

    introContent.style.opacity = "0";
    introContent.style.transform = "translateY(-20px)";

    setTimeout(() => {

      introContent.style.display = "none";

      formContent.classList.remove("hidden");

      formContent.style.opacity = "0";
      formContent.style.transform = "translateY(30px)";

      requestAnimationFrame(() => {

        formContent.style.transition = "all 0.8s ease";

        formContent.style.opacity = "1";
        formContent.style.transform = "translateY(0)";

      });

    }, 400);

  });

}