function generatePDF() {
  // Get the HTML content of the webpage
  const html = document.documentElement.innerHTML;

  // Create a new window to generate the PDF
  const win = window.open('', '', 'height=700,width=700');

  // Write the HTML content to the new window
  win.document.write(html);

  // Wait for the new window to finish loading the HTML content
  win.onload = function() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the HTML content as a PDF page
    doc.html(win.document.body, {
      callback: function () {
        // Save the PDF file
        doc.save("webpage.pdf");
      }
    });
  };
}