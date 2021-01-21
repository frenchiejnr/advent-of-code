/* Day 1: Report Repair
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

let expenseReport = [
  1977,
  1515,
  1857,
  1800,
  1737,
  1778,
  1505,
  1958,
  1982,
  1941,
  1417,
  1232,
  1234,
  2005,
  1637,
  1956,
  1252,
  1457,
  1494,
  1317,
  1388,
  1630,
  1207,
  1536,
  1225,
  1369,
  1343,
  1502,
  1616,
  1744,
  1950,
  1280,
  1647,
  1780,
  1435,
  1915,
  1365,
  1707,
  1795,
  1554,
  1652,
  539,
  1892,
  1546,
  1908,
  1629,
  1836,
  1805,
  1395,
  1360,
  1487,
  1739,
  1884,
  1427,
  1615,
  1470,
  1922,
  1753,
  1632,
  1968,
  1429,
  2008,
  1124,
  1441,
  1384,
  1955,
  1815,
  1741,
  1331,
  1442,
  1988,
  1788,
  1585,
  1794,
  1217,
  1434,
  1751,
  1240,
  1284,
  1883,
  1711,
  1376,
  1638,
  1932,
  1979,
  1769,
  1597,
  896,
  1691,
  1379,
  1386,
  1658,
  2009,
  1885,
  1721,
  1619,
  1825,
  1688,
  1544,
  1934,
  1484,
  1720,
  1215,
  1371,
  1752,
  1692,
  1745,
  1911,
  1453,
  1723,
  1856,
  1270,
  1397,
  812,
  1610,
  1712,
  1829,
  1524,
  1541,
  1338,
  1383,
  1592,
  2006,
  1823,
  1410,
  1422,
  1394,
  1933,
  1572,
  1697,
  1736,
  2003,
  1301,
  1817,
  1902,
  1389,
  1490,
  1705,
  1329,
  1458,
  1510,
  1625,
  1676,
  1443,
  1539,
  1710,
  24,
  1586,
  1948,
  1994,
  1975,
  1974,
  1237,
  1419,
  1748,
  1589,
  1821,
  1462,
  1792,
  1381,
  1400,
  1222,
  1602,
  2001,
  1976,
  1700,
  1626,
  1966,
  1548,
  1593,
  2010,
  1149,
  1372,
  1224,
  1675,
  1271,
  1896,
  1983,
  1299,
  1528,
  1631,
  1804,
  1562,
  1754,
  1566,
  1473,
  1980,
  465,
  1868,
  1304,
  1279,
  1963,
  1582,
  1713,
  1330,
  1758,
  1551,
  1241,
  1469,
  1888,
];
let expenses = findSumTo(2020);
let expense1 = expenses[0];
let expense2 = expenses[1];

let pt1Answer = multiply(expense1, expense2);

console.log(pt1Answer);

let pt2Expenses = findSum3numbersTo(2020);
let pt2Expense1 = pt2Expenses[0];
let pt2Expense2 = pt2Expenses[1];
let pt2Expense3 = pt2Expenses[2];

let pt2Answer = multiplyThree(pt2Expense1, pt2Expense2,pt2Expense3);
console.log(pt2Answer);

function multiply(num1, num2) {
  return num1 * num2;
}

function multiplyThree(num1, num2, num3)
{
  return num1 * num2 * num3;
}

function findSumTo(num) {
  for (let i = 0; i < expenseReport.length; i++) {
    for (let j = i + 1; j < expenseReport.length; j++) {
      if (expenseReport[i] + expenseReport[j] === num) {
        console.log(expenseReport[i], expenseReport[j]);
        return [expenseReport[i], expenseReport[j]];
      }
    }
  }
}
function findSum3numbersTo(num) {
  for (let i = 0; i < expenseReport.length; i++) {
    for (let j = i + 1; j < expenseReport.length; j++) {
      for (let k = j + 1; k < expenseReport.length; k++) {
        // console.log(j, i, k)
        if (expenseReport[i] + expenseReport[j] + expenseReport[k] === num) {
          console.log(expenseReport[i], expenseReport[j], expenseReport[k]);
          return [expenseReport[i], expenseReport[j], expenseReport[k]];
        }
      }
    }
  }
}
