import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateReceiptPDF = (cartItems, totalAmount, userEmail) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('ShopEase Receipt', 14, 20);

  doc.setFontSize(12);
  doc.text(`Customer: ${userEmail}`, 14, 30);
  doc.text(`Date: ${new Date().toLocaleString()}`, 14, 38);

  const tableData = cartItems.map((item) => [
    item.name,
    item.qty,
    `INR ${item.price}`,
    `INR ${item.qty * item.price}`,
  ]);

  autoTable(doc, {
    head: [['Product', 'Qty', 'Price', 'Total']],
    body: tableData,
    startY: 50,
  });

  const finalY = doc.lastAutoTable?.finalY || 60;
  doc.text(`Grand Total: INR ${totalAmount}`, 14, finalY + 10);


  doc.save(`ShopEase_Receipt_${Date.now()}.pdf`);
};
