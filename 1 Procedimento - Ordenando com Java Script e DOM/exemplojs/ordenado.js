let numeros = [];

function adicionarNumero() {
  const numeroInput = document.getElementById("numeroInput");
  const numero = parseInt(numeroInput.value);
  
  if (!isNaN(numero)) {
    numeros.push(numero);
    renderizarLista();
    numeroInput.value = "";
  }
}

function renderizarLista() {
  const listaNumeros = document.getElementById("listaNumeros");
  listaNumeros.innerHTML = "";
  
  numeros.forEach(numero => {
    const itemLista = document.createElement("li");
    itemLista.textContent = numero;
    listaNumeros.appendChild(itemLista);
  });
}

function ordenarLista() {
  const algoritmoSelecionado = document.getElementById("selectOrdenacao").value;
  
  switch (algoritmoSelecionado) {
    case "bubble":
      bubbleSort();
      break;
    case "selection":
      selectionSort();
      break;
    case "quick":
      quickSort(0, numeros.length - 1);
      break;
  }
  
  renderizarLista();
}

function bubbleSort() {
  const n = numeros.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (numeros[j] > numeros[j+1]) {
        const temp = numeros[j];
        numeros[j] = numeros[j+1];
        numeros[j+1] = temp;
      }
    }
  }
}

function selectionSort() {
  const n = numeros.length;
  for (let i = 0; i < n-1; i++) {
    let minIndex = i;
    for (let j = i+1; j < n; j++) {
      if (numeros[j] < numeros[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = numeros[i];
      numeros[i] = numeros[minIndex];
      numeros[minIndex] = temp;
    }
  }
}

function quickSort(low, high) {
  if (low < high) {
    const pi = partition(low, high);
    quickSort(low, pi - 1);
    quickSort(pi + 1, high);
  }
}

function partition(low, high) {
  const pivot = numeros[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (numeros[j] < pivot) {
      i++;
      const temp = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = temp;
    }
  }
  const temp = numeros[i + 1];
  numeros[i + 1] = numeros[high];
  numeros[high] = temp;
  return i + 1;
}

function misturarLista() {
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
  renderizarLista();
}
