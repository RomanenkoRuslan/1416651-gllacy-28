var feedbackLink = document.querySelector(".button-feedback");
var feedbackPopup = document.querySelector(".feedback");
var crossClose = feedbackPopup.querySelector(".cross");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var name = feedbackPopup.querySelector(".name");
var mail = feedbackPopup.querySelector(".mail");
var comment = feedbackPopup.querySelector(".feedback-input");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("feedback-show");

	if (storage) {
    name.value = storage;
    comment.focus();
  } else {
    name.focus();
  }
});

crossClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("feedback-show");
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!name.value || !mail.value || !comment.value) {
		evt.preventDefault();
		feedbackPopup.classList.add("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
	} else {
	  if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("feedback-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});