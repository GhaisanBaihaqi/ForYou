
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Ni Kadek Paramartha Devi, nama yang senantiasa mengalun di renung pikiranku. Kutorehkan namamu disini, sebagai saksi bisu pertemuan kita. Jika kelak jarak memisahkan kita dan pertemuan menjadi sekadar bayang yang memudar. Namun kenangan tentangmu, akan tetap terukir, menghidupkan harapan di setiap detak waktu. Terima kasih untuk semuanya ;)').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
