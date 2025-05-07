
document.getElementById('flightForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // جمع القيم المدخلة
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const passengers = document.getElementById('passengers').value;

  // إنشاء التفاصيل
  const ticketDetails = `
    <p><strong>من:</strong> ${from}</p>
    <p><strong>إلى:</strong> ${to}</p>
    <p><strong>التاريخ:</strong> ${date}</p>
    <p><strong>عدد الركاب:</strong> ${passengers}</p>
    <p><strong>رقم التذكرة:</strong> ${Math.floor(Math.random() * 1000000)}</p>
  `;

  // عرض التفاصيل في قسم التذكرة
  document.getElementById('ticketDetails').innerHTML = ticketDetails;
  document.getElementById('ticket').style.display = 'block';
});