import { View } from 'react-native';

export default function ExpenseBar({
  actualExpense,
  budgetExpense,
  budgetVariance,
}) {
  const expensePercent = toPercentage(actualExpense / budgetExpense);
  const leftoverPercent = toPercentage(
    1 - actualExpense / budgetExpense + 0.01
  ); //add back extra length to offset maginLeft: -1% on the leftover portion of the bar

  function toPercentage(num) {
    return `${Math.round(num * 100)}%`;
  }

  return budgetVariance >= 0 ? (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View
        style={{
          width: `${expensePercent}`,
          height: 10,
          backgroundColor: '#31B6A8',
          borderRadius: 5,
          position: 'relative',
          zIndex: 2,
        }}
      ></View>
      <View
        style={{
          width: `${leftoverPercent}`,
          height: 10,
          backgroundColor: '#808080',
          opacity: 0.15,
          borderTopEndRadius: 5,
          borderBottomEndRadius: 5,
          position: 'relative',
          zIndex: 1,
          marginLeft: '-1%',
        }}
      ></View>
    </View>
  ) : (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View
        style={{
          width: '90%',
          height: 10,
          backgroundColor: '#FA8072',
          borderRadius: 5,
          position: 'relative',
          zIndex: 2,
        }}
      ></View>
      <View
        style={{
          width: '11%',
          height: 10,
          backgroundColor: '#A5382B',
          borderTopEndRadius: 5,
          borderBottomEndRadius: 5,
          position: 'relative',
          zIndex: 1,
          marginLeft: '-1%',
        }}
      ></View>
    </View>
  );
}
