let langs = document.querySelector(".language"),
link = document.querySelectorAll("a"),
contactForm = document.querySelector(".contactForm"),
nameForm = document.querySelector(".nameForm"),
companyForm = document.querySelector(".companyForm"),
emailForm = document.querySelector(".emailForm"),
messageForm = document.querySelector(".messageForm"),
dataSafetyDisclaimer = document.querySelector(".dataSafetyDisclaimer"),
submitForm = document.querySelector(".submitForm");
    
      link.forEach((el) => {
        el.addEventListener("click", () => {
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");
      
          let attr = el.getAttribute("language");
          contactForm.textContent = data[attr].contactForm;  
          nameForm.textContent = data[attr].nameForm;
          companyForm.textContent = data[attr].companyForm;
          emailForm.textContent = data[attr].emailForm;
          messageForm.textContent = data[attr].messageForm;
          dataSafetyDisclaimer.textContent = data[attr].dataSafetyDisclaimer;
          submitForm.textContent = data[attr].submitForm;
        });
      });

let data = {
    german:{
        contactForm: "Kontaktformular",
        nameForm: "Name",
        companyForm: "Firma",
        messageForm: "Nachricht",
        emailForm: "Email-Adresse",
        dataSafetyDisclaimer: "*Wir speichern keine Daten oder geben diese an Dritte weiter",
        submitForm: "Absenden"
    },

    english:{
        contactForm: "Contact Form",
        nameForm: "Name",
        companyForm: "Company",
        messageForm: "Message",
        emailForm: "Email-Adress",
        dataSafetyDisclaimer: "*We do not store any data or pass it on to third parties",
        submitForm: "Submit"
    },

    russian:{
        contactForm: "Форма обратной связи",
        nameForm: "Имя",
        companyForm: "Компания",
        messageForm: "Сообщение",
        emailForm: "Электронная почта",
        dataSafetyDisclaimer: "*Мы не храним никаких данных и не передаем их третьим лицам",
        submitForm: "Отправить"
    }
};


