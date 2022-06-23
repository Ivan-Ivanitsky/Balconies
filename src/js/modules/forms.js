export { form };
import { checkNum } from "./checkNumInput";
import { spinner } from "./spinner";
import { validString } from "./validate";

const form = (state) => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input");
  const messages = {
    // обьект с переменными для оповещения клиента
    load: spinner(),
    succesfull: "отправленно",
    fail: "что-то пошло не так",
  };

  checkNum('input[name="user_phone"]');

  const postData = async (url, data) => {
    // функция получения данных от клиента
    document.querySelector(".status").appendChild(messages.load);
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  function clearInput() {
    //функция очистки формы
    input.forEach((item) => {
      item.value = "";
    });
  }

  form.forEach((item, i) => {
    // перебор всех форм
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validString(i)) {
        return;
      } else {
        let statusMessages = document.createElement("div"); // создание элемента для оповещения
        statusMessages.classList.add("status");
        item.appendChild(statusMessages);

        const formData = new FormData(item); // форма для Поста клиента

        if (item.getAttribute("data-calc") === "end") {
          for (let key in state) {
            formData.append(key, state[key]);
          }
        }

        postData("assets/server.php", formData)
          .then((res) => {
            console.log(res);
            statusMessages.textContent = messages.succesfull;
            clearInput();
          })
          .catch(() => {
            statusMessages.innerHTML = messages.fail;
          })
          .finally(() => {
            setTimeout(() => {
              // чистим input
              statusMessages.remove(); // удаление оповещения для клиента
            }, 1300);
          });
        return;
      }
    });
  });
};
