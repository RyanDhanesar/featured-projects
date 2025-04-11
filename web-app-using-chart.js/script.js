// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the canvas element
    const ctx = document.getElementById('electionChart').getContext('2d');
  
    // Create the pie chart using Chart.js
    const electionChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['DAD - 45%', 'PPP - 5%', 'CCCC - 27%', 'MCD - 23%'],
        datasets: [{
          label: '2025 Election Results',
          data: [45, 5, 27, 23], // Percentages
          backgroundColor: [
            '#3498db', // DAD - Blue
            '#e74c3c', // PPP - Red
            '#2ecc71', // CCCC - Green
            '#f1c40f'  // MCD - Yellow
          ],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label;
              }
            }
          }
        }
      }
    });
  });

 