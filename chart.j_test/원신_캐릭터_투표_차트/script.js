const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ganyu', 'Azusa', 'Mika', 'Griseo', 'Keqing', 'Qiqi'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


