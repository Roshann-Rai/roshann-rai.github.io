// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  geo: 'geo', 
  type: 'choropleth', 
  zsrc: 'RoshanRai:50:cbfa89', 
  z: [71, 71, 71, 68, 68, 67, 66, 66, 64, 63, 61, 59, 57.99999999999999, 56.99999999999999, 56.99999999999999, 55.00000000000001, 55.00000000000001, 54, 54, 54, 53, 53, 52, 52, 52, 49, 48, 48, 48, 45, 45, 45, 44, 44, 44, 44, 44, 43, 43, 42, 42, 41, 41, 41, 41, 40, 40, 40, 40, 40, 40, 39, 39, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 37, 36, 36, 35, 35, 35, 35, 35, 35, 35, 35, 35, 34, 33, 33, 33, 33, 33, 33, 32, 32, 32, 32, 32, 32, 32, 31, 31, 31, 30, 30, 30, 30, 28.000000000000004, 28.000000000000004, 28.000000000000004, 27, 27, 27, 27, 27, 27, 27, 26, 26, 26, 26, 26, 26, 25, 25, 24, 24, 24, 24, 24, 23, 22, 21, 21, 21, 21, 21, 21, 20, 20, 19, 19, 18, 18, 18, 18, 17, 15, 15, 14.000000000000002, 14.000000000000002, 13], 
  frame: null, 
  marker: {
    line: {
      color: 'rgba(209,209,209,1)', 
      width: 0.4
    }, 
    showscale: false
  }, 
  textsrc: 'RoshanRai:50:2ebd20', 
  text: ['Norway<br />71%', 'Denmark<br />71%', 'Sweden<br />71%', 'Israel<br />68%', 'Canada<br />68%', 'United Kingdom of Great Britain and Northern Ireland<br />67%', 'Netherlands<br />66%', 'Germany<br />66%', 'Australia<br />64%', 'Finland<br />63%', 'New Zealand<br />61%', 'Singapore<br />59%', 'Czech Republic<br />58%', 'United States of America<br />57%', 'Switzerland<br />57%', 'Belgium<br />55%', 'Ireland<br />55%', 'Estonia<br />54%', 'Hungary<br />54%', 'Bhutan<br />54%', 'Luxembourg<br />53%', 'Austria<br />53%', 'Botswana<br />52%', 'Myanmar<br />52%', 'France<br />52%', 'Spain<br />49%', 'Latvia<br />48%', 'Montenegro<br />48%', 'Slovakia<br />48%', 'Greece<br />45%', 'Uruguay<br />45%', 'Tunisia<br />45%', 'Lebanon<br />44%', 'Malta<br />44%', 'Croatia<br />44%', 'Slovenia<br />44%', 'Kuwait<br />44%', 'Japan<br />43%', 'Hong Kong<br />43%', 'Poland<br />42%', 'South Africa<br />42%', 'Turkmenistan<br />41%', 'Mongolia<br />41%', 'Chile<br />41%', 'Zimbabwe<br />41%', 'Zambia<br />40%', 'Tanzania<br />40%', 'Ukraine<br />40%', 'Kazakhstan<br />40%', 'Senegal<br />40%', 'Bahrain<br />40%', 'Lithuania<br />39%', 'Mauritius<br />39%', 'United Arab Emirates<br />38%', 'Russia<br />38%', 'Kenya<br />38%', 'Serbia<br />38%', 'Togo<br />38%', 'Madagascar<br />38%', 'Cameroon<br />38%', 'Belarus<br />38%', 'Benin<br />37%', 'Italy<br />37%', 'Taiwan<br />37%', 'Azerbaijan<br />36%', 'Malaysia<br />36%', 'Sri Lanka<br />35%', 'Dominican Republic<br />35%', 'Costa Rica<br />35%', 'Malawi<br />35%', 'Gabon<br />35%', 'Bulgaria<br />35%', 'Ivory Coast<br />35%', 'Brazil<br />35%', 'Cyprus<br />35%', 'Uganda<br />34%', 'Mali<br />33%', 'Mauritania<br />33%', 'Algeria<br />33%', 'Jamaica<br />33%', 'Burkina Faso<br />33%', 'Belize<br />33%', 'Colombia<br />32%', 'Indonesia<br />32%', 'Puerto Rico<br />32%', 'Ethiopia<br />32%', 'Democratic Republic of the Congo<br />32%', 'Mexico<br />32%', 'Ghana<br />32%', 'Niger<br />31%', 'Saudi Arabia<br />31%', 'Republic of the Congo<br />31%', 'Guinea<br />30%', 'Guinea<br />30%', 'Ecuador<br />30%', 'Georgia<br />30%', 'China<br />28%', 'Argentina<br />28%', 'Peru<br />28%', 'Egypt<br />27%', 'Thailand<br />27%', 'Moldova<br />27%', 'Bosnia and Herzegovina<br />27%', 'Iraq<br />27%', 'Namibia<br />27%', 'Panama<br />27%', 'Pakistan<br />26%', 'Chad<br />26%', 'Nigeria<br />26%', 'Portugal<br />26%', 'Rwanda<br />26%', 'Guatemala<br />26%', 'Venezuela<br />25%', 'Philippines<br />25%', 'Burundi<br />24%', 'Bolivia<br />24%', 'Turkey<br />24%', 'India<br />24%', 'Jordan<br />24%', 'Honduras<br />23%', 'Romania<br />22%', 'North Macedonia<br />21%', 'Uzbekistan<br />21%', 'El Salvador<br />21%', 'Sierra Leone<br />21%', 'Sudan<br />21%', 'Sudan<br />21%', 'Iran<br />20%', 'Nicaragua<br />20%', 'Bangladesh<br />19%', 'Kyrgyzstan<br />19%', 'Cambodia<br />18%', 'Nepal<br />18%', 'Armenia<br />18%', 'Haiti<br />18%', 'Tajikistan<br />17%', 'Angola<br />15%', 'Somalia<br />15%', 'Afghanistan<br />14%', 'Albania<br />14%', 'Yemen<br />13%'], 
  colorbar: {
    y: 1, 
    len: 0.5, 
    title: 'financial_literacy * 100', 
    lenmode: 'fraction', 
    ticklen: 2, 
    yanchor: 'top'
  }, 
  showscale: false, 
  colorscale: [['0', 'rgba(255,245,240,1)'], ['0.0416666666666667', 'rgba(255,238,230,1)'], ['0.0833333333333333', 'rgba(255,231,220,1)'], ['0.125', 'rgba(254,224,210,1)'], ['0.166666666666667', 'rgba(254,212,193,1)'], ['0.208333333333333', 'rgba(253,199,177,1)'], ['0.25', 'rgba(252,187,161,1)'], ['0.291666666666667', 'rgba(253,174,145,1)'], ['0.333333333333333', 'rgba(253,160,129,1)'], ['0.375', 'rgba(252,146,114,1)'], ['0.416666666666667', 'rgba(252,133,101,1)'], ['0.458333333333333', 'rgba(252,120,87,1)'], ['0.5', 'rgba(251,106,74,1)'], ['0.541666666666667', 'rgba(247,92,64,1)'], ['0.583333333333333', 'rgba(243,77,54,1)'], ['0.625', 'rgba(239,59,44,1)'], ['0.666666666666667', 'rgba(227,49,39,1)'], ['0.708333333333333', 'rgba(215,37,34,1)'], ['0.75', 'rgba(203,24,29,1)'], ['0.791666666666667', 'rgba(190,21,26,1)'], ['0.833333333333333', 'rgba(178,18,24,1)'], ['0.875', 'rgba(165,15,21,1)'], ['0.916666666666667', 'rgba(144,9,19,1)'], ['0.958333333333333', 'rgba(123,3,16,1)'], ['1', 'rgba(103,0,13,1)']], 
  hoverinfosrc: 'RoshanRai:50:3f7489', 
  hoverinfo: ['text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text'], 
  locationssrc: 'RoshanRai:50:f4c5ed', 
  locations: ['NOR', 'DNK', 'SWE', 'ISR', 'CAN', 'GBR', 'NLD', 'DEU', 'AUS', 'FIN', 'NZL', 'SGP', 'CZE', 'USA', 'CHE', 'BEL', 'IRL', 'EST', 'HUN', 'BTN', 'LUX', 'AUT', 'BWA', 'MMR', 'FRA', 'ESP', 'LVA', 'MNE', 'SVK', 'GRC', 'URY', 'TUN', 'LBN', 'MLT', 'HRV', 'SVN', 'KWT', 'JPN', 'HKG', 'POL', 'ZAF', 'TKM', 'MNG', 'CHL', 'ZWE', 'ZMB', 'TZA', 'UKR', 'KAZ', 'SEN', 'BHR', 'LTU', 'MUS', 'ARE', 'RUS', 'KEN', 'SRB', 'TGO', 'MDG', 'CMR', 'BLR', 'BEN', 'ITA', 'TWN', 'AZE', 'MYS', 'LKA', 'DOM', 'CRI', 'MWI', 'GAB', 'BGR', 'CIV', 'BRA', 'CYP', 'UGA', 'MLI', 'MRT', 'DZA', 'JAM', 'BFA', 'BLZ', 'COL', 'IDN', 'PRI', 'ETH', 'COD', 'MEX', 'GHA', 'NER', 'SAU', 'COG', 'GNQ', 'GIN', 'ECU', 'GEO', 'CHN', 'ARG', 'PER', 'EGY', 'THA', 'MDA', 'BIH', 'IRQ', 'NAM', 'PAN', 'PAK', 'TCD', 'NGA', 'PRT', 'RWA', 'GTM', 'VEN', 'PHL', 'BDI', 'BOL', 'TUR', 'IND', 'JOR', 'HND', 'ROU', 'MKD', 'UZB', 'SLV', 'SLE', 'SSD', 'SDN', 'IRN', 'NIC', 'BGD', 'KGZ', 'KHM', 'NPL', 'ARM', 'HTI', 'TJK', 'AGO', 'SOM', 'AFG', 'ALB', 'YEM']
};
data = [trace1];
layout = {
  geo: {
    domain: {
      x: [0, 1], 
      y: [0, 1]
    }, 
    bgcolor: '#ffffff', 
    lakecolor: '#99c0db', 
    showframe: false, 
    showlakes: true, 
    showocean: false, 
    oceancolor: '#064273', 
    projection: {type: 'carto-positron'}, 
    resolution: '150', 
    rivercolor: '#99c0db', 
    showrivers: true, 
    countrycolor: '#d1d1d1', 
    showcountries: true, 
    showcoastlines: false
  }, 
  font: {
    size: 16, 
    family: 'Arial'
  }, 
  scene: {zaxis: {title: 'financial_literacy * 100'}}, 
  title: {text: '<b>S&P Global FinLit Survey 2014</b>'}, 
  legend: {
    y: 0.5, 
    yanchor: 'top'
  }, 
  margin: {
    b: 20, 
    l: 50, 
    r: 50, 
    t: 50, 
    pad: 20
  }, 
  mapType: 'geo', 
  hovermode: 'closest', 
  showlegend: false, 
  annotations: [
    {
      x: 0.01, 
      y: 0.05, 
      font: {
        size: 12, 
        color: '#a19f9f'
      }, 
      text: 'Tip: Hover over the countries to see the financial literacy data', 
      xref: 'paper', 
      yref: 'paper', 
      showarrow: false
    }, 
    {
      x: 0.01, 
      y: 0.05, 
      font: {
        size: 12, 
        color: '#a19f9f'
      }, 
      text: 'Tip: Hover over the countries to see the financial literacy data', 
      xref: 'paper', 
      yref: 'paper', 
      showarrow: false
    }
  ], 
  paper_bgcolor: '#ffffff'
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});