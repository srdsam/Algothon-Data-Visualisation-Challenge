import { LineChart, Line } from 'recharts';
import { data_clean } from '../data/data_clean'

function isNumeric(n) { 
	return !isNaN(parseFloat(n)) && isFinite(n);
}

var parsedData = data_clean.map(function(obj) {
  return Object.keys(obj).reduce(function(memo, key) {
      var value = obj[key];
      memo[key] = isNumeric(value) ? Number(value) : value;
      
      return memo;
  }, {})
})

const renderLineChart = (
  <LineChart width={400} height={400} data={parsedData}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export { renderLineChart };
