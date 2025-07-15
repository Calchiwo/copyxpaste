document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("waitlist-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch("/", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      form.style.display = "none";
      message.innerText = "🎉 Thanks for subscribing!";
    } else {
      message.innerText = "❌ Something went wrong. Try again later.";
      message.style.color = "red";
    }
  });
});
