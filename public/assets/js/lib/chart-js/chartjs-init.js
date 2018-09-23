( function ( $ ) {
    "use strict";

    // //Team chart
    // var ctx = document.getElementById( "team-chart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'line',
    //     data: {
    //         labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
    //         type: 'line',
    //         defaultFontFamily: 'Montserrat',
    //         datasets: [ {
    //             data: [ 0, 7, 3, 5, 2, 10, 7 ],
    //             label: "Expense",
    //             backgroundColor: 'rgba(0,103,255,.15)',
    //             borderColor: 'rgba(0,103,255,0.5)',
    //             borderWidth: 3.5,
    //             pointStyle: 'circle',
    //             pointRadius: 5,
    //             pointBorderColor: 'transparent',
    //             pointBackgroundColor: 'rgba(0,103,255,0.5)',
    //                 }, ]
    //     },
    //     options: {
    //         responsive: true,
    //         tooltips: {
    //             mode: 'index',
    //             titleFontSize: 12,
    //             titleFontColor: '#000',
    //             bodyFontColor: '#000',
    //             backgroundColor: '#fff',
    //             titleFontFamily: 'Montserrat',
    //             bodyFontFamily: 'Montserrat',
    //             cornerRadius: 3,
    //             intersect: false,
    //         },
    //         legend: {
    //             display: false,
    //             position: 'top',
    //             labels: {
    //                 usePointStyle: true,
    //                 fontFamily: 'Montserrat',
    //             },


    //         },
    //         scales: {
    //             xAxes: [ {
    //                 display: true,
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false
    //                 },
    //                 scaleLabel: {
    //                     display: false,
    //                     labelString: 'Month'
    //                 }
    //                     } ],
    //             yAxes: [ {
    //                 display: true,
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false
    //                 },
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Value'
    //                 }
    //                     } ]
    //         },
    //         title: {
    //             display: false,
    //         }
    //     }
    // } );


    // //Sales chart
    // var ctx = document.getElementById( "sales-chart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'line',
    //     data: {
    //         labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
    //         type: 'line',
    //         defaultFontFamily: 'Montserrat',
    //         datasets: [ {
    //             label: "Foods",
    //             data: [ 0, 30, 10, 120, 50, 63, 10 ],
    //             backgroundColor: 'transparent',
    //             borderColor: 'rgba(220,53,69,0.75)',
    //             borderWidth: 3,
    //             pointStyle: 'circle',
    //             pointRadius: 5,
    //             pointBorderColor: 'transparent',
    //             pointBackgroundColor: 'rgba(220,53,69,0.75)',
    //                 }, {
    //             label: "Electronics",
    //             data: [ 0, 50, 40, 80, 40, 79, 120 ],
    //             backgroundColor: 'transparent',
    //             borderColor: 'rgba(40,167,69,0.75)',
    //             borderWidth: 3,
    //             pointStyle: 'circle',
    //             pointRadius: 5,
    //             pointBorderColor: 'transparent',
    //             pointBackgroundColor: 'rgba(40,167,69,0.75)',
    //                 } ]
    //     },
    //     options: {
    //         responsive: true,

    //         tooltips: {
    //             mode: 'index',
    //             titleFontSize: 12,
    //             titleFontColor: '#000',
    //             bodyFontColor: '#000',
    //             backgroundColor: '#fff',
    //             titleFontFamily: 'Montserrat',
    //             bodyFontFamily: 'Montserrat',
    //             cornerRadius: 3,
    //             intersect: false,
    //         },
    //         legend: {
    //             display: false,
    //             labels: {
    //                 usePointStyle: true,
    //                 fontFamily: 'Montserrat',
    //             },
    //         },
    //         scales: {
    //             xAxes: [ {
    //                 display: true,
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false
    //                 },
    //                 scaleLabel: {
    //                     display: false,
    //                     labelString: 'Month'
    //                 }
    //                     } ],
    //             yAxes: [ {
    //                 display: true,
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false
    //                 },
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Value'
    //                 }
    //                     } ]
    //         },
    //         title: {
    //             display: false,
    //             text: 'Normal Legend'
    //         }
    //     }
    // } );







    // //line chart
    // var ctx = document.getElementById( "lineChart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'line',
    //     data: {
    //         labels: [ "January", "February", "March", "April", "May", "June", "July" ],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 borderColor: "rgba(0,0,0,.09)",
    //                 borderWidth: "1",
    //                 backgroundColor: "rgba(0,0,0,.07)",
    //                 data: [ 22, 44, 67, 43, 76, 45, 12 ]
    //                         },
    //             {
    //                 label: "My Second dataset",
    //                 borderColor: "rgba(0, 123, 255, 0.9)",
    //                 borderWidth: "1",
    //                 backgroundColor: "rgba(0, 123, 255, 0.5)",
    //                 pointHighlightStroke: "rgba(26,179,148,1)",
    //                 data: [ 16, 32, 18, 26, 42, 33, 44 ]
    //                         }
    //                     ]
    //     },
    //     options: {
    //         responsive: true,
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         }

    //     }
    // } );


    //bar chart
    // var ctx = document.getElementById( "barChart" );
    // var myChart = new Chart( ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: [ "January", "February", "March", "April", "May", "June", "July" ],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 data: [ 65, 59, 80, 81, 56, 55, 40 ],
    //                 borderColor: "rgba(0, 123, 255, 0.9)",
    //                 borderWidth: "0",
    //                 backgroundColor: "rgba(0, 123, 255, 0.5)"
    //                         },
    //             {
    //                 label: "My Second dataset",
    //                 data: [ 28, 48, 40, 19, 86, 27, 90 ],
    //                 borderColor: "rgba(0,0,0,0.09)",
    //                 borderWidth: "0",
    //                 backgroundColor: "rgba(0,0,0,0.07)"
    //                         }
    //                     ]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [ {
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //                             } ]
    //         }
    //     }
    // } );

    // //radar chart
    // var ctx = document.getElementById( "radarChart" );
    // ctx.height = 160;
    // var myChart = new Chart( ctx, {
    //     type: 'radar',
    //     data: {
    //         labels: [ [ "Eating", "Dinner" ], [ "Drinking", "Water" ], "Sleeping", [ "Designing", "Graphics" ], "Coding", "Cycling", "Running" ],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 data: [ 65, 59, 66, 45, 56, 55, 40 ],
    //                 borderColor: "rgba(0, 123, 255, 0.6)",
    //                 borderWidth: "1",
    //                 backgroundColor: "rgba(0, 123, 255, 0.4)"
    //                         },
    //             {
    //                 label: "My Second dataset",
    //                 data: [ 28, 12, 40, 19, 63, 27, 87 ],
    //                 borderColor: "rgba(0, 123, 255, 0.7",
    //                 borderWidth: "1",
    //                 backgroundColor: "rgba(0, 123, 255, 0.5)"
    //                         }
    //                     ]
    //     },
    //     options: {
    //         legend: {
    //             position: 'top'
    //         },
    //         scale: {
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // } );


    //pie chart
    var ctx = document.getElementById( "pieChart" );
  
   ctx.height = 300;
        var myChart = new Chart( ctx, {
            type: 'pie',
            data: {
                datasets: [ {
                    data: [2,0,0,1],
                    backgroundColor: [
                                        "rgba(0, 123, 255,0.9)",
                                        "rgba(0, 123, 255,0.7)",
                                        "rgba(0, 123, 255,0.5)",
                                        "rgba(0,0,0,0.07)"
                                    ],
                    hoverBackgroundColor: [
                                        "rgba(0, 123, 255,0.9)",
                                        "rgba(0, 123, 255,0.7)",
                                        "rgba(0, 123, 255,0.5)",
                                        "rgba(0,0,0,0.07)"
                                    ]
    
                                } ],
                labels:["Process","Assests","Queues","Schedules"]
            },
            options: {
                responsive: true
            }
        } );
   

        var ctx = document.getElementById( "pieChart2" );
  
   ctx.height = 300;
        var myChart = new Chart( ctx, {
            type: 'pie',
            data: {
                datasets: [ {
                    data: [9,1,0],
                    backgroundColor: [
                                        "rgba(23, 123, 255,0.9)",
                                        "rgba(57, 123, 255,0.7)",
                                        "rgba(101, 12, 255,0.5)",
                                        
                                    ],
                    hoverBackgroundColor: [
                                        "rgba(0, 123, 255,0.9)",
                                        "rgba(0, 123, 255,0.7)",
                                        "rgba(0, 123, 255,0.5)",
                                        
                                    ]
    
                                } ],
                labels:["Successful","Faulted","Stopped"]
            },
            options: {
                responsive: true
            }
        } );
   

    

    // //doughut chart
    // var ctx = document.getElementById( "doughutChart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'doughnut',
    //     data: {
    //         datasets: [ {
    //             data: [ 45, 25, 20, 10 ],
    //             backgroundColor: [
    //                                 "rgba(0, 123, 255,0.9)",
    //                                 "rgba(0, 123, 255,0.7)",
    //                                 "rgba(0, 123, 255,0.5)",
    //                                 "rgba(0,0,0,0.07)"
    //                             ],
    //             hoverBackgroundColor: [
    //                                 "rgba(0, 123, 255,0.9)",
    //                                 "rgba(0, 123, 255,0.7)",
    //                                 "rgba(0, 123, 255,0.5)",
    //                                 "rgba(0,0,0,0.07)"
    //                             ]

    //                         } ],
    //         labels: [
    //                         "green",
    //                         "green",
    //                         "green",
    //                         "green"
    //                     ]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // } );

    // //polar chart
    // var ctx = document.getElementById( "polarChart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'polarArea',
    //     data: {
    //         datasets: [ {
    //             data: [ 15, 18, 9, 6, 19 ],
    //             backgroundColor: [
    //                                 "rgba(0, 123, 255,0.9)",
    //                                 "rgba(0, 123, 255,0.8)",
    //                                 "rgba(0, 123, 255,0.7)",
    //                                 "rgba(0,0,0,0.2)",
    //                                 "rgba(0, 123, 255,0.5)"
    //                             ]

    //                         } ],
    //         labels: [
    //                         "green",
    //                         "green",
    //                         "green",
    //                         "green"
    //                     ]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // } );

    // // single bar chart
    // var ctx = document.getElementById( "singelBarChart" );
    // ctx.height = 150;
    // var myChart = new Chart( ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: [ "Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat" ],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 data: [ 40, 55, 75, 81, 56, 55, 40 ],
    //                 borderColor: "rgba(0, 123, 255, 0.9)",
    //                 borderWidth: "0",
    //                 backgroundColor: "rgba(0, 123, 255, 0.5)"
    //                         }
    //                     ]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [ {
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //                             } ]
    //         }
    //     }
    // } );



    var ctx = document.getElementById("myChart");



    $.ajax({
        url: 'https://demo.uipath.com/api/Account', type: "POST", data: '{"tenancyName":"Deepak_Prakash","usernameOrEmailAddress":"deepakprakash2811@gmail.com", "password": "test1234"}', contentType: "application/json; charset=utf-8", dataType: "json", success: function (data) {
            console.log(data.result)
            
            localStorage.setItem("token", data.result);
            $.ajax({
                url: "https://demo.uipath.com/odata/Jobs",
                headers: {
                    "Authorization": "Bearer" + " " + localStorage.getItem("token")
                }
                , success: function (dta) {
                    final = dta.value;
                    console.log("chart.js");
                    console.log(final);
                   var data2=[]
                   var Message=[]
                    for( var t=0;t<final.length;t++)
                    {
                        data2.push(final[t]['Id'])
                        Message.push(['Source'])
                    }
                    console.log(Message)
                
                    
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: Message,
                        datasets: [{
                            label: 'JOb Processes Showing ID VS ID, Source And State for past transaction',
                            data:data2,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 159, 64, 0.2)'

                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
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
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });

                }
            });
    
    
        }
    });
    

} )( jQuery );