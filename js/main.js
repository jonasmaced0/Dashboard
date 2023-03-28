//SIDEBARD TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sider');

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-resposive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive")
        sidebarOpen = false;
    }
}

// CHART

// BAR CHART

var barChartOptions = {
    series: [{
    data: [14, 24, 7, 9, 25]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['Jordan 4', 'Jordan 1 High', 'Air Max 1', 'Air Force 1', 'Dunk Low'],
  },
  yaxis: {
    title:{
        text: "Count"
    }
  }
};

  var barchart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barchart.render();

  //AREA
   
  var areaChartOptions = {
    series: [{
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();