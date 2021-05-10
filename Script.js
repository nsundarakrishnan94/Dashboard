$(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140],
        min_col:6,
        resize:{
            enabled:true,
            max_size:[2,2],
            min_size:[1,1]
        }
    });

});




//----------------------------Chart-----------------------------------------------

  
const line=document.getElementById('line');
const bar=document.getElementById('bar');


line.addEventListener('click',changecharttoline);
bar.addEventListener('click',changecharttobar);




  let ctx = document.getElementById('dynamic-chart').getContext('2d');
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Nov20', 'Dec20', 'Jan21', 'Feb21', 'Mar21', 'Apr21'],
          datasets: [{
              label: 'Number of covid cases in india in lakhs',
              data: [10, 8, 10, 13, 15, 20],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  

  
  function changecharttoline(){
      console.log('line')
    const updateType = 'line';
    myChart.config.type=updateType;
    myChart.update();

}

function changecharttobar(){
    console.log('bar')
    const updateType = 'bar';
    myChart.config.type=updateType;
    myChart.update();
    
}





//--------------------------------menu click------------------------------------------------

function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}