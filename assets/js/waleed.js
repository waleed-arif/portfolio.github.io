
// chart
let pricechart = document.getElementById('forcaterchart').getContext('2d');
let tempyear = 1996;
let finalchart = new Chart(pricechart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
                label: 'D7DW',
                data: [45.4, 45.4, 45.4, 45.4, 44.0, 43.8, 43.9, 43.9, 44.8, 45.7, 46.1, 46.1, 46.2, 46.2, 46.1, 46.0, 44.7, 44.5, 44.6, 44.4, 44.3, 45.9, 45.9, 45.9, 45.9, 45.9, 45.9, 45.9, 44.8, 44.9, 45.1, 45.1, 45.4, 46.9, 47.0, 47.0, 47.0, 47.0, 47.0, 47.1, 46.0, 45.9, 45.9, 45.9, 46.3, 47.4, 47.6, 47.7, 47.8, 47.7, 47.8, 47.7, 46.5, 46.2, 46.1, 46.2, 47.1, 48.6, 49.0, 49.1, 49.3, 49.1, 49.1, 49.1, 48.6, 48.4, 48.1, 48.2, 50.6, 51.9, 52.2, 52.3, 52.3, 52.3, 52.4, 52.4, 51.6, 51.4, 51.4, 51.3, 52.2, 53.2, 53.7, 53.6, 53.5, 53.5, 53.6, 53.2, 52.7, 52.6, 52.6, 52.6, 53.3, 54.4, 54.5, 54.5, 54.7, 54.9, 54.8, 54.8, 54.4, 54.3, 54.6, 55.5, 56.9, 59.1, 59.8, 60.4, 60.6, 61.1, 61.2, 61.2, 60.6, 60.4, 60.3, 61.1, 61.7, 64.4, 65.0, 65.2, 65.3, 65.3, 65.4, 65.5, 66.2, 64.9, 64.8, 65.4, 66.2, 69.6, 70.4, 70.4, 70.5, 70.7, 70.7, 70.7, 70.4, 70.0, 69.9, 70.0, 70.8, 72.9, 74.2, 75.7, 76.6, 77.0, 77.3, 77.5, 79.1, 80.7, 81.5, 82.4, 89.8, 98.2, 99.0, 99.9, 101.0, 101.1, 101.0, 101.0, 99.3, 98.5, 97.7, 98.3, 98.5, 100.6, 101.4, 101.5, 101.4, 101.5, 101.5, 101.5, 99.1, 97.8, 96.9, 97.6, 98.1, 101.0, 101.6, 102.2, 103.1, 104.0, 103.7, 104.1, 102.7, 102.5, 102.7, 102.8, 103.4, 109.1, 109.9, 110.1, 110.2, 109.5, 110.0, 110.0, 107.7, 106.8, 107.2, 107.0, 107.5, 108.4, 108.9, 109.4, 109.5, 109.8, 109.2, 109.2, 109.4, 109.3, 109.6, 109.5, 110.1, 111.4, 112.4, 112.6, 113.3, 113.3, 113.2, 113.4, 112.5, 112.3, 112.1, 111.9, 112.5, 114.6, 114.8, 114.8, 114.6, 114.6, 114.8, 114.9, 112.5, 112.1, 112.0, 112.0, 112.4, 113.8, 114.1, 114.1, 114.1, 114.2, 114.0, 114.2, 112.8, 111.9, 111.0, 111.1, 112.0, 114.0, 114.8, 115.4, 115.7, 116.2, 116.2, 116.3, 114.8, 114.5, 114.4, 114.4, 114.4, 116.8, 118.0, 118.4, 118.6, 118.6, 119.0, 118.8, 115.6, 115.3, 116.0, 116.2, 115.8, 120.0, 119.1, 121.5, 121.5, 121.6, 121.9, 119.9, 120.9, 121.6, 121.3, 120.5, 121.0, 122.8, 125.8, 126.4, 125.3, 126.7, 126.7, 126.6, 126.6, 126.4, 126.9, 125.9, 127.0, 128.8, 130.6, 130.2, 130.3, 130.1, 130.3, 130.4, 130.3, 130.6, 130.6, 130.5, 131.2, 132.6, 133.1, 136.8, 137.5, 140.0, 144.9, 147.8, 152.0, 159.8, 165.8, 169.5],
                backgroundColor: '#cc4b2c',
                borderColor: '#cc4b2c',
                fill: false,
                stepped: true,
            },
            {
                label: 'D7DU',
                data: [43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.3, 43.1, 43.1, 43.1, 43.1, 43.1, 42.1, 42.1, 42.1, 42.1, 41.6, 41.6, 41.4, 41.4, 41.4, 41.3, 41.4, 41.4, 41.4, 41.4, 41.4, 41.4, 41.6, 41.6, 41.7, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 41.3, 40.2, 40.2, 40.2, 40.2, 40.2, 40.2, 40.4, 40.4, 40.4, 40.4, 40.5, 40.5, 42.1, 42.2, 42.2, 42.2, 42.2, 42.2, 42.2, 42.2, 42.2, 44.1, 44.1, 44.2, 44.3, 44.3, 44.5, 44.5, 44.5, 44.5, 44.5, 44.5, 44.6, 44.6, 44.6, 44.6, 44.7, 45.0, 45.3, 45.4, 45.5, 45.5, 45.6, 45.8, 45.9, 46.2, 46.7, 47.4, 47.8, 47.9, 48.0, 48.2, 48.3, 48.4, 49.1, 50.7, 52.4, 53.3, 53.6, 53.7, 54.0, 54.1, 54.4, 54.4, 54.5, 55.1, 57.3, 59.4, 60.6, 61.1, 61.3, 63.3, 67.3, 71.4, 73.4, 74.1, 74.9, 76.8, 80.5, 83.0, 84.6, 84.8, 85.1, 84.4, 82.1, 79.4, 77.2, 75.5, 74.4, 73.9, 73.6, 73.6, 73.7, 74.1, 83.4, 83.4, 85.1, 85.1, 85.1, 85.2, 95.1, 110.8, 111.1, 110.9, 110.9, 110.9, 110.9, 106.2, 105.1, 105.1, 105.1, 104.6, 104.6, 104.6, 104.5, 104.5, 104.5, 104.6, 101.6, 101.6, 98.7, 98.7, 98.7, 98.7, 98.7, 98.7, 98.7, 98.7, 103.2, 104.1, 104.5, 105.0, 105.0, 105.0, 105.0, 105.0, 106.9, 120.7, 122.4, 123.6, 123.6, 123.6, 122.4, 121.9, 121.2, 121.2, 121.2, 121.2, 121.2, 121.2, 121.2, 123.5, 130.1, 129.9, 131.3, 131.3, 131.3, 131.3, 131.3, 131.3, 131.3, 131.3, 131.3, 131.3, 140.1, 138.8, 139.1, 138.7, 138.0, 138.0, 138.0, 138.0, 138.0, 138.0, 138.0, 138.0, 138.0, 137.3, 136.4, 132.8, 132.7, 131.9, 131.9, 131.9, 131.9, 129.0, 129.0, 129.0, 129.0, 129.0, 128.1, 124.8, 123.1, 123.1, 123.1, 123.1, 123.1, 123.1, 123.1, 123.1, 123.1, 122.6, 122.6, 122.6, 121.9, 122.4, 122.4, 123.1, 123.1, 123.1, 123.1, 123.2, 123.2, 123.4, 123.4, 123.4, 123.7, 123.9, 126.9, 128.4, 128.4, 129.8, 132.5, 132.5, 132.5, 121.2, 121.4, 121.4, 132.6, 132.6, 132.6, 132.6, 132.6, 132.6, 121.0, 121.0, 121.0, 121.0, 121.0, 121.0, 116.6, 116.8, 116.8, 116.6, 116.6, 116.6, 102.4, 102.4, 102.4, 102.4, 102.4, 102.4, 112.0, 112.0, 112.0, 112.0, 112.0, 112.0, 131.1, 131.1, 131.1, 131.3, 131.3, 131.3, 218.9, 218.9, 218.9, 219.1, 219.1],
                backgroundColor: '#501d11',
                borderColor: '#501d11',
                fill: false,
                stepped: true,
                
            },
            {
                label: 'D7DT',
                data: [62.5, 62.5, 62.5, 62.5, 62.6, 62.9, 63.0, 62.7, 62.4, 61.7, 61.3, 61.1, 60.4, 60.7, 60.9, 60.8, 60.4, 60.1, 59.7, 59.5, 57.7, 57.6, 57.1, 56.7, 56.6, 57.1, 57.6, 57.6, 57.0, 56.5, 56.1, 56.1, 56.1, 56.1, 56.1, 56.1, 56.1, 56.1, 56.1, 56.1, 56.0, 56.0, 55.8, 55.8, 55.8, 55.8, 55.8, 55.8, 55.8, 55.8, 55.7, 55.6, 55.1, 54.5, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.2, 54.3, 54.3, 54.3, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.4, 54.5, 54.5, 54.5, 54.5, 54.5, 54.5, 54.5, 54.5, 54.7, 54.7, 54.7, 54.7, 54.8, 54.9, 55.1, 55.3, 55.4, 55.4, 55.6, 55.7, 56.0, 56.3, 57.0, 57.6, 57.9, 58.3, 58.4, 58.5, 58.8, 59.4, 60.4, 61.6, 62.5, 63.0, 63.4, 63.6, 63.8, 63.9, 63.9, 64.0, 64.8, 66.2, 67.6, 68.2, 68.9, 69.7, 71.6, 74.6, 77.7, 79.6, 80.4, 81.0, 82.1, 84.3, 85.9, 86.9, 87.3, 87.6, 87.6, 86.8, 85.8, 84.6, 83.6, 83.1, 83.1, 83.0, 83.0, 83.0, 83.4, 92.2, 92.2, 94.1, 94.1, 94.1, 94.1, 98.1, 108.2, 109.0, 109.0, 109.0, 108.7, 108.7, 108.2, 102.7, 100.5, 100.5, 100.5, 100.5, 100.5, 100.1, 100.1, 100.1, 100.1, 100.1, 100.1, 99.9, 99.9, 99.9, 99.9, 99.9, 99.9, 99.6, 99.6, 100.9, 101.7, 103.2, 104.0, 104.0, 104.0, 104.0, 104.0, 105.0, 112.8, 114.5, 115.1, 115.1, 115.1, 113.7, 112.4, 112.4, 112.3, 112.3, 112.3, 112.3, 112.3, 111.8, 113.8, 119.6, 119.6, 121.0, 121.0, 121.0, 121.0, 121.0, 121.4, 121.4, 121.4, 121.4, 121.4, 129.3, 129.1, 129.3, 129.1, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.3, 128.0, 128.0, 127.9, 127.9, 127.9, 127.9, 127.9, 127.9, 127.9, 127.9, 127.9, 127.9, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 127.7, 128.9, 132.1, 137.5, 137.5, 139.2, 139.2, 139.2, 142.3, 142.3, 142.3, 142.3, 142.3, 142.3, 143.5, 143.7, 146.9, 149.4, 149.4, 152.1, 155.2, 155.2, 155.2, 147.6, 147.8, 147.8, 163.8, 163.8, 163.8, 163.8, 163.8, 163.8, 160.3, 160.3, 160.3, 160.3, 160.3, 160.3, 160.6, 160.6, 160.6, 160.4, 160.4, 160.4, 155.2, 155.2, 155.2, 155.2, 155.2, 155.2, 169.4, 169.4, 169.4, 169.7, 169.7, 169.7, 184.4, 184.4, 184.4, 185.0, 185.0, 185.0, 260.2, 260.2, 260.2, 261.3, 261.3],
                backgroundColor: '#000000',
                borderColor: '#000000',
                fill: false,
                stepped: true,
                
            },
            {
                label: 'D7DV',
                data: [33.2, 32.9, 33.9, 34.9, 32.8, 32.1, 32.6, 32.9, 37.4, 40.7, 36.5, 38.3, 38.5, 36.1, 33.0, 31.3, 31.4, 30.6, 29.3, 30.5, 29.8, 31.3, 31.2, 30.3, 28.1, 26.6, 25.0, 25.2, 25.3, 24.5, 23.7, 23.2, 24.0, 24.9, 24.0, 22.3, 22.5, 22.2, 23.3, 25.8, 25.5, 25.5, 28.8, 29.4, 31.4, 31.4, 33.2, 38.1, 37.3, 37.5, 38.8, 37.7, 36.8, 37.9, 40.9, 41.2, 52.2, 55.2, 51.4, 48.8, 42.4, 43.0, 41.6, 40.3, 42.1, 42.2, 40.4, 39.2, 46.6, 38.5, 34.9, 32.8, 34.3, 33.2, 35.2, 36.5, 36.7, 35.7, 35.2, 34.8, 39.3, 39.7, 36.1, 40.0, 41.9, 49.2, 50.7, 37.9, 35.7, 35.0, 36.2, 37.7, 37.2, 40.4, 40.2, 42.1, 41.3, 40.2, 40.7, 44.2, 47.7, 44.9, 45.3, 49.7, 52.2, 59.2, 55.0, 51.0, 51.8, 51.8, 59.2, 61.3, 57.9, 63.7, 68.1, 72.3, 73.8, 76.8, 68.4, 71.0, 72.3, 73.7, 74.5, 76.6, 77.1, 77.0, 79.5, 77.8, 73.7, 67.6, 64.5, 67.6, 62.9, 64.3, 66.6, 69.3, 69.0, 70.7, 72.6, 71.1, 75.5, 78.3, 88.8, 89.3, 92.7, 92.9, 106.1, 117.3, 127.2, 132.9, 139.6, 118.3, 115.3, 98.5, 90.5, 80.5, 79.3, 74.9, 67.5, 71.5, 71.6, 79.2, 70.9, 79.0, 77.1, 82.0, 84.3, 86.2, 103.6, 90.6, 97.0, 100.1, 100.1, 96.8, 95.0, 94.8, 94.5, 98.2, 101.6, 128.1, 125.5, 119.8, 130.4, 135.7, 125.4, 128.7, 124.8, 120.1, 123.8, 123.2, 130.9, 131.4, 131.6, 134.1, 136.4, 134.8, 127.3, 117.4, 120.4, 128.9, 132.4, 133.9, 130.7, 137.5, 134.7, 143.2, 141.5, 133.9, 125.0, 124.7, 128.0, 128.0, 131.1, 127.1, 124.7, 128.4, 125.1, 125.3, 121.7, 119.6, 118.3, 117.5, 116.4, 116.7, 115.0, 109.5, 108.1, 99.3, 86.7, 91.0, 88.3, 88.5, 89.8, 87.4, 83.7, 74.4, 75.6, 75.6, 73.0, 67.3, 61.2, 58.6, 63.2, 64.7, 68.7, 74.2, 74.4, 72.9, 76.2, 86.9, 83.4, 90.6, 96.0, 94.5, 89.8, 89.9, 83.7, 82.2, 81.5, 85.3, 88.8, 89.7, 98.0, 105.6, 106.9, 105.1, 110.5, 110.9, 114.8, 113.7, 110.8, 112.2, 117.7, 126.2, 119.1, 111.6, 107.7, 110.1, 110.9, 111.4, 113.2, 108.7, 108.0, 109.7, 109.8, 113.8, 110.3, 110.4, 114.1, 101.5, 83.4, 64.8, 60.7, 70.9, 71.5, 71.3, 68.3, 71.3, 67.5, 79.6, 85.7, 92.2, 94.8, 90.6, 94.8, 97.8, 98.3, 97.1, 101.5, 120.5, 125.0, 121.2, 125.9, 140.8, 202.8, 193.8, 211.1, 223.8, 210.4, 180.8],
                backgroundColor: '#f00',
                borderColor: '#f00',
                fill: false,
                stepped: true,
            }

        ]
    },

    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Value',
                    font: {
                        size: 20
                    }
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Year ' + tempyear,
                    font: {
                        size: 20
                    }
                },
                min: 00,
                max: 11
            }
        },
        plugins: {
            legend: {
                position: 'right'
            },
        }
    }
});
const scrollrightbtn = document.getElementById('nextyear');
const scrolleftbtn = document.getElementById('preyear');
scrollrightbtn.addEventListener("click", nextyearfun);
scrolleftbtn.addEventListener("click", preyearfun);
function nextyearfun() {
    const dataLength = finalchart.data.labels.length;
    if (finalchart.config.options.scales.x.max >= dataLength - 1) {
        document.getElementById('message').innerHTML = "No Record Available After August 2022";
        document.getElementById('messagebox').style.visibility = "visible";
        document.getElementById('messagebox').style.opacity = 1;
    } else {
        finalchart.config.options.scales.x.min += 12;
        finalchart.config.options.scales.x.max += 12;
        tempyear++;
        finalchart.config.options.scales.x.title.text = 'Year ' + tempyear;
    }
    finalchart.update();
}

