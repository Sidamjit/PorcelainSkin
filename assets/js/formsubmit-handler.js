const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^[0-9+()\s-]{7,}$/;

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form[data-formsubmit]");

  forms.forEach((form) => {
    const emailField = form.querySelector('input[type="email"]');
    const phoneField = form.querySelector('input[name="phone"]');
    const subjectField = form.querySelector('input[name="_subject"]');
    const enquiryField = form.querySelector('input[name="enquiry_id"]');

    if (emailField) {
      emailField.addEventListener("input", () => {
        clearEmailError(emailField);
        const statusNode = form.querySelector(".form-status");
        if (statusNode && statusNode.dataset.state === "error") {
          statusNode.textContent = "";
          delete statusNode.dataset.state;
        }
      });
    }

    if (phoneField) {
      phoneField.addEventListener("input", () => {
        phoneField.setCustomValidity("");
        const statusNode = form.querySelector(".form-status");
        if (statusNode && statusNode.dataset.state === "error") {
          statusNode.textContent = "";
          delete statusNode.dataset.state;
        }
      });
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const status = form.querySelector(".form-status") || createStatusNode(form);
      if (emailField) {
        const trimmedEmail = emailField.value.trim();
        emailField.value = trimmedEmail;

        if (!isValidEmail(trimmedEmail)) {
          flagEmailError(emailField);
          updateStatus(status, "Please enter a valid email address (e.g. name@example.com).", "error");
          emailField.focus();
          return;
        }

        clearEmailError(emailField);
      }
      if (phoneField) {
        const trimmedPhone = phoneField.value.trim();
        phoneField.value = trimmedPhone;

        if (!isValidPhone(trimmedPhone)) {
          phoneField.setCustomValidity("Please enter a phone number we can reach you on.");
          phoneField.reportValidity();
          updateStatus(status, "Please enter a phone number we can reach you on.", "error");
          phoneField.focus();
          return;
        }

        phoneField.setCustomValidity("");
      }
      if (!form.reportValidity()) {
        updateStatus(status, "Please complete the required fields.", "error");
        return;
      }

      const enquiryId = generateEnquiryId();
      if (enquiryField) {
        enquiryField.value = enquiryId;
      }
      const phoneValue = phoneField ? phoneField.value : "Not provided";
      const dynamicSubject = `Porcelain Skin enquiry ${enquiryId} • Phone: ${phoneValue}`;
      if (subjectField) {
        subjectField.value = dynamicSubject;
      }

      updateStatus(status, "Sending…", "pending");

      try {
        const formData = new FormData(form);
        const action = form.action;
        const ajaxEndpoint = action.includes("/ajax/")
          ? action
          : action.replace("formsubmit.co/", "formsubmit.co/ajax/");

        const response = await fetch(ajaxEndpoint, {
          method: (form.method || "POST").toUpperCase(),
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        updateStatus(
          status,
          `Thanks for getting in touch. Your enquiry reference is ${enquiryId}. We’ll reply as soon as possible.`,
          "success"
        );
        form.reset();
        if (emailField) {
          clearEmailError(emailField);
        }
        if (phoneField) {
          phoneField.setCustomValidity("");
        }
        if (subjectField) {
          subjectField.value = "";
        }
        if (enquiryField) {
          enquiryField.value = "";
        }
      } catch (error) {
        console.error("Form submission error:", error);
        updateStatus(
          status,
          "Sorry, there was a problem sending your message. Please try again or email info@porcelainskin.co.nz.",
          "error"
        );
      }
    });
  });
});

function createStatusNode(form) {
  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  form.appendChild(status);
  return status;
}

function updateStatus(node, message, state) {
  node.textContent = message;
  node.dataset.state = state;
}

function isValidEmail(value) {
  return EMAIL_REGEX.test(value);
}

function isValidPhone(value) {
  return PHONE_REGEX.test(value);
}

function flagEmailError(field) {
  field.dataset.invalid = "true";
  field.setAttribute("aria-invalid", "true");
}

function clearEmailError(field) {
  if (field.dataset.invalid) {
    delete field.dataset.invalid;
  }
  field.removeAttribute("aria-invalid");
}

function generateEnquiryId() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  const dayPart = `${pad(now.getDate())}${pad(now.getMonth() + 1)}`; // DDMM
  const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}`; // HHMM
  const randomPart = getRandomSegment(2); // 2 chars
  return `PS-${dayPart}${timePart}${randomPart}`;
}

function getRandomSegment(length) {
  if (window.crypto && window.crypto.getRandomValues) {
    const buffer = new Uint8Array(length);
    window.crypto.getRandomValues(buffer);
    return Array.from(buffer, (value) => (value % 36).toString(36).toUpperCase()).join("");
  }
  let output = "";
  for (let i = 0; i < length; i += 1) {
    output += Math.floor(Math.random() * 36)
      .toString(36)
      .toUpperCase();
  }
  return output;
}
