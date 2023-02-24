function load() {
  let column_1 = [
    1, 5, 8, 10, 3, 9, 6, 3, 7, 7, 6, 5, 10, 2, 2, 9, 9, 9, 6, 2, 3, 3, 6, 8, 3,
    7, 4, 9, 8, 4,
  ];

  let column_2 = [
    4, 9, 9, 8, 10, 2, 6, 7, 8, 1, 10, 9, 1, 8, 6, 2, 3, 10, 7, 3, 1, 5, 6, 9,
    8, 3, 3, 5, 1, 8,
  ];

  let column_3 = [
    68, 94, 89, 69, 76, 92, 80, 53, 63, 45, 77, 92, 57, 63, 40, 98, 92, 83, 87,
    68, 56, 80, 98, 99, 53, 50, 54, 65, 82, 48,
  ];

  let column_4 = [
    84, 70, 56, 63, 96, 59, 49, 76, 86, 99, 47, 61, 75, 58, 56, 51, 70, 92, 54,
    86, 80, 68, 98, 77, 53, 98, 50, 81, 75, 47,
  ];

  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    sum4 = 0;

  for (let i = 0; i < column_1.length; i++) {
    sum1 += column_1[i];
  }
  for (let i = 0; i < column_2.length; i++) {
    sum2 += column_2[i];
  }
  for (let i = 0; i < column_3.length; i++) {
    sum3 += column_3[i];
  }
  for (let i = 0; i < column_4.length; i++) {
    sum4 += column_4[i];
  }

  let total_score = 0;
  let sums = [sum1, sum2, sum3, sum4];

  for (let i = 0; i < 4; i++) {
    total_score += sums[i];
  }

  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums,
    total_score,
  };
  console.log(results);
}

load();
