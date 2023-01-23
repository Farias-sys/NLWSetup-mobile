
import {useState, useEffect} from 'react'
import { ScrollView, View, Text, TextInput , TouchableOpacity} from "react-native"
import colors  from 'tailwindcss/colors'
import {Feather} from '@expo/vector-icons'

import { BackButton } from "../BackButton"
import { Checkbox } from "../Checkbox"


const availableWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function New(){
    const[weekDays, setWeekDays] = useState<number[]>([])
    
    function handleToggleWeekDay (weekDayIndex:number) {
        if (weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <BackButton/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    New Habbit
                </Text>

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    What's your commitment?
                </Text>

                <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600" placeholder='Doing exercises, sleep better, etc' placeholderTextColor={colors.zinc[400]}/>

                <Text className="font-semibold mt-5 mb-3 text-white text-base">
                    What's the frequency?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <Checkbox key={weekDay} title={weekDay} checked={weekDays.includes(index)} onPress={() => handleToggleWeekDay(index)}/>
                    ))
                }

                <TouchableOpacity className='w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6'>
                    <Feather name="check" size={20} color={colors.white}/>
                    <Text className='font-semibold text-base text-white ml-2'>Confirm</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}