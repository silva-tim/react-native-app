import { View, Text } from 'react-native';
import ExpenseBar from './ExpenseBar';

export default function ExpenseItem({
  category,
  actualExpense,
  budgetExpense,
}) {
  const dollarFormat = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  };
  const budgetVariance = budgetExpense - actualExpense;
  const varianceColor = budgetVariance >= 0 ? '#31B6A8' : '#FA8072';
  return (
    <>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text
          style={{
            flex: 3,
            textAlign: 'left',
            fontWeight: 'normal',
            fontSize: 25,
          }}
        >
          {category}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 25,
            color: `${varianceColor}`,
          }}
        >
          {budgetVariance.toLocaleString('en-US', dollarFormat)}
        </Text>
      </View>
      <ExpenseBar
        actualExpense={actualExpense}
        budgetExpense={budgetExpense}
        budgetVariance={budgetVariance}
      />
      <Text style={{ marginTop: 10, fontSize: 15 }}>
        {actualExpense.toLocaleString('en-US', dollarFormat)}
        <Text style={{ color: 'gray' }}>
          {' '}
          of {budgetExpense.toLocaleString('en-US', dollarFormat)}
        </Text>
      </Text>
    </>
  );
}