function preyearfun() {
    if (finalchart.config.options.scales.x.min <= 0) {
        document.getElementById('message').innerHTML = "No Record Available Before 1996";
        document.getElementById('messagebox').style.visibility = "visible";
        document.getElementById('messagebox').style.opacity = 1;
    } else {
        finalchart.config.options.scales.x.min -= 12;
        finalchart.config.options.scales.x.max -= 12;
        tempyear--;
        finalchart.config.options.scales.x.title.text = 'Year ' + tempyear;
    }
    finalchart.update();
}
const hismodebtn = document.getElementById('historicalmode');
const formodebtn = document.getElementById('forcastmode');
hismodebtn.addEventListener("click", historicalmode);
formodebtn.addEventListener("click", forcastmode);
function historicalmode() {
    scrollrightbtn.disabled = false;
    scrolleftbtn.disabled = false;
}

function forcastmode() {
    scrollrightbtn.disabled = true;
    scrolleftbtn.disabled = true;
}
document.getElementById('close').addEventListener("click", closemessagebox);
function closemessagebox() {
    document.getElementById('messagebox').style.visibility = "hidden";
    document.getElementById('messagebox').style.opacity = 0;

}

//currency converter code

let fromamount=document.getElementById('fromamount').value;
      let toamount=document.getElementById('toamount').value;


      // loadJSON method to open the JSON file.
      function loadJSON(path, success, error) {
        let xmlrequestforjson = new XMLHttpRequest();
        xmlrequestforjson.onreadystatechange = function () {
          if (xmlrequestforjson.readyState === 4) {
            if (xmlrequestforjson.status === 200) {
              success(JSON.parse(xmlrequestforjson.responseText));
            }
            else {
              error(xmlrequestforjson);
            }
          }
        };
        xmlrequestforjson.open('GET', path, true);
        xmlrequestforjson.send();
      }



      function excfun(myvalues)
      {

        fromamount = document.getElementById("fromamount").value;
        toamount = document.getElementById("toamount").value;
        document.getElementById('currrate').innerHTML =" 1 "+ document.getElementById("fromamount").value + " = " + myvalues[toamount.toLowerCase()]['rate'];
        let totalamount=(document.getElementById('amount').value) * (myvalues[toamount.toLowerCase()]['rate']);
        document.getElementById('finalValue').innerHTML = totalamount.toFixed(2);
      }
      function clearVal() {
          window.location.reload();
          document.getElementsByClassName("finalValue").innerHTML = "";
      }
      function convertnow(){
        let date= new Date();
        let dd=date.getDate();
        let month=date.toLocaleString('default', { month: 'long' });
        let year=date.getFullYear();
        let hh=date.getHours();
        let mm=date.getMinutes();
        let format = dd + "<sup>th </sup>" + month + " " + year + " at "+ hh +":"+mm;
        document.getElementById("currdateandtime").innerHTML = format;
        let url="http://www.floatrates.com/daily/"+fromamount+".json";
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                console.log('Output: ', out);
        }).catch(err => console.error(err));
        loadJSON(url, excfun,'jsonp');

      }
      function passvaluefun() {
        fromamount = document.getElementById("fromamount").value;
      }
      function passvaluefunction() {
        toamount = document.getElementById("toamount").value;
      }
      	const divtobeshown = document.getElementById("mobilemenuSupportedContent");
		const menubtn = document.getElementById("menubutton");
		menubtn.onclick = function () {
		  if (divtobeshown.style.display !== "none") {
		    divtobeshown.style.display = "none";
		  } else {
		    divtobeshown.style.display = "block";
		  }
		};

