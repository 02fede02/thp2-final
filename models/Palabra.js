class Palabra {
  palabras = ["perro", "camilo", "camilo"];

  create = async (palabra) => {
    this.palabras.push(palabra);
    return this.palabras[this.palabras.length - 1];
  };
  getAll = async () => {
    return this.palabras.join(" ");
  };
  borrar = async (palabra) => {
    const isPalabra = this.palabras.includes(palabra);
    if (isPalabra) {
      this.palabras = this.palabras.filter((value) => value !== palabra);
    }
    return isPalabra ? palabra : isPalabra;
  };

  bulkCreate = async (array) => {
    this.palabras.push(...array);
    return this.palabras;
  };
  all = async () => {
    const data = this.palabras.reduce((obj, value) => {
      if (obj[value]) {
        obj[value]++;
      } else {
        obj[value] = 1;
      }
      return obj;
    }, {});

    return data;
  };
}

export default Palabra;
