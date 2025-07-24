function toggleCollapse(element) {
        const content = element.nextElementSibling;
        element.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
      }

      document.addEventListener("DOMContentLoaded", function () {
        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          });
        }, observerOptions);

        // Observe all animated elements
        document
          .querySelectorAll(
            ".education-item, .cert-item, .project-item, .objective-item"
          )
          .forEach((el) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "all 0.6s ease";
            observer.observe(el);
          });

        // Add hover effects to skill categories
        document.querySelectorAll(".skill-category").forEach((category) => {
          category.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-5px) scale(1.02)";
          });
          category.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)";
          });
        });

        // Add dynamic typing effect to name
        const nameElement = document.querySelector(".name");
        const nameText = nameElement.textContent;
        nameElement.textContent = "";
        let i = 0;

        function typeWriter() {
          if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 60);//changes text typing speed
          }
        }

        setTimeout(typeWriter, 1000);
      });