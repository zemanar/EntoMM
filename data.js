// GitHub JS file (functions.js)
window.myFunctions = {
    convertNames(inputElement, outputElement) {
        fetch("https://raw.githubusercontent.com/zemanar/EntoMM/main/data.json")
          .then((res) => res.json())
          .then((data) => {
            const inputName = inputElement.value.trim().toLowerCase();
            const fullName = inputName.split(" ");
            const convertedNames = fullName.map((w) => (data[w] ? data[w] : ""));
            const fullConvertedName = convertedNames.join("");
            outputElement.value = fullConvertedName;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
};
