import { View, Text } from 'react-native';
import ExpenseItem from '../components/ExpenseList';

export default function ExpensesView() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ width: '90%' }}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 25,
            }}
          >
            Total Expenses
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 25,
            }}
          >
            $4,500
          </Text>
        </View>
        <ExpenseItem
          category={'🏠 Rent'}
          actualExpense={2500}
          budgetExpense={2500}
        />
        <ExpenseItem
          category={'🔌💦🗑️ Utilities'}
          actualExpense={200}
          budgetExpense={300}
        />
        <ExpenseItem
          category={'🚗 Auto & Transport'}
          actualExpense={150}
          budgetExpense={100}
        />
        <ExpenseItem
          category={'🍽️ Restaurants'}
          actualExpense={400}
          budgetExpense={200}
        />
      </View>
    </View>
  );
}
