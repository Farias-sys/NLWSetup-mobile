import { View, Text, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { generateRangeDatesFromYearStart } from "../../utils/generate-range-between-dates";

import { Header } from "../Header";
import { HabbitDay, day_size } from "../HabbitDay";

const weekDays = ['D', 'S', 'T', 'Q', "Q", 'S', "S"]
const datesFromYearStart = generateRangeDatesFromYearStart()
const minimunSummaryDatesSize = 18 * 5
const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length

export function Home(){    
    const {navigate} = useNavigation()

    return (
        <>
            
            <View className="flex-1 bg-background px-8 pt-16">
                <Header/>
                <View className="flex-row mt-6 mb-2">
                    {
                        weekDays.map((weekDay, index) => {
                            return(
                                <Text key={`${weekDay}-${index}`} className="text-zinc-400 text-xl font-bold text-center mx-1">
                                    {weekDay}
                                </Text>
                            )
                        })
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
                    <View className="flex-row flex-wrap">
                        {
                            datesFromYearStart.map(date => {
                                return <HabbitDay key={date.toISOString()} onPress={() => navigate('Habbit', {date:date.toISOString()})}/>
                            })
                        }
                        {
                        amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, index) => (
                            <>
                                <View className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800' style={{width: day_size, height:day_size}}>

                                </View>
                            </>
                        ))
                        }
                    </View>
                </ScrollView>

            </View>
        </>
    )
}   