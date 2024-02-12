function generatePDF() {
    const options = {
        filename: 'Permissao_' + new Date().toISOString().replace(/:/g, '_').replace(/\..+/, '') + '.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a2', orientation: 'portrait' }
    };
    const element = document.querySelector('.container');
    html2pdf().from(element).set(options).save();
}

    function toggleTable() {
        var tables = document.getElementsByClassName("Riscos_potenciais");
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].style.display === "none") {
                tables[i].style.display = "table"; // Altera para exibir a tabela
            } else {
                tables[i].style.display = "table"; // Altera para ocultar a tabela
            }
        }
    }

