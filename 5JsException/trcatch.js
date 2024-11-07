function divide(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Harus Berupa Angka");
    }

    if (b === 0) {
      throw new Error("Tidak Dapat Dibagi Dengan Nol");
    }

    return a / b;
  } catch (error) {
    return error.message;
  }
}

function performDivision() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = divide(num1, num2);

  if (isNaN(result)) {
    document.getElementById("result").textContent = "";
    document.getElementById("error-message").textContent = "Masukkan Angka yang Valid";
  } else if (result === "Tidak Dapat Dibagi Dengan Nol" || result === "Harus Berupa Angka") {
    document.getElementById("result").textContent = "";
    document.getElementById("error-message").textContent = result;
  } else {
    document.getElementById("result").textContent = result;
    document.getElementById("error-message").textContent = "";
  }
}
